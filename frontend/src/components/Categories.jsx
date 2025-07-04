import { FiArrowRight } from "react-icons/fi"
import Button from "./Button"
import useFetch from "../hooks/useFetch"
import MovieCard from "./MovieCard"




const Categories = () => {

    const { data: movies } = useFetch("http://localhost:3000/movies");
    let movie_arr = movies.slice(0, 4);
    function expandView(event) {
        event.preventDefault();
        movie_arr = movies;
    }

    return (
        <main className='grid px-2 md:p-4'>
            <h2>Trending Now</h2>
            <section className='grid md:grid-cols-4 md:gap-2'>
                {movie_arr?.map((movie) => (
                    <div className='' key={movie.id}>
                        <MovieCard src={movie.poster_path} title={movie.title} rates={movie.popularity} to={`/movies/${movie.id}`}/>
                    </div>
                ))}


                <Button className='self-end' onClick={expandView}><FiArrowRight /></Button>
            </section>
            <section className="flex flex-col">
                <h2>Top Picks For You</h2>
                <div className='grid grid-cols-4 gap-2'>
                    <img width="100px" height="100px" />
                    <img width="100px" height="100px" />
                    <img width="100px" height="100px" />
                    <img width="100px" height="100px" />
                </div>
                <Button className='self-end'><FiArrowRight /></Button>
            </section>
            <section className='flex flex-col'>
                <h2>Top Rated This Week</h2>
                <div className='grid grid-cols-4 gap-2'>
                    <img width="100px" height="100px" />
                    <img width="100px" height="100px" />
                    <img width="100px" height="100px" />
                    <img width="100px" height="100px" />
                </div>
                <Button className='self-end'><FiArrowRight /></Button>
            </section>
            <section className="flex flex-col">
                <h2>Browse by Genre</h2>
                <div className='flex flex-wrap gap-2'>
                    <Button outLined={true}>Action</Button>
                    <Button outLined={true}>Comedy</Button>
                    <Button outLined={true}>Drama</Button>
                    <Button outLined={true}>Romance</Button>
                </div>
                <Button className='self-end'><FiArrowRight /></Button>
            </section>

        </main>
    )
}

export default Categories