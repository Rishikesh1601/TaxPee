import React from "react";
import '../ITR_Filing/itr.first.component.css';
import { Link } from "react-router-dom";
import {
    ArrowLeftIcon
  
  } from '@heroicons/react/24/outline'

const AddressForm = () => {
    return(
        <>
        <div>
         
        </div>
        <div className="flex flex-col justify-center items-center takeitdown">
            <div class="flex">
                <Link to={"/basicForm"}>
                < ArrowLeftIcon className="w-8 h-8 arrowlefticonedit addressarrowicon"/>
                </Link>
                <h1 className="titlepan text-4xl addressTitle">Address</h1>
            </div>
        </div>
        <div class="flex flex-col items-center justify-center h-screen heightChanges">
        <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6 maxWidthChanges">
    
        <form class="flex flex-col px-5 py-5">

        <div className="flex gap-4">
            <div className="w-full">
            <label for="flat" class="block text-sm font-medium text-gray-700">Flat / Door / Building</label>
            <input id="flat" name="flat" type="text" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>
            <div className="w-full">
            <label for="village" class="block text-sm font-medium text-gray-700">Premises / Village</label>
            <input id="village" name="village" type="text" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>
            <div className="w-full">
            <label for="road" class="block text-sm font-medium text-gray-700">Road</label>
            <input id="road" name="road" type="text" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>
            <div className="w-full">
            <label for="area" class="block text-sm font-medium text-gray-700">Area</label>
            <input id="area" name="area" type="text" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>
        </div>
        <div class="flex gap-4 mt-5">
            <div className="w-full">
            <label for="pincode" class="block text-sm font-medium text-gray-700">Pincode</label>
            <input id="pincode" name="pincode" type="number" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>
            <div className="w-full">
            <label for="country" class="block text-sm font-medium text-gray-700">Country</label>
            <input id="country" name="country" type="text" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>
            <div className="w-full">
            <label for="State" class="block text-sm font-medium text-gray-700">State</label>
            <input id="State" name="State" type="text" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>
            <div className="w-full">
            <label for="city" class="block text-sm font-medium text-gray-700">City</label>
            <input id="city" name="city" type="text" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>   
         </div>   
        <div class="flex gap-4 mt-5">
            <div className="w-1/2">
            <label for="employecategory" class="block text-sm font-medium text-gray-700">Employer Category</label>
            <input id="employecategory" name="employecategory" type="text" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>    
        </div>   
        </form>
        </div>
        </div>

        <div className="flex items-center justify-center nichekbtns mt-5">
        <div className="flex gap-4 w-1/2 mt-5">
            <Link to={"/eCA"} className="w-full">
            <button type="submit" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150 w-full">
                GET CA
            </button>
            </Link>
            <Link to={"/salaryForm"} className="w-full">
            <button type="submit" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150 w-full">
                Continue
            </button>
            </Link>
        </div>
        </div>

        </>
    )
}

export default AddressForm;