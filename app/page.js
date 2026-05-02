import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TopServices from "./components/TopServices";
import SeamlessExperience from "./components/SeamlessExperience";
import MostBookedServices from "./components/MostBookedServices";
import DifferenceSection from "./components/DifferenceSection";
import AppPromo from "./components/AppPromo";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="pt-20 bg-surface-secondary min-h-screen">
      <Navbar />
      
      <main>
        {/* White background section for Hero and Top Services */}
        <div className="bg-white rounded-b-[40px] shadow-sm pb-8 relative z-10">
          <Hero />
          <TopServices />
        </div>

        {/* Gray background elements */}
        <div className="relative z-0 -mt-8 pt-8">
          <SeamlessExperience />
          <MostBookedServices />
        </div>

        {/* White background elements */}
        <div className="bg-white">
          <DifferenceSection />
        </div>

        {/* Light gray for App Promo */}
        <div className="bg-surface-secondary">
          <AppPromo />
        </div>
      </main>

      <Footer />
    </div>
  );
}
