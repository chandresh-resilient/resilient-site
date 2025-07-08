import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import RootLayout from "@/components/RootLayout";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({ once: true })
  }, [])
  return (
  <Component {...pageProps} />
  )
}
