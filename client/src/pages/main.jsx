import React from "react";
import Navbar from "../components/Navbar1/navbar";
import Main from "../components/Main/main";
import Project from "../components/Project/beginning";
import Portfolio from "../components/Portfolio/Portfolio";
import Services from "../components/Services/services";
import ProjectsByWhite from "../components/ProjectsByWhite/projectsbywhite";
import Feadback from "../components/Feedback/feedback";
import Socialgallery from "../components/SocialGallery/socialgallery";
import Footer from "../components/Footer/footer";
import { Analytics } from "@vercel/analytics/react";



function Home() {

  return (
      <header>
        <Analytics/>
        <Navbar />
        <Main />
        <ProjectsByWhite />
        <Project />
        <Portfolio />
        <Services />
        <Feadback />
        <Socialgallery />
        <Footer />
      </header>
  );
}

export default Home;
