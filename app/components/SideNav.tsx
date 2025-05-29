"use client"
import React, { useState } from 'react'
import Logo from './Logo'
import { FaFileInvoice, FaHouse } from 'react-icons/fa6'
import { BsPeopleFill } from 'react-icons/bs'
import { RiLogoutCircleLine } from 'react-icons/ri'
import Link from 'next/link'

const SideNav = () => {

  const [link, setLink] = useState('');

  return (
    <aside className='flex flex-col h-fit sm:h-full bg-[#141726] w-full sm:w-60 p-3'>
      <div className='flex justify-center items-center'>
        <Logo/>
      </div>
      <div className='flex sm:flex-col flex-row gap-y-2 sm:h-full gap-x-3 text-[#DCECF2] justify-center sm:justify-normal'>
        <Link onClick={() => setLink('dashboard')} href='/dashboard' className={`flex space-x-2 p-2 items-center bg-zinc-200/20 rounded-lg hover:bg-zinc-200/40 cursor-pointer ${link === 'dashboard' ? 'bg-zinc-200/40' : ''}`}><FaHouse className='size-5 my-auto'/><p className='text-lg text-center'>Dashboard</p></Link>
        <Link onClick={() => setLink('invoices')} href='/dashboard/invoices' className={`flex space-x-2 p-2 items-center bg-zinc-200/20 rounded-lg hover:bg-zinc-200/40 cursor-pointer ${link === 'invoices' ? 'bg-zinc-200/40' : ''}`}><FaFileInvoice  className='size-5 my-auto'/><p className='text-lg text-center'>Invoices</p></Link>
        <Link onClick={() => setLink('customers')} href='/dashboard/customers' className={`flex space-x-2 p-2 items-center bg-zinc-200/20 rounded-lg hover:bg-zinc-200/40 cursor-pointer ${link === 'customers' ? 'bg-zinc-200/40' : ''}`}><BsPeopleFill className='size-5 my-auto'/><p className='text-lg text-center'>Customers</p></Link>
        <Link href='/dashboard' className='flex space-x-2 p-2 items-center bg-zinc-200/20 rounded-lg hover:bg-zinc-200/40 sm:mt-auto cursor-pointer'><RiLogoutCircleLine className='size-5 my-auto'/><p className='text-lg text-center'>Logout</p></Link>
      </div>
    </aside>
  )
}

export default SideNav