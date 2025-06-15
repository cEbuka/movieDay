import { FiMenu } from 'react-icons/fi'

const NavBar = () => {
    return (
        <nav className="flex gap-4 bg-secondary px-2 py-3 items-center justify-center">
            <h1 className='text-2xl'>movieDay</h1>
            <div className="flex gap-2 ml-auto">
                <ul className="gap-4 hidden md:flex">
                    <li>Home</li>
                    <li>Explore</li>
                    <li>Genres</li>
                    <li>Top Rated</li>
                </ul>
                <form className="flex outline-1 px-2">
                    <input type="text" name="search" placeholder="Search movies" className="outline-none w-full" />
                    <button className="cursor-pointer">search</button>
                </form>
                <button className='cursor-pointer md:hidden' ><FiMenu /></button>
            </div>
        </nav>

    )
}

export default NavBar