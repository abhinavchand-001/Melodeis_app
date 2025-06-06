import React from 'react'
import { RiHome5Line } from "react-icons/ri"
import { RiCompassDiscoverLine } from "react-icons/ri";
import { IoAlbumsOutline } from "react-icons/io5";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { MdReplay } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { RiPlayListLine } from "react-icons/ri";



import { Link } from 'react-router-dom'


const sidebar = () => {
  return (
    <div id='iamsidebar' className=' h-dvh w-[17rem] flex justify-center items-center '> 
    
     <div id= 'insidethesidebar' className=' h-full w-full m-8 pt-8 flex flex-col p-2'>
      <h1 className='melodyheadline text-4xl mt-1 mb-10'>Melodies</h1>
      <p className='mb-5 text-[#ee10b0]'> Menu</p>
      <Link className=' menucontent w-[150px] flex font-bold text-[15px] mb-4 text-white items-center-safe'><RiHome5Line className='mr-3' /> Home</Link>
      <Link className=' menucontent w-[150px] flex font-bold text-[15px] mb-4 text-white items-center-safe'> <RiCompassDiscoverLine className='mr-3'/>   Discover</Link>
      <Link className=' menucontent w-[150px] flex font-bold text-[15px] mb-4 text-white items-center-safe'> <IoAlbumsOutline className='mr-3'/> Albums</Link>
      <Link className=' menucontent w-[150px] flex font-bold text-[15px] mb-4 text-white items-center-safe'> <MdOutlinePeopleAlt className='mr-3'/> Artists</Link>


      <p className='mb-5 text-[#ee10b0]'> Library</p>
      <Link className='flex font-bold text-[15px] mb-4 text-white items-center-safe'><CiClock2 className='mr-3' /> Recently Added</Link>
      <Link className='flex font-bold text-[15px] mb-4 text-white items-center-safe'> <MdReplay className='mr-3'/>   Most Played</Link>
   


      <p className='mb-5 text-[#ee10b0]'> Playlist and Favourite</p>
      <Link className='flex font-bold text-[15px] mb-4 text-white items-center-safe'><CiHeart className='mr-3' />Your Favourites</Link>
      <Link className='flex font-bold text-[15px] mb-4 text-[#1070ee] items-center-safe'> <RiPlayListLine className='mr-3'/>   Your Playlist </Link>
      <Link className='flex font-bold text-[15px] mb-4 text-white items-center-safe'> <IoAlbumsOutline className='mr-3'/> Add Playlist</Link>
    
   
     </div>

    </div>
  )
}

export default sidebar