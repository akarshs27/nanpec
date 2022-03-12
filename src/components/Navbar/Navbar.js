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
        <NavLink type="dropdown" text="Home" options={homeOptions} />
        <NavLink type="dropdown" text="Industry Demands" options={industryOptions} />
        <NavLink type="dropdown" text="National Educational Demands" options={nationalOptions} />
        <NavLink type="dropdown" text="School Demands" options={schoolOptions} />        
        <NavLink type="link" text="School Demands" />        
        <NavLink type="link" text="Research Input" />        
        <NavLink type="dropdown" text="Feedback" options={feedbackOptions} />
        <NavLink type="link" text="Identification Gap" />
        <NavLink type="link" text="Demands Forecast" />
        <NavLink type="link" text="Services & Payment" />
        <NavLink type="link" text="Contact & Feedback" />
      </nav>
    </div>
  );
};

export default Navbar;
