import React from 'react';
import './style.css';

class question {
  constructor(answer, question) {
    this.answer = answer;
    this.question = question;
  }
  get Answer() {
    return this.answer;
  }
  get Question() {
    return this.question;
  }
  calcAnswer() {
    return this.answer;
  }
  calcQuestion() {
    return this.question;
  }
}
//random numbers
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
var getRand = (function () {
  var nums = [0, 1, 2, 3];
  var current = [];
  //*
  function rand(n) {
    return (Math.random() * n) | 0;
  }
  
  return function () {
    if (!current.length) current = nums.slice();
    return current.splice(rand(current.length), 1);
  };
})();
var currentQuestion = 0;

function advance(){
  currentQuestion += 1;
  console.log("NEXT QUESTION");
}

//end random numbers
export default function App() {
  var set1 = new question('sos humano?', 'si');
  var set2 = new question('te gustan las #var', 'no');
  var set3 = new question('ま ', "ma");
  var set4 = new question('き', "ki");
  var questionSet = [set1, set2, set3, set4, 2];
  let RN = getRand();

  var currentAsnwer = questionSet[RN];
  var el = document.getElementById("b1");
  el.addEventListener("click",advance,false);
  
  return (
    <div>
      <h1>Quiz app for learning!</h1>
      <p> :)</p>

      <div>
        <h2> Preguntas</h2>
        {
          
          //for loop
          questionSet.forEach(function (elemento, indice, array) {
            //console.log(elemento, indice);
          })
          
        }
        

        <p>{currentAsnwer.Answer}</p>
        <input></input>
        
      </div>
    </div>
  );
  

  
}
