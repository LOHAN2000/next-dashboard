import Breadcrumbs from '@/app/components/BreadCrums'
import FormEditWrapper from '@/app/components/FormEditWrapper'
import { fetchCustomers } from '@/app/helpers/api'
import React, { FC } from 'react'

interface EditInvoiceProps {
  params: Promise<{invoiceId: string}>
}

const EditInvoice: FC<EditInvoiceProps> = async ({params}) => {

  const path = await params

  const breadCrumbs = [
    {label: 'Invoices', href: '/dashboard/invoices'},
    {label: 'Create Invoice', href: `/dashboard/invoices/${path.invoiceId}`, active: true}
  ]

  const customers = await fetchCustomers();
  

  return (
    <>
      <Breadcrumbs breadcrumbs={breadCrumbs}/>    
      <FormEditWrapper customers={customers} />
    </>
  )
}

export default EditInvoice