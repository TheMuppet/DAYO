import { MatchBoxSchema } from "./db/schemas/matchBox.ts";
import { MatchNightSchema } from "./db/schemas/matchNight.ts";
import {CSP, solve, StatProc } from '../../deps/csp/deps.ts'
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
        rule.push(`${couple[this.mgender]} == '${couple[this.lgender]}'`);
      });
      let ruleString = rule.join("==");
      ruleString = "(" + ruleString + `) == ${night.lights}`;
      this.rules.add(ruleString);
    });
  }
  private matchBoxRules(): void {
    this.matchbox.forEach((box) => {
      const symbol = box.match ? "==" : "!=";
      this.rules.add(
        `${box[this.mgender]} ${symbol} '${this.lgender}'`,
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
    this.matchNightRules;
    this.matchBoxRules;
    this.allDiffrentRules;
    const csp = {
      variables: new Set(this.mgender),
      values: new Set(this.participants[this.lgender]),
      constraints: this.rules,
    };
    return csp;
  }
  solveAyo(): { [key: string]: { [key: string]: number }} {
    const csp = this.ayoCsp()
    const statProc = new StatProc()
    solve(csp,'constraint-propagation',statProc)
    return statProc.calcPercentage()
  }
}
