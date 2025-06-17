import React, { FC } from 'react'
import { fetchFilteredInvoices } from '../helpers/api'
import { InvoiceTable } from 'anjrot-components';

interface InvoiceWrapperProps {
  query?: string
}

const InvoiceWrapper: FC<InvoiceWrapperProps> = async ({query}) => {

  const getInvoices = await fetchFilteredInvoices(query || "");

  return (
    <InvoiceTable invoices={getInvoices}/>
  )
}

export default InvoiceWrapper