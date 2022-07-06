import gql from "graphql-tag";

export default gql`
  query {
    listItemsModel {
      items {
        id
        item
      }
    }
  }
`;
