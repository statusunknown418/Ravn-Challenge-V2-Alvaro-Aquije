import { Key } from "react";

export interface PeopleOverview {
  name: string;
  gender: string;
  homeworld: {
    name: string;
  };
  species: {
    name: string;
    classification: string;
    designation: string;
  };
  id: Key;
}

export interface PersonDetails extends PeopleOverview {
  eyeColor: string;
  hairColor: string;
  skinColor: string;
  birthYear: string;
  vehicle?: {
    name: string;
    id: Key;
    model: string;
  }[];
}
