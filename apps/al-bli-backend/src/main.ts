import * as express from "express";
import * as mongoose from "mongoose";
import { useEnvironment } from "./utils/useEnvironment";
import { AppRouter } from "./router";
const mongoConnection = mongoose.connection;
const app = express();
app.use(express.urlencoded({ extended: true }));

mongoose.connect(useEnvironment('', 'mongodb://localhost:27017/test'));
mongoConnection.on('error', console.error.bind(console, 'A error happened at: '));
mongoConnection.once('open', () => console.log('Connection established'));

app.use(AppRouter);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on("error", console.error);
