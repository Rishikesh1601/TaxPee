import React from "react";
import '../ITR_Filing/itr.first.component.css';
import { Link } from "react-router-dom";
import {
    ArrowLeftIcon
  
  } from '@heroicons/react/24/outline'

const ItrDetailsForm = () => {
    return(
        <>
        <div>
         
        </div>
        <div className="flex flex-col justify-center items-center takeitdown">
            <div class="flex">
                <Link to={"/prepaidtaxesForm"}>
                < ArrowLeftIcon className="w-8 h-8 arrowlefticonedit"/>
                </Link>
                <h1 className="titlepan text-4xl">ITR DETAILS</h1>
            </div>
        </div>
        <div class="flex flex-col items-center justify-center pt-11 h-screen heightChanges">
        <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6 maxWidthChanges">
    
        <form class="flex flex-col px-5 py-5">
        
        <div className="flex">
            <div className="flex gap-4">
            <div className="w-full mt-3">
            <label for="medicalInsurance" class="block text-sm font-medium text-gray-700">Return Filing type</label>
            <select id="medicalInsurance" name="medicalInsurance" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option value="" selected>Original Return</option>
                <option value="">A</option>
                <option value="">B</option>
            </select>
            </div>
            </div>
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <div className="flex gap-4">
            <div className="">
            <h3 className="text-lg font-bold">Are you filing return of income under seventh proviso to section 139(1)</h3>
            <h3 className="text-sm">In case your gross income does not exceed Rs. 2.5 Lakh and incurred the electricity expenses more than Rs. 1 Lakh OR incurreed the Foreign Travelling expenses more than Rs. 2 Lakh</h3>
            </div>
        </div>
        {/* <div className="flex gap-4">
            <div className="flex gap-4">
            <div className="w-full mt-3">
            <label for="bsrcode" class="block text-sm font-medium text-gray-700">BSR Code</label>
            <input id="bsrcode" name="bsrcode" type="number" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>
            <div className="w-full mt-3">
            <label for="dateofchallan" class="block text-sm font-medium text-gray-700">Date of Challan</label>
            <input id="dateofchallan" name="dateofchallan" type="date" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>
            <div className="w-full mt-3">
            <label for="challanNumber" class="block text-sm font-medium text-gray-700">Challan No.</label>
            <input id="challanNumber" name="challanNumber" type="number" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>
            <div className="w-full mt-3">
            <label for="taxamountBSR" class="block text-sm font-medium text-gray-700">Tax Amount</label>
            <input id="taxamountBSR" name="taxamountBSR" type="number" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>
            </div>
        </div>  */}
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
            <Link to={"/computationForm"} className="w-full">
            <button type="submit" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150 w-full">
                Continue
            </button>
            </Link>
        </div>
        </div>
        

        </>
    )
}

export default ItrDetailsForm;