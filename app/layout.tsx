import React, { FC, PropsWithChildren } from 'react'
import './ui/globals.css'
import { roboto } from './ui/fonts'

const RootLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <html>
      <body className={`${roboto.className}`}>{children}</body>
    </html>
  )
}

export default RootLayout