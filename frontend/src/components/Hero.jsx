import { Fragment } from 'react'

const Hero = () => {
  return (
    <Fragment>
        <section className='flex gap-2 items-center justify-center p-4 bg-primary/80 text-white'>
            <article className='grid gap-y-3 md:gap-y-6'>
                <h1 className='text-2xl md:text-5xl'>Movie Title</h1>
                <p className='flex gap-2 text-sm md:text-2xl'>
                    <span>Genre</span>
                    <span>Year</span>
                    <span>Rating</span>
                </p>
                <button className='outline-1 md:p-4'>Watch Trailer</button>
            </article>
            '<iframe width="100%"></iframe>
        </section>
    </Fragment>
  )
}

export default Hero