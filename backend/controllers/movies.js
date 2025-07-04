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
    console.log(id)

    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGRhMzEzODk4YzExMTkwNjg1NjAzMTY0MzViZjFlMiIsIm5iZiI6MTY5NDY4OTY3Ni4yNTYsInN1YiI6IjY1MDJlOThjZWZlYTdhMDExYWI5MzBhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.siuW9ts7pCq6NtEdI7T6YXIbFsBN2rlJjTeI9skFXdQ'
        }
    };

    axios
        .request(options)
        .then(response =>
            res.json(response.data)
        )
        .catch(err => console.error(err));

}