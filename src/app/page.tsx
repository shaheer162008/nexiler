import Image from "next/image";
import Hero from "@/components/hero";
import WhatWeDo from "@/components/what_we_do";
import Services from "@/components/services";
import WhyChooseUs from "@/components/why_choose_us";
import OurPromise from "@/components/our_promise";
import Testimonials from "@/components/testimonials";
import Newsletter from "@/components/newsletter";
import NotSureSection from "@/components/not_sure_section";

export default function Home() {
  return (
   <>
  <Hero />
  <WhatWeDo />
  <Services />
  <WhyChooseUs />
  <OurPromise />
  <Testimonials />
  <NotSureSection />
  <Newsletter />
   </>
  );
}
