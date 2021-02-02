import React from "react";
import s from './Console.module.css'
import {ModeType} from "../../../App";
import {Button} from "../../Button/Button";

type ConsoleType = {
    mode: ModeType
    changeCounter: () => void
    setValues: () => void
    disabledHandler: (name: string) => boolean
    resetCounter: () => void
}

export function Console(props: ConsoleType) {
    return (
        <div className={s.console}>
            {props.mode === "incMode" ?
                <IncConsole disabledHandler={props.disabledHandler} setValues={props.setValues}
                            changeCounter={props.changeCounter}/> :
                <SetConsole setValues={props.setValues} disabledHandler={props.disabledHandler}/>}
        </div>
    )
}

type IncConsoleType = {
    setValues: () => void
    disabledHandler: (name: string) => boolean
    changeCounter: () => void
}

function IncConsole(props: IncConsoleType) {
    return <div>
        <div className={s.inc}><Button name={"inc"} callback={props.changeCounter}
                                       disabledHandler={props.disabledHandler}/></div>
        <div className={s.reset}><Button name={"reset"} callback={props.setValues}
                                         disabledHandler={props.disabledHandler}/></div>
    </div>
}

type SetConsoleType = {
    setValues: () => void
    disabledHandler: (name: string) => boolean
}

function SetConsole(props: SetConsoleType) {
    return <div className={s.set}>
        <Button name={"set"} callback={props.setValues} disabledHandler={props.disabledHandler}/>
    </div>
}