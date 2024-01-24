import app from './app.mjs';
import connectDB from './db/mongoClient.mjs';
import Config from './config/config.mjs';
const PORT = Config.global.port;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
connectDB();
