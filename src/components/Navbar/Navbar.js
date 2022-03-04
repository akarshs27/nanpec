import React from "react";
import NavLink from "../common/NavLink";

const Navbar = () => {
  const homeOptions = ["Introduction", "Purpose", "Aim", "Objective", "Organization Structure",];
  const industryOptions = ["Public", "Private"];
  const nationalOptions = ["NEP 20", "NCF", "NCFTE"];
  const schoolOptions = ["Private", "Public"];
  const feedbackOptions = ["Pre - Service Teacher Feedback", "Novice Teacher Employer Feedback"];

  return (
    <div className="container mx-auto">
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <NavLink heading="Home" options={homeOptions} />
        <NavLink heading="Industry Demands" options={industryOptions} />
        <NavLink heading="National Educational Demands" options={nationalOptions} />
        <NavLink heading="School Demands" options={schoolOptions} />
        <a className="text-gray-600 text-base font-medium mr-5 hover:text-gray-900">Research Input</a>
        <NavLink heading="Feedback" options={feedbackOptions} />
        <a className="text-gray-600 text-base font-medium mr-5 hover:text-gray-900">Identification Gap</a>
        <a className="text-gray-600 text-base font-medium mr-5 hover:text-gray-900">Demands Forecast</a>
        <a className="text-gray-600 text-base font-medium mr-5 hover:text-gray-900">Services & Payment</a>
        <a className="text-gray-600 text-base font-medium mr-5 hover:text-gray-900">Contact & Feedback</a>
      </nav>
    </div>
  );
};

export default Navbar;
