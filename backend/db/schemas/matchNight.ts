// Schema for AYTO match box results
export interface MatchNightSchema {
  couples: [{
    man: string;
    woman: string;
  }];
  lights: number;
  season: number;
  episode: number;
}
