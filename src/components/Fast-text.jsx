import React from 'react';
import TextLoop from "react-text-loop";


const FastText = (props) => (
  <TextLoop
    springConfig={{ stiffness: 100, damping: 10 }}
    adjustingSpeed={900}
    className="fast-text-bg"
  >
    <h2>{props.textOne}</h2>
    <h2>{props.textTwo}</h2>
    <h2>{props.textThree}</h2>
  </TextLoop>

);

export default FastText;
