import express from "express";
import morgan from "morgan";
import cors from "cors";
import passport from "passport";

import passportMiddleware from "./middlewares/passport";
// Routes import
import authRoutes from "./routes/auth.routes";
import privateRoutes from "./routes/private.routes";

// initializations
const app = express();

// settings
app.set("port", process.env.PORT || 3000);

// middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
passport.use(passportMiddleware);

// routes
app.get("/", (req, res) => {
    res.send("Hola");
});
app.use(authRoutes);
app.use(privateRoutes);

export default app;
