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
