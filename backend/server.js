import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import contactRoutes from "./routes/contact.js";
import { errorHandler } from "./middleware/errorHandler.js";

dotenv.config();

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());

app.use("/contact", contactRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
