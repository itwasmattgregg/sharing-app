import Items from 'src/components/Items'

export const QUERY = gql`
  query MyItemsListQuery {
    myItems {
      id
      title
      description
      visible
      ownerId
      borrowerId
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ myItems }) => {
  return <Items items={myItems} />
}
