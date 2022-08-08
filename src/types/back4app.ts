import { ContinentName } from "./continent";

export interface Back4AppContinent {
  objectId: string;
  name: ContinentName;
}

export interface Back4AppContinentsList {
  results: Back4AppContinent[];
}

export interface Back4AppCity {
  cityId: number;
  name: string;
  country: {
    name: string;
    continent: {
      name: ContinentName;
    };
  };
}

export interface Back4AppCitiesList {
  results: Back4AppCity[];
}
