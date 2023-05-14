import React, { useState } from "react";
    
function Slider(props){
  const [currentValue, setCurrentValue] = useState(1);
  props.onChange(currentValue);
    return (
      <div>
        <h2 className="col-form-label label">Loan Period</h2>
        <h2 className="loan-period">{currentValue} Years</h2>
        <div className="slider">
        <input id="range" type="range" min="1" max="9" steps="1" value={currentValue} onChange={(e) => setCurrentValue(e.target.value)} />
        <span className="one">1</span>
        <span className="nine">9</span>
        </div>
      </div>

    );
  };

export default Slider;