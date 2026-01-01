import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import RoomsSection from "@/components/sections/RoomsSection";
import FoodsSection from "@/components/sections/FoodsSection";
import BookingSection from "@/components/sections/BookingSection";
import FeedbacksSection from "@/components/sections/FeedbacksSection";
import GallerySection from "@/components/sections/GallerySection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <RoomsSection />
        <FoodsSection />
        <BookingSection />
        <FeedbacksSection />
        <GallerySection />
      </main>
      <Footer />
    </>
  );
}
