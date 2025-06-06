import React from 'react'
import Topbar from './Topbar'  
import Videobody from './Videobody'
import Topsongs from './Topsongs'
import Newreleasesongs  from './Newreleasesongs'
// import { useGetTopChartsQuery } from '../redux/services/Shazamcore'



const body = () => {

// cosnt {} = useGetTopChartsQuery();

  return (
    <div id='iambody' className=' relative min-h-[300vh] w-full flex  flex-col bg-[#181818] '>

  
      
      <Videobody/>
      <Topbar/>

      <h4 id='weeklytopsongs' className=' ml-12 mb-15 mt-10 text-3xl  text-white '>
          Weekly Top <span className='font-semibold text-[#ee10b0]'>Songs</span>
        </h4>
      <div className='flex flex-wrap flex-row m-10 mt-0 gap-6 p-4'>
        
        {[1,2,3,4,5].map((_, i) => (
          <Topsongs
            key={i}
          />
        ))}
      </div>


      <h4 id='weeklytopsongs' className=' ml-12 mb-15 mt-10 text-3xl  text-white '>
          New Release <span className='font-semibold text-[#ee10b0]'>Songs</span>
        </h4>
      <div className='flex flex-wrap flex-row m-10 mt-0 gap-6 p-4'>
        
        {[1,2,3,4,5].map((_, i) => (
          <Newreleasesongs
            key={i}
          />
        ))}
      </div>
    </div>
  )
}

export default body