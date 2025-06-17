'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import React from 'react'
import SearchInput from './SearchInput';
import { useDebouncedCallback } from 'use-debounce';

const Search = () => {

  const pathname  = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleOnchange = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set('query', value)
    } else {
      params.delete('query')
    }
    
    replace(`${pathname}?${params.toString()}`)
  }, 400)

  return (
    <SearchInput onChange={(e) => handleOnchange(e.target.value)} />
  )
}

export default Search