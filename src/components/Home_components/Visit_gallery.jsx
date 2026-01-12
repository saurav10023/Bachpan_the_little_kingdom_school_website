import React from "react";
import { Link } from "react-router-dom";
import img1 from "./files/sarhul.jpg";
import img2 from "./files/playgroup.jpg";
import img3 from "./files/flaggirl.jpg";
import img4 from "./files/eating.jpg";

export default function VisitGallery() {
  return (
    <section className="bg-[#f6f4ff] py-10 mb-10 mt-10 rounded-3xl shadow-lg shadow-blue-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Let your <span className="text-indigo-500">children</span> <br />
            learn from the best.
          </h2>

          <p className="text-gray-600 mt-5 max-w-lg">
            Discover a joyful learning environment where children grow
            academically, socially, and emotionally through creativity
            and care.
          </p>

          <p className="text-gray-700 mt-3 font-medium">
            👉 Take a look, relive the moments, and see what makes Our School so unique.
          </p>

          <div className="flex gap-4 mt-8">
            <Link
              to="/gallery"
              className="px-6 py-3 bg-indigo-500 text-white rounded-lg font-semibold shadow hover:bg-orange-600 transition"
            >
              Visit Gallery
            </Link>

            <a
              href="tel:+919608881888"
              className="px-6 py-3 border border-indigo-500 text-indigo-600 rounded-lg font-semibold hover:bg-orange-100 transition"
            >
              📞 Contact Us
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE GRID (IMPROVED DESKTOP ALIGNMENT) */}
        <div className="grid grid-cols-2 gap-4 md:gap-6">

          {/* Image 1 */}
          <img
            src={img1}
            alt="Student activity"
            className="rounded-2xl shadow-lg 
                       h-40 sm:h-48 md:h-56 
                       w-full object-cover"
          />

          {/* Image 2 */}
          <img
            src={img2}
            alt="Happy child"
            className="rounded-2xl shadow-lg 
                       h-40 sm:h-48 md:h-64 
                       w-full object-cover self-end"
          />

          {/* Image 3 */}
          <img
            src={img3}
            alt="Learning activity"
            className="rounded-2xl shadow-xl 
                       h-32 sm:h-40 md:h-48 
                       w-full object-cover"
          />

          {/* Image 4 */}
          <img
            src={img4}
            alt="Creative class"
            className="rounded-2xl shadow-lg 
                       h-40 sm:h-48 md:h-48
                       w-full object-cover self-start"
          />

        </div>

      </div>
    </section>
  );
}
