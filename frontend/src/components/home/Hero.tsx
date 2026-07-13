import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

import FloatingCard from "./cards/FloatingCard";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FFFDF8]">

      {/* Background Glow */}
      {/* Green Glow */}
<div className="absolute -left-40 top-32 h-[500px] w-[500px] rounded-full bg-green-300/20 blur-[140px]" />

{/* Orange Glow */}
<div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-orange-300/20 blur-[140px]" />

      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 pt-28 pb-20 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
            <CheckCircle className="h-4 w-4" />
            Trusted by Hyderabad Professionals
          </div>

          <h1 className="text-5xl font-extrabold leading-tight text-neutral-900 lg:text-7xl">
            Dost jaisa care.
            <br />
            <span className="text-orange-600">
              Ghar jaisa khana.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-600">
            Healthy, hygienic and home-style meals delivered fresh to your
            workplace every day.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="#booking"
              className="rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white shadow-lg shadow-orange-200 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 hover:shadow-xl"
            >
              Book Your Plan
            </Link>

            <Link
              href="#plans"
              className="flex items-center gap-2 rounded-xl border border-green-200 bg-white px-7 py-4 font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:bg-green-50 hover:text-green-700"
            >
              View Plans
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative">

          <Image
            src="/images/hero/hero-office-lunch.png"
            alt="MealMithra Hero"
            width={900}
            height={700}
            priority
            className="rounded-[32px] shadow-2xl"
          />

          {/* Floating Cards */}

          <div className="absolute -left-10 top-16 hidden lg:block">
            <FloatingCard
              title="Happy Customers"
              value="500+"
            />
          </div>

          <div className="absolute -right-8 bottom-10 hidden lg:block">
            <FloatingCard
              title="Fresh Meals"
              value="10K+"
            />
          </div>

        </div>

      </div>

    </section>
  );
}