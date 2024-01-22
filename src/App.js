import React from "react";

//import hoc 
import DefaultHOC from "./HOC/default.hoc";
import IncomeTaxHOC from "./HOC/incomeTax.hoc";
import Form16HOC from "./HOC/form16.hoc";
import FormSubmittedHOC from "./HOC/formSubmitted.hoc";
import PanFormHOC from "./HOC/panform.hoc";
import FormCAHOC from "./HOC/formca.hoc";
import BasicHOC from "./HOC/basic.hoc";
import AddressHOC from "./HOC/address.hoc";
import SalaryHOC from "./HOC/salary.hoc";
import OtherIncomeHOC from "./HOC/otherincome.hoc";
import DeductionHOC from "./HOC/deduction.hoc";
import BankDetailsHOC from "./HOC/bankdetails.hoc";
import PrepaidTaxesHOC from "./HOC/prepaidtaxe.hoc";
import ItrDetailsHOC from "./HOC/itrdetails.hoc";
import ComputationHOC from "./HOC/computation.hoc";
import ITRfinishedHOC from "./HOC/itrfinish.hoc";
// import CASubmittedHOC from "./HOC/ecasubmitted.hoc";
//import pages
import HomePage from "./Page/home.page";
import IncomeTaxCalculator from "./Component/Navbar/incomeTaxCalculate";
import Form16 from "./Component/ITR_Filing/itr.firts.component";
import FormSubmitted from "./Component/Form_16_submitted/formsubmitted";
import PANForm from "./Component/ITR_Filing/itr.pan.component";
import CA from "./Component/ITR_Filing/itr.ca.component";
import BasicForm from "./Component/ITR_Filing/itr.basic.component";
import AddressForm from "./Component/ITR_Filing/itr.fewmoredetails.component";
import SalaryForm from "./Component/ITR_Filing/itr.salary.component";
import OtherForm from "./Component/ITR_Filing/itr.incomeother.component";
import DeductionForm from "./Component/ITR_Filing/itr.deduction.component";
import BankDetailsForm from "./Component/ITR_Filing/itr.bankdetails.component";
import PrepaidTaxesForm from "./Component/ITR_Filing/itr.prepaidtaxes.component";
import ItrDetailsForm from "./Component/ITR_Filing/itr.itrdetails.component";
import ComputationForm from "./Component/ITR_Filing/itr.computation.component";
import ITRFinished from "./Component/ITR_Filing/itr.finish.component";

function App() {
  return (
    <>
    <div class="bg-green-50">
      <DefaultHOC path="/" exact component={HomePage} />
      <IncomeTaxHOC path="/incomeTaxCalculator" exact component={IncomeTaxCalculator} />
      <Form16HOC path="/form16" excat component={Form16} />
      <FormSubmittedHOC path="/formSubmitted" excat component={FormSubmitted} />
      <PanFormHOC path="/panForm" excat component={PANForm} />
      <FormCAHOC path="/eCA" excat component={CA} />
      <BasicHOC path="/basicForm" excat component={BasicForm} />
      <AddressHOC path="/addressForm" excat component={AddressForm} />
      <SalaryHOC path="/salaryForm" excat component={SalaryForm} />
      <OtherIncomeHOC path="/otherForm" excat component={OtherForm} />
      <DeductionHOC path="/deductionForm" excat component={DeductionForm} />
      <BankDetailsHOC path="/bankdetailsForm" excat component={BankDetailsForm} />
      <PrepaidTaxesHOC path="/prepaidtaxesForm" excat component={PrepaidTaxesForm} />
      <ItrDetailsHOC path="/itrdetailsForm" excat component={ItrDetailsForm} />
      <ComputationHOC path="/computationForm" excat component={ComputationForm} />
      <ITRfinishedHOC path="/itrdone" excat component={ITRFinished} />
    </div>
    
    </>
  );
}

export default App;
