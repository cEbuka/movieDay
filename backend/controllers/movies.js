import 'dotenv/config'
import axios from 'axios'
const BASE_URL = 'https://api.themoviedb.org/3'

export const getMovies = async (req, res) => {
    try {
        const response = await axios.get(
            `${BASE_URL}/trending/movie/week?api_key=${process.env.TMDB_API_KEY}`
        );
        res.json(response.data.results.slice(0, 10));
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
}