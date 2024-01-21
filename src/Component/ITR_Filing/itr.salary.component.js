import React from "react";
import '../ITR_Filing/itr.first.component.css';
import { Link } from "react-router-dom";
import {
    ArrowLeftIcon
  
  } from '@heroicons/react/24/outline'

const SalaryForm = () => {
    return(
        <>
        <div>
         
        </div>
        <div className="flex flex-col justify-center items-center takeitdown1">
            <div class="flex">
                <Link to={"/addressForm"}>
                < ArrowLeftIcon className="w-8 h-8 arrowlefticonedit"/>
                </Link>
                <h1 className="titlepan text-4xl">SALARY DETAILS</h1>
            </div>
        </div>
        <div class="flex flex-col items-center justify-center h-screen2 heightChanges">
        <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6 maxWidthChanges">
    
        <form class="flex flex-col px-5 py-5">

        <div className="flex gap-4">
            <div className="">
            <h3 className="text-xl">1) Gross Salary / CTC</h3>
            </div>
        </div>
        <div className="flex">
            <div className="w-1/2 mt-3">
            <label for="annual" class="block text-sm font-medium text-gray-700">Salary / Pension Income (Annual)</label>
            <input id="annual" name="annual" type="number" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>
        </div>
        <br></br>
        <hr></hr>
        <div class="flex gap-4 mt-5">
            <div>
            <h3 className="text-xl">2) Less : Exempted Allowances</h3>
            </div>
        </div>
        <div className="flex gap-4">
            <div className="flex gap-4">
            <div className="w-full mt-3">
            <label for="hra" class="block text-sm font-medium text-gray-700">Exempt HRA: House Rent Allowance</label>
            <input id="hra" name="hra" type="number" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>
            <div className="w-full mt-3">
            <label for="ltc" class="block text-sm font-medium text-gray-700">Leave Travel Concession / Assistance</label>
            <input id="ltc" name="ltc" type="number" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>
            <div className="w-full mt-5">
            <label for="gratuity" class="block text-sm font-medium text-gray-700 mt-3">Gratuity</label>
            <input id="gratuity" name="gratuity" type="number" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>
            </div>
        </div>   
        <br></br>
        <hr></hr>
        <div class="flex gap-4 mt-5">
            <h3 className="text-xl">3) Net Salary (Gross Salary - Exempted Allowances) = 6,00,000</h3>
        </div>
        <br></br>
        <hr></hr>
        <div class="flex gap-4 mt-5">
            <h3 className="text-xl">4) Less : Deductions u/s 16</h3>
        </div>
        <div className="flex gap-4">
            <div className="w-1/2 mt-3">
            <label for="sd" class="block text-sm font-medium text-gray-700">Standard Deduction</label>
            <input id="sd" name="sd" type="number" placeholder="50,000" disabled class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>
        </div>  
        <div class="text-center mt-5 mb-5">
            <h3 className="text-lg"><strong>Income Chargeable under the head 'Salaries' = 5,50,000</strong></h3>
        </div>  
        <hr></hr>
        <div class="flex gap-4 mt-5">
            <h3 className="text-xl">Employer Details & TDS Deducted</h3>
        </div>
        <div className="flex gap-4 mt-3 mb-5">
            <div className="w-full">
            <label for="comp" class="block text-sm font-medium text-gray-700">Comapany / Employer Name</label>
            <input id="comp" name="comp" type="number" placeholder="50,000" disabled class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>
            <div className="w-full">
            <label for="tds" class="block text-sm font-medium text-gray-700">TDS Deducted by Employer</label>
            <input id="tds" name="tds" type="number" placeholder="50,000" disabled class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
            </div>
            <div className="w-full">
            <label for="tan" class="block text-sm font-medium text-gray-700">TAN of the Employer</label>
            <input id="tan" name="tan" type="number" placeholder="50,000" disabled class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
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
            <Link to={"/otherForm"} className="w-full">
            <button type="submit" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150 w-full">
                Continue
            </button>
            </Link>
        </div>
        </div>
        

        </>
    )
}

export default SalaryForm;