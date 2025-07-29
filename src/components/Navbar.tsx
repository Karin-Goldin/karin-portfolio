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

  const handleMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
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
          onClick={handleMenuToggle}
          className="md:hidden text-black text-2xl z-[101]"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed md:hidden top-0 left-0 right-0 h-[50vh] bg-gradient-to-r from-white/70 to-orange-200/70 backdrop-blur-sm z-[99] transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <NavLinks isMobile onItemClick={handleMenuClose} />
      </div>
    </nav>
  );
};

export default Navbar;
