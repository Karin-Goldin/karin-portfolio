import React from "react";
import { Link } from "react-scroll";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isContactBtn?: boolean;
  onClick?: () => void;
}

const links = [
  { name: "Home", section: "home" },
  { name: "About", section: "about" },
  { name: "Skills", section: "skills" },
  { name: "Experience", section: "experience" },
  { name: "Projects", section: "projects" },
  { name: "Contact", section: "contact", isContactBtn: true },
];

export const NavLink: React.FC<NavLinkProps> = ({
  children,
  href,
  isContactBtn = false,
  onClick,
}) => {
  if (isContactBtn) {
    return (
      <Link
        to={href.replace("#", "")}
        smooth={true}
        spy={true}
        duration={800}
        offset={-100}
        onClick={onClick}
        className="px-5 py-2 border-2 border-amber-800 rounded-full text-black hover:bg-amber-800 hover:text-white transition-all duration-200 font-medium cursor-pointer"
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      to={href.replace("#", "")}
      smooth={true}
      spy={true}
      duration={800}
      offset={-100}
      onClick={onClick}
      className="relative text-black text-lg font-medium hover:text-amber-800 transition-all duration-300 group cursor-pointer"
    >
      {children}
      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-800 transition-all duration-200 group-hover:w-full"></span>
    </Link>
  );
};

const NavLinks: React.FC<{ isMobile?: boolean; onItemClick?: () => void }> = ({
  isMobile = false,
  onItemClick,
}) => {
  if (isMobile) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        {links.map((item) => (
          <Link
            key={item.name}
            to={item.section}
            smooth={true}
            spy={true}
            duration={800}
            offset={-100}
            className="text-black text-2xl font-medium py-6 hover:text-amber-800 transition-colors duration-200"
            onClick={onItemClick}
          >
            {item.name}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="hidden md:flex gap-12 items-center">
      {links.map((item) => (
        <NavLink
          key={item.name}
          href={`#${item.section}`}
          isContactBtn={item.isContactBtn}
          onClick={onItemClick}
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};

export default NavLinks;
