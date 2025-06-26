import Breadcrumbs from '@/app/components/BreadCrums'
import FormEditWrapper from '@/app/components/FormEditWrapper'
import { fetchCustomers, fetchInvoiceId } from '@/app/helpers/api'
import React, { FC } from 'react'

interface EditInvoiceProps {
  params: Promise<{invoiceId: string}>
}

const EditInvoice: FC<EditInvoiceProps> = async ({params}) => {

  const path = await params;
  const id =  path.invoiceId

  const breadCrumbs = [
    {label: 'Invoices', href: '/dashboard/invoices'},
    {label: 'Edit Invoice', href: `/dashboard/invoices/${id}`, active: true}
  ]

  const [customers, invoice] = await Promise.all([fetchCustomers(), fetchInvoiceId(id)])


  return (
    <main className='w-full p-4'>
      <Breadcrumbs breadcrumbs={breadCrumbs}/>    
      <FormEditWrapper invoice={invoice} customers={customers}/>
    </main>
  )
}

export default EditInvoice