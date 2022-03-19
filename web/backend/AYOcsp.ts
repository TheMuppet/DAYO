import { MatchBoxSchema } from "./db/schemas/matchBox.ts";
import { MatchNightSchema } from "./db/schemas/matchNight.ts"

export class AYO {
    men: Array<string>;
    woman: Array<string>;
    person11: string;
    matchbox: Array<MatchBoxSchema>;
    matchnight: Array<MatchNightSchema>;
    mgender: Array<string>;
    lgender: Array<string>;


    constructor(men: Array<string>, woman: Array<string>, person11: string, matchbox: Array<MatchBoxSchema>, matchnight:  Array<MatchNightSchema) {
        this.men = men
        this.woman = woman
        if (men.length >= woman.length) {
            this.mgender = men
            this.lgender = woman
        } else {
            this.mgender = woman
            this.lgender = men
        }
        this.person11 = person11
        this.matchbox = matchbox
        this.matchnight = matchnight
    }
}


