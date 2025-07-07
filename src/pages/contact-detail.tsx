'use client'
import React from 'react'
import ContactPage from './contact'
import Layout from '@/components/Layout'
import HeroHeader from '@/components/Heroheader'

const contactDetail = () => {
  return (
    <Layout>
        <HeroHeader heading="Consult the experts" />

  
    <ContactPage/>
         <div className="w-full max-w-screen-xl mx-auto px-4">  
    <h2 className="text-2xl md:text-3xl font-bold text-center my-8">
      Our Location
    </h2>
      <div className="w-full h-[450px] my-8">
  <iframe
   src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7562.058557750409!2d73.7501305!3d18.6177528!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b994d7024003%3A0x66c636371410f931!2sAustin%20Park%20NXT!5e0!3m2!1sen!2sin!4v1751898176431!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="rounded-lg shadow-lg"
  ></iframe>
</div>
</div>
    </Layout>
  )
}

export default contactDetail