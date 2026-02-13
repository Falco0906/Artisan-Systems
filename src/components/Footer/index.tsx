"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 overflow-hidden border-t border-stroke-stroke/30 bg-gray-light pt-16 dark:border-stroke-dark/20 dark:bg-bg-color-dark md:pt-20 lg:pt-24">
      <div className="container">
        <div className="flex flex-wrap gap-y-12 lg:gap-y-0">
          {/* ─── Brand ─── */}
          <div className="w-full lg:w-5/12">
            <div className="mb-12 max-w-[380px] lg:mb-16">
              <Link href="/" className="mb-8 inline-flex items-center gap-3">
                <Image
                  src="/images/logo/Artisan_logo.jpg"
                  alt="Artisan Systems"
                  className="h-11 w-11 rounded-xl object-cover ring-1 ring-black/5 dark:ring-white/10"
                  width={44}
                  height={44}
                />
                <span className="text-xl font-bold tracking-tight text-black dark:text-white">
                  Artisan<span className="text-primary">Systems</span>
                </span>
              </Link>
              <p className="mb-8 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                Building intelligent automations, agentic workflows, and
                AI-powered solutions that help businesses scale smarter.
              </p>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-body-color/60 dark:text-body-color-dark/60">
                Follow us
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/artisansystems/posts/?feedView=all"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-stroke-stroke/30 bg-white text-body-color transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white dark:border-stroke-dark/30 dark:bg-dark dark:text-body-color-dark dark:hover:border-primary dark:hover:bg-primary dark:hover:text-white"
                >
                  <svg width="18" height="18" viewBox="0 0 17 16" className="fill-current">
                    <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/ArtisanSystems"
                  aria-label="X (Twitter)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-stroke-stroke/30 bg-white text-body-color transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white dark:border-stroke-dark/30 dark:bg-dark dark:text-body-color-dark dark:hover:border-primary dark:hover:bg-primary dark:hover:text-white"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" className="fill-current">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* ─── Quick Links ─── */}
          <div className="w-1/2 sm:w-1/3 lg:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h3 className="mb-8 text-xs font-semibold uppercase tracking-widest text-black dark:text-white">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-sm text-body-color transition-colors duration-200 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-body-color transition-colors duration-200 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-body-color transition-colors duration-200 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* ─── Services ─── */}
          <div className="w-1/2 sm:w-1/3 lg:w-3/12">
            <div className="mb-12 lg:mb-16">
              <h3 className="mb-8 text-xs font-semibold uppercase tracking-widest text-black dark:text-white">
                Services
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/#features" className="text-sm text-body-color transition-colors duration-200 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                    Intelligent Automations
                  </Link>
                </li>
                <li>
                  <Link href="/#features" className="text-sm text-body-color transition-colors duration-200 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                    Agentic Workflows
                  </Link>
                </li>
                <li>
                  <Link href="/#features" className="text-sm text-body-color transition-colors duration-200 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/#features" className="text-sm text-body-color transition-colors duration-200 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                    AI/ML Research
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* ─── Legal ─── */}
          <div className="w-1/2 sm:w-1/3 lg:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h3 className="mb-8 text-xs font-semibold uppercase tracking-widest text-black dark:text-white">
                Legal
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-sm text-body-color transition-colors duration-200 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm text-body-color transition-colors duration-200 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ─── Bottom bar ─── */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="py-8">
          <p className="text-center text-sm text-body-color dark:text-body-color-dark">
            &copy; {new Date().getFullYear()} Artisan Systems. All rights reserved.
          </p>
        </div>
      </div>

      {/* ─── Decorative glow ─── */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />
    </footer>
  );
};

export default Footer;
