import React from "react";
import '../ITR_Filing/itr.first.component.css';
import { Link } from "react-router-dom";
import {
    ArrowLeftIcon
  
  } from '@heroicons/react/24/outline'

const PANForm = () => {
    return(
        <>
        <div>
         
        </div>
        <div className="flex flex-col justify-center items-center takeitdown">
            <div class="flex">
                <Link to={"/form16"}>
                < ArrowLeftIcon className="w-8 h-8 arrowlefticonedit"/>
                </Link>
                <h1 className="titlepan text-4xl">ENTER YOUR PAN DETAILS</h1>
            </div>
        </div>
        <div class="flex flex-col items-center justify-center h-screen heightChanges">
        <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6 maxWidthChanges">
    
        <form class="flex flex-col px-5 py-5">

        <div className="flex gap-4">
            <div className="w-full">
            <label for="financialYear" class="block text-sm font-medium text-gray-700">Financial Year</label>
            <select id="financialYear" name="financialYear" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option value="" disabled selected>Select Financial Year</option>
                <option value="2022-2023">2020-2021</option>
                <option value="2023-2024">2021-2022</option>
                <option value="2024-2025">2022-2023</option>
            </select>
            </div>
            <div className="w-full">
            <label for="panNumber" class="block text-sm font-medium text-gray-700">PAN Number</label>
            <input id="panNumber" name="panNumber" type="text" placeholder="Enter PAN Number" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>
        </div>
        <div class="mt-5 w-1/2 widthlessbyone">
            
        <label for="dob" class="block text-sm font-medium text-gray-700">Date of Birth</label>
        <input id="dob" name="dob" type="date" placeholder="Select Date of Birth" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
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
            <Link to={"/basicForm"} className="w-full">
            <button type="submit" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150 w-full">
                Continue
            </button>
            </Link>
        </div>
        </div>

        </>
    )
}

export default PANForm;