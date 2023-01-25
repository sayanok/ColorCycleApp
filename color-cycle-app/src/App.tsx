import React, { useState } from "react";

const App: React.FC = () => {
  const [red, setRed] = useState("00");
  const [green, setGreen] = useState("00");
  const [blue, setBlue] = useState("00");
  const [redErrorMessage, setRedErrorMessage] = useState("");
  const [greenErrorMessage, setGreenErrorMessage] = useState("");
  const [blueErrorMessage, setBlueErrorMessage] = useState("");
  const [redIncrement, setRedIncrement] = useState("0");
  const [greenIncrement, setGreenIncrement] = useState("0");
  const [blueIncrement, setBlueIncrement] = useState("0");
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>();

  function onChangeHandler(color: string, colorCode: string): void {
    inputValueCheck(color, colorCode);
    setColorCode(color, colorCode);
  }

  function inputValueCheck(color: string, colorCode: string): void {
    if (color === "red") {
      /^[0-9a-f]{2}$/i.test(colorCode) ? setRedErrorMessage("") : setRedErrorMessage("2桁の16進数を入力してください");
    } else if (color === "green") {
      /^[0-9a-f]{2}$/i.test(colorCode)
        ? setGreenErrorMessage("")
        : setGreenErrorMessage("2桁の16進数を入力してください");
    } else if (color === "blue") {
      /^[0-9a-f]{2}$/i.test(colorCode) ? setBlueErrorMessage("") : setBlueErrorMessage("2桁の16進数を入力してください");
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
  }

  function incrementHandler(color: string, incrementValue: string) {
    inputValueCheck(color, incrementValue);
    setIncrementValue(color, incrementValue);
  }

  function setIncrementValue(color: string, incrementValue: string) {
    if (color === "red") {
      setRedIncrement(incrementValue);
    } else if (color === "green") {
      setGreenIncrement(incrementValue);
    } else if (color === "blue") {
      setBlueIncrement(incrementValue);
    }
  }

  function increment() {
    setRed((red) =>
      parseInt(red, 16) + parseInt(redIncrement, 16) < 255
        ? (parseInt(red, 16) + parseInt(redIncrement, 16)).toString(16)
        : red
    );
    setGreen((green) =>
      parseInt(green, 16) + parseInt(greenIncrement, 16) < 255
        ? (parseInt(green, 16) + parseInt(greenIncrement, 16)).toString(16)
        : green
    );
    setBlue((blue) =>
      parseInt(blue, 16) + parseInt(blueIncrement, 16) < 255
        ? (parseInt(blue, 16) + parseInt(blueIncrement, 16)).toString(16)
        : blue
    );
  }

  function clear() {
    setRed("00");
    setGreen("00");
    setBlue("00");
    setRedIncrement("0");
    setGreenIncrement("0");
    setBlueIncrement("0");
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
      <div id="box" style={{ backgroundColor: "#" + red + green + blue }}></div>
      <div>
        red:
        <input
          type="text"
          value={red}
          onChange={(e) => onChangeHandler("red", e.target.value)}
          disabled={intervalId ? true : false}
        />
        増分値:
        <input
          type="text"
          value={redIncrement}
          onChange={(e) => incrementHandler("red", e.target.value)}
          disabled={intervalId ? true : false}
        />
        <p>{redErrorMessage}</p>
      </div>
      <div>
        green:
        <input
          type="text"
          value={green}
          onChange={(e) => onChangeHandler("green", e.target.value)}
          disabled={intervalId ? true : false}
        />
        増分値:
        <input
          type="text"
          value={greenIncrement}
          onChange={(e) => incrementHandler("green", e.target.value)}
          disabled={intervalId ? true : false}
        />
        <p>{greenErrorMessage}</p>
      </div>
      <div>
        blue:
        <input
          type="text"
          value={blue}
          onChange={(e) => onChangeHandler("blue", e.target.value)}
          disabled={intervalId ? true : false}
        />
        増分値:
        <input
          type="text"
          value={blueIncrement}
          onChange={(e) => incrementHandler("blue", e.target.value)}
          disabled={intervalId ? true : false}
        />
        <p>{blueErrorMessage}</p>
      </div>

      <button disabled={intervalId ? true : false} onClick={() => setIntervalId(setInterval(() => increment(), 250))}>
        start
      </button>
      <button
        onClick={() => {
          clearInterval(intervalId);
          setIntervalId(undefined);
        }}
      >
        stop
      </button>
      <button onClick={() => clear()}>clear</button>
    </>
  );
};

export default App;
