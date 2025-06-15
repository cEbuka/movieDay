import { FiArrowRight } from "react-icons/fi"
import Button from "./Button"


const Categories = () => {
    return (
        <main className='grid p-4'>
            <section className='flex flex-col'>
                <h2>Trending Now</h2>
                <div className='grid grid-cols-4 gap-2'>
                    <img className="w-full h-[100px] md:h-[200px]"/>
                    <img width="100px" height="100px" />
                    <img width="100px" height="100px" />
                    <img width="100px" height="100px" />
                </div>
                <Button className='self-end'><FiArrowRight /></Button>
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