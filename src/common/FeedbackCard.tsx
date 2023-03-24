import React from 'react'

const FeedbackCard = () => {
  return (
    <div className='flex flex-col items-center bg-[#0E0E48] rounded-2xl w-[20vw] pt-12 pb-4 px-12 relative justify-center' >
      <img src='https://www.shutterstock.com/image-illustration/young-adult-woman-cute-iconic-600w-2143199405.jpg' alt="image" className='object-cover rounded-full w-[15vh] absolute -top-20' />
     
      <div className='text-3xl'>
        Name
      </div>
      <div className='text-center font-extralight'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque perferendis minima ullam repudiandae voluptate, soluta ab quo corporis minus? Earum repellendus, tempora facilis veniam atque 
      </div>
    </div>
  )
}

export default FeedbackCard
