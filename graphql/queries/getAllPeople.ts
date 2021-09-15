import { gql } from "@apollo/client";

/*
 * Change/delete anything in this query to simulate a failed request
 */
export const GET_ALL_PEOPLE = gql`
  query getAllPeople {
    allPeople {
      people {
        name
        gender
        species {
          name
          classification
          designation
        }
        homeworld {
          name
        }
        id
      }
    }
  }
`;
