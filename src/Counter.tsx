import React, {useState} from "react";
import {Buttons} from "./components/Buttons";
import {CountDisplay} from "./components/CounterDisplay";

export const Counter = () => {
    let [count, setCount] = useState<number>(0)


    const onClickIncHandler = () => {
        setCount(count + 1)
    }

    const onClickResetHandler = () => {
        setCount(0)
    }

    let maxCount = 5;

    return (<div className="Counter">
            <CountDisplay count={count} maxCount={maxCount}/>
            <Buttons count={count}
                     maxCount={maxCount}
                     onClickIncHandler={onClickIncHandler}
                     onClickResetHandler={onClickResetHandler}/>
        </div>

    )
}