import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ImgLogin from "../../assets/MainImage/background.jpg"
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useQueryClient } from "react-query";

const LoginMember = () => {
    //const [error, setError] = useState("");
    const queryClient = useQueryClient();
    const [Input, setInput] = useState({
        username: "",
        password: "",
    });
    const navigate = useNavigate();
    const handInput = (e) => {
        setInput((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handLogin = async (e) => {
        e.preventDefault();
        console.log("handLogin");
        const data = {
            email: Input.username,
            password: Input.password,
        };

        await api
            .post(`login-member`, data)
            .then(async (res) => {
                if (res.data.user.role === "member") {
                    toast.success("เข้าสู่ระบบสำเร็จ");
                    queryClient.invalidateQueries("userData");
                    navigate("/barbershop");
                    

                } else if(res.data.user.role !== "member" && res.data.user.role === "barber"){
                    toast.success("เข้าสู่ระบบสำเร็จ");
                    queryClient.invalidateQueries("userData");
                    navigate("/barbershop");
                } else if(res.data.user.role !== "member" && res.data.user.role === "mbarber"){
                    toast.success("เข้าสู่ระบบสำเร็จ");
                    queryClient.invalidateQueries("userData");
                    navigate("/barbershop");
                } else {
                    await api
                        .post('logout')
                        .then((res) => {
                            console.log("คุณไม่มีสิทธิ์เข้าสู่ระบบ");
                        })
                        .catch((error) => {
                            console.log(error.response.data.message);
                        });
                }
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        AOS.init({
            offset: 200,
            daration: 400,
            easing: "ease-in sine",
        });
    }, []);
    return (
        <div className="relativ  border-gray-900 text-white h-[100vh] flex justify-center items-center ">
            <img
                src={ImgLogin}
                alt=""
                className="absolute max-sm:w-[500px] max-sm:h-[500px] w-full h-[100vh] object-cover mix-blend-color-burn"
            />

            <div data-aos="fade-left" data-aos-delay="0">
                <div className="bg-orange-900/60  border-gray-800 rounded-md p-20 shadow-lg  sm:backdrop-blur-lg backdrop-blur-0   bg-opacity-20 relative">
                    <h1 className="text-4xl text-white font-bold text-center mb-10">
                        Login
                    </h1>
                    <form onSubmit={handLogin}>
                        <div className=" pb-2 relative my-6">
                            <input
                                type="text"
                                className="block w-72 py-2 px-1 text-md font-semibold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-gray-800 focus:outline-none focus:ring-0 focus:text-white focus:border-gray-800 peer"
                                placeholder=""
                                id="username"
                                onChange={handInput}
                            />
                            <label
                                htmlFor=""
                                className="absolute left-0 top-0 text-xm- font-semibold text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-100 peer-focus:dark:text-gray-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
                            >
                                Email :
                            </label>
                        </div>
                        <div className="relative my-6">
                            <input
                                type="password"
                                className="block w-72 py-2 text-md px-1 font-semibold text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-gray-800 focus:outline-none focus:ring-0 focus:text-white focus:border-gray-800 peer"
                                placeholder=""
                                id="password"
                                onChange={handInput}
                            />
                            <label
                                htmlFor=""
                                className="absolute left-0 top-0 text-xm font-semibold  text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-100 peer-focus:dark:text-gray-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
                            >
                                Password :
                            </label>
                        </div>
                        <div>
                            <div>
                                <input type="checkbox"/>
                                <label htmlFor="Remember Me" className="ml-2 ">
                                    Remember Me
                                </label>
                            </div>
                        </div>
                        <button
                            className="w-full mb-4  text-[18px] font-bold mt-6 rounded-full bg-white text-orange-900/70 hover:text-white hover:bg-orange-500/50 py-2  duration-200  transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
                            type="submit"
                            disabled={!Input.username || !Input.password}
                            onClick={handLogin}
                            
                        >
                            Sign In
                        </button>
                        {/* <button
                            className="w-full mb-4 text-[18px] font-bold mt-6 rounded-full bg-white text-emerald-800 hover:text-white hover:bg-emerald-400 py-2  duration-200  transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
                            type="submit"
                        >
                            Sign Barber
                        </button> */}
                        <div>
                            <span>
                                Not a member?{" "}
                                <Link
                                    to="/register_member"
                                    className="font-bold text-orange-300/70 hover:text-orange-400/70 duration-300 hover:text-sm"
                                >
                                    Create an Account{" "}
                                </Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

};

export default LoginMember;