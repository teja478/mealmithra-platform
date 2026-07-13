"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

import Container from "@/components/common/Container";
import { BRAND } from "@/constants/brand";

const navLinks = [
  { label: "Why MealMithra", href: "#why" },
  { label: "Plans", href: "#plans" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-xl shadow-md border-b border-neutral-200"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-20 items-center justify-between">

          {/* Logo */}

          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-orange-600"
          >
            {BRAND.name}
          </Link>

          {/* Desktop */}

          <div className="hidden lg:flex items-center gap-8">

            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[15px] font-medium text-neutral-700 transition-all duration-200 hover:text-orange-600"
              >
                {item.label}
              </a>
            ))}

            <a href="#booking">
            <button
              className="
              rounded-xl
              bg-orange-600
              px-6
              py-3
              text-white
              font-semibold
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-xl
              hover:bg-orange-500
            "
            >
              Book Now
            </button></a>

          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

        </nav>

        {/* Mobile Menu */}

        {mobileOpen && (
          <div className="lg:hidden rounded-2xl bg-white shadow-xl p-6 mb-5">

            <div className="flex flex-col gap-5">

              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-medium"
                >
                  {item.label}
                </a>
              ))}

              <button
                className="
                rounded-xl
                bg-orange-600
                py-3
                text-white
                font-semibold
              "
              >
                Book Now
              </button>

            </div>

          </div>
        )}

      </Container>
    </header>
  );
}