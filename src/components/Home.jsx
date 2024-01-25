import React from 'react'
import Videos from "./Videos"
const Home = () => {
  return (
    <div className="wrapper ">
        <div className="flex w-full max-md:flex-col-reverse">
            <div className='w-1/2 flex flex-col gap-2 justify-center max-md:w-full max-md:items-center max-md:text-center'>
                <p className='font-bold tracking-wide max-w-sm text-3xl max-sm:text-xl'>Elevate Your Viewing Experience, Where Every Frame Tells a Story!</p>
                <button className='py-3 px-5 max-md:py-1  font-bold bg-orange-500 md:self-start mt-2 rounded-lg'>Explore Now!</button>
            </div>
            <div className='w-full md:w-1/2  '>
                <img src="/heroimg.png" alt="hero Vplayer" className='w-full max-md:w-1/2 max-[500px]:w-3/4 max-md:mx-auto' />
            </div>
           
         
        </div>
    <Videos />
    </div>
  )
}

export default Home