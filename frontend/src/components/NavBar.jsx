
import { FiMenu } from 'react-icons/fi'
import SideBar from './SideBar';
import useSideBarStore from '../state/useSideBarStore';
import { Link } from 'react-router-dom'

const NavBar = () => {
    const { isSideBarOpen, toggleSideBar } = useSideBarStore();

    return (
        <nav className="flex gap-4 bg-secondary px-2 py-3 items-center justify-center">
            <h1 className='text-2xl'>movieDay</h1>
            <div className="flex gap-2 ml-auto">
                <ul className="gap-4 hidden md:flex">
                    <Link to='/'><li>Home</li></Link>
                    <li>Explore</li>
                    <li>Genres</li>
                    <li>Top Rated</li>
                    <Link to="/signup"><li>Sign in</li></Link>
                </ul>
                <form className="flex outline-1 px-2">
                    <input type="text" name="search" placeholder="Search movies" className="outline-none w-full" />
                    <button className="cursor-pointer">search</button>
                </form>
                <button className='cursor-pointer md:hidden' onClick={toggleSideBar} ><FiMenu /></button>
            </div>
            {isSideBarOpen && <SideBar toggleSideBar={toggleSideBar} />}
        </nav>

    )
}

export default NavBar