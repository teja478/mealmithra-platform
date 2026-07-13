"use client";

import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#262626] text-white">

      {/* Orange Accent */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-green-500 to-orange-500" />

      {/* Background Glow */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold">
              Meal<span className="text-orange-400">Mithra</span>
            </h2>

            <p className="mt-6 leading-8 text-neutral-300">
              Healthy, hygienic and homely office lunches delivered across
              Hyderabad with care.
            </p>

            <div className="mt-8 flex gap-4">

  <a
    href="https://instagram.com/mealmithra_hyd"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-white/10 p-3 transition-all duration-300 hover:bg-pink-600 hover:scale-110"
  >
    <FaInstagram size={20} />
  </a>

  <a
    href="https://www.linkedin.com/in/karthik-bathula-b25bb1336?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-white/10 p-3 transition-all duration-300 hover:bg-blue-600 hover:scale-110"
  >
    <FaLinkedin size={20} />
  </a>

  <a
    href="https://wa.me/919063362219"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-white/10 p-3 transition-all duration-300 hover:bg-green-600 hover:scale-110"
  >
    <FaWhatsapp size={20} />
  </a>

</div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white text-lg">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4 text-neutral-300">

              {[
                "Home",
                "Why MealMithra",
                "Plans",
                "Gallery",
                "FAQ",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="group inline-flex items-center gap-2 transition hover:text-green-400"
                  >
                    {item}
                    <ArrowUpRight
                      size={15}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex gap-3">
                <Phone className="text-orange-400" size={18} />
                <span className="text-neutral-300">
                  +91 9063362219
                </span>
              </div>

              <div className="flex gap-3">
                <Mail className="text-green-400" size={18} />
                <span className="text-neutral-300">
                  mealmithra@gmail.com
                </span>
              </div>

              <div className="flex gap-3">
                <MapPin className="text-orange-400" size={18} />
                <span className="text-neutral-300">
                  Hyderabad, Telangana
                </span>
              </div>

            </div>
          </div>

          {/* Service */}
          <div>
            <h3 className="font-semibold text-lg">
              Service Areas
            </h3>

            <div className="mt-6 flex flex-wrap gap-3">

              {[
                "Madhapur",
                "HITEC City",
                "Gachibowli",
                "Financial District",
                "Kondapur",
              ].map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-white/10 px-4 py-2 text-sm text-green-300"
                >
                  {area}
                </span>
              ))}

            </div>
          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-4 text-sm text-neutral-400">

          <p>
            © 2026 MealMithra. All rights reserved.
          </p>


        </div>

      </div>
    </footer>
  );
}