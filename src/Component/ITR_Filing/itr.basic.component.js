import React from "react";
import '../ITR_Filing/itr.first.component.css';
import { Link } from "react-router-dom";
import {
    ArrowLeftIcon
  
  } from '@heroicons/react/24/outline'

const BasicForm = () => {
    return(
        <>
        <div>
         
        </div>
        <div className="flex flex-col justify-center items-center takeitdown">
            <div class="flex">
                <Link to={"/panForm"}>
                < ArrowLeftIcon className="w-8 h-8 arrowlefticonedit"/>
                </Link>
                <h1 className="titlepan text-4xl">ENTER YOUR BASIC DETAILS</h1>
            </div>
        </div>
        <div class="flex flex-col items-center justify-center h-screen heightChanges">
        <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6 maxWidthChanges">
    
        <form class="flex flex-col px-5 py-5">

        <div className="flex gap-4">
            <div className="w-full">
            <label for="firstName" class="block text-sm font-medium text-gray-700">First Name</label>
            <input id="firstName" name="firstName" type="text" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>
            <div className="w-full">
            <label for="middleName" class="block text-sm font-medium text-gray-700">Middle Name</label>
            <input id="middleName" name="middleName" type="text" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>
            <div className="w-full">
            <label for="lastName" class="block text-sm font-medium text-gray-700">Last Name</label>
            <input id="lastName" name="lastName" type="text" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>
        </div>
        <div class="flex gap-4 mt-5">
            <div className="w-full">
            <label for="mobile" class="block text-sm font-medium text-gray-700">Mobile Number</label>
            <input id="mobile" name="mobile" type="number" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>
            <div className="w-full">
            <label for="email" class="block text-sm font-medium text-gray-700">Email ID</label>
            <input id="email" name="email" type="email" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>
            <div className="flex w-full">
            <label for="male" class="block text-sm font-medium text-gray-700">Gender</label>
            <div className="flex mt-5 genderFlex">
            <div class="flex mt-5">
            <input type="radio" id="male" name="gender" value="male" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"></input>
            <label for="male" class="ml-2 block text-sm text-gray-900">Male</label>
            </div>
            <div class="flex mt-5 ms-4">
            <input type="radio" id="female" name="gender" value="female" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"></input>
            <label for="female" class="ml-2 block text-sm text-gray-900">Female</label>
            </div>
            </div>
            </div>
         </div>   
        </form>
        </div>
        </div>

        <div className="flex items-center justify-center nichekbtns">
        <div className="flex gap-4 w-1/2">
            <Link to={"/eCA"} className="w-full">
            <button type="submit" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150 w-full">
                GET CA
            </button>
            </Link>
            <Link to={"/addressForm"} className="w-full">
            <button type="submit" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150 w-full">
                Continue
            </button>
            </Link>
        </div>
        </div>

        </>
    )
}

export default BasicForm;