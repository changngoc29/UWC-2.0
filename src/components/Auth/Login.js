import React, { useState } from "react";
import loginBg from "../../assets/img/login-background.jpg";
import google from "../../assets/img/google.png";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope, faEye } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [roleLoginForm, setRoleLoginForm] = useState("ADMIN");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();

    navigate("/admin");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="relative max-w-[80%] mt-[5rem] bg-white drop-shadow-lg border border-slate-200 mx-auto flex flex-row text-center py-4 pl-10 pr-10 lg:pr-4 rounded-md"
    >
      <div className="flex flex-col justify-evenly lg:w-[40%] flex-2 z-10 w-full py-3">
        <h1 className="text-[#263544] font-bold font-sans mb-3 text-[1.5rem]">
          {`${roleLoginForm} LOGIN`}
        </h1>
        <div className="flex items-center border-b-[1px] border-slate-300">
          <FontAwesomeIcon
            className="px-2 h-[20px] text-slate-400"
            icon={faEnvelope}
          />
          <input
            type="email"
            placeholder="Email"
            className="focus:outline-none py-2 pr-3 w-full"
            required
          />
        </div>
        <div className="flex items-center border-b-[1px] border-slate-300 mt-4">
          <FontAwesomeIcon
            className="px-2 pb-[6px] h-[20px] text-slate-400"
            icon={faLock}
          />
          <input
            type="password"
            placeholder="Password"
            className="focus:outline-none py-2 pr-3 w-full"
            required
          />
          <FontAwesomeIcon
            icon={faEye}
            className="px-2 h-[15px] text-slate-400 hover:cursor-pointer"
          />
        </div>
        <div className="flex justify-end mt-3 items-center">
          <input
            className="bg-[#263544] mt-[-1px]"
            type="checkbox"
            id="remember_me"
            name="remember"
          />
          <label htmlFor="remember_me" className="text-sm text-slate-500 pl-1">
            Remember me
          </label>
        </div>
        <button className="my-3 bg-[#263544] text-white rounded-md p-3 font-bold">
          Sign In
        </button>
        <p className="text-slate-500 text-sm">
          Sign in as another role?
          <span
            className="pl-1 text-[#263544] font-bold text-md hover:underline hover:cursor-pointer underline-offset-2"
            onClick={(e) => {
              setRoleLoginForm(`${e.target.childNodes[0].data.toUpperCase()}`);
            }}
          >
            {roleLoginForm === "ADMIN" && "JANITOR"}
            {roleLoginForm === "JANITOR" && "ADMIN"}
            {roleLoginForm === "COLLECTOR" && "JANITOR"}
          </span>
          <span className="px-1">or</span>
          <span
            className="text-[#263544] font-bold text-md hover:underline hover:cursor-pointer underline-offset-2"
            onClick={(e) => {
              setRoleLoginForm(`${e.target.childNodes[0].data.toUpperCase()}`);
            }}
          >
            {roleLoginForm === "ADMIN" && "COLLECTOR"}
            {roleLoginForm === "JANITOR" && "COLLECTOR"}
            {roleLoginForm === "COLLECTOR" && "ADMIN"}
          </span>
        </p>
        <div className="mt-3 border-t border-t-gray-200"></div>
        <span className="py-3 font-bold text-gray-400 text-md">OR</span>
        <div className="bg-white p-3 border border-gray-200 rounded-md flex items-center justify-center cursor-pointer">
          <img src={google} alt="google" className="w-[24px]" />
          <span className="text-[#263544] px-2 font-bold">
            Sign in with google
          </span>
        </div>
      </div>
      <div className="lg:w-[60%] lg:block hidden">
        <img src={loginBg} alt="login background" />
      </div>
    </form>
  );
};

export default Login;
