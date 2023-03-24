import React from 'react'
import FeedbackCard from './FeedbackCard'

const Feedback = () => {
  return (
    <div className='flex flex-col px-32 items-center'>
      <div className='text-5xl font-extrabold mb-16'>Read what others have to say</div>
      <div className='flex flex-row gap-32 mt-8'>
        <FeedbackCard />
        <FeedbackCard />
      </div>
    </div>
  )
}

export default Feedback
