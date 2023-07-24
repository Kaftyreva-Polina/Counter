import React from "react";

type ButtonProps = {
    count: number
    maxCount: number
    onClickIncHandler: () => void
    onClickResetHandler: () => void
}
export const Buttons = (props: ButtonProps) => {



    return <div className="Button">
        <button
            className="Button-item"
            disabled={props.count >= props.maxCount}
            onClick={props.onClickIncHandler}>inc
        </button>
        <button
            className="Button-item"
            disabled={props.count === 0}
            onClick={props.onClickResetHandler}
        >reset
        </button>
    </div>
}