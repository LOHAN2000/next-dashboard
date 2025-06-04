import React, { Suspense } from 'react'
import ChartWrapper from '@/app/components/ChartWrapper'
import LatestInvoicesWrapper from '@/app/components/LatestInvoicesWrapper'
import { bebas } from '@/app/ui/fonts'
import CardWrapper from '@/app/components/CardWrapper'
import { RevenueChartSkeleton } from '@/app/components/Skeleton'


const Dashboard = async () => {

  return (
    <main className='flex flex-col p-4 w-full space-y-5'>
      <h1 className={`${bebas.className} mb-4 text-xl md:text-2xl`}>Dashboard</h1>
      <div className='grid grid-cols-6 sm:grid-cols-2 lg:grid-cols-4'>
        <CardWrapper/>
      </div>
      <div className='grid grid-cols-2'>
        <div>
          <Suspense fallback={<RevenueChartSkeleton/>}>
            <ChartWrapper/>
          </Suspense>
        </div>
        <div>
          <LatestInvoicesWrapper/>
        </div>
      </div>
    </main>
  )
}

export default Dashboard