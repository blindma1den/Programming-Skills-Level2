import app from './app';
import connectDB from './db/mongoClient';
import Config from './config/config';

const PORT = Config.global.port;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

connectDB();
