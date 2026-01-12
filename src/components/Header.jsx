import React, { useState } from "react";
import { Link , NavLink } from "react-router-dom";

import logo from "../files/logo.jpg"
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header(){
  const [display1 , changedisplay1] = useState(false) ;
  const [display2 , changedisplay2] = useState(false) ;

  const togglecourse=() =>{
    changedisplay1(prev => !prev);
    changedisplay2(false);
  }

  const toggleadd=()=>{
    changedisplay2(prev => !prev);
    changedisplay1(false);
  }

  const off =()=>{
    changedisplay1(false)
    changedisplay2(false)
  }

  const [menuOpen, setMenuOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const [admissionOpen, setAdmissionOpen] = useState(false);

  const closeAll = () => {
    setMenuOpen(false);
    setCourseOpen(false);
    setAdmissionOpen(false);
  };

    return (
        <>
          <div className="lg:hidden sticky top-0 z-50 bg-fuchsia-800 shadow-md">
        <div className="flex justify-between items-center px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-lg p-1">
              <img src={logo} alt="Logo" className="h-10" />
            </div>
            <span className="text-white font-bold text-sm">
              Bachpan – The Little Kingdom
            </span>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {menuOpen && (
          <div className="bg-white px-4 py-4 space-y-3 text-gray-800">
            <Link to="/" onClick={closeAll} className="block font-semibold">Home</Link>
            <Link to="/about" onClick={closeAll} className="block font-semibold">About Us</Link>

            {/* Courses Accordion */}
            <button
              className="flex justify-center  w-full font-semibold"
              onClick={() => setCourseOpen(!courseOpen)}
            >
              Our Courses ▾
            </button>
            {courseOpen && (
              <div className="pl-4 text-sm flex flex-row gap-2">
                <div className="px-1 shadow-emerald-950 bg-fuchsia-200 rounded-lg">
                  <Link to="/courses/playgroup" onClick={closeAll} >Play Group </Link>
                </div>

                <div className="px-1 shadow-emerald-950 bg-fuchsia-200  rounded-lg">
                  <Link to="/courses/nursery" onClick={closeAll}>Kindergarten</Link>
                </div>

                <div className="px-1 shadow-emerald-950 bg-fuchsia-200  rounded-lg">
                  <Link to="/courses/primary" onClick={closeAll}>Primary</Link>
                </div>
                
              </div>
            )}

            {/* Admission Accordion */}
            <button
              className="flex justify-center w-full font-semibold"
              onClick={() => setAdmissionOpen(!admissionOpen)}
            >
              Admission ▾
            </button>
            {admissionOpen && (
              <div className="pl-4 space-y-2 text-sm">

                <div className="px-1 shadow-emerald-950 bg-fuchsia-200 rounded-lg">
                  <Link to="/admission/process" onClick={closeAll} >Admission Process </Link>
                </div>

                <div className="px-1 shadow-emerald-950 bg-fuchsia-200 rounded-lg">
                  <Link to="https://btlk.scientificstudy.in/online/admissionenquiry?key=btlk&tab=admissionenquiry" onClick={closeAll}>Admission Enquiry</Link>
                </div> 

                <div className="px-1 shadow-emerald-950 bg-fuchsia-200 rounded-lg">
                  <Link to="https://btlk.scientificstudy.in/online/registration?key=btlk&tab=registration" onClick={closeAll}>Register Online</Link>
                </div>               
              </div>
            )}

            <Link to="/gallery" onClick={closeAll} className="block font-semibold">Gallery</Link>
            <Link to="/contact" onClick={closeAll} className="block font-semibold">Contact Us</Link>
            <Link to="https://jobs.scientificstudy.in/career?schoolcode=btlk" onClick={closeAll} className="block font-semibold">Career</Link>
          </div>
        )}
      </div>




        {/* for desktop screen */}


        <div className="hidden lg:block sticky top-0 z-50">
        <header className="w-full shadow-2xl " >
        <div className="bg-white text-fuchsia-800 p-1.5  ">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between ">
          {/* RIGHT: Contact + Buttons */}
          <div className="flex flex-row gap-10 md:gap-0 pr-5">
            <div className="text-sm ">
              <p className="flex gap-2">
                E-mail Id –{" "}
                <span className="font-semibold">
                  bachpangumla@gmail.com
                </span>
                Phone No.{" "}
                <span className="font-semibold">
                  +91-9608881888
                </span>
              </p>
            </div>

            <div className="flex  text-l font-semibold align-bottom text-base gap-3 justify-end pl-25">
              <Link to="https://btlk.scientificstudy.in/payment?key=btlk">
              <button className="relative z-0 rounded  transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:text-white after:bg-blue-200 after:transition-[all_0.5s_ease]  hover:after:w-full ">💳 ONLINE FEE
                </button>
              </Link>
                
              <Link to="https://btlk.scientificstudy.in/login">
              <button className="relative z-0 rounded transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-blue-200 after:transition-[all_0.5s_ease]  hover:after:w-full ">🎧 SCHOOL PORTAL LOGIN
                </button>
              </Link>
              <Link to="https://btlk.scientificstudy.in/admissionregistration?key=btlk">
              <button className="relative z-0 rounded   transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-blue-200    after:transition-[all_0.5s_ease]  hover:after:w-full ">🧾 ONLINE REGISTRATION 
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>


    {/* NAV BAR */}
     <div className=" w-full flex flex-row bg-fuchsia-800 shadow-l px-2 py-1 sticky z-50 top-0 justify-between shadow-gray-700 ">
      <div className="flex items-center gap-4">
            <div className="bg-white rounded-xl ">
              <img
                src={logo}
                alt="Bachpan Logo"
                className="h-20 w-auto"
              />
            </div>

            <div>
              <h1 className="text-xl font-bold text-white">
                Bacphan, The Little Kingdom
              </h1>
            </div>
      </div>
      <nav className=" mx-auto  shadow-lg px-4 py-2 sticky z-50 top-0 mt-4  bg-fuchsia-800 align-middle">
      <ul className="flex justify-center gap-8 text-white font-semibold">

        <li>
          <Link to="/" className="hover:underline" onClick={()=>{off()}}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/about" className="hover:underline" onClick={()=>{off()}}>
            About Us
          </Link>
        </li>

        {/* DROPDOWN */}
        <li className="relative group cursor-pointer">
          <button className="hover:underline" onClick={()=> {togglecourse()}}>
            Our Courses ▾
          </button>

          {/* Dropdown menu */}
          {display1 && (
            <ul className="absolute left-0 top-full mt-2  group-hover:block bg-white text-gray-700 rounded-lg shadow-lg w-48 z-50">
            <li>
              <Link
                to="/courses/playgroup"
                className="block px-4 py-2 hover:bg-pink-100 rounded-t-lg"
                onClick={()=> {togglecourse()}}
              >
                Play Group
              </Link>
            </li>
            <li>
              <Link
                to="/courses/nursery"
                className="block px-4 py-2 hover:bg-pink-100"
                onClick={()=> {togglecourse()}}
              >
                Kindergarten
              </Link>
            </li>
            <li>
              <Link
                to="/courses/primary"
                className="block px-4 py-2 hover:bg-pink-100 rounded-b-lg"
                onClick={()=> {togglecourse()}}
              >
                Primary School
              </Link>
            </li>
          </ul>
          )}
        </li>

        {/* DROPDOWN 2 */}
        <li className="relative group cursor-pointer">
        <span className="hover:underline" onClick={()=>toggleadd()} >
            Admission ▾
          </span>

          {display2  &&(
            <ul className="absolute left-0 top-full mt-2  group-hover:block bg-white text-gray-700 rounded-lg shadow-lg w-48 z-50">
            <li>
              <Link
              onClick={()=>toggleadd()}
                to="/admission/process"
                className="block px-4 py-2 hover:bg-indigo-100 rounded-t-lg"
              >
                Admission Process
              </Link>
            </li>

            <li>
              <Link
                to="https://btlk.scientificstudy.in/online/admissionenquiry?key=btlk&tab=admissionenquiry"
                className="block px-4 py-2 hover:bg-indigo-100 rounded-b-lg"
                onClick={()=>{off()}}
              >
                Admission Enquiry
              </Link>
            </li>
            <li>
              <Link
                to="https://btlk.scientificstudy.in/online/registration?key=btlk&tab=registration"
                onClick={()=>{off()}}
                className="block px-4 py-2 hover:bg-indigo-100 rounded-b-lg"
              >
                Register Online
              </Link>
            </li>
          </ul>
          )}
        </li>

        <li>
          <Link to="/gallery" className="hover:underline" onClick={()=>{off()}}>
            Gallery
          </Link>
        </li>

        <li>
          <Link to="/contact" className="hover:underline" onClick={()=>{off()}}>
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="https://jobs.scientificstudy.in/career?schoolcode=btlk" className="hover:underline" onClick={()=>{off()}}>
            Career
          </Link>
        </li>

      </ul>
    </nav>  
     </div>
      </div>
    
    </>
    );
}
