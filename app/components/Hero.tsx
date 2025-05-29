import Image from 'next/image'
import React from 'react'

export const Hero = () => {
  return (
    <main className='sm:grid flex flex-col sm:grid-cols-[1fr_auto] grow h-full bg-white p-5 space-x-4'>
      <div className='flex flex-col md:flex-row grow items-center justify-center'>
        <div className='flex flex-col space-y-5'>
          <p className='uppercase text-2xl text-gray-800'>welcome to <strong>DASHBOAD</strong> next js</p>
          <button className='bg-blue-500 py-1 px-5 text-center w-fit rounded-lg font-light text-white'>Login</button>
        </div>
      </div>
      <div className='flex items-center justify-center grow'>
        <Image src='/hero-desktop.png' alt='Screenshot dashboard desktop' width={900} height={600} className='hidden sm:block'/>
        <Image src='/hero-mobile.png' alt='Screenshot dashboard mobile' width={900} height={600} className='block sm:hidden'/>
      </div>
    </main>
  )
}
