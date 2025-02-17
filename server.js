import express from "express";
import path from 'path';
import { fileURLToPath } from "url";

import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";

//get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//Logger middleware
app.use(logger);


//setup static folder
app.use(express.static(path.join(__dirname, 'public')));


//Routes
app.use('/api/posts',posts);


//error handler
app.use(notFound);
app.use(errorHandler);


app.listen(5000, () => console.log(`Server is running on port 5000`));