import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import WhyMealMithra from "@/components/home/WhyMealMithra";
import Gallery from "@/components/home/Gallery";
import TrustedBy from "@/components/home/TrustedBy";
import SubscriptionPlans from "@/components/home/SubscriptionPlans";
import HowItWorks from "@/components/home/HowItWorks";
import BookingForm from "@/components/home/BookingForm";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
      <WhyMealMithra />
      <SubscriptionPlans />
      <HowItWorks />
      <Gallery />
      <BookingForm />
      <Testimonials />
      <FAQ />
      <Footer />
      
    </>
  );
}
