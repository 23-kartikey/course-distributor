import Hero from "../components/Hero";
import FeaturedCourses from "../components/FeaturedCourses";
import Stats from "../components/Stats";
import CTA from "../components/CTA";

import "../styles/Home.css";

export default function Home() {
  return (
    <>
      <Hero />

      <FeaturedCourses />

      <Stats />


      <CTA />
    </>
  );
}