import React, { useState } from 'react'
import './Form.css'

const Form = (props) => {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    // Credits: A
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }

    // Credits: Coding Wala
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const [text, setText] = useState('');


    return (
        <div className='form'>
            <div className="text-form">
                <div className="blur"></div>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="text">


                    <textarea placeholder='Enter some text to play with...' className='textarea' value={text} onChange={handleOnChange} name="text" id="myBox" cols="30" rows="10"></textarea>
                </div>
                <div className="blur2"></div>
            </div>
            <div className="buttons ">


                <button disabled={text.length === 0} className="button pop-on-hover" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="button pop-on-hover" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="button pop-on-hover" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length === 0} className="button pop-on-hover" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="button pop-on-hover" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

              
            </div>
            <div className="preview">
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </div>

    )
}

export default Form