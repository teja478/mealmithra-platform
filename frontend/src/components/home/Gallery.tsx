"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/images/gallery/gallery1.jpg",
  "/images/gallery/gallery2.jpg",
  "/images/gallery/gallery3.jpg",
  "/images/gallery/gallery4.jpg",
  "/images/gallery/gallery5.jpg",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-28 bg-gradient-to-b from-white to-orange-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
            Gallery
          </span>

          <h2 className="text-5xl font-bold mt-6">
            Fresh meals.
            <br />
            <span className="text-orange-600">
              Happy Professionals.
            </span>
          </h2>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Every meal is freshly prepared with premium ingredients and
            delivered directly to your workplace.
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-5">

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="col-span-12 md:col-span-6 row-span-2"
          >
            <Image
              src={images[0]}
              alt=""
              width={900}
              height={900}
              className="rounded-3xl object-cover h-full shadow-xl"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="col-span-12 md:col-span-3"
          >
            <Image
              src={images[1]}
              alt=""
              width={500}
              height={500}
              className="rounded-3xl shadow-xl w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="col-span-12 md:col-span-3"
          >
            <Image
              src={images[2]}
              alt=""
              width={500}
              height={500}
              className="rounded-3xl shadow-xl w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="col-span-12 md:col-span-3"
          >
            <Image
              src={images[3]}
              alt=""
              width={500}
              height={600}
              className="rounded-3xl shadow-xl w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="col-span-12 md:col-span-3"
          >
            <Image
              src={images[4]}
              alt=""
              width={500}
              height={600}
              className="rounded-3xl shadow-xl w-full h-full object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}