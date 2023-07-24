import React from "react";

type CountDisplayPropsType = {
    count : number
    maxCount: number
}


export const CountDisplay = (props: CountDisplayPropsType) => {
    return <div className="display">
            <span className={props.count === props.maxCount ? "error" :  ""}> {props.count}</span>
         </div>
}

