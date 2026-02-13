"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);

  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => setSticky(window.scrollY >= 80);

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  });

  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: number) =>
    setOpenIndex(openIndex === index ? -1 : index);

  const currentPath = usePathname();

  return (
    <header
      className={`header top-0 left-0 z-40 flex w-full items-center transition-all duration-500 ${
        sticky
          ? "fixed z-9999 border-b border-white/10 bg-white/80 shadow-sm backdrop-blur-xl dark:border-white/5 dark:bg-gray-dark/80"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container">
        <div className="relative flex items-center justify-between">
          {/* ─── Logo ─── */}
          <div className="shrink-0">
            <Link
              href="/"
              className={`header-logo flex items-center gap-3 transition-all ${
                sticky ? "py-4 lg:py-3" : "py-8"
              }`}
            >
              <Image
                src="/images/logo/Artisan_logo.jpg"
                alt="Artisan Systems"
                width={40}
                height={40}
                className="h-10 w-10 rounded-xl object-cover ring-1 ring-black/5 dark:ring-white/10"
              />
              <span className="text-xl font-bold tracking-tight text-black dark:text-white">
                Artisan<span className="text-primary">Systems</span>
              </span>
            </Link>
          </div>

          {/* ─── Nav + Actions ─── */}
          <div className="flex items-center gap-8">
            {/* Mobile toggle */}
            <button
              onClick={navbarToggleHandler}
              id="navbarToggler"
              aria-label="Mobile Menu"
              className="ring-primary absolute top-1/2 right-4 block -translate-y-1/2 rounded-lg p-2 focus:ring-2 lg:hidden"
            >
              <span
                className={`relative my-1.5 block h-0.5 w-[26px] rounded-full bg-black transition-all duration-300 dark:bg-white ${
                  navbarOpen ? "top-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`relative my-1.5 block h-0.5 w-[26px] rounded-full bg-black transition-all duration-300 dark:bg-white ${
                  navbarOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`relative my-1.5 block h-0.5 w-[26px] rounded-full bg-black transition-all duration-300 dark:bg-white ${
                  navbarOpen ? "top-[-8px] -rotate-45" : ""
                }`}
              />
            </button>

            {/* Nav */}
            <nav
              id="navbarCollapse"
              className={`navbar absolute right-0 z-30 w-[250px] rounded-xl border border-stroke-stroke/50 bg-white px-6 py-4 shadow-lg duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:shadow-none lg:opacity-100 dark:border-stroke-dark/50 dark:bg-dark ${
                navbarOpen
                  ? "visibility top-full opacity-100"
                  : "invisible top-[120%] opacity-0"
              }`}
            >
              <ul className="block lg:flex lg:items-center lg:gap-10">
                {menuData.map((menuItem, index) => (
                  <li key={index} className="group relative">
                    {menuItem.path ? (
                      <Link
                        href={menuItem.path}
                        className={`flex py-2 text-[15px] font-medium tracking-wide transition-colors duration-200 lg:inline-flex lg:py-6 ${
                          currentPath === menuItem.path
                            ? "text-primary"
                            : "text-dark/80 hover:text-primary dark:text-white/70 dark:hover:text-white"
                        }`}
                      >
                        {menuItem.title}
                      </Link>
                    ) : (
                      <>
                        <p
                          onClick={() => handleSubmenu(index)}
                          className="flex cursor-pointer items-center gap-1 py-2 text-[15px] font-medium tracking-wide text-dark/80 transition-colors duration-200 group-hover:text-primary lg:inline-flex lg:py-6 dark:text-white/70 dark:group-hover:text-white"
                        >
                          {menuItem.title}
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 25 24"
                            className="transition-transform duration-200 group-hover:rotate-180"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                              fill="currentColor"
                            />
                          </svg>
                        </p>
                        <div
                          className={`submenu relative top-full left-0 rounded-xl border border-stroke-stroke/30 bg-white/95 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[230px] lg:p-3 lg:opacity-0 lg:shadow-xl lg:group-hover:visible lg:group-hover:top-full dark:border-stroke-dark/30 dark:bg-dark/95 ${
                            openIndex === index ? "block" : "hidden"
                          }`}
                        >
                          {menuItem.submenu?.map((submenuItem, i) => (
                            <Link
                              href={submenuItem.path}
                              key={i}
                              className="block rounded-lg px-4 py-2.5 text-sm font-medium text-dark/80 transition-all duration-200 hover:bg-primary/5 hover:text-primary dark:text-white/70 dark:hover:bg-primary/10 dark:hover:text-white"
                            >
                              {submenuItem.title}
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3 pr-14 lg:pr-0">
              <Link
                href="/contact"
                className="group relative hidden overflow-hidden rounded-full bg-gradient-to-r from-primary to-[#6366f1] px-7 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 md:inline-flex"
              >
                <span className="relative z-10">Contact Us</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[#6366f1] to-primary transition-transform duration-500 group-hover:translate-x-0" />
              </Link>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
