import React from 'react'
import { fetchFilteredInvoices } from '../helpers/api'
import { InvoiceTable } from 'anjrot-components';

const InvoiceWrapper = async () => {

  const getInvoices = await fetchFilteredInvoices();

  return (
    <InvoiceTable invoices={getInvoices}/>
  )
}

export default InvoiceWrapper