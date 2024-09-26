import React, { useState, useEffect, useRef } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll"; // เปลี่ยนชื่อ Link เป็น ScrollLink
import { Link as RouterLink } from "react-router-dom"; // เปลี่ยนชื่อ Link เป็น RouterLink
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { clearUser } from "../../reduxs/reducers/userReduce";
import api from "../../utils/api";
import barber1 from "../../assets/MainImage/barber1.png"
import imageProfile from "../../assets/MainImage/profile.png";
import { toast } from "react-toastify";

const Navbar = ({ user }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && imgRef.current) {
        if (
          !menuRef.current.contains(e.target) &&
          !imgRef.current.contains(e.target)
        ) {
          setOpen(false);
        }
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    navigate("/login_member");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { link: "Home", path: "hero" },
    { link: "Services", path: "services" },
    { link: "Stadium", path: "stadium" },
  ];

  const Logout = async () => {
    try {
      const res = await api.post(`/logout`);
      dispatch(clearUser());
      navigate("/mainpage");
      // toast.success("ออกจากระบบสำเร็จ");
      setTimeout(() => {
        window.location.reload(); // รีเฟรชหน้าเว็บหลังจาก delay
      }, 100);
    } catch (error) {
      console.log(error?.response?.data?.message);
    }
  };

  return (
    <>
      <nav className="w-full flex bg-black justify-between items-center gap-1 lg:px-16 px-6 py-1 sticky top-0 z-50 ">
        <RouterLink to="/barbershop" className="flex justify-center items-center gap-2 ">
        <img src={barber1} alt="" className="w-12 uppercase" />
        <h1 className=" text-white md:text-4xl text-3xl font-bold font-ubuntu">
          Barber
          <span className=" text-orange-500/90">Shop</span>
        </h1>
        </RouterLink>

        {user === null ? (
          <button
            className="bg-orange-500/90 font-ubuntu hover:bg-white text-black px-4 py-2 rounded-full font-bold transform hover:scale-105 transition duration-300 cursor-pointer flex items-center justify-center md:mx-4"
            onClick={handleClick}
          >
            Login
          </button>
        ) : (
          <div className="relative items-center ml-8 sm:flex sm:gap-2">
            <button
              ref={imgRef} // อ้างอิงไปยัง imgRef
              onClick={() => setOpen(!open)}
              className="block h-10 w-10 rounded-full overflow-hidden border-2 border-orange-500 focus:outline-none focus:border-white"
            >
              <img
                src={imageProfile}
                alt=""
                className="h-full w-full object-cover"
              />
            </button>
            <span className="hidden lg:inline lg:text-white">{user.username}</span>

            {open && (
              <div
                ref={menuRef} // อ้างอิงไปยัง menuRef
                className="bg-white rounded-lg w-[160px] py-3 px-6 lg:mt-[12rem] ml-[-4rem] absolute text-start shadow-xl"
              >
                <div onClick={() => setOpen(false)}>
                  <RouterLink
                    to="/profile"
                    className="font-semibold block rounded-full px-2 py-2 text-gray-800 hover:bg-orange-500/90 hover:text-white"
                  >
                    Edit Profile
                  </RouterLink>
                  <RouterLink
                    to="/Bookinghis"
                    className="font-semibold block rounded-full px-2 py-2 text-gray-800 hover:bg-orange-500/90 hover:text-white"
                  >
                    My Booking
                  </RouterLink>
                  <button
                    onClick={Logout}
                    className="font-semibold block rounded-full px-2 py-2 text-gray-800 hover:bg-orange-500/90 hover:text-white w-full text-left"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Mobile Menu */}
        <div
          className="flex justify-center items-center lg:hidden mt-3"
          onClick={toggleMenu}
        >
          <div>
            {isMenuOpen ? (
              <FaXmark className="text-white text-3xl cursor-pointer" />
            ) : (
              <FaBars className="text-white text-3xl cursor-pointer" />
            )}
          </div>
        </div>
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex w-full h-fit bg-black p-4 absolute top-[72px] left-0`}
          onClick={closeMenu}
        >
          <ul className="flex flex-col justify-center items-center gap-2 w-full">
            {navItems.map(({ link, path }) => (
              <ScrollLink
                key={path}
                className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-limegreen hover:text-black w-full text-center"
                to={path}
                offset={-100}
                smooth={true}
              >
                {link}
              </ScrollLink>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
