import React from "react";
import '../ITR_Filing/itr.first.component.css';
import { Link } from "react-router-dom";
import {
    ArrowLeftIcon
  
  } from '@heroicons/react/24/outline'

const PrepaidTaxesForm = () => {
    return(
        <>
        <div>
         
        </div>
        <div className="flex flex-col justify-center items-center takeitdown">
            <div class="flex">
                <Link to={"/bankdetailsForm"}>
                < ArrowLeftIcon className="w-8 h-8 arrowlefticonedit"/>
                </Link>
                <h1 className="titlepan text-4xl">PREPAID TAXES</h1>
            </div>
        </div>
        <div class="flex flex-col items-center justify-center pt-11 h-screen4 heightChanges">
        <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6 maxWidthChanges">
    
        <form class="flex flex-col px-5 py-5">

        <div className="flex gap-4">
            <div className="">
            <h3 className="text-xl">TDS on Salary Income</h3>
            </div>
        </div>
        
        <div className="flex">
            <div className="flex gap-4">
            <div className="w-full mt-3">
            <label for="tdscompanyname" class="block text-sm font-medium text-gray-700">Company / Employer Name</label>
            <input id="tdscompanyname" name="tdscompanyname" type="text" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>
            <div className="w-full mt-8">
            <label for="tanofemployer" class="block text-sm font-medium text-gray-700">TAN of the Employer</label>
            <input id="tanofemployer" name="tanofemployer" type="text" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>
            <div className="w-full mt-8">
            <label for="salaryamounttds" class="block text-sm font-medium text-gray-700">Salary / Pension Amount</label>
            <input id="salaryamounttds" name="salaryamounttds" type="number" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>
            <div className="w-full mt-8">
            <label for="taxAmount" class="block text-sm font-medium text-gray-700">Tax Amount</label>
            <input id="taxAmount" name="taxAmount" type="number" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>
            </div>
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <div className="flex gap-4">
            <div className="">
            <h3 className="text-xl font-bold">Advance Tax and Self Assessment Tax Payment</h3>
            <h3 className="text-sm">Help us understand what advance tax you have already paid and we'll automatically consider it in your income tax return</h3>
            </div>
        </div>
        <div className="flex gap-4">
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

export default PrepaidTaxesForm;