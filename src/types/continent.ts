export type ContinentName =
  | "Africa"
  | "Asia"
  | "Europe"
  | "North America"
  | "Oceania"
  | "South America"
  | "Antarctica";

export interface Continent {
  id: number;
  name: ContinentName;
  image: string;
  path: string;
  shortDescription: string;
  description: string;
}
