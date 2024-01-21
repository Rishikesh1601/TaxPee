import React from "react";
import '../ITR_Filing/itr.first.component.css';
import { Link } from "react-router-dom";
const Form16 = () => {
    return(
        <>
        <div class="flex flex-col items-center justify-center h-screen heightChanges">
  <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6 maxWidthChanges">
    <h2 class="text-2xl font-bold text-gray-900 mb-4">UPLOAD FORM 16</h2>
    <div class="paraChanges">
        <p >Income Tax Return Filing is easy with TaxPee and the smartest way to online file your taxes return is to just upload your form 16 and get your ITR prepared automatically.</p>
    </div>
    <form class="flex flex-col">

      <div className="flex gap-4">
      
      <input type="file" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 flexwalainput" placeholder="Resume" required />
      <Link to={"/formSubmitted"}>
      <button type="submit" class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150 flexwalabtn">Submit Form 16</button>
      </Link>
      </div>
      
       <h1 class="text-xl font-bold text-gray-900 flex justify-center">OR</h1>
      
     
    </form>
    <Link to={"/panForm"}>
      <button type="submit" class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150 w-full">Continue without form 16</button>
      </Link>
  </div>
</div>

        </>
    )
}

export default Form16;