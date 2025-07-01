import express from 'express';
import cors from 'cors'
import { getMovies } from './controllers/movies.js';
const PORT = 3000;

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors())

// Fetch movies from tmdb api
app.get('/movies', getMovies)

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`))