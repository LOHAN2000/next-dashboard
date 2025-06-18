import InvoiceWrapper from '@/app/components/InvoiceWrapper'
import PaginationWrapper from '@/app/components/PaginationWrapper'
import Search from '@/app/components/Search'
import { InvoicesTableSkeleton } from '@/app/components/Skeleton'
import { fetchInvoicesPages } from '@/app/helpers/api'
import { bebas } from '@/app/ui/fonts'
import React, { FC, Suspense } from 'react'

interface invoicesProps {
  searchParams?: Promise<{query?: string, page?: number}>
}

const Invoices: FC<invoicesProps> = async ({ searchParams }) => {

  const params = await searchParams;

  const totalPages = await fetchInvoicesPages(params?.query || "")

  return (
    <div className='w-full p-4 '>
      <div className='flex w-full items-center justify-between'>
        <h1 className={`${bebas.className} text-2xl`}>Invoices</h1>
      </div>
      <div className='mt-4 items-center justify-between gap-2 md:mt-8'>
        <Search/>
      </div>
      <Suspense fallback={<InvoicesTableSkeleton/>}>
        <InvoiceWrapper query={params?.query} page={params?.page}/>
      </Suspense>
      <div className='flex justify-center'>
        <PaginationWrapper totalPages={totalPages}/>
      </div>
    </div>
  )
}

export default Invoices