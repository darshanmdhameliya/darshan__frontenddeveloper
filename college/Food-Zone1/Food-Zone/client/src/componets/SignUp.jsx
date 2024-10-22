import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from './store/auth';

export function SignUp() {
  const [user, setUser] = useState({
    username:'',
    email:'',
    password:'',
  });

  const navigate = useNavigate();

  const {storeTokenInLS} = useAuth();

  const handleInput = (e)=>{
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]:value,
    })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/auth/register",{
        method: "POST",
        headers: {
          'Content-Type':'application/json',
        },
        body: JSON.stringify(user),
      });

      const resData = await response.json();
      console.log("data=",resData);

      if(response.ok){
        storeTokenInLS(resData.token);
        alert("registration successful")
        setUser({username:'',email:'',phone:'',password:'',})
        navigate('/')
      }else{
        alert(resData.extraDetails?resData.extraDetails:resData.message)
      }

    } catch (error) {
      console.log("register", error);
      
    }
    
  }

  return (
    <>

      <section>
        <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md border-4 hover:border-indigo-200 bg-[#171717] hover:bg-[black] text-white rounded-lg p-6 shadow-2xl">
            <h2 className="text-3xl font-bold leading-tight  ">
              Sign up to create account
            </h2>
            <p className="mt-2 text-base">
              Already have an account?{' '}
              <NavLink
                to="/Login"
                className="font-bold transition-all duration-200 hover:underline"
              >
                Login
              </NavLink>
            </p>
            <form onSubmit={handleSubmit} className="mt-8 ">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-base font-medium">
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border-2 border-red-500 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                      type="text"
                      placeholder="Full Name"
                      name='username' 
                      id="name"
                      value={user.name}
                      onChange={handleInput}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="text-base font-medium text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border-2 border-green-500 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                      type="email"
                      name='email' 
                      placeholder="Email"
                      id="email"
                      value={user.email}
                      onChange={handleInput}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="password" className="text-base font-medium text-gray-900">
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border-2 border-yellow-500 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                      type="password"
                      name='password' 
                      placeholder="Password"
                      id="password"
                      value={user.password}
                      onChange={handleInput}
                      required
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-gray-800 transition-all duration-300 "
                  >
                    Create Account <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

    </>
  )
}


export default SignUp


