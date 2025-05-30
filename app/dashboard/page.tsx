import React from 'react'
import { bebas } from '../ui/fonts'
import { Card } from '../components/Cards'
import { fetchCardData } from '../helpers/api'

const Dashboard = async () => {
  
  const {numberOfCustomers, numberOfInvoices, totalPaidInvoices, totalPendingInvoices } = await fetchCardData();

  return (
    <main className='p-4 w-full'>
      <h1 className={`${bebas.className} mb-4 text-xl md:text-2xl`}>Dashboard</h1>
      <div className='grid grid-cols-6 sm:grid-cols-2 lg:grid-cols-4'>
        <Card title='Collected' value={totalPaidInvoices} type='collected'/>
        <Card title='Pending' value={totalPendingInvoices} type='pending'/>
        <Card title='Total Invoices' value={numberOfInvoices} type='invoices'/>
        <Card title='Total Customers' value={numberOfCustomers} type='customers'/>
      </div>
    </main>
  )
}

export default Dashboard