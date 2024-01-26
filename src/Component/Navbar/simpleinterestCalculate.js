import React, { useState } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import './incomeTaxCalculator.css';
const SimpleInterest = () => {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [duration, setDuration] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateSimpleInterest = () => {
    const interest = (principal * rate * duration) / 100;
    setTotalInterest(interest);
    const amount = parseFloat(principal) + parseFloat(interest);
    setTotalAmount(amount);
  };

  const roundedTotalInterest = totalInterest.toFixed(2);

  const data = [
    { name: "Interest Earned", value: parseFloat(roundedTotalInterest) },
    { name: "TPrincipal Amount", value: parseFloat(totalAmount) - parseFloat(roundedTotalInterest) },
  ];

  const COLORS = ["#b4f7b4", "#38c172"];

  return (
    <>
    <div className="flex flex-col justify-center items-center takeitdown">
        <div className="flex">
          <Link to={"/"}>
            <ArrowLeftIcon className="w-8 h-8 arrowlefticonedit" />
          </Link>
          <h1 className="titlepan text-4xl">Simple Interest Calculator</h1>
        </div>
    </div>
    
    <div className="container mx-auto mt-24 flex justify-between w-1/2 bg-white">
      <div className="w-1/2 p-4">
        
        <div className="flex space-x-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Principal Amount</label>
            <input
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              className="mt-1 p-2 border rounded-md w-40"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Rate of Interest (%)</label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="mt-1 p-2 border rounded-md w-40"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Duration (years)</label>
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="mt-1 p-2 border rounded-md w-40"
            />
          </div>
        </div>

        <button
          onClick={calculateSimpleInterest}
          className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150 w-full"
        >
          Calculate
        </button>

        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Result</h2>
          <p className="mb-2">Principal Amount: {principal}</p>
          <p className="mb-2">Rate of Interest: {rate}%</p>
          <p className="mb-2">Simple Interest: {roundedTotalInterest}</p>
          <p className="mb-2">Total Amount: {totalAmount.toFixed(2)}</p>
        </div>
      </div>

      <div className="w-1/2 piechartadjustsimpleinterest">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            data={data}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend align="left" verticalAlign="middle" layout="vertical" />
        </PieChart>
      </div>
    </div>

    </>
  );
};

export default SimpleInterest;
