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
export default function App() {
  var set1 = new question("sos subnormal?","si");
  var set2 = new question("te gustan las pijas", "no");
  var set3 = new question("1+1=2",2);
  return (
    
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      
      <div>
    <h2> Preguntas</h2>
    <p>{set1.Answer}</p>
    </div>

    </div>

    
  );
}
