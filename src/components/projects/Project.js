import React from 'react'
import Title from '../layout/Title'
import ProjectsCard from './ProjectsCard'

const Project = () => {
  return (
    <section id='projects' className=' w-full py-6 border-b-[1px] border-b-black'>
        <div className='flex items-center justify-center text-center'>
            <Title 
                title="Visit My Portfolio and keep my projects" 
                desc="My Projects"
            />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="YOUTUBE CLONE"
          des=" This is a YouTube clone web application built with React.js and powered by API support. It allows users to explore and interact with videos, just like the real YouTube platform. With a clean and user-friendly interface, our YouTube clone provides a seamless experience for both content creators and viewers."
          src="https://i.postimg.cc/FFnCrfrT/You-Tube-Clone.png"
          Gitlink="https://github.com/irohit3710/YouTube-Clone"
          DepLink="https://you-tube-clone-liart-ten.vercel.app/"
        />
        <ProjectsCard
          title="Wix Movies"
          des="Wix Movies is a web application built with React.js, designed to provide users with comprehensive information about movies similar to popular platforms like IMDb. With its sleek and user-friendly interface, Wix Movies allows users to explore a vast database of films, discover new favorites, and stay up to date with the latest in the world of cinema"
          src="https://i.postimg.cc/WbFWh2tT/Wix-Movies.png"
          Gitlink="https://github.com/irohit3710/Wix_Movies"
          DepLink="https://wix-movies.vercel.app/"
        />
        <ProjectsCard
          title="Apna Kisan"
          des=" A local Farmer Market is the vibrant hub of activity where farmers from the surrounding areas can come together to sell and buy crops and products without having to worry about extra charges."
          src="https://i.postimg.cc/mrJtjf73/Apna-Kisan.png"
          Gitlink="https://github.com/irohit3710/Apna__KISAN"
          DepLink="https://github.com/irohit3710/Apna__KISAN"
        />
        <ProjectsCard
          title="SKY VUE"
          des="SkyVue is a web application built with React.js, designed to provide real-time weather information for any city in the world. With a clean and intuitive interface, Weather-Now makes it easy for users to access up-to-date weather data, plan their activities, and stay informed about current weather conditions in their chosen locations."
          src="https://i.postimg.cc/s2pb136v/SkyVue.png"
          Gitlink="https://github.com/irohit3710/SkyVue"
          DepLink="https://sky-vue-sigma.vercel.app/"
        />
      </div>
    </section>
  )
}

export default Project