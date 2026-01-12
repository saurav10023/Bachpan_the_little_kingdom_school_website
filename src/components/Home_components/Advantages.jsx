import React from "react";
import {
  FaBookOpen,
  FaRunning,
  FaChalkboardTeacher,
  FaPuzzlePiece,
  FaBullseye,
  FaBus
} from "react-icons/fa";
import { Baby, BookOpen, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import clip from "./files/clip-removebg-preview.png";

export default function Advantages() {
  return (
    <section className="bg-[#f6f4ff] py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-600">
            Our Advantages
          </h2>
          <p className="text-gray-600 mt-3">
            Why parents trust us for their child’s future
          </p>
        </div>

        {/* ADVANTAGES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          <AdvCard
            icon={<FaBookOpen />}
            title="Focused on Co-Curricular Activities"
            bg="bg-[#1a53ff]"
            border="border-[#1a53ff]"
          />

          <AdvCard
            icon={<FaRunning />}
            title="Boost Physical Activities"
            bg="bg-[#ffc107]"
            border="border-[#ffc107]"
          />

          <AdvCard
            icon={<FaChalkboardTeacher />}
            title="Effective Learning Experience"
            bg="bg-[#ff3300]"
            border="border-[#ff3300]"
          />

          <AdvCard
            icon={<FaPuzzlePiece />}
            title="Activity-Based Learning"
            bg="bg-[#00ff00]"
            border="border-[#00ff00]"
          />

          <AdvCard
            icon={<FaBullseye />}
            title="Learning-Centric Approach"
            bg="bg-[#ff0066]"
            border="border-[#ff0066]"
          />

          <AdvCard
            icon={<FaBus />}
            title="Comfortable Transport Service"
            bg="bg-[#8c1aff]"
            border="border-[#8c1aff]"
          />

        </div>
      </div>

      {/* ================= COURSES OFFERED (UNCHANGED) ================= */}
      <section className="bg-[#f6f4ff] py-16">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-15">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-700">
              Courses Offered
            </h2>
            <p className="text-gray-600 mt-3 mb-3 text-xl">
              Learning opportunities designed specifically for each stage of early education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <Link to="/courses/playgroup">
              <Card
                icon={<Baby size={48} />}
                title="Play Group"
                subtitle="Age Group 1.5+"
                text="The Play Group course offers a safe, playful environment that supports early learning and social development"
              />
            </Link>

            <Link to="/courses/nursery">
              <Card
                icon={<BookOpen size={48} />}
                title="Nursery • LKG • UKG"
                subtitle="Age-- Nursery-3+ • LKG-4+ • UKG-5+"
                text="Designed to build strong early learning foundations through age-appropriate activities, creativity, and guided play."
              />
            </Link>

            <Link to="/courses/primary">
              <Card
                icon={<GraduationCap size={48} />}
                title="Primary School"
                subtitle="Age-6+"
                text="A well-rounded primary program that builds strong academic foundations while nurturing curiosity, confidence, and character."
              />
            </Link>

          </div>
        </div>
      </section>
    </section>
  );
}
function AdvCard({ icon, title, bg, border }) {
  return (
    <div className="flex md:flex-col items-center md:text-center gap-4 md:gap-0 bg-white md:bg-transparent p-4 md:p-0 rounded-xl shadow md:shadow-none">

      {/* ICON */}
      <div
        className={`w-16 h-16 md:w-28 md:h-28 rounded-full ${bg} flex items-center justify-center shadow-lg p-3`}
      >
        <div className="text-white text-2xl md:text-4xl">
          {icon}
        </div>
      </div>

      {/* TEXT */}
      <div
        className={`md:mt-4 px-4 py-2 border-2 ${border} rounded-xl text-gray-800 font-medium bg-white shadow md:shadow`}
      >
        {title}
      </div>
    </div>
  );
}

function Card({ icon, title, subtitle, text }) {
  return (
    <div className="relative bg-white rounded-xl shadow-lg pt-14 pb-10 px-6 text-center transition hover:-translate-y-2 hover:shadow-2xl">

      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-6 bg-gray-900 rounded-md"></div>
      <div className="absolute -top-15 left-1/2 -translate-x-1/2 text-gray-700 text-2xl h-30 w-30 z-10">
        <img src={clip} alt="clip" />
      </div>

      <div className="absolute top-0 left-0 w-full h-2 bg-indigo-500 rounded-t-xl"></div>

      <div className="text-indigo-500 text-4xl mb-4 flex justify-center">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {title}
      </h3>

      <p className="text-sm font-bold text-gray-900 mb-3">
        {subtitle}
      </p>

      <p className="text-gray-600 text-sm leading-relaxed">
        {text}
      </p>
    </div>
  );
}

