import React, {ChangeEvent} from "react";
import s from './Display.module.css'
import {ModeType} from "../../../App";

type DisplayType = {
    mode: ModeType
    counter: number
    changeMin: (newMin: string) => void
    changeMax: (newMax: string) => void
    changeMode: () => void
    min: number
    max: number
}

export function Display(props: DisplayType) {
    return (
        <div className={s.display}>
            {props.mode === "incMode" ?
                <IncrementModeDisplay counter={props.counter} min={props.min} max={props.max} mode={props.mode}/> :
                <SetModeDisplay max={props.max} min={props.min} changeMax={props.changeMax}
                                changeMin={props.changeMin} changeMode={props.changeMode}/>}
        </div>
    )
}

type IncrementModeDisplayType = {
    counter: number
    min: number
    max: number
    mode: ModeType
}

function IncrementModeDisplay(props: IncrementModeDisplayType) {
    let style = props.min < props.max ? s.display_content : `${s.display_content} ${s.error}`
    if ( props.mode === "setMode") {
        style = props.min < props.max ? s.display_content : `${s.display_content} ${s.error}`
    }
    if ( props.mode === "incMode") {
        style = props.counter < props.max ? s.display_content : `${s.display_content} ${s.error}`
    }

    const errorValue = "Please enter the correct value "
    return (
        <div className={style}>
            {props.min < props.max ? props.counter : errorValue}
        </div>
    )
}

type SetModeDisplayType = {
    min: number
    max: number
    changeMin: (newMin: string) => void
    changeMax: (newMax: string) => void
    changeMode: () => void
}


function SetModeDisplay(props: SetModeDisplayType) {
    let style = props.min < props.max ? s.display_content : `${s.display_content} ${s.error}`
    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newMin = e.target.value
        debugger

        props.changeMin(newMin)

    }
    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newMax = e.currentTarget.value
        debugger
        props.changeMax(newMax)
    }

    return (
        <div className={style}>
            <div>min value: <input type={"number"} value={props.min} onChange={onChangeMinHandler}
                                   onClick={props.changeMode}/></div>
            <div>max value: <input type={"number"} value={props.max} onChange={onChangeMaxHandler}
                                   onClick={props.changeMode}/></div>
        </div>
    )
}