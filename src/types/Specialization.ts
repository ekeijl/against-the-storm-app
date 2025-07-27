type Comfort =
  | "blightrot" // removed in 1.8
  | "brewing"
  | "engineering"
  | "warmth"
  | "tailoring"
  | "rainwater"
  | "metallurgy";
type Proficiency =
  | "farming"
  | "woodworking"
  | "meat"
  | "alchemy"
  | "forest"
  | "masonry";

export type Specialization = Comfort | Proficiency;
