import React from 'react';
import "./InputCheck.css";

function InputCheck() {

    return (
        <div>
            <h3>Finally, practice typing the word in this box.</h3>
                <form name="userAnswer" className="labelForm" >
                <div className="typeWord">
                    <input className="wordBox" id="userInput" type="text" />
                    <div className="space"></div>
                    <button className="checkBtn" type="submit" >Check!</button>
                </div>
                </form>
        </div>
    );
};


export default InputCheck;
