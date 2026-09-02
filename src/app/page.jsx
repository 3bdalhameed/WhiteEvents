import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Project from "@/components/Project";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Feedback from "@/components/Feedback";
import ProjectsByWhite from "@/components/ProjectsByWhite";
import SocialGallery from "@/components/SocialGallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <header>
      <Navbar />
      <Main />
      <Project />
      <Portfolio />
      <Services />
      <ProjectsByWhite />
      <Feedback />
      <SocialGallery />
      <Footer />
    </header>
  );
}
