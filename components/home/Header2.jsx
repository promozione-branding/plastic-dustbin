
"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { FaWhatsappSquare } from "react-icons/fa";
import Link from "next/link";
import { categories } from "@/Data";
import Enquiry from "@/components/Enquiry";
import TranslateButton from "../GoogleTranslate";
import { usePathname } from "next/navigation";

export default function Header2() {
  const pathname = usePathname();

  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileNavOpen(false);
    setMobileProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileNavOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileNavOpen]);

  const menuItems = [
    { label: "Home", link: "/" },
    { label: "About Us", link: "/about-us" },
    { label: "Products", link: "/products", hasCategories: true },
    { label: "Blogs", link: "/blogs" },
    { label: "Contact Us", link: "/contact-us" },
  ];

  const translateToHindi = () => {
    const select = document.querySelector(".goog-te-combo");

    if (select) {
      select.value = "hi";
      select.dispatchEvent(new Event("change"));
    }
  };

  if (pathname === "/inquiry") return null;

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-[9999] w-full transition-all duration-300 ${
          scrolled ? "shadow-lg bg-white" : "bg-white"
        }`}
      >
        <div className="w-full mx-auto lg:grid lg:grid-cols-[220px_1fr] xl:grid-cols-[260px_1fr]">

          {/* LOGO SECTION */}
          <div className="flex min-h-[68px] sm:min-h-[80px] items-center justify-between bg-green-800 px-3 sm:px-5 lg:px-3">

            <Link
              href="/"
              className="flex min-w-0 flex-col items-start"
            >
              <Image
                src="/logo.webp"
                width={210}
                height={100}
                alt="Logo"
                priority
                className="h-auto w-[125px] sm:w-[165px] lg:w-[185px] xl:w-[205px] object-contain"
              />

              <p className="mt-0.5 text-[7px] sm:text-[9px] text-white leading-tight">
                AN ISO 9001:2015 CERTIFIED COMPANY
              </p>
            </Link>

            {/* MOBILE ACTIONS */}
            <div className="flex shrink-0 items-center gap-2 lg:hidden">

              <button
                onClick={translateToHindi}
                className="rounded-md bg-red-500 px-2.5 py-2 text-[11px] sm:text-sm font-semibold text-white active:scale-95"
              >
                हिंदी में देखें
              </button>

              <button
                onClick={() => setMobileNavOpen(true)}
                aria-label="Open navigation menu"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-white/20"
              >
                <Menu size={27} />
              </button>
            </div>
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden overflow-visible border-b border-l border-white lg:block">

            {/* TOP STRIP */}
            <div className="border-b border-white bg-green-800">
              <div className="flex w-full flex-col gap-3 px-4 py-2 md:flex-row md:items-center md:justify-between xl:px-6">

                <div className="flex min-w-0 flex-wrap items-center justify-center gap-3 xl:gap-8">
                  <span className="animate-pulse text-center font-serif text-sm font-bold leading-snug text-white lg:text-base xl:text-lg">
                    India's Only Integrated Waste Management Products Manufacturer
                  </span>
                </div>

                <div className="flex shrink-0 items-center justify-center gap-3">

                  <Link
                    href="https://wa.me/918810422935?text=Hi%20Polywell%2C%20I%20need%20the%20wholesale%20price%20list%20and%20catalog%20for%20your%20dustbins.%20Please%20share%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 whitespace-nowrap font-medium text-white"
                  >
                    <span className="animate-pulse text-sm lg:text-base">
                      Whatsapp Now
                    </span>

                    <FaWhatsappSquare className="h-7 w-7 text-white xl:h-9 xl:w-9" />
                  </Link>

                  <button
                    onClick={translateToHindi}
                    className="whitespace-nowrap rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-600"
                  >
                    हिंदी में देखें
                  </button>
                </div>
              </div>
            </div>

            {/* MAIN NAV */}
            <nav className="relative flex min-h-[68px] items-center overflow-visible bg-green-800">
              <div className="flex w-full items-center justify-between gap-4 px-4 xl:px-6">

                <ul className="flex flex-wrap items-center gap-4 text-base font-medium text-white xl:gap-8 xl:text-lg">

                  {menuItems.map((item, idx) => (
                    <li
                      key={idx}
                      className="relative z-50"
                      onMouseEnter={() =>
                        item.hasCategories && setOpenMenu("Products")
                      }
                      onMouseLeave={() => setOpenMenu(null)}
                    >
                      <Link
                        href={item.link}
                        className="flex items-center gap-1 whitespace-nowrap transition-colors hover:text-white/60"
                      >
                        {item.label}

                        {item.hasCategories && <ChevronDown size={14} />}
                      </Link>

                      {item.hasCategories && openMenu === "Products" && (
                        <div className="absolute left-0 top-full z-[99999] max-h-[400px] w-72 overflow-y-auto rounded-lg border-2 border-green-800 bg-white shadow-2xl">
                          {categories.map((cat) => (
                            <Link
                              key={cat.id}
                              href={`/categories/${cat.id}`}
                              className="block px-4 py-3 text-green-800 hover:bg-gray-100"
                            >
                              {cat.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>

                {/* CALL + QUOTE */}
                <div className="hidden shrink-0 items-center gap-5 xl:flex">

                  <div className="whitespace-nowrap text-right text-white">
                    <span className="block text-sm font-semibold">
                      Call us on:
                    </span>

                    <a
                      href="tel:+918810422935"
                      className="text-lg font-bold"
                    >
                      +91-8810422935
                    </a>
                  </div>

                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="whitespace-nowrap rounded-full bg-green-600 px-5 py-2 font-semibold text-white hover:bg-green-700"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>

        {/* MOBILE DRAWER */}
        {mobileNavOpen && (
          <div
            className="fixed inset-0 z-[10000] bg-black/60 backdrop-blur-[2px] lg:hidden"
            onClick={() => setMobileNavOpen(false)}
          >
            <div
              className="absolute right-0 top-0 flex h-full w-[88%] max-w-[380px] flex-col bg-white shadow-2xl sm:w-[360px]"
              onClick={(e) => e.stopPropagation()}
            >

              {/* DRAWER HEADER */}
              <div className="flex items-center justify-between bg-green-800 px-5 py-5">

                <Link
                  href="/"
                  onClick={() => setMobileNavOpen(false)}
                >
                  <Image
                    src="/logo.webp"
                    width={180}
                    height={80}
                    alt="Logo"
                    className="h-auto w-[145px] object-contain"
                  />
                </Link>

                <button
                  onClick={() => setMobileNavOpen(false)}
                  aria-label="Close navigation menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25"
                >
                  <X size={25} />
                </button>
              </div>

              {/* MENU CONTENT */}
              <div className="flex-1 overflow-y-auto px-5 py-7">

                <p className="mb-5 text-xs font-bold uppercase tracking-[2px] text-gray-400">
                  Main Navigation
                </p>

                <ul className="space-y-1 text-base font-semibold text-gray-800">

                  {menuItems.map((item, idx) => (
                    <li key={idx} className="border-b border-gray-100">

                      {!item.hasCategories ? (
                        <Link
                          href={item.link}
                          onClick={() => setMobileNavOpen(false)}
                          className="flex items-center justify-between py-4 transition-colors hover:text-green-700"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <>
                          <div className="flex items-center justify-between">

                            <Link
                              href={item.link}
                              onClick={() => setMobileNavOpen(false)}
                              className="flex-1 py-4 hover:text-green-700"
                            >
                              {item.label}
                            </Link>

                            <button
                              onClick={() =>
                                setMobileProductsOpen(!mobileProductsOpen)
                              }
                              aria-label="Toggle product categories"
                              aria-expanded={mobileProductsOpen}
                              className="flex h-11 w-11 items-center justify-center rounded-lg hover:bg-green-50"
                            >
                              <ChevronDown
                                size={20}
                                className={`transition-transform duration-300 ${
                                  mobileProductsOpen ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                          </div>

                          {mobileProductsOpen && (
                            <div className="mb-4 ml-2 max-h-[300px] space-y-1 overflow-y-auto rounded-xl bg-gray-50 p-3">

                              {categories.map((cat) => (
                                <Link
                                  key={cat.id}
                                  href={`/categories/${cat.id}`}
                                  onClick={() => setMobileNavOpen(false)}
                                  className="block rounded-lg px-3 py-3 text-sm font-medium text-gray-600 transition hover:bg-green-100 hover:text-green-800"
                                >
                                  {cat.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      )}
                    </li>
                  ))}
                </ul>

                {/* ACTION BUTTONS */}
                <div className="mt-8 space-y-3 border-t border-gray-100 pt-6">

                  <a
                    href="tel:+918810422935"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-700 py-3.5 font-semibold text-white transition hover:bg-green-800"
                  >
                    Call Now
                  </a>

                  <button
                    onClick={() => {
                      setIsFormOpen(true);
                      setMobileNavOpen(false);
                    }}
                    className="w-full rounded-xl border border-green-700 bg-white py-3.5 font-semibold text-green-800 transition hover:bg-green-50"
                  >
                    Get a Quote
                  </button>

                  <Link
                    href="https://wa.me/918810422935"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3.5 font-semibold text-white"
                  >
                    <FaWhatsappSquare size={21} />
                    WhatsApp Us
                  </Link>
                </div>
              </div>

              {/* DRAWER FOOTER */}
              <div className="border-t border-gray-100 px-5 py-4">
                <p className="text-center text-xs text-gray-400">
                  AN ISO 9001:2015 CERTIFIED COMPANY
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ENQUIRY MODAL */}
        {isFormOpen && (
          <Enquiry
            isOpen={isFormOpen}
            onClose={() => setIsFormOpen(false)}
          />
        )}

        <TranslateButton />
      </header>
    </>
  );
}
