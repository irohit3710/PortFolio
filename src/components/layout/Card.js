import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({icon,title,desc,next,link}) => {
  return (
    <div className=' w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-300 group'>
        <div className=' h-72 overflow-hidden'>
            <div className='flex h-full flex-col gap-12 translate-y-10 group-hover:translate-y-0 transition-transform duration-500'>
                <div className="w-10 h-8 flex flex-col justify-between">
                    {icon ? (
                    <span className="text-5xl text-designColor">{icon}</span>
                    ) : (
                    <>
                        <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                        <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                        <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                        <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                    </>
                    )}
                </div>
                <div className='flex flex-col gap-6'>
                    <h2 className=' text-2xl font-titleFont font-bold text-gray-300'>
                        {title}
                    </h2>
                    <p className='base'>{desc}</p>
                </div>
                <span className=' text-2xl text-designColor cursor-pointer'>
                    <Link to={link} rel='noreferer' target='_blank'>{next}</Link>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Card