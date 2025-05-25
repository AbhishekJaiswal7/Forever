import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t'>
            <Title text1='ABOUT' text2={'US'}/>
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-16'>
           <img className='w-full md:max-w-[450px]' src={assets.about_img}/>
           <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
           <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum cupiditate, aliquam molestias nisi ea quod, minus aspernatur maxime consequatur omnis et, temporibus autem eum. Quae iure pariatur minus dolore. Enim, repellat. Molestias quas similique quo repellendus aperiam quidem sequi, veritatis unde nobis sunt placeat officiis quibusdam dignissimos molestiae cumque accusamus!
           </p>
           </div>
        </div>
    </div>
  )
}

export default About
