'use client'

import React, { FC } from 'react'
import Pagination from './Pagination'
import { usePathname, useSearchParams } from 'next/navigation';

const PaginationWrapper:FC<{totalPages: number}> = ({totalPages}) => {

  const pathname  = usePathname();
  const searchParams = useSearchParams();
  
  const currentPage = Number(searchParams.get('page')) || 1

  const createPageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', pageNumber.toString())

    return `${pathname}?${params.toString()}`;
  }

  //TODO: Modificar el URL de invoices al cambiar de navegación, por el momento no se refleja en el url pero si en la consola.

  return (
    <Pagination totalPages={totalPages}/>
  )
}

export default PaginationWrapper