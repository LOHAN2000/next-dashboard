import React, { FC } from 'react'
import { fetchFilteredInvoices } from '../helpers/api'
import { InvoiceTable } from 'anjrot-components';

interface InvoiceWrapperProps {
  query?: string
  page?: number
}

const InvoiceWrapper: FC<InvoiceWrapperProps> = async ({query, page}) => {

  const getInvoices = await fetchFilteredInvoices(query || "", page);

  return (
    <InvoiceTable invoices={getInvoices}/>
  )
}

export default InvoiceWrapper