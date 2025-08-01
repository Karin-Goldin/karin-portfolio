import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl rounded-2xl shadow-lg"
            : "w-full"
        } h-20 z-[100] bg-gradient-to-r from-white to-orange-200`}
      >
        <div className="w-full h-full flex justify-around items-center px-4">
          {/* Logo */}
          <div className="text-black text-3xl font-bold">
            <Link
              to="home"
              smooth={true}
              duration={800}
              offset={-100}
              className="text-amber-800 drop-shadow-[0_0_10px_rgba(109,67,0,0.5)] cursor-pointer"
              onClick={handleMenuClose}
            >
              Karin Goldin
            </Link>
          </div>

          {/* Desktop Navigation */}
          <NavLinks onItemClick={handleMenuClose} />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-black text-2xl z-[101]"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-opacity-50 z-[90]"
          onClick={handleMenuClose}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 w-64 h-screen bg-gradient-to-r from-white to-orange-200 z-[95] transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-24">
          <NavLinks isMobile onItemClick={handleMenuClose} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
