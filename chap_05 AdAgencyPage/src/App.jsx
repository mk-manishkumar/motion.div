import { appData } from "./constants/data";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import DarkCTASection from "./components/DarkCTASection";
import BrandsSection from "./components/BrandsSection";
import ServicesSection from "./components/ServicesSection";
import AgencySection from "./components/AgencySection";
import TeamSection from "./components/TeamSection";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header navigation={appData.navigation} />
      <HeroSection heroImages={appData.heroImages} />
      <DarkCTASection />
      <BrandsSection brandLogos={appData.brandLogos} />
      <ServicesSection services={appData.services} />
      <AgencySection />
      <TeamSection teamMember={appData.teamMember} />
      <BlogSection blogCategories={appData.blogCategories} blogPosts={appData.blogPosts} />
      <Footer />
    </div>
  );
}
