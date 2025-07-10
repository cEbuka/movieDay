import 'dotenv/config'
import axios from 'axios'
const BASE_URL = 'https://api.themoviedb.org/3'

export const getMovies = async (req, res) => {
    try {
        const response = await axios.get(
            `${BASE_URL}/trending/movie/week?api_key=${process.env.TMDB_API_KEY}`
        );
        res.json(response.data.results);
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
}

export const getMovie = async (req, res) => {
    const { id } = req.params;

    const options = {
        method: 'GET',
        url: `${BASE_URL}/movie/${id}?language=en-US`,
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_BEARER}`
        }
    };

    axios
        .request(options)
        .then(response =>
            res.json(response.data)
        )
        .catch(err => console.error(err));

}

export const getTopRatedMovies = async (req, res) => {

    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_BEARER}`
        }
    };

    axios
        .request(options)
        .then(response => {
            res.json(response.data)
            console.log(response.data)
        }
        )
        .catch(err => console.error(err));

}