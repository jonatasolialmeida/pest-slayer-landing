
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
