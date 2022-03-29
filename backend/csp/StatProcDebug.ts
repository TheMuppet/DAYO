import {
  Assignment,
  SolutionProcessor,
  Value,
  Variable,
} from "https://deno.land/x/satisfyer@v1.1.0/mod.ts";

export class StatProc2 implements SolutionProcessor {
  allSolutionsCount: { [key: Variable]: { [key: Value]: number } } = {};
  solutionCount: number;

  constructor(variables: Set<Variable>, values: Set<Value>) {
    this.solutionCount = 0;
    for (const variable of variables) {
      const obj: { [key: Value]: number } = {};
      for (const value of values) {
        obj[value] = 0;
      }
      this.allSolutionsCount[variable] = obj;
    }
  }
  processSolution(assignment: Assignment): void {
    this.solutionCount++;
    Object.keys(assignment).forEach((variable) => {
      this.allSolutionsCount[variable][assignment[variable]]++;
    });
  }
  calcPercentage(): { [key: Variable]: { [key: Value]: number } } {
    const count: number = this.solutionCount;
    const percentageObject: { [key: Variable]: { [key: Value]: number } } = {
      ...this.allSolutionsCount,
    };
    const allSol = this.allSolutionsCount;
    Object.keys(this.allSolutionsCount).forEach(function (variable) {
      Object.keys(allSol[variable]).forEach(function (values) {
        percentageObject[variable][values] =
          percentageObject[variable][values] / count;
      });
    });
    return percentageObject;
  }
}
