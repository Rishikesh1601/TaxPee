import React from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

const ITRNotMand = () => {
    return(
        <>
        <div class="flex items-center justify-center h-screen4">
      <div class="bg-white p-6  md:mx-auto">
        <svg viewBox="0 0 24 24" class="text-green-600 w-16 h-16 mx-auto my-6">
            <path fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
            </path>
        </svg>
        <div class="text-center">
            <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">ITR Filling is not Mandatory for you</h3>
            <p class="text-gray-600 my-2">However, we suggest you to file ITR to receive the following benifits:</p>
            <ul className=" text-lg mt-6 ps-5 leading-loose ">
                <li className="flex">< CheckBadgeIcon className="w-8 h-8 mt-1"/>Easy Loan/Credit card approval</li>
                <li className="flex">< CheckBadgeIcon className="w-8 h-8 mt-1"/>Claim tax refunds</li>
                <li className="flex">< CheckBadgeIcon className="w-8 h-8 mt-1"/>Use as income & address proof</li>
            </ul>
            <div class="py-10 text-center">
                <a href="/" class="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                    GO BACK 
               </a>
               <br></br>
               <br></br>
               <h1>OR</h1>
               <br></br>
               <a href="/form16" class="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                    File ITR
               </a>
            </div>
        </div>
    </div>
  </div>
        </>
    )
}

export default ITRNotMand;
