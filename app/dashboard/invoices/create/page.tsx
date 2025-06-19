import Breadcrumbs from '@/app/components/BreadCrums'
import FormWrapper from '@/app/components/FormWrapper'
import { fetchCustomers } from '@/app/helpers/api'
import React from 'react'

const breadCrumbs = [
  {label: 'Invoices', href: '/dashboard/invoices'},
  {label: 'Create Invoice', href: '/dashboard/invoices/true', active: true}
]


const CreateInvoice = async () => {
  
  const customers = await fetchCustomers();

  return (
    <main className='w-full p-4'>
      <Breadcrumbs breadcrumbs={breadCrumbs}/>
      <FormWrapper customers={customers}/>
    </main>
  )
}

export default CreateInvoice