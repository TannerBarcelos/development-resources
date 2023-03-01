import express from "express";
import * as dotenv from "dotenv";
import { connectDB } from "./config/connectDB";
import routes from "./routes";

dotenv.config();

void connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT ?? 3131; // nullish coalescing operator checks if the left is truly undefined
const VERSION = process.env.VERSION ?? "v1";

app.use(`/api/${VERSION}`, routes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
