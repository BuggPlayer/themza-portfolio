import React from "react";
import Client from "../../components/client/Client";
import Contact from "../../components/contact/Contact";
import Demo from "../../components/Demo/Demo";
import Feature from "../../components/feature/Feature";
import Footer from "../../components/footer/Footer";
import Landing from "../../components/landing/Landing";
import Navbar from "../../components/navbar/Navbar";
import OurService from "../../components/ourservice/OurService";
import Priceing from "../../components/price/Priceing";
import Team from "../../components/team/Team";
import Testimonial from "../../components/testimonial/Testimonial";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <OurService />
      <Feature />
      {/* <Priceing /> */}
     
     
      <Client />
      <Team />
      <Testimonial />
      <Demo />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
