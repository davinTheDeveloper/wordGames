import React from 'react';
import "./InputCheck.css";

function InputCheck() {

        const handleSubmit = (event) => {
            event.preventDefault();
 
            let x = document.getElementById("userInput").value;
            let y = document.getElementById("textCompare").value;
            
            console.log(x);
            console.log(y);
            let response;
            if(x !== y){
                response = "Try again.";
            } else {
                response = "Correct!";    
        }
        document.getElementById('textCompare').innerHTML = response;
    };

    return (
        <div>
            <h3>Finally, practice typing the word in this box.</h3>
                <form name="userAnswer" className="labelForm" onSubmit={handleSubmit}>
                <div className="typeWord">
                    <input className="wordBox" id="userInput" type="text" />
                    <div className="space"></div>
                    <button className="checkBtn" type="submit" onClick={handleSubmit}>Check!</button>
                </div>
                </form>
        </div>
    );
};


export default InputCheck;
