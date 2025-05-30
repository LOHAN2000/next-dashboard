import React from 'react'
import { fetchCardData } from '../helpers/api';
import { Card } from './Cards';

export const CardWrapper = async () => {

  const {numberOfCustomers, numberOfInvoices, totalPaidInvoices, totalPendingInvoices } = await fetchCardData();

  return (
    <>
        <Card title='Collected' value={totalPaidInvoices} type='collected'/>
        <Card title='Pending' value={totalPendingInvoices} type='pending'/>
        <Card title='Total Invoices' value={numberOfInvoices} type='invoices'/>
        <Card title='Total Customers' value={numberOfCustomers} type='customers'/>
    </>
  )
}

export default CardWrapper