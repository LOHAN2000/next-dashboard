import React from 'react'
import { fetchLatestInvoices } from '../helpers/api'
import LatestInvoices from './LatestInvoices';

const LatestInvoicesWrapper = async () => {

  const invoicesResult = await fetchLatestInvoices();

  return (
    <LatestInvoices latestInvoices={invoicesResult}/>
  )
}

export default LatestInvoicesWrapper