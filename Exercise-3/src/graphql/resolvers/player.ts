import { GraphQLResolveInfo } from 'graphql';
import { update } from 'lodash';
import Player from 'src/models/Player';

export const playerResolvers = {
  Query: {
    async getPlayer(
      _: any,
      args: Record<string, any>,
      context: any,
      info: GraphQLResolveInfo
    ) {
      try {
        const player = await Player.findById(args.id);
        if (!player) {
          throw new Error('Jugador no encontrado');
        }
        return player;
      } catch (err) {
        return {
          success: false,
          message: 'Error al obtener al jugador',
          error: err.message
        };
      }
    },

    async getAllPlayers(
      _: any,
      args: Record<string, any>,
      context: any,
      info: GraphQLResolveInfo
    ) {
      try {
        const players = await Player.find();
        return players;
      } catch (err) {
        return {
          success: false,
          message: 'Error al obtener los jugadores',
          error: err
        };
      }
    },

    async comparePlayers(
      _: any,
      args: { jerseyNumber1: number; jerseyNumber2: number },
      context: any,
      info: GraphQLResolveInfo
    ) {
      try {
        const player1 = await Player.findOne({
          jerseyNumber: args.jerseyNumber1
        });
        const player2 = await Player.findOne({
          jerseyNumber: args.jerseyNumber2
        });

        if (!player1) {
          throw new Error(
            `No existe jugador con el número de jersey ${args.jerseyNumber1}`
          );
        }
        if (!player2) {
          throw new Error(
            `No existe jugador con el número de jersey ${args.jerseyNumber2}`
          );
        }

        return {
          player1: player1,
          player2: player2
        };
      } catch (err) {
        return {
          success: false,
          message: 'Error al comparar los jugadores',
          error: err
        };
      }
    }
  },
  Mutation: {
    async updatePlayer(
      _: any,
      args: Record<string, any>,
      context: any,
      info: GraphQLResolveInfo
    ) {
      try {
        const { input } = args;
        const updateFields: Record<string, any> = {
          firstName: input.firstName,
          lastName: input.lastName,
          position: input.position,
          age: input.age,
          height: input.height,
          jerseyNumber: input.jerseyNumber,
          speed: input.speed,
          shoots: input.shoots,
          passes: input.passes,
          dribbling: input.dribbling,
          defense: input.defense,
          stamina: input.stamina
        };
        console.log(updateFields);
        if (input.jerseyNumber) {
          const existingPlayerWithNewJersey = await Player.findOne({
            jerseyNumber: input.jerseyNumber,
            _id: { $ne: args.id }
          });

          if (existingPlayerWithNewJersey) {
            throw new Error(
              `Ya existe un jugador con el número de jersey ${input.jerseyNumber}`
            );
          }
        }

        const player = await Player.findByIdAndUpdate(args.id, updateFields, {
          new: true
        });

        if (!player) {
          throw new Error('Jugador no encontrado');
        }

        return player;
      } catch (err) {
        return {
          success: false,
          message: 'Error al actualizar al jugador',
          error: err
        };
      }
    },

    async createPlayer(
      _: any,
      args: Record<string, any>,
      context: any,
      info: GraphQLResolveInfo
    ) {
      try {
        const { input } = args;
        console.log(input);
        const requiredFields = [
          'firstName',
          'lastName',
          'position',
          'age',
          'height',
          'jerseyNumber'
        ];
        const missingFields = requiredFields.filter(
          (field) => !(field in input)
        );
        if (missingFields.length > 0) {
          throw new Error(
            `Faltan campos obligatorios: ${missingFields.join(', ')}`
          );
        }
        const existingPlayer = await Player.findOne({
          jerseyNumber: input.jerseyNumber
        });
        if (existingPlayer) {
          throw new Error(
            `Ya existe un jugador con el número de jersey ${input.jerseyNumber}`
          );
        }
        const newPlayer = await Player.create({
          firstName: input.firstName,
          lastName: input.lastName,
          position: input.position,
          age: input.age,
          height: input.height,
          jerseyNumber: input.jerseyNumber,
          speed: input.speed,
          shoots: input.shoots,
          passes: input.passes,
          dribbling: input.dribbling,
          defense: input.defense,
          stamina: input.stamina
        });
        console.log(newPlayer);
        return newPlayer;
      } catch (err) {
        return {
          success: false,
          message: 'Error al crear al jugador',
          error: err
        };
      }
    },
    async deletePlayer(
      _: any,
      args: Record<string, any>,
      context: any,
      info: GraphQLResolveInfo
    ) {
      try {
        const { id } = args;
        console.log(id);
        const playerDeleted = await Player.deleteOne({ _id: id });
        return playerDeleted;
      } catch (err) {
        return {
          success: false,
          message: 'Error al eliminar al jugador',
          error: err
        };
      }
    }
  }
};
