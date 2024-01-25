export const playerTypeDefs = `
type Player {
    id: ID
    firstName: String!
    lastName: String!
    position: String!
    age: Int!
    jerseyNumber: Int!
    height: Int!
    speed: Int!
    shoots: Int!
    passes: Int!
    dribbling: Int!
    defense: Int!
    stamina: Int!
  }
  
  type Query {
    getPlayer(id: ID!): Player!
    getAllPlayers: [Player!]!
    comparePlayers(jerseyNumber1: Int!, jerseyNumber2: Int!): PlayerComparison!
  }
  
  type Mutation {
    createPlayer(input: CreatePlayerInput!): Player!
    updatePlayer(id: ID!, input: UpdatePlayerInput): Player!
    deletePlayer(id: ID!): Player!
  }
  enum PlayerPosition {
    FORWARD
    MIDFIELDER
    DEFENDER
    GOALKEEPER
  }

  input UpdatePlayerInput {
    age: Int
    jerseyNumber: Int
    position: PlayerPosition
    speed: Int
    shoots: Int
    passes: Int
    dribbling: Int
    defense: Int
    stamina: Int
  }
  
  input CreatePlayerInput {
    firstName: String!
    lastName: String!
    position: PlayerPosition!
    age: Int!
    height: Int!
    jerseyNumber: Int!
    speed: Int
    shoots: Int
    passes: Int
    dribbling: Int
    defense: Int
    stamina: Int
  }

  type PlayerComparison {
   player1: Player
   player2: Player
    
  }
        `;
