import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
const DeductionForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleButtonClick = (step) => {
    setCurrentStep(step);
  };

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return <FormStep1 />;
      case 2:
        return <FormStep2 />;
      case 3:
        return <FormStep3 />;
      case 4:
        return <FormStep4 />;
      default:
        return null;
    }
  };

  return (
    <div>
    <div className="flex flex-col justify-center items-center takeitdown1">
            <div class="flex">
                <Link to={"/otherForm"}>
                < ArrowLeftIcon className="w-8 h-8 arrowlefticonedit"/>
                </Link>
                <h1 className="titlepan text-4xl">Deductions</h1>
            </div>
    </div>
    <div class="flex flex-col items-center justify-center h-screen3 heightChanges deductionFormChanges">
    <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6 maxWidthChanges">
    <div>
      <div className='flex gap-16 text-center items-center justify-center'>
        <button className='bg-gray-400 p-3 px-7 rounded-xl text-white hover:bg-green-400 active' onClick={() => handleButtonClick(1)}>Section 80C</button>
        <button className='bg-gray-400 p-3 px-7 rounded-xl text-white hover:bg-green-400 active' onClick={() => handleButtonClick(2)}>Section 80D</button>
        <button className='bg-gray-400 p-3 px-7 rounded-xl text-white hover:bg-green-400 active' onClick={() => handleButtonClick(3)}>Donation</button>
        <button className='bg-gray-400 p-3 px-7 rounded-xl text-white hover:bg-green-400 active' onClick={() => handleButtonClick(4)}>Other</button>
      </div>
      {renderFormStep()}
    </div>
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
    </div>
  );
};

const FormStep1 = () => {
  return (
    <div className='pt-7 min-h-30rem'>
    <form class="flex flex-col px-5 py-5">

    <div className="flex gap-4">
        <div className="">
        <h3 className="text-xl">Enter your tax saving investment details like PPF investments, Fixed Deposits etc.</h3>
        </div>
    </div>
    <div className="flex">
        <div className="flex gap-4">
        <div className="w-full mt-8">
        <label for="lic" class="block text-sm font-medium text-gray-700">Life Insurance Premium (LIC)</label>
        <input id="lic" name="lic" type="number" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
        </div>
        <div className="w-full mt-8">
        <label for="pf" class="block text-sm font-medium text-gray-700">PF</label>
        <input id="pf" name="pf" type="number" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
        </div>
        <div className="w-full mt-8">
        <label for="ppf" class="block text-sm font-medium text-gray-700">PPF</label>
        <input id="ppf" name="ppf" type="number" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
        </div>
        </div>
    </div>
    <div className="flex">
        <div className="flex gap-4">
        <div className="w-full mt-3">
        <label for="housingLoan" class="block text-sm font-medium text-gray-700">Principal Repayment on housing Loan</label>
        <input id="housingLoan" name="housingLoan" type="number" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
        </div>
        <div className="w-full mt-8">
        <label for="fdr" class="block text-sm font-medium text-gray-700">FDR (Tax Savings)</label>
        <input id="fdr" name="fdr" type="number" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
        </div>  
        <div className="w-full mt-8">
        <label for="nsc" class="block text-sm font-medium text-gray-700">NSC</label>
        <input id="nsc" name="nsc" type="number" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
        </div>  
        </div>
    </div>
 
    <div className="flex gap-4">
        <div className="flex gap-4">
        <div className="w-full mt-8">
        <label for="tutionFees" class="block text-sm font-medium text-gray-700">Tution Fees</label>
        <input id="tutionFees" name="tutionFees" type="number" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
        </div>
        <div className="w-full mt-8">
        <label for="premium" class="block text-sm font-medium text-gray-700">Premium Paid to Annuity</label>
        <input id="premium" name="premium" type="number" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
        </div>
        <div className="w-full mt-8">
        <label for="other80c" class="block text-sm font-medium text-gray-700">Other 80C Deductions</label>
        <input id="other80c" name="other80c" type="number" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
        </div>
        </div>
    </div> 
    </form>      
    </div>
  );
};

const FormStep2 = () => {
  return (
    <div className='pt-7 min-h-30rem'>
    <form class="flex flex-col px-5 py-5">
      <div className="flex">
          <div className="flex gap-4">
          <div className="w-full mt-3">
            <label for="medicalInsurance" class="block text-sm font-medium text-gray-700">Medical Insurance</label>
            <select id="medicalInsurance" name="medicalInsurance" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option value="" disabled >Select Policy Type</option>
                <option value="2022-2023" disabled selected>For Self, Spouse and Dependent Children</option>
                <option value="2023-2024">For Parents</option>
            </select>
          </div>
          <div className="w-full mt-3">
            <label for="above60policy" class="block text-sm font-medium text-gray-700">Is any of the policy holder aged 60 years or more</label>
            <select id="above60policy" name="above60policy" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option value="" disabled>Select</option>
                <option value="2022-2023">Yes</option>
                <option value="2023-2024" disabled selected>No</option>
            </select>
          </div>
          
          </div>
      </div>
      <div className="flex">
          <div className="flex gap-4">
          <div className="w-full mt-8">
          <label for="prevHealthCheckup" class="block text-sm font-medium text-gray-700">Previous Health Check Up</label>
          <input id="prevHealthCheckup" name="prevHealthCheckup" type="text" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
          </div>
          <div className="w-full mt-8">
          <label for="medicalInsurancePremium" class="block text-sm font-medium text-gray-700">Medical Insurance Premium</label>
          <input id="medicalInsurancePremium" name="medicalInsurancePremium" type="number" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
          </div>    
          </div>
      </div>
      <br></br>
      <hr></hr>
      <br></br>
      <div className="flex">
          <div className="flex gap-4">
          <div className="w-full mt-3">
            <label for="medicalInsurance" class="block text-sm font-medium text-gray-700">Medical Insurance</label>
            <select id="medicalInsurance" name="medicalInsurance" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option value="" disabled>Select Policy Type</option>
                <option value="2022-2023">For Self, Spouse and Dependent Children</option>
                <option value="2023-2024" disabled selected>For Parents</option>
            </select>
          </div>
          <div className="w-full mt-3">
            <label for="above60policy" class="block text-sm font-medium text-gray-700">Is any of the policy holder aged 60 years or more</label>
            <select id="above60policy" name="above60policy" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option value="" disabled>Select</option>
                <option value="2022-2023" disabled selected>Yes</option>
                <option value="2023-2024">No</option>
            </select>
          </div>
          
          </div>
      </div>
      <div className="flex">
          <div className="flex gap-4">
          <div className="w-full mt-8">
          <label for="prevHealthCheckupfor60plus" class="block text-sm font-medium text-gray-700">Previous Health Check Up</label>
          <input id="prevHealthCheckupfor60plus" name="prevHealthCheckupfor60plus" type="text" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
          </div>
          <div className="w-full mt-8">
          <label for="medicalExpediture" class="block text-sm font-medium text-gray-700">Medical Expenditure</label>
          <input id="medicalExpediture" name="medicalExpediture" type="text" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
          </div>
          <div className="w-full mt-8">
          <label for="medicalInsurancePremiumfor60plus" class="block text-sm font-medium text-gray-700">Medical Insurance Premium</label>
          <input id="medicalInsurancePremiumfor60plus" name="medicalInsurancePremiumfor60plus" type="number" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
          </div>    
          </div>
      </div>
      </form>   
    </div>
  );
};

const FormStep3 = () => {
  return (
    <div className='pt-4 min-h-30rem'>
    <form class="flex flex-col px-5 py-5">

    <div className="flex gap-4">
        <div className="">
        <h3 className="text-sm">Under Section 80G several donations are eligible for deduction either upto 100% or 50% with or without restriction, just enter the amount we will automatically do the rest of calculations to get maximum refunds</h3>
        </div>
    </div>
    <div className="flex">
        <div className="flex gap-4">
        <div className="w-full mt-8">
        <label for="nameofdoner" class="block text-sm font-medium text-gray-700">Name of Doner</label>
        <input id="nameofdoner" name="nameofdoner" type="text" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
        </div>
        <div className="w-full mt-8">
        <label for="panofdoner" class="block text-sm font-medium text-gray-700">PAN of Doner</label>
        <input id="panofdoner" name="panofdoner" type="text" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
        </div>
        <div className="w-full mt-8">
        <label for="donationincash" class="block text-sm font-medium text-gray-700">Donation in Cash</label>
        <input id="donationincash" name="donationincash" type="number" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
        </div>
        </div>
    </div>
    <div className="flex">
        <div className="flex gap-4">
        <div className="w-full mt-3">
        <label for="donationinothermode" class="block text-sm font-medium text-gray-700">Donation in Other Mode</label>
        <input id="donationinothermode" name="donationinothermode" type="text" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
        </div>
        <div className="w-full mt-3">
            <label for="limitofdeductions" class="block text-sm font-medium text-gray-700">Limit of Deductions</label>
            <select id="limitofdeductions" name="limitofdeductions" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option value="" disabled selected>Please Select</option>
                <option value="2022-2023">For Self, Spouse and Dependent Children</option>
                <option value="2023-2024">For Parents</option>
            </select>
          </div>
          <div className="w-full mt-3">
            <label for="percentagedeductionamt" class="block text-sm font-medium text-gray-700">Percentage of Amount</label>
            <select id="percentagedeductionamt" name="percentagedeductionamt" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option value="" disabled selected>please Select</option>
                <option value="2022-2023">Yes</option>
                <option value="2023-2024">No</option>
            </select>
          </div>         
        </div>
    </div>
    <div className="mt-5 flex gap-4">
        <div className="">
        <h3 className="text-lg font-bold">Doner Address</h3>
        </div>
    </div>
    <div className="flex gap-4">
        <div className="flex gap-4">
        <div className="w-full mt-8">
        <label for="pincodedoner" class="block text-sm font-medium text-gray-700">Pincode</label>
        <input id="pincodedoner" name="pincodedoner" type="number" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
        </div>
        <div className="w-full mt-8">
        <label for="donerstate" class="block text-sm font-medium text-gray-700">State</label>
        <input id="donerstate" name="donerstate" type="text" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
        </div>
        <div className="w-full mt-8">
        <label for="donercity" class="block text-sm font-medium text-gray-700">City</label>
        <input id="donercity" name="donercity" type="text" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
        </div>
        </div>
    </div>
    <div className='flex'>
      <div className='w-full mt-5'>
        <label for="doneraddress" class="block text-sm font-medium text-gray-700">Address</label>
        <input id="doneraddress" name="doneraddress" type="text" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
      </div>
    </div> 
    </form>      
    </div>
  );
};

const FormStep4 = () => {
  return (
    <div className='pt-40'>
    <form class="flex flex-col px-5 py-5">

    <div className="flex gap-4">
        <div className="">
        <h3 className="text-sm">There are numerous funds and politics that can help save on tax which most people are unaware of. For all you know, there might already be a few that you've invested in without knowing how beneficial they actully are. We're here to help with that</h3>
        </div>
    </div>
    <div className="flex">
        <div className="flex gap-4">
        <div className="w-full mt-3">
            <label for="otherdeductions" class="block text-sm font-medium text-gray-700">Specify if any other</label>
            <select id="otherdeductions" name="otherdeductions" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option value="" disabled selected>Please Select</option>
                <option value="A">A</option>
                <option value="B">B</option>
            </select>
        </div>
        <div className="w-full mt-3">
        <label for="otheramount" class="block text-sm font-medium text-gray-700">Amount</label>
        <input id="otheramount" name="otheramount" type="number" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
        </div>
        
        </div>
    </div>
    <br></br>
    <hr></hr>
    <br></br>
    <div className="flex gap-4">
        <div className="">
        <h3 className="text-xl font-bold">Section 80DD / 80U</h3>
        </div>
    </div>
    <div className="flex">
        <div className="flex gap-4">
        <div className="w-full mt-3">
            <label for="disabledmember" class="block text-sm font-medium text-gray-700">Disabled Member</label>
            <select id="disabledmember" name="disabledmember" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option value="" disabled selected>Please Select Member</option>
                <option value="t">x</option>
                <option value="tt">y</option>
            </select>
          </div>
        <div className="w-full mt-3">
        <label for="totalexpondisabledmember" class="block text-sm font-medium text-gray-700">Total Expenditure</label>
        <input id="totalexpondisabledmember" name="totalexpondisabledmember" type="number" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
        </div>    
        </div>
    </div>
    <br></br>
    <hr></hr>
    <br></br>
    <div className="flex gap-4">
        <div className="">
        <h3 className="text-xl font-bold">Section 80DDB</h3>
        </div>
    </div>
    <div className="flex gap-4">
        <div className="flex gap-4">
        <div className="w-full mt-3">
            <label for="diseasedcitizen" class="block text-sm font-medium text-gray-700">Diseased Citizen</label>
            <select id="diseasedcitizen" name="diseasedcitizen" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option value="" disabled selected>Please Select Member</option>
                <option value="tu">x</option>
                <option value="ttu">y</option>
            </select>
          </div>
        <div className="w-full mt-3">
        <label for="totalexpeondiseased" class="block text-sm font-medium text-gray-700">Total Expenditure</label>
        <input id="totalexpeondiseased" name="totalexpeondiseased" type="number" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
        </div>
        </div>
    </div> 
    <br></br>
    <hr></hr>
    <br></br>
    <div className="flex gap-4">
        <div className="">
        <h3 className="text-xl font-bold">Section 80E</h3>
        </div>
    </div>
    <div className="flex gap-4">
        <div className="flex gap-4"> 
        <div className="w-full mt-3">
        <label for="interestoneducationloan" class="block text-sm font-medium text-gray-700">Interest on Education Loan</label>
        <input id="interestoneducationloan" name="interestoneducationloan" type="number" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
        </div>
        </div>
    </div> 
    <br></br>
    <hr></hr>
    <br></br>
    <div className="flex gap-4">
        <div className="">
        <h3 className="text-xl font-bold">Section 80GG</h3>
        </div>
    </div>
    <div className="flex gap-4">
        <div className="flex gap-4"> 
        <div className="w-full mt-5">
        <label for="rentpaid" class="block text-sm font-medium text-gray-700">Rent Paid For The Year</label>
        <input id="rentpaid" name="rentpaid" type="number" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
        </div>
        <div className="w-full mt-0">
        <label for="rentpaidmonths" class="block text-sm font-medium text-gray-700">Number of months rent is paid for</label>
        <input id="rentpaidmonths" name="rentpaidmonths" type="number" placeholder="" class="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></input>
        </div>
        </div>
    </div> 
    </form>      
    </div>
  );
};

export default DeductionForm;
