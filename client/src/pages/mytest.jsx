import React from "react";
import Navbar from "../components/Navbar1/navbar";
import Main from "../components/Main/main";
import Project from "../components/Project/project";
import Portfolio from "../components/Portfolio/Portfolio";
import Services from "../components/Services/services";
import Feadback from "../components/Feedback/feedback";
import Appointment from "../components/Appointment/appointment";
import Footer from "../components/Footer/footer";
import { Analytics } from "@vercel/analytics/react";



function Home() {

  return (
      <header>
        <Analytics/>
        <Navbar />
        <Main />
        <Project />
        <Portfolio />
        <Services />
        <Feadback />
        <Appointment />
        <Footer />
      </header>
  );
}

export default Home;
