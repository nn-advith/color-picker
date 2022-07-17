import "./styles.css";
import ColorPicker from "./ColorPicker";
import { useState } from "react";
import styled from "styled-components";

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ bg }) => `${bg}`};
  padding: 10px;
  transition: 0.3s all ease-in-out;

  p {
    color: ${({ borderColor }) => ` ${borderColor}`};
    letter-spacing: 2px;
    font-size: 1.4rem;
  }

  h1 {
    font-size: 5rem;
  }

  button {
    outline: none;
    border: none;
    box-shadow: none;
    border: ${({ borderColor }) => `1px solid ${borderColor}`};
    padding: 5px 10px;
    border-radius: 4px;
    box-shadow: 2px 5px 8px rgba(0, 0, 0, 0.2);
  }
`;

export default function App() {
  const [state, setState] = useState("#ffffff");
  const [color, setColor] = useState("#ffffff");
  const [textcolor, setTextColor] = useState("#000000");

  const handleInput = (e) => {
    setState(e.target.value);
  };

  const handleSubmit = () => {
    setColor(state);
    var hexCode = state;
    let rgbarr = [];
    if (/^#?[A-Fa-f0-9]{6}$/.test(hexCode)) {
      hexCode = hexCode.split("#")[1] || hexCode;
      for (let i = 0; i < hexCode.length; i += 2) {
        rgbarr.push(parseInt(hexCode[i] + hexCode[i + 1], 16));
      }

      if (rgbarr[0] * 0.299 + rgbarr[1] * 0.587 + rgbarr[2] * 0.114 > 186) {
        setTextColor("#000000");
      } else {
        setTextColor("#ffffff");
      }
    }
  };

  return (
    <div className="App">
      <Body bg={color} borderColor={textcolor}>
        <ColorPicker
          value={state}
          onChange={handleInput}
          borderColor={textcolor}
        />
        <br />
        <br />
        <button onClick={handleSubmit}>Submit</button>
        <br />
        <br />
        <br />
        <br />

        <p>Color selected is</p>
        <br />
        <h1 style={{ color: `${textcolor}` }}>{color}</h1>
      </Body>
    </div>
  );
}
