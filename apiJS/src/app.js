import express from "express";
import routes from "./routes/routes.js"

const app = express();

app.use("/", routes);

app.listen(3200, () => console.log("rodando na porta 3200"));