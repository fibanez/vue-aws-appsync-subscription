import gql from "graphql-tag";

export default gql`
  mutation($id: String!, $item: String!) {
    createItemsModel(id: $id, item: $item) {
      id
      item
    }
  }
`;
