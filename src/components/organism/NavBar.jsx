import Logo from "../../assets/images/Logo.png";
import Hamburger from "../../assets/hamburger";
import { useState } from "react";
import CloseIcon from "../../assets/close";

const navLinks = [
  { text: "SERVICES", url: "/" },
  { text: "ABOUT US", url: "/" },
  { text: "CONTACT US", url: "/" },
  { text: "CAREERS", url: "/" },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <header
      className={`text-gray-600 body-font ${
        isOpen ? "bg-white" : "bg-[#6B3CC9]"
      }`}
    >
      <div className="container mx-auto flex p-5 justify-between items-center">
        <div className="w-[238.89px] h-[36.11px]">
          <img src={Logo} alt="logo" className=" bg-blend-overlay" />
        </div>
        <div className="block md:hidden " onClick={toggle}>
          {isOpen ? (
            <div className="absolute top-2 right-5 z-50 pt-5 pr-5">
              <CloseIcon />
            </div>
          ) : (
            <Hamburger />
          )}
        </div>
        <div className="hidden md:block">
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center ">
            {navLinks.map((link, index) => (
              <div
                key={index}
                href={link.url}
                className="mr-5 text-white cursor-pointer"
              >
                {link.text}
              </div>
            ))}
          </nav>
        </div>
      </div>
      {isOpen && (
        <div className="bg-white h-screen w-full absolute flex flex-col top-2 pt-5 pl-5">
          <div className="mb-[37.5px] text-[#100C08] font-medium text-sm cursor-pointer">
            HOME
          </div>
          <div className="flex flex-col gap-[32px]">
            {navLinks.map((link, index) => (
              <div
                key={index}
                href={link.url}
                className="mr-5 text-[#100C08] font-medium text-sm cursor-pointer "
              >
                {link.text}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar;
