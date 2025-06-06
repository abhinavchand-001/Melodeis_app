import React from 'react'
// import { useState , useEffect } from 'react'
// import { fetchyoutubeapi } from '../utils/fetchyoutubeapi'

const Topsongs = () => {
  
//   cosnt [selectedCategory , setSelectedCategory] = useState('New')
// useEffect(() => {
  
// fetchyoutubeapi(`search?part=snippet&q=${selectedCategory}`)

// } , [])

  return (
    <div className=' flex flex-col h-60 w-50 gap-2 p-3 bg-[#1f1f1f] items-center'>
        <div className='h-50 w-40 bg-[#ee10af79]'></div>
        <p className='text-white'>Whatever it takes</p>
        <p className='text-[#96718b]'>Imagine dragons</p>
    </div>
  )
}

export default Topsongs