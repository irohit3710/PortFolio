import React from 'react'
import Title from '../layout/Title'
import Card from '../layout/Card'
import { FaArrowRight } from 'react-icons/fa'
import data from './FeaturesData'



const Features = () => {
  return (
    <section id='features' className='w-full pb-20 py-8 border-b-[1px] border-b-black flex flex-col px-10 mx-auto'>
      <Title title="Features" desc="What I Do" />
      <div className='w-full grid grid-cols-3 gap-20 px-5 mx-auto py-5'>
        {data.map((items)=>(
        <Card icon={items.icon} title={items.title} desc={items.text} next={<FaArrowRight />} link={items.link} />
        ))}
      </div>
    </section>
  )
}

export default Features