import InvoiceWrapper from '@/app/components/InvoiceWrapper'
import { InvoiceSkeleton, InvoicesTableSkeleton } from '@/app/components/Skeleton'
import { bebas } from '@/app/ui/fonts'
import React, { Suspense } from 'react'

const Invoices = () => {
  return (
    <div className='w-full p-4 '>
      <div className='flex w-full items-center justify-between'>
        <h1 className={`${bebas.className} text-2xl`}>Invoices</h1>
      </div>
      <div className='mt-4 items-center justify-between gap-2 md:mt-8'>Search</div>
      <Suspense fallback={<InvoicesTableSkeleton/>}>
        <InvoiceWrapper/>
      </Suspense>
      
    </div>
  )
}

export default Invoices