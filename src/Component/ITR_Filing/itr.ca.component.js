import React from "react";
import '../ITR_Filing/itr.first.component.css';
// import { Link } from "react-router-dom";
import {
    CheckBadgeIcon
  
  } from '@heroicons/react/24/outline'

const CA = () => {
    return(
        <>
        <div className="mt-24 ms-12">
            <div className="ps-24">
                <div className="flex flex-wrap -mx-4">
                    <div className="md:w-7/12 sm:w-full xs:w-full">
                        <div>
                            <h1 className="text-5xl leading-tight">
                            Hire Online CA's for<br></br>
                            <strong className="titlepan"> Income Tax Return Filing</strong><br></br>
                            and Get Maximum Refunds
                            </h1>
                            <ul className=" text-xl mt-5 ps-5 leading-loose font-bold ">
                                <li className="flex">< CheckBadgeIcon className="w-8 h-8 mt-1"/>Lowest Tax Filing Fees in India</li>
                                <li className="flex">< CheckBadgeIcon className="w-8 h-8 mt-1"/>Reliable and Secure ITR Filing Platform </li>
                                <li className="flex">< CheckBadgeIcon className="w-8 h-8 mt-1"/>Tax Filing for all - Freelancers, NRI, Business Owners, Salaried Persons</li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:w-1/3 sm:w-full xs:w-full bg-white shadow-lg border-b-2 border-gray-400 rounded-lg">
                        <div className="py-8">
                            <h1 className="text-3xl font-bold text-center">Register</h1>
                        <form class="flex flex-col px-5 py-5 ">

                        <div className="">
                            <div className="w-full">
                            <input id="Name" name="Name" type="text" placeholder="Full Name" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
                            </div>
                            <div className="w-full">
                            <input id="Email" name="Email" type="email" placeholder="Email Address" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
                            </div>
                            <div class="w-full">
                            <input id="mobile" name="mobile" type="number" placeholder="Mobile Number" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
                            </div> 
                        </div>
                        

                        <div>
                        <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150 w-full">Book eCA Now</button>    
                        </div>  
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CA;