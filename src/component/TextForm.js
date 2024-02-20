import React, {useState} from 'react'


export default function TextForm(props) {
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const HandleClear=()=>{
    console.log("uppercase was clicked"+text);
    let newText='';
     setText(newText);
   }
  const HandleUpClick=()=>{
   console.log("uppercase was clicked"+text);
   let newText=text.toUpperCase();
    setText(newText);
  }
  const HandleLoClick=()=>{
    console.log("lower was clicked"+text);
    let newText=text.toLowerCase();
     setText(newText);
  }
  const HandleOnChange=(event)=>{
    console.log("onchange");
    setText(event.target.value)
  }
  
const [text, setText] = useState('Enter text here');
  return (
    <div>
      <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" onChange={HandleOnChange} value={text} id="myBox" rows="6"></textarea>
  </div>
  <button type="button" className="btn btn-secondary mx-2 my-1" onClick=  {HandleUpClick}>convert to upper case</button>
  <button className="btn btn-secondary mx-2 my-1" onClick=  {HandleLoClick}>convert to lowercase</button>
  <button className="btn btn-secondary mx-2 my-1" onClick=  {HandleClear}>clear text</button>
  <button type="button" onClick={speak} className="btn btn-secondary mx-2">Speak</button>

<div className="container my-3">
        <h1>Summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h3>Preview</h3>
      <p>{text}</p>
      </div>
    </div>
  )
  }
