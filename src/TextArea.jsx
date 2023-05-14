import React from "react";

function TextArea(props){
    return(<div className="margin-top">
    <h2 for="cP" className="col-form-label label">{props.title}</h2>
    <input 
    className="textbox form-control-lg" 
    type="text" 
    name={props.name} 
    id={props.id} 
    placeholder={props.placeholder} 
    value={props.value} 
    onChange={props.func}/>
    </div>
    );
}

export default TextArea;