const { ApolloServer, gql } = require('apollo-server')

// const todos = [
//   { task: 'Wash car', completed: false },
//   { task: 'Pick up groceries', completed: true }
// ]

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  type Todo {
    task: String
    completed: Boolean
  }

  type Query {
    getTodos: [Todo]
  }

  # type Mutation {
  #   addTodo(task: String, completed: Boolean): Todo
  # }
`

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
// const resolvers = {
//   Query: {
//     getTodos: () => todos
//   },
//   Mutation: {
//     addTodo: (_, { task, completed }) => {
//       const todo = { task, completed }
//       todos.push(todo)
//       return todo
//     }
//   }
// }

const server = new ApolloServer({
  typeDefs
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
