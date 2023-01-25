import React, { useState } from "react";

const App: React.FC = () => {
  const [rgb, setRgb] = useState("#0059b3");
  const [red, setRed] = useState("");
  const [green, setGreen] = useState("");
  const [blue, setBlue] = useState("");
  const [redErrorMessage, setRedErrorMessage] = useState("");
  const [greenErrorMessage, setGreenErrorMessage] = useState("");
  const [blueErrorMessage, setBlueErrorMessage] = useState("");

  function onChangeHandler(color: string, colorCode: string): void {
    inputValueCheck(color, colorCode);
    setColorCode(color, colorCode);
  }

  function inputValueCheck(color: string, colorCode: string): void {
    if (color === "red") {
      /^[0-9a-f]{2}$/i.test(colorCode) ? setRedErrorMessage("") : setRedErrorMessage("16進数を入力してください");
    } else if (color === "green") {
      /^[0-9a-f]{2}$/i.test(colorCode) ? setGreenErrorMessage("") : setGreenErrorMessage("16進数を入力してください");
    } else if (color === "blue") {
      /^[0-9a-f]{2}$/i.test(colorCode) ? setBlueErrorMessage("") : setBlueErrorMessage("16進数を入力してください");
    }
  }

  function setColorCode(color: string, colorCode: string) {
    if (color === "red") {
      setRed(colorCode);
    } else if (color === "green") {
      setGreen(colorCode);
    } else if (color === "blue") {
      setBlue(colorCode);
    }
    setRgb("#" + red + green + blue);
  }

  return (
    <>
      <style type="text/css">
        {`#box {
          margin       : auto;
          width        : 150px;
          height       : 150px;
        }`}
      </style>
      <div id="box" style={{ backgroundColor: rgb }}></div>
      <div>
        red:
        <input type="text" value={red} onChange={(e) => onChangeHandler("red", e.target.value)} />
        <p>{redErrorMessage}</p>
      </div>
      <div>
        green:
        <input type="text" value={green} onChange={(e) => onChangeHandler("green", e.target.value)} />
        <p>{greenErrorMessage}</p>
      </div>
      <div>
        blue:
        <input type="text" value={blue} onChange={(e) => onChangeHandler("blue", e.target.value)} />
        <p>{blueErrorMessage}</p>
      </div>
    </>
  );
};

export default App;
