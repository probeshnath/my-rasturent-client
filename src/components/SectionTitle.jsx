import React from 'react'

const SectionTitle = ({heading,subHeading}) => {
  return (
    <div className='md:w-3/12 mx-auto my-10 text-center mb-4'>
        <p className='text-yellow-600 mb-2'>---{subHeading}---</p>
        <h3 className='text-4xl uppercase border-y-4 py-4'>{heading}</h3>
    </div>
  )
}

export default SectionTitle