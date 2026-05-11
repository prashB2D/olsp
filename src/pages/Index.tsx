import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Solutions from "@/components/Solutions";
import { EarthBackground } from "@/components/EarthDivider";
import StudentExperience from "@/components/StudentExperience";
import MissionVision from "@/components/MissionVision";
import Impact from "@/components/Impact";
import Certifications from "@/components/Certifications";
import WhyOrbital from "@/components/WhyOrbital";
import Programs from "@/components/Programs";
import Courses from "@/components/Courses";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {

  return (
    <main className="space-bg min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <EarthBackground>
        <Solutions />
        <StudentExperience />
      </EarthBackground>
      <div className="relative">
        <MissionVision />
        <Impact />
      </div>
      <Certifications />
      <WhyOrbital />
      <Programs />
      <Courses />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
