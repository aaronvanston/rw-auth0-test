export const schema = gql`
  type Test {
    worked: Boolean!
  }

  type Query {
    test: Test @requireAuth
  }
`
