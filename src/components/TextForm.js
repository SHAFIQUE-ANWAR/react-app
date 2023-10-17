import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('enter text here');
    const [emails, setEmails] = useState([]);

    
    const handleUpClick=()=>{
        let newtext= text.toUpperCase();
        setText(newtext)
    }
    const handleLoClick=()=>{
        let newtext= text.toLowerCase();
        setText(newtext)
    }
    const handleClearClick=()=>{
        let newtext="";
        setText(newtext)
    }
      const extractEmails = () => {
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/g;
    const extractedEmails = text.match(emailRegex) || [];
    setEmails(extractedEmails);
  };
   
    const handleOnChange=(event)=>{
setText(event.target.value)
    }
    
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}} >
<div className="mb-3">
  <h1>{props.heading}</h1>
  <textarea className="form-control mb-2" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
  <button className='btn btn-primary mx-2 col' onClick={handleUpClick}>convert to uppercase</button>
  <button className='btn btn-primary mx-2 col' onClick={handleLoClick}>convert to Lowercase</button>
  <button className='btn btn-primary mx-2 col' onClick={handleClearClick}>clear text</button>
  <button className='btn btn-primary mx-2 col' onClick={extractEmails}>Extract Emails</button>
  <ul>
        {emails.map((email, index) => (
          <li key={index}>{email}</li>
        ))}
      </ul>
</div>
<div className="container">
    <h1>your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p> {0.008*text.split(" ").length}Mintus read</p>
    <h2>preview</h2>
    <p>{text.length>0?text:'enter something'}</p>
</div>
</div>
</>
  )
}
