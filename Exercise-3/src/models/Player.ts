import mongoose, { Schema, Document } from 'mongoose';

enum PlayerPosition {
  FORWARD = 'FORWARD',
  MIDFIELDER = 'MIDFIELDER',
  DEFENDER = 'DEFENDER',
  GOALKEEPER = 'GOALKEEPER'
}

export interface IPlayer extends Document {
  firstName: string;
  lastName: string;
  age: number;
  height: number;
  jerseyNumber: number;
  position: PlayerPosition;
  speed: number;
  shoots: number;
  passes: number;
  dribbling: number;
  defense: number;
  stamina: number;
}

const playerSchema: Schema<IPlayer> = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  height: { type: Number, required: true },
  jerseyNumber: { type: Number, required: true, unique: true },
  position: {
    type: String,
    enum: Object.values(PlayerPosition),
    required: true
  },
  speed: { type: Number, default: 60 },
  shoots: { type: Number, default: 60 },
  passes: { type: Number, default: 60 },
  dribbling: { type: Number, default: 60 },
  defense: { type: Number, default: 60 },
  stamina: { type: Number, default: 60 }
});

export default mongoose.model<IPlayer>('Player', playerSchema);
