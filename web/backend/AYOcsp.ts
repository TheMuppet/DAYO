import { MatchBoxSchema } from "./db/schemas/matchBox.ts";
import { MatchNightSchema } from "./db/schemas/matchNight.ts";
import {CSP, solve, StatProc } from '../../deps/csp/deps.ts'
import { StatProc2 } from "./StatProcDebug.ts";



export class AYO {
  participants: {
    man: Array<string>;
    woman: Array<string>;
  };
  person11: string;
  matchbox: Array<MatchBoxSchema>;
  matchnight: Array<MatchNightSchema>;
  mgender: "man" | "woman";
  lgender: "man" | "woman";
  rules: Set<string> = new Set();

  constructor(
    man: Array<string>,
    woman: Array<string>,
    person11: string,
    matchbox: Array<MatchBoxSchema>,
    matchnight: Array<MatchNightSchema>,
  ) {
    this.participants = {
      man: man,
      woman: woman,
    };
    this.mgender = man.length >= woman.length ? "man" : "woman";
    this.lgender = man.length >= woman.length ? "woman" : "man";
    this.person11 = person11;
    this.matchbox = matchbox;
    this.matchnight = matchnight;
  }
  private matchNightRules(): void {
    this.matchnight.forEach((night) => {
      const rule: Array<string> = [];
      night.couples.forEach((couple) => {
        rule.push(`(${couple[this.mgender]} == '${couple[this.lgender]}')`);
      });
      let ruleString = rule.join("+");
      ruleString = "(" + ruleString + `) == ${night.lights}`;
      this.rules.add(ruleString);
    });
  }
  private matchBoxRules(): void {
    this.matchbox.forEach((box) => {
      const symbol = box.match ? "==" : "!=";
      this.rules.add(
        `${box[this.mgender]} ${symbol} '${box[this.lgender]}'`,
      );
    });
  }
  private allDiffrentRules(): void {
    const mayorGender = this.participants[this.mgender].filter((obj) =>
      obj !== this.person11
    );
    for (let i = 0; i < mayorGender.length; i++) {
      for (let j = 0; j < mayorGender.length; j++) {
        if (i < j) {
          this.rules.add(`${mayorGender[i]} != ${mayorGender[j]}`);
        }
      }
    }
  }
  private ayoCsp(): CSP {
    this.matchNightRules();
    this.matchBoxRules();
    this.allDiffrentRules();
    const csp = {
      variables: new Set(this.participants[this.mgender]),
      values: new Set(this.participants[this.lgender]),
      constraints: this.rules,
    };
    return csp;
  }
  solveAyo(): { [key: string]: { [key: string]: number }} {
    const csp = this.ayoCsp()
    const statProc = new StatProc2(csp.variables, csp.values)
    solve(csp,'constraint-propagation',statProc)
    return statProc.calcPercentage()
  }

  // async getCurrenProbabilities(currentSeason: number) {
  //   const man: Array<string> = [];
  //   const woman: Array<string> = [];
  //   let person11 = "";
  //   const matchbox: Array<MatchBoxSchema> = [];
  //   const matchnight: Array<MatchNightSchema> = [];
  
  //   // get data from db
  //   const matchboxes = await fetch("http://dayo-project.herokuapp.com/api/v1/matchboxes/")
  //                               .then(res => res.json())
  //   const matchnights = await fetch("http://dayo-project.herokuapp.com/api/v1/matchnights/")
  //                               .then(res => res.json())
  //   const participants = await fetch("http://dayo-project.herokuapp.com/api/v1/participants")
  //                               .then(res => res.json())
  
  //   for (let i in participants.data) {
  //     // filters participants data for men from current season
  //     if (JSON.stringify(participants.data[i].gender) == JSON.stringify("m") 
  //                                   && participants.data[i].season == currentSeason) {
  //       man.push(participants.data[i].name)
  //     } 
  //     // filters participants data for women from current season
  //     if (JSON.stringify(participants.data[i].gender) == JSON.stringify("w")
  //                                   && participants.data[i].season == currentSeason) {
  //       woman.push(participants.data[i].name)
  //     }
  //     if (participants.data[i].person11 && participants.data[i].season == currentSeason) {
  //       person11 = participants.data[i].name
  //     }
  //   }
  //   // filters matchboxes data from current season
  //   for (let i in matchboxes.data) {
  //     if (matchboxes.data[i].season == currentSeason) {
  //       matchbox.push(matchboxes.data[i]) 
  //     }          
  //   }
  //   // filters matchnights data from current season
  //   for (let i in matchnights.data) {
  //     if (matchnights.data[i].season == currentSeason) {
  //       matchnight.push(matchnights.data[i])
  //     }          
  //   }
  
  //   let test = new AYO(man, woman, person11, matchbox, matchnight)
  //   const calculatedData = test.solveAyo()
  //   return calculatedData
  // }
}

async function getCurrenProbabilities(currentSeason: number) {
  const man: Array<string> = [];
  const woman: Array<string> = [];
  let person11 = "";
  const matchbox: Array<MatchBoxSchema> = [];
  const matchnight: Array<MatchNightSchema> = [];

  // get data from db
  const matchboxes = await fetch("http://dayo-project.herokuapp.com/api/v1/matchboxes/")
                              .then(res => res.json())
  const matchnights = await fetch("http://dayo-project.herokuapp.com/api/v1/matchnights/")
                              .then(res => res.json())
  const participants = await fetch("http://dayo-project.herokuapp.com/api/v1/participants")
                              .then(res => res.json())

  for (let i in participants.data) {
    // filters participants data for men from current season
    if (JSON.stringify(participants.data[i].gender) == JSON.stringify("m") 
                                  && participants.data[i].season == currentSeason) {
      man.push(participants.data[i].name)
    } 
    // filters participants data for women from current season
    if (JSON.stringify(participants.data[i].gender) == JSON.stringify("w")
                                  && participants.data[i].season == currentSeason) {
      woman.push(participants.data[i].name)
    }
    if (participants.data[i].person11 && participants.data[i].season == currentSeason) {
      person11 = participants.data[i].name
    }
  }
  // filters matchboxes data from current season
  for (let i in matchboxes.data) {
    if (matchboxes.data[i].season == currentSeason) {
      matchbox.push(matchboxes.data[i]) 
    }          
  }
  // filters matchnights data from current season
  for (let i in matchnights.data) {
    if (matchnights.data[i].season == currentSeason) {
      matchnight.push(matchnights.data[i])
    }          
  }

  let test = new AYO(man, woman, person11, matchbox, matchnight)
  const calculatedData = test.solveAyo()
  return calculatedData
}


console.log(getCurrenProbabilities(3))