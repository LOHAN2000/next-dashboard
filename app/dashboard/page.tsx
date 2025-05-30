import React from 'react'
import { bebas } from '../ui/fonts'
import CardWrapper from '../components/CardWrapper'
import ChartWrapper from '../components/ChartWrapper'

const Dashboard = async () => {

  return (
    <main className='flex flex-col p-4 w-full'>
      <h1 className={`${bebas.className} mb-4 text-xl md:text-2xl`}>Dashboard</h1>
      <div className='grid grid-cols-6 sm:grid-cols-2 lg:grid-cols-4'>
        <CardWrapper/>
      </div>
      <ChartWrapper/>
    </main>
  )
}

export default Dashboard