import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'react-toastify';


const Login = () => {
  const [showPassword,setShowPassword] = useState(false)
  const [data,setData] = useState(
    {
      email :"",
      password : ""
    }
  )  
  const handleOnChange = (e) =>{
    const {name, value} = e.target
    setData((preve)=>{
      return{
         ...preve,
         [name] : value,
      }
    })
  }
const handleSubmit =async(e) =>{
  e.preventDefault()
  const dataResponse = await fetch(SummaryApi.signIn.url,{
    method : SummaryApi.signIn.method,
    header : {
      "content-type" : "application/json"
    },
    body : JSON.stringify(data)
  })
  const dataApi = await dataResponse.json()

  if(dataApi.success){
    toast.success(dataApi.message)
  }
  if(dataApi.error){
    toast.error(dataApi.message)
  }
}
console.log("data-login",data)

  return (
    <section id="login">
      <div className="mx-auto container px-4 pt-8 ">
        <div className="bg-gray-800 p-2 w-full max-w-sm mx-auto"> 
          <div className='text-center text-red-100'>Login</div>
          <form action="" className="pt-6" onSubmit={handleSubmit}>
            <div className="grid">
              <label className='text-red-100'>Email : </label>
              <div className="bg-slate-200 p-2">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  value={data.email}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div>
              <label className='text-red-100'>Password : </label>
              <div className="bg-slate-200 p-2 flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password"
                  name="password"
                  value={data.password}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer"
                  onClick={() => setShowPassword((preve) => !preve)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
              <Link
                to="/forgot-password"
                className="block w-fit ml-auto text-red-300
                hover:underline hover:text-red-600"
              >
                Forgot Password
              </Link>
            </div>
            <button className="bg-yellow-600 text-white py-2 px-2 w-full rounded-full hover:scale-110 transition-all max-w-[150px] mx-auto block mt-6">
              Login
            </button>
          </form>
          <p className="py-5 text-red-100">
            Don't have account?{" "}
            <Link
              to="/sign-up"
              className="text-yellow-600 hover:text-yellow-700 hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}


export default Login