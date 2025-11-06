import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const goToResume = () => {
    window.open(
      "https://drive.google.com/file/d/1WrK9ANOD8Q7IJIrXK0mEgNFbV0lpNQnP/view?usp=sharing"
    );
  };

  return (
    <div className="sticky top-0 z-50">
      <header className="relative z-20 ">
        <nav className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-black dark:to-gray-900 text-gray-700 dark:text-gray-300 transition-all duration-500  border dark:border-slate-700/70 rounded-lg px-4 py-3 shadow-md">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src="/images/fahad-3.jpg"
                alt="Logo"
                className="w-[50px] h-[40px] rounded-lg border-2 border-gray-500"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-7 text-[18px] font-semibold">
              <Link
                to="/"
                className="hover:text-[#8ec5ff] transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:text-[#8ec5ff] transition-colors duration-300"
              >
                About
              </Link>
              <Link
                to="/skills"
                className="hover:text-[#8ec5ff] transition-colors duration-300"
              >
                Skills
              </Link>
              <Link
                to="/projects"
                className="hover:text-[#8ec5ff] transition-colors duration-300"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="hover:text-[#8ec5ff] transition-colors duration-300"
              >
                Contact
              </Link>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4">
              <Button
                onClick={goToResume}
                variant="outline"
                className="hidden sm:inline-flex text-black dark:text-white"
              >
                Resume
              </Button>

              <span className="dark:text-white text-black">
                <ModeToggle />
              </span>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-md border border-gray-600 hover:bg-gray-700 transition"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-500 overflow-hidden ${
              isOpen ? "max-h-96 mt-4" : "max-h-0"
            }`}
          >
            <div className="flex flex-col gap-4 items-center bg-gray-800/60 rounded-lg py-4">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#8ec5ff] transition"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#8ec5ff] transition"
              >
                About
              </Link>
              <Link
                to="/skills"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#8ec5ff] transition"
              >
                Skills
              </Link>
              <Link
                to="/projects"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#8ec5ff] transition"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#8ec5ff] transition"
              >
                Contact
              </Link>

              <Button
                onClick={goToResume}
                className="bg-[#8ec5ff] text-white hover:bg-[#6eaaff]"
              >
                Resume
              </Button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
