import { MatchBoxSchema } from "./db/schemas/matchBox.ts";
import { MatchNightSchema } from "./db/schemas/matchNight.ts";

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
    men: Array<string>,
    woman: Array<string>,
    person11: string,
    matchbox: Array<MatchBoxSchema>,
    matchnight: Array<MatchNightSchema>,
  ) {
    this.participants = {
      man: men,
      woman: woman,
    };
    this.mgender = men.length >= woman.length ? "man" : "woman";
    this.lgender = men.length >= woman.length ? "woman" : "man";
    this.person11 = person11;
    this.matchbox = matchbox;
    this.matchnight = matchnight;
  }
  private matchNightRules() {
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
  private matchBoxRules() {
    this.matchbox.forEach((box) => {
      const symbol = box.match ? "==" : "!=";
      this.rules.add(
        `${box[this.mgender]} ${symbol} '${this.lgender}'`,
      );
    });
  }
  private allDiffrentRules() {
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
  private ayoCsp() {
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
}
