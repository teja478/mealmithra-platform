"use client";

import { Star, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sneha",
    company: "The Cutting Edge Design Studio",
    location: "Hyderabad",
    review:
      "Both vegetarian and non-vegetarian meals are delicious and have a wonderful home-style taste. Thank you for providing such flavorful meals to our employees. We truly appreciate your efforts.",
  },
  {
    name: "Keerthi",
    company: "Softsol",
    location: "Madhapur",
    review:
      "The food truly felt like a home-cooked meal. The quality and hygiene were evident from the fresh rotis, and the chicken was clearly fresh rather than frozen. It made a huge difference.",
  },
  {
    name: "Arif",
    company: "Firstsource",
    location: "Hyderabad",
    review:
      "The food was really tasty and brought the feeling of home right into the office. Thank you MealMithra!",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-b from-white to-[#F8FFF8] py-28"
    >
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-200/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-green-200/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            CUSTOMER STORIES
          </span>

          <h2 className="mt-8 text-5xl font-bold text-neutral-900">
            Loved by professionals across
            <span className="text-orange-600"> Hyderabad.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Every meal is prepared with the same care we'd serve our own family.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: .3 }}
              className="group rounded-3xl border border-orange-100 bg-white p-8 shadow-lg transition-all hover:shadow-2xl"
            >
              <div className="mb-6 flex text-orange-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="leading-8 text-neutral-600">
                "{item.review}"
              </p>

              <div className="mt-8 flex items-center justify-between">

                <div>
                  <h4 className="font-bold text-neutral-900">
                    {item.name}
                  </h4>

                  <p className="text-sm text-neutral-500">
                    {item.company}
                  </p>

                  <p className="text-sm text-neutral-500">
                    {item.location}
                  </p>
                </div>

                <BadgeCheck
                  className="text-green-600"
                  size={30}
                />

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}