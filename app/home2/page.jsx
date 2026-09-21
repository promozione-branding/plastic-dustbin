import Category from '@/components/home/Category'
import Header2 from '@/components/home/Header2'
import Hero2 from '@/components/home/Hero2'
import Risk from '@/components/home/Risk'
import Whowework from '@/components/home/Whowework'
import React from 'react'
import Testimonial from "@/components/Landingpage/Testmonial";
import Footer from '@/components/home/Footer'
import Whychoose from '@/components/home/Whychoose'
import Product from '@/components/home/Products'
import Catelog from '@/components/home/Catelog'
import Certificates from '@/components/home/Certificate'
import Faq from '@/components/home/Faq'


export default function page() {
  return (
   <>
   <Header2/>
   <Hero2/> 
   <Whowework/>
   <Category/>
   <Risk/>
   <Product/>
   {/* <Trust/> */}
   <Catelog/>
   <Whychoose/>
   <Certificates/>
   <Testimonial></Testimonial>
   <Faq/>
   <Footer/>
   </>
  )
}
