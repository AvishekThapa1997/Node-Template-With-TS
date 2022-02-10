import express from "express";
import enabledCors from "./middleware/enablesCors";
import errorMiddleware from "./middleware/error-handler";
import notFoundMiddleware from "./middleware/not-found";
// import "reflect-metadata";  if want to use typeORM
import "./config/environment/environment";

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(enabledCors);
app.use(notFoundMiddleware);
app.use(errorMiddleware);
export default app;
