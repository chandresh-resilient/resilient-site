import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className='bg-white'>{children}</main>
      <Footer />
    </>
  )
}