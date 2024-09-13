import React from 'react'
import { ArrowRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export function SignUp() {
  return (
    <>

      <section>
        <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md border-4 border-black rounded-lg p-6 shadow-2xl">
            <h2 className="text-3xl font-bold leading-tight  ">
              Sign up to create account
            </h2>
            <p className="mt-2 text-base text-gray-600 ">
              Already have an account?{' '}
              <NavLink
                to="/Login"
                className="font-bold transition-all duration-200 hover:underline"
              >
                Sign In
              </NavLink>
            </p>
            <form action="#" method="POST" className="mt-8 ">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-base font-medium text-gray-900">
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border-2 border-red-500 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Full Name"
                      id="name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="text-base font-medium text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border-2 border-green-500 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      id="email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="password" className="text-base font-medium text-gray-900">
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border-2 border-yellow-500 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      id="password"
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