import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";

const app = express();

dotenv.config({ path: "./config/config.env" });

app.use(
    cors({
        origin: ["https://restaurant-app-frontend-topaz.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/reservation', reservationRouter);
app.get("/", (req, res) => {
    res.json("Hello")
})

dbConnection();

app.use(errorMiddleware);
app.listen(4000, () => {
    console.log(`Server is running on port 4000`);
});

export default app;