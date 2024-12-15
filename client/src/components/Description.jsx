import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Description = () => {
  return (
    <motion.section
      className="container mx-auto px-4 py-16 md:py-24"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ delay: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Create AI Images
        </h1>
        <p className="text-xl text-gray-600">
          Turn your imagination into visuals
        </p>
      </div>
      <div className="flex flex-col sm:flex-row lg:flex-row items-center gap-12">
        <div className="lg:w-1/3 xl:w-1/4 w-1/2">
          <img
            src={assets.sample_img_1}
            alt="AI-generated image sample"
            className="w-full rounded-xl shadow-lg hover:shadow-3xl transition-shadow duration-300"
          />
        </div>
        <div className="lg:w-2/3 xl:w-3/4 space-y-6 w-2/3">
          <h2 className="stext-3xl md:text-4xl font-semibold text-gray-800 leading-tight">
            Introducing the AI-Powered Text to Image Generator
          </h2>
          <p className="text-lg text-gray-600">
            Easily bring your ideas to life with our free AI image generator.
            Whether you need stunning visuals or unique imagery, our tool
            transforms your text into eye-catching images with just a few
            clicks. Imagine it, describe it, and watch it come to life
            instantly.
          </p>
          <p className="text-lg text-gray-600">
            Simply type in a text prompt, and our cutting-edge AI will generate
            high-quality images in seconds. From product visuals to character
            designs and portraits, even concepts that don't yet exist can be
            visualized effortlessly. Powered by AI technology, the creative
            possibilities are limitless.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Description;
