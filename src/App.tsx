import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";

export type ModeType = "incMode" | "setMode";

function App() {
    let minimum;
    let maximum;
    let minimal = localStorage.getItem("min")
    let maximal = localStorage.getItem("max")
    minimal !== null ? minimum = parseInt(minimal) : minimum = 0
    maximal !== null ? maximum = parseInt(maximal) : maximum = 10

    let [mode, setMode] = useState<ModeType>("incMode")
    let [counter, setCounter] = useState(minimum)
    let [min, setMin] = useState(minimum)
    let [max, setMax] = useState(maximum)

    const changeMode = () => {
        setMode("setMode")
    }
    const incCounter = () => {
        setCounter(counter + 1)
    }
    const changeMin = (newMin: string) => {
        localStorage.setItem("min", newMin)
        const newValue = parseInt(newMin)
        setMin(newValue);
    }
    const changeMax = (newMax: string) => {
        localStorage.setItem("max", newMax)
        const newValue = parseInt(newMax)
        setMax(newValue);
    }
    const resetCounter = () => {
        setCounter(min);
    }
    const setValues = () => {
        setMode("incMode")
        setCounter(min);
        debugger
    }
    const disabledHandler = (name: string): boolean => {
        switch (name) {
            case "set":
                if (max > min && max >= 0 && mode === "setMode") {
                    return false
                }
                return true
            case "inc":
                if (counter === max || mode === "setMode") {
                    return true
                }
                return false
            case "reset":
                if (mode === "setMode") {
                    return true
                }
                return false
            default
            :
                return false
        }

    }
    return (
        <div className="App">
            <Counter mode={"setMode"} counter={counter} changeCounter={incCounter} changeMin={changeMin} min={min}
                     max={max} changeMax={changeMax} setValues={setValues} disabledHandler={disabledHandler}
                     resetCounter={resetCounter} changeMode={changeMode} />
            <Counter mode={"incMode"} counter={counter} changeCounter={incCounter} changeMin={changeMin} min={min}
                     max={max} changeMax={changeMax} setValues={setValues} disabledHandler={disabledHandler}
                     resetCounter={resetCounter} changeMode={changeMode} />
        </div>
    );
}

export default App;
