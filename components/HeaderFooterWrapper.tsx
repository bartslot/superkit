'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Header from './layout/Header'
import Footer from './layout/Footer'

export default function HeaderFooterWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const hideOn = ['/login', '/signup']        // routes where we hide them
  const isAuthPage = hideOn.includes(pathname)

  return (
    <>
      {!isAuthPage && <Header />}
      <main className="flex-grow">{children}</main>
      {!isAuthPage && <Footer />}
    </>
  )
}
