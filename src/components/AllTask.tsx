import React from 'react'
import Card from './Card'

const AllTask:React.FC = () => {
  return (
    <div className='mx-28 my-3'>
      <p className='text-2xl '>All Tasks</p>
      <div className="grid grid-col-3">
          <Card />
      </div>
    </div>
  )
}

export default AllTask
