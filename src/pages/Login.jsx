import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    
  

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <form >
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className=" text-center text-3xl font-extrabold text-gray-900">
                        Harris County Community
                        Services Department
                    </h2>
                </div>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Username
                                </label>
                                <div className="mt-1">
                                    <input id="email" name="email" type="text"  required
                                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Enter your username"                                               
                                         />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input id="password" name="password" type="password"  required
                                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Enter your password"                                      
                                        />
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <p><Link to='/register'>Register</Link></p>
                                </div>
                                <div className="text-sm">
                                    <Link to="/forgotPassword" className="font-medium text-blue-light hover:text-blue-dark">
                                        Forgot your password?
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <button type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-dark hover:bg-blue-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Login
                                </button>
                            </div>
                        </form>
                        <div className="mt-6">
                            <div className="relative">
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2  text-gray-500">
                                        Or continue with
                                    </span>
                                </div>
                            </div>
                            <div className="mt-6 grid grid-cols-4 gap-3">
                                <div>
                                    <a href="#"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                        <img className="h-8 w-8" src="/src/assets/linkedin.svg"
                                            alt="" />
                                    </a>
                                </div>
                                <div>
                                    <a href="#"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                        <img className="h-8 w-8" src="/src/assets/twitterx.svg"
                                            alt="" />
                                    </a>
                                </div>
                                <div>
                                    <a href="#"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                        <img className="h-8 w-8" src="/src/assets/facebook.svg"
                                            alt="" />
                                    </a>
                                </div>
                                <div>
                                    <a href="#"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                        <img className="h-8 w-8" src="/src/assets/google.svg"
                                            alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Login