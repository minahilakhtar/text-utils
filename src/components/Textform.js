import React, {useState} from 'react'
export default function Textform(props) {
  
  const [text, setText] = useState("");
  
  const handleUpClick = ()=>{
    // console.log("uppercase was clickes");
    // let uc = document.getElementById('myBox').value;
    // setText(uc.toUpperCase())
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Text changed to lower case", "success")

  }
  const intoTitleCase = () => {
    let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
     setText(newText);
     props.showAlert("Text changed to Capitalized", "success")
}
  const handleClearClick = ()=>{
    let newText = "";
    setText(newText)
    props.showAlert("Text has been cleared", "success")
  }
  const handleOnChange = (e)=>{
    // console.log("on change")
    setText(e.target.value)
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spces has been removed from Text", "success")
}
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied to clipboard", "success")
}


  return (
    <>
  <div className="mb-3 container" style={{color:props.mode=== 'dark'?'white': 'black'}} >
    <h1>{props.heading}</h1>
    <textarea className ="form-control my-4" value={text} onChange= {handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'? '#5e5959': 'white', color:props.mode=== 'dark'?'white': 'black'}}></textarea>
    <button id="btn" className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Change To Uppercase</button>
    <button id="btn" className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Change To Lowercase</button>
    <button id="btn" className="btn btn-primary mx-2 my-1" onClick={intoTitleCase}>Capatilize</button>
    <button id="btn" className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
    <button id='btn' className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
    <button id='btn' className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>


  </div>
  <div className="container my-3" style={{color:props.mode=== 'dark'?'white': 'black'}}>
    <h1>Your Text Summary</h1>
    <p><b>{text.trim().length }</b> characters And <b>{text.replace(/\n/g, " ").split(' ').filter(value => value != "").length}</b> words</p>
    <p><b>{0.008 * text.split(" ").length}</b> Minutes To Read</p>
    <h2>Preview</h2>
    <p className='preview'>{text.length>0?text:"Enter your text above to Preview it"}</p>
  </div>
    </>
  )
}
