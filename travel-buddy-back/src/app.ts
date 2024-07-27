import express from "express";
import { json } from "express";
import "express-async-errors";
import cookieSession from "cookie-session";

// Routers


const app = express();

app.set("trust proxy", true);

app.use(json());

app.use(
    cookieSession()
);

// Respond for non-existing routes
// app.all("*", async (req, res) => {
//     throw new NotFoundError();
// });

// Handling errors
// app.use(errorHandler);

export { app };