import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import './incomeTaxCalculator.css';

const IncomeTaxCalculator = () => {
  // Set default values to 0
  const defaultInputValue = '0';

  // State variables to store user inputs
  const [input1, setInput1] = useState(defaultInputValue);
  const [input2, setInput2] = useState(defaultInputValue);
  const [input3, setInput3] = useState(defaultInputValue);
  const [input4, setInput4] = useState(defaultInputValue);
  const [input5, setInput5] = useState(defaultInputValue);
  const [input6, setInput6] = useState(defaultInputValue);

  // State variable to store the sum
  const [sum, setSum] = useState(0);

  // State variable to store the tax
  const [tax, setTax] = useState(0);

  // State variable to store the message
  const [message, setMessage] = useState('');

  // Function to handle the addition when the user clicks the "Calculate Tax" button
  const handleAddition = () => {
    // Convert input values to numbers and calculate the sum
    const result =
      parseFloat(input1) +
      parseFloat(input2) +
      parseFloat(input3) +
      parseFloat(input4) +
      parseFloat(input5) +
      parseFloat(input6);

    // Update the state with the sum
    setSum(result);

    // Calculate tax based on income range
    let calculatedTax = 0;

    if (result <= 300000) {
      calculatedTax = 0;
    } else if (result > 300000 && result <= 600000) {
      calculatedTax = 0.05 * result;
    } else if (result > 600000 && result <= 900000) {
      calculatedTax = 0.1 * result;
    } else if (result > 900000 && result <= 1200000) {
      calculatedTax = 0.15 * result;
    } else if (result > 1200000 && result <= 1500000) {
      calculatedTax = 0.2 * result;
    } else {
      calculatedTax = 0.3 * result;
    }

    // Update the state with the calculated tax
    setTax(calculatedTax);

    // Update the state with the message
    setMessage(`The tax on your income ${result} is ${calculatedTax}`);
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center takeitdown">
        <div className="flex">
          <Link to={"/"}>
            <ArrowLeftIcon className="w-8 h-8 arrowlefticonedit" />
          </Link>
          <h1 className="titlepan text-4xl">Income Tax Calculator</h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pt-11 h-screen4 heightChanges">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 maxWidthChanges">
          <div className="flex w-full">
            <label className="flex flex-col ms-11">
              Income From Salary / Pension
              <input
                type="number"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
                required
              />
            </label>
            <br />

            <label className="flex flex-col ms-8">
              Income From Business / Profession / Freelancing
              <input
                type="number"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
              />
            </label>
            <br />

            <label className="flex flex-col ms-8 mt-6">
              Rental Income Received
              <input
                type="number"
                value={input3}
                onChange={(e) => setInput3(e.target.value)}
              />
            </label>
            <br />
          </div>
          <div className="flex mt-11">
            <label className="flex flex-col ms-11">
              Interest Paid On Home Loan
              <input
                type="number"
                value={input4}
                onChange={(e) => setInput4(e.target.value)}
              />
            </label>
            <br />

            <label className="flex flex-col ms-8">
              FD Interest
              <input
                type="number"
                value={input5}
                onChange={(e) => setInput5(e.target.value)}
              />
            </label>
            <br />

            <label className="flex flex-col ms-8">
              Saving A/C Interest
              <input
                type="number"
                value={input6}
                onChange={(e) => setInput6(e.target.value)}
              />
            </label>
          </div>
          <div className="flex justify-center items-start mt-11">
            <div className="flex flex-col">
              <button
                className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150 w-full"
                onClick={handleAddition}
              >
                Calculate Tax
              </button>
              <p className="mt-7 text-xl font-bold">{message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeTaxCalculator;
