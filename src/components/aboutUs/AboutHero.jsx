import React from 'react'

export const AboutHero = ({title}) => {
  return (
    <div className='background-overlay-about flex justify-center items-center'>
         <div className=''>
            <h1 className=' text-4xl font-bold text-white'>{title}</h1>
         </div>
    </div>
  )
}
