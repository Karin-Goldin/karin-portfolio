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
  { name: "My Projects", section: "projects" },
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
        activeClass="!bg-amber-800 !text-white"
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
      activeClass="text-amber-800 after:w-full"
      className="relative text-black text-lg font-medium hover:text-amber-800 transition-all duration-300 group cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-amber-800 after:transition-all after:duration-200 hover:after:w-full"
    >
      {children}
    </Link>
  );
};

const NavLinks: React.FC<{ isMobile?: boolean; onItemClick?: () => void }> = ({
  isMobile = false,
  onItemClick,
}) => {
  if (isMobile) {
    return (
      <div className="flex flex-col px-6">
        {links.map((item) => (
          <Link
            key={item.name}
            to={item.section}
            smooth={true}
            spy={true}
            duration={500}
            offset={-80}
            className="text-amber-800 text-lg font-medium hover:text-amber-950 transition-colors duration-200 py-3 border-b border-amber-800/20 last:border-none"
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
