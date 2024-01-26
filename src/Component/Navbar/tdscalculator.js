import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import './incomeTaxCalculator.css'
const TdsCalculator = () => {
  const [paymentType, setPaymentType] = useState('');
  const [hasPan, setHasPan] = useState(true); // Default is true
  const [amount, setAmount] = useState(0);
  const [finalValue, setFinalValue] = useState(0);

  const calculateFinalValue = () => {
    let tdsRate = getTdsRate();
    let explanationText = '';

    if (!hasPan) {
      tdsRate *= 2; // Double the rate if PAN is not available
      explanationText = `\nTDS rates are higher in the absence of PAN.`;
    }

    const tdsAmount = (tdsRate / 100) * amount;
    setFinalValue(amount - tdsAmount + explanationText);
  };

  const getTdsRate = () => {
    switch (paymentType) {
      case 'salary':
        return 0; // Assuming it follows the new tax regime slab rate
      case 'interestOnSecurities':
      case 'dividendIncome':
        return 10;
      case 'interestOnDeposits':
        return 10;
      case 'paymentToContractors':
        return 1; // For individuals or HUF
      case 'rentOfPlantAndMachinery':
        return 2;
      case 'rentOfLandOrBuilding':
        return 10;
      default:
        return 0;
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center takeitdown">
        <div className="flex">
          <Link to={"/"}>
            <ArrowLeftIcon className="w-8 h-8 arrowlefticonedit" />
          </Link>
          <h1 className="titlepan text-4xl">TDS CALCULATOR</h1>
        </div>
        </div>
        <div className="flex flex-col items-center justify-center pt-11 h-screen4 heightChanges">
        <div className="w-1/4 max-w-xs bg-white rounded-lg shadow-md p-6 maxWidthChanges">
      <div className='flex flex-col'>
        <label>Select Payment Type: </label>
        <select className='border rounded-md p-2 mt-2' value={paymentType} onChange={(e) => setPaymentType(e.target.value)}>
          <option value="" disabled selected>Select</option>
          <option value="interestOnSecurities">Interest on Securities</option>
          <option value="dividendIncome">Dividend Income</option>
          <option value="interestOnDeposits">Interest on Deposits</option>
          <option value="paymentToContractors">Payment to Contractors</option>
          <option value="rentOfPlantAndMachinery">Rent of Plant and Machinery</option>
          <option value="rentOfLandOrBuilding">Rent of Land or Building</option>
        </select>
      </div>
      <div>
        <label>
          Do you have PAN?{' '}
          <input className='editthecheckbox' type="checkbox" checked={hasPan} onChange={() => setHasPan(!hasPan)} />
        </label>
      </div>
      <br></br>
      <div className='flex flex-col w-1/2'>
        <label>Enter Amount: </label>
        <input className='border' type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      {/* <br></br> */}
      <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-6 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150 w-full" onClick={calculateFinalValue}>Calculate</button>
      <br></br>
      <div>
        <h2 >Result</h2>
        <p >TDS Rate: {getTdsRate()}%</p>
        <p >Final Value: {finalValue}</p>
      </div>
    </div>
    </div>
    </div>
  );
};

export default TdsCalculator;
