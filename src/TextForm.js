import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter your text here...");
    const handleUpClick = () => {
        setText(text.toUpperCase())
    }
    const handleLowClick = () => {
        setText(text.toLowerCase())
    }
    const handleClrClick = () => {
        setText('')
    }
    const handleCopyClick = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleSpaceClick = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Uppercase</button>
            <button className="btn btn-danger mx-2" onClick={handleLowClick}>Lowercase</button>
            <button className="btn btn-light mx-2" onClick={handleClrClick}>Clear Text</button>
            <button className="btn btn-success mx-2" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-warning mx-2" onClick={handleSpaceClick}>Handle Spaces</button>
        </div>
        <div className="container my-3">
            <h1>Your Text Details</h1>
            <p>{text.split(" ").length}words and {text.length} characters</p>
            <p> Took {0.008 * text.split(" ").length}Minutes to read</p>
        </div>
        </>
    )
}
