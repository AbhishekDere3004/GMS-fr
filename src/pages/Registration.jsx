import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Registration = () => {

  const [inputs , setInputs]=useState({
    firstName:'',
    LastName:'',
    Email:''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    // After form submission logic (e.g., API call) you can redirect
    // For now, we'll simulate a successful submission with a redirect
    history.push('/setPassword');
    alert("Please check your email inbox for a link to complete the password setup."); // Optional: inform the user
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className=" text-center text-3xl font-extrabold text-gray-900">
          Harris County Community
          Services Department
        </h2>
        <h1 className="mt-8 text-center text-3xl font-extrabold text-gray-500">
          Register
        </h1>
      </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <form onSubmit={handleSubmit}>
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="space-y-6" >
              <div>
                <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <div className="mt-1">
                  <input id="FirstName" name="FirstName" type="text"  required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Enter your first name" 
                    value={inputs.firstName}
                    onChange={(e)=>setInputs({...inputs, firstName:e.target.value})}/>
                </div>
              </div>

              <div>
                <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <div className="mt-1">
                  <input id="LastName" name="LastName" type="text"  required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Enter your Last name"
                    value={inputs.LastName}
                    onChange={(e)=> setInputs({...inputs , LastName:e.target.value})}
                     />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input id="email" name="email" type="email"  required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Enter your email address"
                    value={inputs.Email}
                    onChange={(e)=> setInputs({...inputs , Email:e.target.value})} />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">

                </div>


              </div>

              <div>
                <button type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-dark hover:bg-blue-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Sign Up
                </button>
              
              </div>
            </div>
          </div>
      </form>
        </div>

    </div>
  );
};

export default Registration;
