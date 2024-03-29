import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData]= useState({email:"", password:""})
  const navigate= useNavigate();
  const handleLogin=async(e)=>{
    e.preventDefault();
    console.log(loginData);

    try {
      const res=await axios.post("http://localhost:5000/api/v1/users/login",
      loginData,
      {
        headers:{
          "Content-Type":"application/json"
        },
        withCredentials:true,
      });

      if(res.status!=200){
        throw new Error("Something went Wront in Login!!");
      }
      alert(res.data.message);
      navigate('/');
    } catch (error) {
      alert(error.response.message);
      console.log(error);
    }
  }
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full lg:w-1/2 flex justify-center items-center p-2 border-2 shadow-sm shadow-white bg-white bg-opacity-15 backdrop-blur-2xl rounded-lg">
        <form onSubmit={handleLogin} className="w-full flex flex-col gap-y-4 p-2 ">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" value={loginData.email} onChange={(e)=>{setLoginData({...loginData,email:e.target.value})}} placeholder="Email" />
          </label>
{/*           
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" className="grow" placeholder="Username" />
          </label> */}

          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input type="password" className="grow" value={loginData.password} onChange={(e)=>{setLoginData({...loginData,password:e.target.value})}} placeholder="password" />
          </label>

          <input type="submit" className="btn w-full p-2 text-white bg-blue-800 hover:bg-blue-900" value="Login"/>
        </form>
      </div>
    </div>
  );
};

export default Login;
