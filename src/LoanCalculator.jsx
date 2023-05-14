import React, { useState } from "react";
import Slider from "./Slider";
import TextArea from "./TextArea";

function LoanCalculator(){

    const [carPrice, setPrice] = useState();
    const [downPayment, setDP] = useState();
    const [loanPeriod, setLP] = useState(1);
    const [interestRate, setInterest] = useState();
    const [payment, setPayment] = useState("0.00");
    const [required, setRequired] = useState(false);
    const [totalCost, setTotal] = useState("0.00");


    function handleDP(e){
      setDP(e.target.value)
    };

   function handleIR(e){
       setInterest(e.target.value)
    };

    function handlePrice(e){
        setPrice(e.target.value)
    };

   function handleLP(value){
        setLP(value);
        console.log(loanPeriod);
    };

    function handleClick(e){
        if (carPrice > 1 && downPayment > 1 && interestRate >1 ){
            setRequired (false);
            const loanAmount = carPrice-downPayment;
            const interestAmount = (loanAmount*(interestRate/100))*loanPeriod
            const loanMonth = loanPeriod*12;
            const monthlyPayment = ((loanAmount+interestAmount)/loanMonth).toFixed(2);
            setPayment(monthlyPayment);
            setTotal((loanAmount+interestAmount).toFixed(2));
            console.log(interestAmount);
        }else{
            setRequired (true);
            setPayment("0.00");
            setTotal("0.00");
        };
       
    };

    return(
        <div>
        <div className="top-bar">
        <h1>Car Loan Calculator</h1>
        <p>Find out your dream car's monthly payment by filling in the info below.</p> 
        </div>
        <div className="flex-container container" >  
        <div className="flex-item-left left-container"> 
        <form>
        <TextArea key="cP" id="cP" title="Car Price (RM)" name="cP" placeholder="100,000" value={carPrice} func={handlePrice} />
        <TextArea key="dP" id="dP" title="Down Payment (RM)" name="dP" placeholder="10,000" value={downPayment} func={handleDP}/>
        <div className="margin-top">
        <Slider onChange={handleLP}/>
        </div>
        <TextArea key="IR" id="IR" title="Interest Rate (%)"name="IR" placeholder="2.88" value={interestRate} func={handleIR} />
        <button type="button" className="btn-success btn col-6 btn-lg" onClick={handleClick}>Calculate</button>
        { required ? <span class="alert alert-danger" role="alert">Fill in all info to calculate.</span> : null }
        </form>
  
        </div> 
        <div className="flex-item-right right-container">
        <div className="output">
        <div className="monthly">
        <h3>Monthly Payment</h3>
        <h1 className="amount">RM{payment}</h1>
        </div>
        <div className="output-bottom">
        <hr />
        <div className="totalCost">
        <h3 className="totalcost-title">Total Cost</h3>
        <h3 className="totalcost-text">RM{totalCost}</h3>
        </div>
        </div>
        </div>
        </div>
        </div>  
        </div> 
    );
};

export default LoanCalculator;