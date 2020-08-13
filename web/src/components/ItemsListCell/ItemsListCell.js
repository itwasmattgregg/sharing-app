export const QUERY = gql`
  query ItemsListQuery {
    items {
      id
      title
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ items }) => {
  return JSON.stringify(items)
}
