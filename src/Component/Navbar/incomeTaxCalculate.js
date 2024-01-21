import React, { useState } from 'react';

const IncomeTaxCalculator = () => {
  const [totalIncome, setTotalIncome] = useState('');
  const [tax, setTax] = useState(0);

  const calculate = (amount, percent) => {
    return (amount * percent) / 100;
  };

  const calculateIncomeTax = (income) => {
    if (income <= 250000) {
      return calculate(income-0, 0);
    } else if (income <= 500000) {
      return calculate(income - 250000, 5);
    } else if (income <= 750000) {
      return calculate(income - 500000, 10) + 12500;
    } else if (income <= 1000000) {
      return calculate(income - 750000, 15) + 37500;
    } else if (income <= 1250000) {
      return calculate(income - 1000000, 20) + 75000;
    } else if (income <= 1500000) {
      return calculate(income - 1250000, 25) + 125000;
    } else {
      return calculate(income - 1500000, 30) + 187500;
    }
  };

  const handleIncomeChange = (event) => {
    setTotalIncome(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const income = parseFloat(totalIncome);
    const taxAmount = calculateIncomeTax(income);
    setTax(taxAmount);
  };

  return (
    <div>
      <h1>Income Tax Calculator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          What's your annual income?
          <input
            type="number"
            value={totalIncome}
            onChange={handleIncomeChange}
            placeholder="Enter annual income"
          />
        </label>
        <button type="submit">Calculate Tax</button>
      </form>
      {tax > 0 && (
        <p>
          Total tax applicable at ₹{totalIncome} is ₹{tax}
        </p>
      )}
    </div>
  );
};

export default IncomeTaxCalculator;
