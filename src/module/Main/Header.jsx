import { useState } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link } from "react-scroll";
import barber1 from "../../assets/MainImage/barber1.png";
import { useNavigate } from 'react-router-dom';
export default function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login_member');
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const navItems = [
    {link: "Home", path: "hero"},
    {link: "Services", path: "services"},
    {link: "About",path: "about"},
  ];
  return (
    <nav className=" w-full flex bg-black justify-between items-center gap-1 lg:px-16 px-6 py-1 sticky top-0 z-50">
      <div className="flex justify-center items-center gap-2">
        <img src={barber1} alt="" className="w-12 uppercase" />
        <h1 className=" text-white md:text-4xl text-3xl font-bold font-ubuntu">
          Barber
          <span className=" text-limegreen italic">Shop</span>
        </h1>
      </div>

      <ul className=" lg:flex justify-center items-center gap-8 hidden">
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            className=" text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-limegreen hover:text-black font-ubuntu text-[15px]"
            to={path}
            spy={true}
            offset={-100}
            smooth={true}
          >
            {link}
          </Link>
        ))}
      </ul>
      <button className=" bg-limegreen font-ubuntu hover:bg-white text-black px-8 py-2 rounded-full font-bold transform hover:scale-105 transition duration-300 cursor-pointer md:flex hidden" onClick={handleClick}>
        Login
      </button>
      {/* Mobile Menu */}
      <div
        className=" flex justify-center items-center lg:hidden mt-3"
        onClick={toggleMenu}
      >
        <div>
          {isMenuOpen ? (
            <FaXmark className=" text-white text-3xl cursor-pointer" />
          ) : (
            <FaBars className=" text-white text-3xl cursor-pointer" />
          )}
        </div>
      </div>
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex w-full h-fit bg-black p-4 absolute top-[72px] left-0`}
        onClick={closeMenu}
      >
        <ul className=" flex flex-col justify-center items-center gap-2 w-full">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-limegreen hover:text-black w-full text-center"
              to={path}
              offset={-100}
              smooth={true}
            >
              {link}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}
