import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <header className="body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center border-1 border-b border-gray-200">
        <div className="w-full mx-auto flex items-center justify-between p-3">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">NANPEC</span>
          </a>
          <button className="text-white inline-flex items-center bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded text-base mt-4 md:mt-0">
            Login
          </button>
        </div>

        <Navbar />
      </div>
    </header>
  );
};

export default Header;
