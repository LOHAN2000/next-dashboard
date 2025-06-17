'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import React from 'react'
import SearchInput from './SearchInput';

const Search = () => {

  const pathname  = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleOnchange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set('query', value)
    } else {
      params.delete('query')
    }
    
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <SearchInput onChange={(e) => handleOnchange(e.target.value)} />
  )
}

export default Search