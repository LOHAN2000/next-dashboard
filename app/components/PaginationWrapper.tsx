'use client'

import React, { FC } from 'react'
import Pagination from './Pagination'

const PaginationWrapper:FC<{totalPages: number}> = ({totalPages}) => {

  return (
    <Pagination totalPages={totalPages}/>
  )
}

export default PaginationWrapper