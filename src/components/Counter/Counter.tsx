import React from "react";
import {Display} from "./Display/Display";
import {Console} from "./Console/Console";
import s from './Counter.module.css'
import {ModeType} from "../../App";

type CounterType = {
    mode: ModeType
    counter: number
    changeCounter: () => void
    changeMin: (newMin: string) => void
    changeMax: (newMax: string) => void
    min: number
    max: number
    setValues: () => void
    disabledHandler: (name: string) => boolean
    resetCounter: () => void
    changeMode: () => void
}

export function Counter(props: CounterType) {
    return (
        <div className={s.counter}>
            <Display mode={props.mode} counter={props.counter} changeMin={props.changeMin} max={props.max}
                     min={props.min} changeMax={props.changeMax} changeMode={props.changeMode} />
            <Console mode={props.mode} changeCounter={props.changeCounter} setValues={props.setValues} disabledHandler={props.disabledHandler} resetCounter={props.resetCounter} />
        </div>
    )
}