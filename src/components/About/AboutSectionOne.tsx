import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import ScrollReveal from "../Common/ScrollReveal";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="text-body-color mb-5 flex items-center text-lg font-medium">
      <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <ScrollReveal direction="left" duration={800}>
                <SectionTitle
                  title="Empowering Businesses with AI-Driven Solutions"
                  paragraph="At Artisan Systems, we combine cutting-edge AI and automation to help businesses scale efficiently. From intelligent workflows to custom web solutions, our team delivers results that drive growth."
                  mb="44px"
                />
              </ScrollReveal>

              <ScrollReveal direction="left" delay={200} duration={800}>
                <div className="mb-12 max-w-[570px] lg:mb-0">
                  <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Custom Automations" />
                    <List text="Agentic Workflows" />
                    <List text="AI/ML Research" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Web Development" />
                    <List text="Business Growth" />
                    <List text="24/7 Support" />
                  </div>
                </div>
              </div>
              </ScrollReveal>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <ScrollReveal direction="right" delay={300} duration={900}>
                <div className="relative mx-auto flex max-w-[400px] items-center justify-center lg:mr-0">
                  <div className="rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-primary/5 p-12 dark:from-primary/20 dark:to-primary/10">
                    <Image
                      src="/images/logo/Artisan_logo.jpg"
                      alt="Artisan Systems"
                      width={220}
                      height={220}
                      className="rounded-2xl object-cover shadow-xl ring-1 ring-black/5 dark:ring-white/10"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
