import React from "react";
import '../ITR_Filing/itr.first.component.css';
import { Link } from "react-router-dom";
import {
    ArrowLeftIcon
  
  } from '@heroicons/react/24/outline'

const BankDetailsForm = () => {
    return(
        <>
        <div>
         
        </div>
        <div className="flex flex-col justify-center items-center takeitdown">
            <div class="flex">
                <Link to={"/deductionForm"}>
                < ArrowLeftIcon className="w-8 h-8 arrowlefticonedit"/>
                </Link>
                <h1 className="titlepan text-4xl">ENTER YOUR BANK & AADHAR DETAILS</h1>
            </div>
        </div>
        <div class="flex flex-col items-center justify-center pt-11 h-screen heightChanges">
        <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6 maxWidthChanges">
    
        <form class="flex flex-col px-5 py-5">

        <div className="flex gap-4">
            <div className="">
            <h3 className="text-xl">Bank Details</h3>
            </div>
        </div>
        
        <div className="flex">
            <div className="flex gap-4">
            <div className="w-full mt-3">
            <label for="ifsc" class="block text-sm font-medium text-gray-700">IFSC Code of the Bank</label>
            <input id="ifsc" name="ifsc" type="text" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>
            <div className="w-full mt-3">
            <label for="bankname" class="block text-sm font-medium text-gray-700">Name of the Bank</label>
            <input id="bankname" name="bankname" type="text" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>
            <div className="w-full mt-3">
            <label for="accnumber" class="block text-sm font-medium text-gray-700">Account Number</label>
            <input id="accnumber" name="accnumber" type="number" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>
            </div>
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <div className="flex gap-4">
            <div className="">
            <h3 className="text-xl">Aadhar Details</h3>
            </div>
        </div>
        <div className="flex gap-4">
            <div className="flex gap-4">
            <div className="w-full mt-3">
            <label for="aadharnumber" class="block text-sm font-medium text-gray-700">Aadhar Card / Enrollment Number</label>
            <input id="aadharnumber" name="aadharnumber" type="number" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>
            </div>
        </div> 
        </form>
        </div>
        </div>

        <div className="flex items-center justify-center nichekbtns1 mb-5">
        <div className="flex gap-4 w-1/2">
            <Link to={"/eCA"} className="w-full">
            <button type="submit" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150 w-full">
                GET CA
            </button>
            </Link>
            <Link className="w-full">
            <button type="submit" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150 w-full">
                Continue
            </button>
            </Link>
        </div>
        </div>
        

        </>
    )
}

export default BankDetailsForm;