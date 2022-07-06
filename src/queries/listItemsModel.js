import gql from 'graphql-tag'

export default gql`
  query listItems {
    listItemsModel {
      items {
        item
      }
    }
  }
`
