import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './Random.css';
import InputCheck from '../InputCheck/InputCheck';
import confetti from 'canvas-confetti';

//list of words
const List = [
    "at",
    "for",
    "to",
    "is",
    "and",
    "a",
    "I",
    "can",
    "on",
    "do",
    "of",
    "so",
    "the",
    "go",
    "one",
    "well",
    "will",
    "two",
    "get",
    "an"
];

let answerVar = [];
let answerArr = [];

//set the state of each button
function Random() {

    //button state
    const [word, setWord] = useState("?");
    const [word01, setWord01] = useState("?");
    const [word02, setWord02] = useState("?");
    const [word03, setWord03] = useState("?");
    const [word04, setWord04] = useState("?");

    //button disabled state
    const [disable, setDisable] = useState(false);
    const [disableTwo, setDisableTwo] = useState(true);
    const [disableThree, setDisableThree] = useState(true);
    const [disableChoices, setDisableChoices] = useState(true);
    const [disableSpell, setDisableSpell] = useState(true);

    //directions state
    const [direction, setDirection] = useState("First, click the 'Words!' button for a list to appear.")

    //variable for the length of the array
    const length = (List.length);

    //random index for audio match
    // let randomAudio = 0;
    let randomVar = [];

    //pick 5 random strings from the array
    const handleClick = () => {
        let newArr = [];
        while (newArr.length < 5) {
            let num = Math.floor(Math.random() * (0, length));
            if (newArr.indexOf(num) === -1) newArr.push(num);
            // console.log(newArr);
        }

        //assign random index for audio sample
        let randomIndex = newArr.length;

        //pick random index of the 5 words
        let randomNum = Math.floor(Math.random() * (0, randomIndex));
        // console.log(randomNum);

        //identify the correct answer and track audio
        // randomAudio = newArr[randomNum];
        // console.log(randomAudio);
        randomVar.push(newArr[randomNum]);

        //split the strings by index for each button
        let newWord = List[newArr[0]];
        let newWord01 = List[newArr[1]];
        let newWord02 = List[newArr[2]];
        let newWord03 = List[newArr[3]];
        let newWord04 = List[newArr[4]];

        //assign the strings to each button
        setWord(newWord);
        setWord01(newWord01);
        setWord02(newWord02);
        setWord03(newWord03);
        setWord04(newWord04);


        //disable button
        setDisable(true);
        setDisableTwo(false);


        //directions statement
        setDirection("Second, Find the word that matches the voice")

    };



    //disable option buttons and identify the winning word at random.
    const Listen = () => {

        answerArr = [
            document.getElementById('one').innerHTML.toString(),
            document.getElementById('two').innerHTML.toString(),
            document.getElementById('three').innerHTML.toString(),
            document.getElementById('four').innerHTML.toString(),
            document.getElementById('five').innerHTML.toString()
        ];

        let answerStr = Math.floor(Math.random() * answerArr.length);
        console.log(answerArr.indexOf(answerArr[answerStr]));

        answerVar = (answerArr[answerStr]);
        setDisableChoices(false);
        console.log(answerVar);
        return answerVar;
    };


    //check the players answer; match to winning word
    function answerCheck(event) {

        let guess = document.getElementById(event.target.id).innerHTML;
        console.log(guess);

        if (guess === answerVar) {
            var duration = 20 * 100;
            var animationEnd = Date.now() + duration;
            var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

            function randomInRange(min, max) {
                return Math.random() * (max - min) + min;
            }

            var interval = setInterval(function () {
                var timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    return clearInterval(interval);
                }

                var particleCount = 50 * (timeLeft / duration);
                // since particles fall down, start a bit higher than random
                confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
                confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
            }, 250);
            document.getElementById(event.target.id).style.backgroundColor = "green";
            setDisableTwo(true);
            setDisableChoices(true);
            setDisableThree(false);

        } else {
            alert("Try Again");

        }

    };

    function handleSpell() {
        setDisableSpell(false);
    }
    
    function checkSpell() {
        let spelling = document.getElementById('userInput').innerHTML.toString();
        
    }

    return (
        <div className="Word">
            <div className="container">
                <button className="directionBtn_01">Press to hear the directions!</button>
                <h3>{direction}</h3>
                <div className="innerPage">
                    <button className="Btn" type="button" onClick={handleClick} disabled={disable}>1. Words</button>
                    <button className="Btn" type="button" onClick={Listen} disabled={disableTwo}>2. Listen</button>
                    <button className="Btn" type="button" onClick={handleSpell} disabled={disableThree}>3. Spell</button>
                </div>
                <div className="wordDisplay">
                    <button className="Btn" type="button" id="one" onClick={answerCheck} disabled={disableChoices}>{word}</button>
                    <button className="Btn" type="button" id="two" onClick={answerCheck} disabled={disableChoices}>{word01}</button>
                    <button className="Btn" type="button" id="three" onClick={answerCheck} disabled={disableChoices}>{word02}</button>
                    <button className="Btn" type="button" id="four" onClick={answerCheck} disabled={disableChoices}>{word03}</button>
                    <button className="Btn" type="button" id="five" onClick={answerCheck} disabled={disableChoices}>{word04}</button>
                </div>
                <div>
                    <h3>Finally, practice typing the word in this box.</h3>
                    <form name="userAnswer" className="labelForm" >
                        <div className="typeWord">
                            <input className="wordBox" id="userInput" type="text" disabled={disableSpell}/>
                            <div className="space"></div>
                            <button className="checkBtn" type="submit" onClick={checkSpell} >Check!</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Random;