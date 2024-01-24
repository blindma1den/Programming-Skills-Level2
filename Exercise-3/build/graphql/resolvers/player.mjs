var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
import Player from '../../models/Player.mjs';
export const playerResolvers = {
  Query: {
    getPlayer(_, args, context, info) {
      return __awaiter(this, void 0, void 0, function* () {
        try {
          const player = yield Player.findById(args.id);
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
      });
    },
    getAllPlayers(_, args, context, info) {
      return __awaiter(this, void 0, void 0, function* () {
        try {
          const players = yield Player.find();
          return players;
        } catch (err) {
          return {
            success: false,
            message: 'Error al obtener los jugadores',
            error: err
          };
        }
      });
    },
    comparePlayers(_, args, context, info) {
      return __awaiter(this, void 0, void 0, function* () {
        try {
          const player1 = yield Player.findOne({
            jerseyNumber: args.jerseyNumber1
          });
          const player2 = yield Player.findOne({
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
      });
    }
  },
  Mutation: {
    updatePlayer(_, args, context, info) {
      return __awaiter(this, void 0, void 0, function* () {
        try {
          const { input } = args;
          const updateFields = {
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
            const existingPlayerWithNewJersey = yield Player.findOne({
              jerseyNumber: input.jerseyNumber,
              _id: { $ne: args.id }
            });
            if (existingPlayerWithNewJersey) {
              throw new Error(
                `Ya existe un jugador con el número de jersey ${input.jerseyNumber}`
              );
            }
          }
          const player = yield Player.findByIdAndUpdate(args.id, updateFields, {
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
      });
    },
    createPlayer(_, args, context, info) {
      return __awaiter(this, void 0, void 0, function* () {
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
          const existingPlayer = yield Player.findOne({
            jerseyNumber: input.jerseyNumber
          });
          if (existingPlayer) {
            throw new Error(
              `Ya existe un jugador con el número de jersey ${input.jerseyNumber}`
            );
          }
          const newPlayer = yield Player.create({
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
      });
    },
    deletePlayer(_, args, context, info) {
      return __awaiter(this, void 0, void 0, function* () {
        try {
          const { id } = args;
          console.log(id);
          const playerDeleted = yield Player.deleteOne({ _id: id });
          return playerDeleted;
        } catch (err) {
          return {
            success: false,
            message: 'Error al eliminar al jugador',
            error: err
          };
        }
      });
    }
  }
};
