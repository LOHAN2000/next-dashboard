import React from 'react'
import { fetchRevenue } from '../helpers/api'
import RevenueChart from './RevenuesChart';

const ChartWrapper = async () => {

  const revenueResult = await fetchRevenue();

  return (
    <RevenueChart revenue={revenueResult} chartHeight={300}/>
  )
}

export default ChartWrapper