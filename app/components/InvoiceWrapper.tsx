import React, { FC } from 'react'
import { fetchFilteredInvoices } from '../helpers/api'
import InvoicesTable from './InvoicesTable'

interface InvoiceWrapperProps {
  query?: string
  page?: number
}

const InvoiceWrapper: FC<InvoiceWrapperProps> = async ({query, page}) => {

  const getInvoices = await fetchFilteredInvoices(query || "", page);

  return (
    <InvoicesTable invoices={getInvoices}/>
  )
}

export default InvoiceWrapper