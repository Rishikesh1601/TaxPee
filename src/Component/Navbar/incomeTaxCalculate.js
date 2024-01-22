import React, { useState } from 'react';

const IncomeTaxCalculator = () => {
  const [incomeDetails, setIncomeDetails] = useState({
    salaryIncome: '',
    businessIncome: '',
    rentalIncome: '',
    homeLoanInterest: '',
    fdInterest: '',
    savingAccountInterest: '',
    otherInterestIncome: '',
    otherIncome: '',
  });

  const [taxOldRegime, setTaxOldRegime] = useState(0);
  const [taxNewRegime, setTaxNewRegime] = useState(0);

  const calculate = (amount, percent) => {
    return (amount * percent) / 100;
  };

  const calculateIncomeTax = (details, regime) => {
    const totalIncome =
      parseFloat(details.salaryIncome) +
      parseFloat(details.businessIncome) +
      parseFloat(details.rentalIncome) +
      parseFloat(details.homeLoanInterest) +
      parseFloat(details.fdInterest) +
      parseFloat(details.savingAccountInterest) +
      parseFloat(details.otherInterestIncome) +
      parseFloat(details.otherIncome);

    if (regime === 'old') {
      // Apply old tax regime rules
      if (totalIncome <= 250000) {
        return 0;
      } else if (totalIncome <= 500000) {
        return calculate(totalIncome - 250000, 5);
      } else if (totalIncome <= 1000000) {
        return calculate(totalIncome - 500000, 20) + 25000;
      } else {
        return calculate(totalIncome - 1000000, 30) + 125000;
      }
    } else {
      // Apply new tax regime rules
      if (totalIncome <= 250000) {
        return 0;
      } else if (totalIncome <= 500000) {
        return calculate(totalIncome - 250000, 5);
      } else if (totalIncome <= 750000) {
        return calculate(totalIncome - 500000, 10) + 12500;
      } else if (totalIncome <= 1000000) {
        return calculate(totalIncome - 750000, 15) + 37500;
      } else if (totalIncome <= 1250000) {
        return calculate(totalIncome - 1000000, 20) + 75000;
      } else if (totalIncome <= 1500000) {
        return calculate(totalIncome - 1250000, 25) + 125000;
      } else if (totalIncome <= 2000000) {
        return calculate(totalIncome - 1500000, 30) + 187500;
      } else {
        return calculate(totalIncome - 2000000, 30) + 312500;
      }
    }
  };

  const handleIncomeChange = (event, field) => {
    setIncomeDetails({
      ...incomeDetails,
      [field]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const taxAmountOld = calculateIncomeTax(incomeDetails, 'old');
    const taxAmountNew = calculateIncomeTax(incomeDetails, 'new');
    setTaxOldRegime(taxAmountOld);
    setTaxNewRegime(taxAmountNew);
  };

  return (
    <div>
      <h1>Income Tax Calculator</h1>
      <form onSubmit={handleSubmit}>
        {/* Input fields for each type of income */}
        <label>
          Income From Salary / Pension:
          <input
            type="number"
            value={incomeDetails.salaryIncome}
            onChange={(event) => handleIncomeChange(event, 'salaryIncome')}
            placeholder="Enter income"
          />
        </label>

        <label>
          Income From Business / Profession / Freelancing:
          <input
            type="number"
            value={incomeDetails.businessIncome}
            onChange={(event) => handleIncomeChange(event, 'businessIncome')}
            placeholder="Enter income"
          />
        </label>

        {/* Repeat the above structure for other types of income */}

        <button type="submit">Calculate Tax</button>
      </form>
      {taxOldRegime > 0 && (
        <p>
          Total tax applicable in the old tax regime is ₹{taxOldRegime}
        </p>
      )}
      {taxNewRegime > 0 && (
        <p>
          Total tax applicable in the new tax regime is ₹{taxNewRegime}
        </p>
      )}
    </div>
  );
};

export default IncomeTaxCalculator;
