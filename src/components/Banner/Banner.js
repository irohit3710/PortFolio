import React from 'react'
import LeftBanner from './LeftBanner'
import RightBanner from './RightBanner'

const Banner = () => {
  return (
    <section id='home' className='w-full h-[800px] pb-20 flex border-b-[1px] border-b-black mx-auto px-10'>
        <LeftBanner/>
        <RightBanner/>
    </section>
  )
}

export default Banner