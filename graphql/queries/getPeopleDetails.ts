import { gql } from "@apollo/client";

export const GET_PEOPLE_DETAILS = gql`
  query peopleDetails {
    allPeople {
      people {
        name
        eyeColor
        birthYear
        id
        hairColor
        skinColor
        vehicleConnection {
          vehicles {
            name
            id
            model
          }
        }
      }
    }
  }
`;
