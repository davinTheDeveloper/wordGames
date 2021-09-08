import React, { useState } from 'react';

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



function Random() {
    const [word, setWord] = useState("?");
    const [word01, setWord01] = useState("?");
    const [word02, setWord02] = useState("?");
    const [word03, setWord03] = useState("?");
    const [word04, setWord04] = useState("?");
    const length = (List.length);



    const handleClick = () => {
    let newArr = [];
    while(newArr.length < 5){
        let num = Math.floor(Math.random() * (0, length));
        if(newArr.indexOf(num) === -1) newArr.push(num);
    }
  
    let newWord = List[newArr[0]];
    let newWord01 = List[newArr[1]];
    let newWord02 = List[newArr[2]];
    let newWord03 = List[newArr[3]];
    let newWord04 = List[newArr[4]];
    console.log(newWord);
    setWord(newWord);
    setWord01(newWord01);
    setWord02(newWord02);
    setWord03(newWord03);
    setWord04(newWord04);
    }


    return (
            <div className="Word">
            <div className="container">
                <button className="directionBtn_01">Press to hear the directions!</button>
                <h3>First, click on a word you want to practice.</h3>
                <div className="innerPage">
                    <button className="Btn" type="button" onClick={handleClick}>Play Word</button>
                </div>
            <h3>Second, the word you choose will appear in this box.</h3>
                <div className="wordDisplay">
                    <button className="Btn" type="button" id="01" >{word}</button>
                    <button className="Btn" type="button" id="02">{word01}</button>
                    <button className="Btn" type="button" id="03">{word02}</button>
                    <button className="Btn" type="button" id="04">{word03}</button>
                    <button className="Btn" type="button" id="05">{word04}</button>
                </div>
        </div>
        </div>
    );


}

export default Random;


// import List from './List';

// let count = 1;
// let randomWord = "";

// function Random() {

    //  randomWord = List[Math.floor(Math.random() * List.length)];
    //  count++;

    //  if(count < 5){
    //      Random();
    //  }


    // return (
    //     <div>
    //         <h3>Second, the word you choose will appear in this box.</h3>
    //             <div className="wordDisplay">
    //                 <button className="Btn" type="button" placeholder="word">{randomWord ? 'word' : {randomWord}}</button>
    //                 <button className="Btn" type="button" >{randomWord}</button>
    //                 <button className="Btn" type="button" >{randomWord}</button>
    //                 <button className="Btn" type="button" >{randomWord}</button>
    //                 <button className="Btn" type="button" >{randomWord}</button>
    //             </div>
    //         {randomWord}
    //     </div>
    // );