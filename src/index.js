import "dotenv/config";
import cors from "cors";
import express from "express";
import path from "path";

import routes from "./routes";
import models, { connectDb } from "./models";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/products", routes.product);

connectDb()
  .then(async () => {
    app.listen(process.env.PORT, (err) =>
      console.log(err ? err : `running on port ${process.env.PORT}`)
    );
  })
  .catch((err) => console.error(err));
