import * as express from "express";
import * as mongoose from "mongoose";
import { useEnvironment } from "./utils/useEnvironment";
const mongoConnection = mongoose.connection;
const app = express();

mongoose.connect(useEnvironment('', ''));
mongoConnection.on('error', console.error.bind(console, 'A error happened at: '));
mongoConnection.once('open', () => console.log('Connection established'));

app.get("/api", (req, res) => {
  res.send({ message: "Welcome to al-bli-backend!" });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on("error", console.error);
