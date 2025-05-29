import React, { FC, PropsWithChildren } from 'react'
import SideNav from '../components/SideNav'

const DashboardLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <div className='flex flex-col sm:flex-row h-screen bg-white'>
      <div className='flex flex-row sm:h-full'>
        <SideNav/>        
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout