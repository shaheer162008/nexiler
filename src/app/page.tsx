import Image from "next/image";
import Hero from "@/components/hero";
import Services from "@/components/services";
import WhyChooseUs from "@/components/why_choose_us";
import PackagesCTA from "@/components/packages_cta";
import Testimonials from "@/components/testimonials";
import Newsletter from "@/components/newsletter";
import NotSureSection from "@/components/not_sure_section";

export default function Home() {
  return (
   <>
  <Hero />
  <Services />
  <WhyChooseUs />
  <PackagesCTA />
  <Testimonials />
  <NotSureSection />
  <Newsletter />
   </>
  );
}
