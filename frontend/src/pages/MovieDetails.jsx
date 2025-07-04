import { Fragment } from 'react'
import Button from '../components/Button'
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
    const { id } = useParams();
    console.log(id)
    const { data: movie } = useFetch(`http://localhost:3000/movies/${id}`);
    return (
        <Fragment>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                <div>
                    <h1>{movie.title}</h1>
                    <p>
                        <span>{movie.release_date}</span>

                        {/* {movie.genres.map((genre) => (<span>{genre}</span>))} */}

                        <span>{movie.runtime}</span>
                    </p>
                </div>
            </div>
            <div><p>
                {movie.overview}</p></div>
            <div>
                <Button>+ Add to Watchlist</Button>
                <Button>Like</Button>
            </div>
        </Fragment>
    )

}

export default MovieDetails