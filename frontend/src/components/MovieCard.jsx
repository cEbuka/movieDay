import { Fragment } from 'react'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const IMAGE_URL = "https://image.tmdb.org/t/p/w500"

const MovieCard = ({ src, title, rates, to }) => {
    return (
        <Fragment>
            <Link to={to}>
                <div className='rounded-2xl'>
                    <img src={`${IMAGE_URL}${src}"`} className=' h-[250px] w-full md:h-auto' />
                    <div className='bg-primary text-white text-center'>
                        <h1>{title}</h1>
                        <div className=''>
                            <p>{rates}</p>
                            <button><FaStar /></button>
                        </div>
                        <button>+ WatchList</button>
                    </div>
                </div>
            </Link>

        </Fragment>

    )
}

export default MovieCard