import gql from "graphql-tag";

export const GET_INITIAL_PEOPLE = gql`
  query initialPeople {
    allPeople(first: 5) {
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
