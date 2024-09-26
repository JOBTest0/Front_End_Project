import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ImgLogin from "../../assets/MainImage/background.jpg"
//import React from 'react';
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";


const RegisterMember = () => {

    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phonNumber, setPhonNumber] = useState('');
    const [address, setAddress] = useState('');
    const [location, setLocation] = useState('');
    //const [img, setImg] = useState([]);
    //const [base64, setBase64] = useState('');

    const navigate = useNavigate();

    const handleFile = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                //setBase64(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    //console.log(base64);
    const handRegister = async (e) => {
        e.preventDefault();
        console.log("handRegister");
        const data = {
            email: email,
            password: password,
            username: name,
            phone: phonNumber,
            address: address,
            location: location,
            //Fileimg:base64,
            role: role
        };

        try {
            await api.post(`/register-member`, data)
                .then(async (res) => {
                    alert("สมัครสำเร็จ");
                    navigate("/login_member");

                })
        } catch (e) {
            console.log(e);
        }
    }



    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 400,
            easing: "ease-in-sine",
        });
    }, []);

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    // const handleFileChange = (event) => {
    //   const file = event.target.files[0];
    //   console.log("Selected file:", file);
    //   setImg(file);   
    // };
    // console.log("Fileimg =>",img);

    return (
        <div className="relativ border-gray-900 text-white h-[100vh] flex justify-center items-center ">
            <img
                src={ImgLogin}
                alt=""
                className="absolute max-sm:w-[500px] max-sm:h-[500px] w-full h-[100vh] object-cover mix-blend-color-burn"
            />
            <div data-aos="fade-left" data-aos-delay="0" className="">
                <div className="bg-orange-900/60  border-gray-400 rounded-md sm:px-[85px] sm:py-[40px] px-[50px] shadow-lg sm:backdrop-blur-lg backdrop-blur-1 bg-opacity-20 relative">
                    <h1 className="text-4xl text-white font-bold text-center mb-10">
                        Register
                    </h1>
                    <form>
                        <div className="pb-2 relative my-6">
                            <input
                                type="email"
                                className="block w-72 py-2 px-1 text-md font-semibold text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-gray-800 focus:outline-none focus:ring-0 focus:text-white focus:border-gray-800 peer"
                                placeholder=""
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-0 top-0 text-xm font-semibold text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-100 peer-focus:dark:text-gray-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
                            >
                                Email :
                            </label>
                        </div>
                        <div className="relative my-6">
                            <input
                                type="password"
                                className="block w-72 py-2 text-md px-1 font-semibold text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-gray-800 focus:outline-none focus:ring-0 focus:text-white focus:border-gray-800 peer"
                                placeholder=""
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label
                                htmlFor="password"
                                className="absolute left-0 top-0 text-xm font-semibold text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-100 peer-focus:dark:text-gray-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
                            >
                                Password :
                            </label>
                        </div>
                        <div className="pb-2 relative my-6">
                            <input
                                type="text"
                                className="block w-72 py-2 px-1 text-md font-semibold text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-gray-800 focus:outline-none focus:ring-0 focus:text-white focus:border-gray-800 peer"
                                placeholder=""
                                required
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label
                                htmlFor="name"
                                className="absolute left-0 top-0 text-xm font-semibold text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-100 peer-focus:dark:text-gray-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
                            >
                                Name :
                            </label>
                        </div>
                        <div className="pb-2 relative my-6">
                            <input
                                type="phone"
                                className="block w-72 py-2 px-1 text-md font-semibold text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-gray-800 focus:outline-none focus:ring-0 focus:text-white focus:border-gray-800 peer"
                                placeholder=""
                                required
                                onChange={(e) => setPhonNumber(e.target.value)}
                            />
                            <label
                                htmlFor="phone"
                                className="absolute left-0 top-0 text-xm font-semibold text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-100 peer-focus:dark:text-gray-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
                            >
                                Phone Number :
                            </label>
                        </div>


                        {role === 'barber' && (
                            <>
                              
                            </>
                        )}

                        {role === 'mbarber' && (
                            <>
                               
                            </>
                        )}

                        <div className="relative my-6">
                            <label className="block flex left-0 text-md font-semibold text-white mb-2">
                                Role:
                            </label>
                            <div className="flex gap-4">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="role"
                                        value="member"
                                        checked={role === 'member'}
                                        onChange={handleRoleChange}
                                        className="form-radio text-emerald-400"
                                    />
                                    <span className="ml-2">Member</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="role"
                                        value="barber"
                                        checked={role === 'barber'}
                                        onChange={handleRoleChange}
                                        className="form-radio text-emerald-400"
                                    />
                                    <span className="ml-2">Barber</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="role"
                                        value="mbarber"
                                        checked={role === 'mbarber'}
                                        onChange={handleRoleChange}
                                        className="form-radio text-emerald-400"
                                    />
                                    <span className="ml-2">mBarber</span>
                                </label>

                            </div>
                        </div>

                        <button
                            className="w-full mb-4 text-[18px] font-bold mt-6 rounded-full bg-white text-orange-900/70 hover:text-white hover:bg-orange-500/50 py-2 duration-200 transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
                            type="submit"
                            onClick={handRegister}
                        >
                            Register
                        </button>
                        <div>
                            <span>
                                Already Create an Account?{" "}
                                <Link
                                    to="/login_member"
                                    className="font-bold text-orange-300/70 hover:text-orange-400/70 duration-300 hover:text-sm"
                                >
                                    Login{" "}
                                </Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default RegisterMember;

