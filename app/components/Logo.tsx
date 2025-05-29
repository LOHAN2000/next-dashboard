import React from 'react'
import { MdDashboard } from 'react-icons/md'
import { bebas } from '../ui/fonts'

const Logo = () => {
  return (
    <div className='flex flex-row shrink-0 p-5'>
      <div className='flex flex-row items-center leading-none'>
        <MdDashboard className='text-[#DCECF2] size-10'/>
        <h1 className={`text-[#DCECF2] ${bebas.className} text-3xl`}>Dashboard</h1>
      </div>
    </div>
  )
}

export default Logo