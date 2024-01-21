import React from "react";
import '../ITR_Filing/itr.first.component.css';
import { Link } from "react-router-dom";
import {
    ArrowLeftIcon
  
  } from '@heroicons/react/24/outline'

const OtherForm = () => {
    return(
        <>
        <div>
         
        </div>
        <div className="flex flex-col justify-center items-center takeitdown1">
            <div class="flex">
                <Link to={"/salaryForm"}>
                < ArrowLeftIcon className="w-8 h-8 arrowlefticonedit"/>
                </Link>
                <h1 className="titlepan text-4xl">INCOME FROM OTHER SOURCES</h1>
            </div>
        </div>
        <div class="flex flex-col items-center justify-center h-screen2 heightChanges">
        <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6 maxWidthChanges">
    
        <form class="flex flex-col px-5 py-5">

        <div className="flex gap-4">
            <div className="">
            <h3 className="text-xl">Earning Income from Interests?</h3>
            </div>
        </div>
        <div className="flex gap-4">
            <div className="">
            <h3 className="text-lg text-gray-500">Please Provide Quarterly breakup of Dividend Income</h3>
            </div>
        </div>
        <div className="flex">
            <div className="flex gap-4">
            <div className="w-full mt-8">
            <label for="june" class="block text-sm font-medium text-gray-700">i. Up to 15-Jun-2023</label>
            <input id="june" name="june" type="number" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>
            <div className="w-full mt-3">
            <label for="sep" class="block text-sm font-medium text-gray-700">ii. From 16-Jun-2023 to 15-Sep-2023</label>
            <input id="sep" name="sep" type="number" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>
            <div className="w-full mt-3">
            <label for="dec" class="block text-sm font-medium text-gray-700">iii. From 16-Sep-2023 to 15-Dec-2023</label>
            <input id="dec" name="dec" type="number" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>
            </div>
        </div>
        <div className="flex">
            <div className="flex gap-4">
            <div className="w-full mt-3">
            <label for="mar" class="block text-sm font-medium text-gray-700">iv. From 16-Dec-2023 to 15-Mar-2024</label>
            <input id="mar" name="mar" type="number" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>
            <div className="w-full mt-8">
            <label for="mar1" class="block text-sm font-medium text-gray-700">v. From 16-Mar-2024 to 31-Mar-2024</label>
            <input id="mar1" name="mar1" type="number" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>  
            </div>
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <div className="flex gap-4">
            <div className="">
            <h3 className="text-xl">Any Other Income</h3>
            </div>
        </div>
        <div className="flex gap-4">
            <div className="flex gap-4">
            <div className="w-full mt-3">
            <label for="other" class="block text-sm font-medium text-gray-700">Please enter amount of any other income earned</label>
            <input id="other" name="other" type="number" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>
            </div>
        </div> 
        <br></br>  
        <hr></hr>
        <div class="flex gap-4 mt-5">
            <h3 className="text-xl">Do you have any family pension Income?</h3>
        </div>
        <div className="flex gap-4">
            <div className="w-1/2 mt-3">
            <label for="pension" class="block text-sm font-medium text-gray-700">Please enter income earned from Pension</label>
            <input id="pension" name="pension" type="number" placeholder=""  class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>
        </div>  
        <br></br>
        <hr></hr>
        <div class="flex gap-4 mt-5">
            <h3 className="text-xl">Other Exempt Income: For Reporting Purpose</h3>
        </div>
        <div className="flex gap-4 mt-3 mb-5">
            <div className="w-full">
            <label for="nameofincome" class="block text-sm font-medium text-gray-700">Name for Other Income</label>
            <input id="nameofincome" name="nameofincome" type="text" placeholder=""  class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>
            <div className="w-full">
            <label for="tds" class="block text-sm font-medium text-gray-700">Please enter the income Earned</label>
            <input id="tds" name="tds" type="number" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
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
            <Link to={"/deductionForm"} className="w-full">
            <button type="submit" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150 w-full">
                Continue
            </button>
            </Link>
        </div>
        </div>
        

        </>
    )
}

export default OtherForm;