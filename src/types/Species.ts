export type SpeciesName =
  | "human"
  | "beaver"
  | "lizard"
  | "harpy"
  | "fox"
  | "frog";

export interface Species {
  id: SpeciesName;
  specialization: string;
  resolve: string;
  needs: string[];
  services: string[];
  color: string;
}
