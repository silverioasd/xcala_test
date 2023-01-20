import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'
import { Data }  from './db.js'

// Coleccion de Schemas y data fields

const typeDefs = `

# Schema para asignarle datatype a nuestras direcciones.
type Address {
    street: String!
    city: String!
    state: String
    zip: String
}

# Schema GetUser
type User {
    id: ID!
    name: String!
    age: Int
    email: String
    address: Address!
    posts: [Int]
  }

# Schema GetPost
type Post {
  id: ID!
  title: String!
  content: String!
  author: String!
  comments: [Int]
}

# Schema Comments
type Comments {
  id: ID!
  content: String!
  author: String!
}

# Read entrypoints
type Query {
    users: [User!]!
    posts: [Post!]!
    comments: [Comments!]!
  }

#Crud Modificaciones
#La estructura de cada mutation debe hacer match con dicho schema
#Cada Mutation retorna el mismo object schema modificado.

type Mutation {
  #Crear nuevo Post
  createPost(
    id: ID!
    title: String!
    content: String!
    author: String!
    comments: [Int]
  ): Post
  }
`;

// Los Resolvers definen el fetch de nuestros schemas define the technique for fetching the types defined in the
// Estos resolver de llenar la data para cada campo de nuestros schemas users,post,comments 
const resolvers = {
  Query: {
    users: () => Data['users'],
    posts: () => Data['posts'],
    comments: () => Data['comments']
  },
  Mutation: {
    createPost: (_, args) => {
      const newPost = {...args} // "args" cada field de mutation
      Data['posts'].push(newPost) // Update database con nuevos posts
      return newPost
      }
  }
};

// Para levantar ApolloServer usar como parametros schemas y resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// ApolloServer port:4000
const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

console.log(`🚀 Server listening at: ${url}`);