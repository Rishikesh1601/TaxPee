import React from "react";
import '../ITR_Filing/itr.first.component.css';
import { Link } from "react-router-dom";
import {
    ArrowLeftIcon
  
  } from '@heroicons/react/24/outline'

const ComputationForm = () => {
    return(
        <>
        <div>
         
        </div>
        <div className="flex flex-col justify-center items-center takeitdown">
            <div class="flex">
                <Link to={"/itrdetailsForm"}>
                < ArrowLeftIcon className="w-8 h-8 arrowlefticonedit"/>
                </Link>
                <h1 className="titlepan text-4xl">Computation Form</h1>
            </div>
        </div>
        <div class="flex flex-col items-center justify-center pt-11 h-screen4 heightChanges">
        <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6 maxWidthChanges">
    
        <form class="flex flex-col px-5 py-5">

        <div className="flex gap-4">
            <div className="">
            <h3 className="text-xl">Select your Regime</h3>
            </div>
        </div>
        
        <div className="flex">
        <div className="flex ms-5 mt-5 genderFlex">
            <div class="flex mt-5 ms-4">
            <input type="radio" id="oldregime" name="gender" value="oldregime" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"></input>
            <label for="oldregime" class="ml-2 block text-sm text-gray-900">Old Regime</label>
            </div>
            <div class="flex mt-5 ms-4">
            <input type="radio" id="newregime" name="gender" value="newregime" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"></input>
            <label for="newregime" class="ml-2 block text-sm text-gray-900">New Regime</label>
            </div>
        </div>
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <div className="flex gap-4">
        <label>
            <input type="checkbox" className="mr-2 text-sm" />
            I solemnly declare that to the best of my knowledge and belief, the information given in the return is correct and complete and is in accordance with the provisions of the income-tax act, 1961. I further declare that I am making this return in my capacity as individual and I am aso competent to make this return and verify it.
        </label>
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
                File My Return
            </button>
            </Link>
        </div>
        </div>
        

        </>
    )
}

export default ComputationForm;