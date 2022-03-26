// Schema for AYTO matches
export interface MatchesSchema {
  matches: Array<{
    man: string;
    woman: string;
    probability: number;
  }>;
  season: number;
  episode: number;
}
