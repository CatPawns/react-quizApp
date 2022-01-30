import React from "react";
import "./style.css";
class question
{
  constructor(answer,question)
  {
    this.answer = answer;
    this.question = question;
  }
  get Answer(){
    return this.answer;
  }
  get Question()
  {
    return this.question;
  }
  calcAnswer(){
    return this.answer;
  }
  calcQuestion()
  {
    return this.question;
  }
}
function createNewQuestion(a,b)
{
  
}
export default function App() {
  var set1 = new question("sos humano?","si");
  var set2 = new question("te gustan las #var", "no");
  var set3 = new question("1+1=",2);
  var set3 = new question("ま","ma");
  var questionSet = [set1,set2,set3,2]
  return (
    
    <div>
      <h1>Quiz app for learning!</h1>
      <p> :)</p>
      
      <div>
    <h2> Preguntas</h2>
    {
    
    //for loop
      questionSet.forEach(function(elemento, indice, array) {

        console.log(elemento, indice); })

      }
    <p>{set1.Answer}</p>
      <input></input>
    <button>
            submit
          </button>
    </div>

    </div>

    
  );
}
