import Image from "next/image";
import ScrollReveal from "../Common/ScrollReveal";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <ScrollReveal direction="left" duration={900}>
              <div className="relative mx-auto mb-12 flex max-w-[400px] items-center justify-center text-center lg:m-0">
                <div className="rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-primary/5 p-12 dark:from-primary/20 dark:to-primary/10">
                  <Image
                    src="/images/logo/Artisan_logo.jpg"
                    alt="Artisan Systems"
                    width={220}
                    height={220}
                    className="rounded-2xl object-cover shadow-xl ring-1 ring-black/5 dark:ring-white/10"
                  />
                  <p className="mt-6 text-lg font-semibold text-black dark:text-white">
                    Artisan<span className="text-primary">Systems</span>
                  </p>
                  <p className="mt-1 text-sm text-body-color">Building the future with AI</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <ScrollReveal direction="right" delay={0} duration={700}>
                <div className="mb-9 rounded-xl border border-transparent p-6 transition-all duration-300 hover:border-primary/10 hover:bg-primary/5">
                  <h3 className="mb-4 flex items-center gap-3 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Faisal Khan Pathan
                    <a
                      href="https://www.linkedin.com/in/faisal-khan-5a383a355/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Faisal LinkedIn"
                      className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                    >
                      <svg width="14" height="14" viewBox="0 0 17 16" className="fill-current">
                        <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                      </svg>
                    </a>
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Co-Founder &amp; CEO — Faisal leads the vision and strategy at Artisan Systems, specializing in intelligent automation, AI solutions, robotic autonomous systems, and scalable architectures.
                    <br />Phone: 7416252210 &nbsp;|&nbsp; Email: faisal96kp@gmail.com
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={150} duration={700}>
                <div className="mb-9 rounded-xl border border-transparent p-6 transition-all duration-300 hover:border-primary/10 hover:bg-primary/5">
                  <h3 className="mb-4 flex items-center gap-3 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Jayanth Adavi
                    <a
                      href="https://www.linkedin.com/in/adavi-jayanth-952a492ab/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Jayanth LinkedIn"
                      className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                    >
                      <svg width="14" height="14" viewBox="0 0 17 16" className="fill-current">
                        <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                      </svg>
                    </a>
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Co-Founder &amp; CTO — Jayanth architects the technical backbone of Artisan Systems, specializing in agentic workflows, AI/ML research, and scalable systems.
                    <br />Phone: 7386849777 &nbsp;|&nbsp; Email: jayanthadavi@gmail.com
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={300} duration={700}>
                <div className="mb-1 rounded-xl border border-transparent p-6 transition-all duration-300 hover:border-primary/10 hover:bg-primary/5">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Our Mission
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    To empower businesses of all sizes with intelligent, scalable, and affordable technology solutions that unlock growth and efficiency.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
