import React, { useState } from 'react';

export default function Textform() {
  const  handleUpclick = ()=>
  {
    console.log("Uppercase was clicked"+ text);
    const newText = text.toUpperCase();
    setText(newText);
  }
  const  handleLoclick = ()=>
  {
    console.log("Lowercase was clicked"+ text);
    const newText = text.toLowerCase();
    setText(newText);
  }
  const  handlecleaclick = ()=>
  {
    const newText = "";
    setText(newText);
  }
  
  const handleOnchange = (event)=>
  {
    console.log("On change");
    setText(event.target.value);
  }

  const [text, setText] = useState("Enter your text here");
  return (
    <>
    
    <div className='container'>
        <div classname="my-3">
        <h2>Enter your text here</h2>   
            <label for="myBox " classname="form-label"></label>
            <textarea class="form-control" value={text} onChange ={handleOnchange} id="mybox" rows="8"></textarea>
        </div>
            <button className='btn btn-primary my-3' onClick={handleUpclick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-3' onClick={handleLoclick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-1' onClick={handlecleaclick}>Clear Text</button>
    </div>
    <div classname="container1">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
