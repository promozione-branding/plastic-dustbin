// import Hero from "@/components/Landingpage/Hero";
// import Whychoose from "@/components/Landingpage/Whychoose";
// import Industries from "@/components/Landingpage/Industries"
// import AboutUs from "@/components/Landingpage/About";
// import Products from "@/components/Landingpage/Products";
// import ProductCategorySection from "@/components/Landingpage/Categories";
// import Certificates from "@/components/Landingpage/Certificates";
// import Cta from "@/components/Landingpage/Cta";
// import Otherpro from "@/components/Landingpage/Otherpro";
// import Form from "@/components/Landingpage/Form"
//  import Faq from "@/components/Landingpage/Faq"
// //  import Form from "@/components/Landingpage/Form"
// import Testimonial from "@/components/Landingpage/Testmonial";

// // import Enquiry from "@/components/Enquiry"
// import Citeskeyword from "@/components/Citieskeyword";
// import Support from "@/components/Landingpage/Support";
// // import Check from "@/components/Landingpage/Check";
// import Bestseller from "@/components/Landingpage/Bestseller";

import Category from '@/components/home/Category'
import Hero2 from '@/components/home/Hero2'
import Risk from '@/components/home/Risk'
import Whowework from '@/components/home/Whowework'
import React from 'react'
import Testimonial from "@/components/Landingpage/Testmonial";
// import Footer from '@/components/home/Footer'
import Whychoose from '@/components/home/Whychoose'
import Product from '@/components/home/Products'
import Catelog from '@/components/home/Catelog'
import Certificates from '@/components/home/Certificate'
import Faq from '@/components/home/Faq'




export default function Home() {
  return (
<>



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
{/* <Citeskeyword></Citeskeyword> */}
</>
  );
}
