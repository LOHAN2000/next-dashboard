import React from 'react'
import { fetchRevenue } from '../helpers/api'
import RevenueChart from './RevenuesChart';

const ChartWrapper = async () => {

  const revenueResult = await fetchRevenue();
  await new Promise(resolve => setTimeout(resolve, 3000))

  return (
    <RevenueChart revenue={revenueResult} chartHeight={300}/>
  )
}

export default ChartWrapper