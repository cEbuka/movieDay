import { Fragment } from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <Fragment>
      <div>
        <Hero />
        <Categories />
      </div>
    </Fragment>

  )
}

export default Home