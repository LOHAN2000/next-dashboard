import DashboardSkeleton from '@/app/components/Skeleton'
import React from 'react'

const Loading = () => {
  return (
    <div className='flex flex-col p-4 w-full space-y-5'>
      <DashboardSkeleton/>
    </div>
  )
}

export default Loading