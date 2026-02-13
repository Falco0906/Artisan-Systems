import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Artisan Systems",
  description: "Get in touch with Artisan Systems. Reach out to discuss your automation, AI/ML, or web development needs.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Have a project in mind? Reach out to Artisan Systems and let's discuss how we can help your business grow with intelligent automation and AI solutions."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
