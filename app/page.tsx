import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import FeaturedDish from "@/components/FeaturedDish";
import SocialProof from "@/components/SocialProof";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Menu />
      <FeaturedDish />
      <SocialProof />
      <Location />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
