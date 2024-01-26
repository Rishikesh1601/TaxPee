import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
const ITRCheck = () => {
    const navigate = useNavigate();
  const [age, setAge] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);

  

  const redirectToFileItr = () => {
    if (age > 60 && totalIncome > 50000) {
        navigate('/fileitrsuccess');
    }else if (age<60 && totalIncome >= 25000){
        navigate('/fileitrsuccess');
    }
    else {
      navigate('/itrnotmandatory');
    }
  };
    return (
        <>
        <div className="flex flex-col justify-center items-center takeitdown">
        <div className="flex">
          <Link to={"/"}>
            <ArrowLeftIcon className="w-8 h-8 arrowlefticonedit" />
          </Link>
          <h1 className="titlepan text-4xl">ITR Eligibility Checker</h1>
        </div>
        </div>
        <div className="flex flex-col items-center justify-center pt-11 h-screen heightChanges">
        <div className="w-1/4 max-w-xs bg-white rounded-lg shadow-md p-6 maxWidthChanges">
            <div>
            <h1 className='font-bold text-xl border-b'>Income Details</h1>
            <br></br>
            <div className='flex flex-col'>
                <label>Your Age: </label>
                <input className='w-1/2' type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <br></br>
            <div className='flex flex-col'>
                <label>Total Income: </label>
                <input className='w-1/2' type="number" value={totalIncome} onChange={(e) => setTotalIncome(e.target.value)} />
            </div>
            <br></br>
            <div>
                <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150 w-full" onClick={redirectToFileItr}>Check ITR Eligibility</button>
            </div>
            </div>
        </div>
        </div>
        
        </>
    )
}

export default ITRCheck