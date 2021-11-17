import React, { useState } from "react";

export default function Formtext(props) {
  const handleUpCase = () => {
    // console.log("Upper case was clicked" + text);
    let newText = text.toUpperCase ();
    setText(newText);
  };

  const handleLoCase = () => {
    // console.log("Upper case was clicked" + text);
    let newText = text.toLowerCase ();
    setText(newText);
  };

  const handleonChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
      <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleonChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>

      <button className="btn btn-primary mx-1" onClick={handleUpCase}>
        To UpperCase
      </button>
      <button className="btn btn-primary mx-1 " onClick={handleLoCase}>
        To LowerCase
      </button>
    </div>
    <div className="container my-3">
        <h2>Youe text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length } Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
