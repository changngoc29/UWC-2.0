import React from "react";
import loginBg from "../../assets/img/login-background.jpg";
import google from "../../assets/img/google.png";

const Login = () => {
  return (
    <form className="relative max-w-[80%] mt-[5rem] bg-white drop-shadow-lg border border-slate-200 mx-auto flex flex-row text-center p-4 rounded-md lg:gap-10 gap-0">
      <div className="absolute lg:w-[40%] h-full bg-[#5B45FF] top-[0] left-[0] z-0 rounded-tl-md rounded-bl-md w-full"></div>
      <div className="flex flex-col justify-center lg:w-[40%] flex-2 z-10 w-full">
        <input
          type="email"
          placeholder="Email"
          className="focus:outline-none p-3 border border-slate-300 rounded-md"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="focus:outline-none p-3 border border-slate-300 mt-[20px] rounded-md"
          required
        />
        <button className="my-[20px] bg-[#0A284A] text-white rounded-md p-3 font-bold">
          Sign In
        </button>
        <span className="text-[#0A284A] font-bold hover:underline cursor-pointer underline-offset-2">
          Need an account?
        </span>
        <div className="mt-[20px] border-t border-t-gray-200"></div>
        <span className="py-4 font-bold text-gray-400 text-md">OR</span>
        <div className="bg-white p-3 border border-gray-200 rounded-md flex items-center justify-center cursor-pointer">
          <img src={google} alt="google" className="w-[24px]" />
          <span className="px-2 font-bold">Sign in with google</span>
        </div>
      </div>
      <div className="lg:w-[60%] lg:block hidden">
        <h1 className="font-bold text-2xl w-full text-[#2d385e]">
          UWC 2.0 - Urban Waste Collection 2.0
        </h1>
        <img src={loginBg} alt="login background" />
      </div>
    </form>
  );
};

export default Login;
