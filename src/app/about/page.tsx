import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Artisan Systems",
  description: "Learn about Artisan Systems — our mission, our founders, and how we help businesses grow through intelligent automation, agentic workflows, web development, and AI/ML research.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Artisan Systems is built by passionate engineers who believe every business deserves access to intelligent automation, cutting-edge AI, and world-class technology. We combine deep technical expertise with a relentless focus on results."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Features />
      <Contact />
    </>
  );
};

export default AboutPage;
