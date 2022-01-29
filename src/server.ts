import express from "express";
import swaggerUi from "swagger-ui-express";

import "./database";
import "./shared/container";

import swaggerFile from "../swagger.json";
import { appRouter } from "./routes";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(appRouter);

app.listen(3333, () => {
  console.log("Server is running!");
});
