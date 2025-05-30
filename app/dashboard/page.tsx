import React from 'react'
import { bebas } from '../ui/fonts'
import CardWrapper from '../components/CardWrapper'
import ChartWrapper from '../components/ChartWrapper'
import LatestInvoicesWrapper from '../components/LatestInvoicesWrapper'

const Dashboard = async () => {

  return (
    <main className='flex flex-col p-4 w-full space-y-5'>
      <h1 className={`${bebas.className} mb-4 text-xl md:text-2xl`}>Dashboard</h1>
      <div className='grid grid-cols-6 sm:grid-cols-2 lg:grid-cols-4'>
        <CardWrapper/>
      </div>
      <div className='grid grid-cols-2'>
        <div>
          <ChartWrapper/>
        </div>
        <div>
          <LatestInvoicesWrapper/>
        </div>
      </div>
    </main>
  )
}

export default Dashboard