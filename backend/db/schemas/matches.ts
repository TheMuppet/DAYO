// Schema for AYTO matches
export interface MatchesSchema {
  matches: [{
    man: string;
    woman: string;
    probability: number;
  }];
  season: number;
  episode: number;
}
