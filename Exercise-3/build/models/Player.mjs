import mongoose, { Schema } from 'mongoose';
var PlayerPosition;
(function (PlayerPosition) {
    PlayerPosition["FORWARD"] = "FORWARD";
    PlayerPosition["MIDFIELDER"] = "MIDFIELDER";
    PlayerPosition["DEFENDER"] = "DEFENDER";
    PlayerPosition["GOALKEEPER"] = "GOALKEEPER";
})(PlayerPosition || (PlayerPosition = {}));
const playerSchema = new Schema({
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
export default mongoose.model('Player', playerSchema);
