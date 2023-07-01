import React, {useState} from 'react'


export default function TextForm(props) {
  const HandleUpClick=()=>{
    console.log("uppercase was clicked");
    settext("You have clicked")  }
  const HandleOnChange=()=>{
    console.log("onchange");
  }

  const [text, settext] = useState('Enter text here');
  return (
    <div>
      <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" onChange={HandleOnChange} value={text} id="myBox" rows="6"></textarea>
  </div>
  <button className="btn btn-primary" onClick=  {HandleUpClick}>convert to upper case</button>
    </div>
  )
}
