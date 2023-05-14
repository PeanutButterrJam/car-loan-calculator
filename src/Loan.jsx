import React, { useState } from "react";
import bootstrap from 'bootstrap' 
import LoanCalculator from "./LoanCalculator";


function Loan(){

    const [fAmount, setFAmount] = useState("0.00");

    function handleClick(amount){
        setFAmount(amount)
    };
   

    return (
        
      <div className="flex-container container" > 
        <LoanCalculator onCange={handleClick}/>
       <div className="flex-item-right right-container">
            <h3>Monthly Repayment</h3>
            <h1>RM{fAmount}</h1>
        </div>
      </div> 
    );
};

export default Loan;