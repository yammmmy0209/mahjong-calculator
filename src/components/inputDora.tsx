import React, { useContext, useEffect, useState } from "react";
import { disabledContext } from "../App";

type props = {
    key: number;
    onInput: any;
}

const InputDora = ({key, onInput}: props) => {
    const [activeList, ] = useContext(disabledContext);
    const [ura, setUra] = useState(0);

    useEffect(() => {
        setUra(0);
        onInput();
// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeList])

    const handleClick = (e:any) => {
        setUra(e.target.value);
        onInput();
    }

    return(
        <>
            <div className="inputDora">
                <p>ドラ(赤含む)</p>
                    <input
                        key={key-1}
                        className="inputNum"
                        type="number"
                        id="dora"
                        defaultValue={0}
                        min="0"
                        max="20"
                        onInput={onInput}
                    ></input>
            </div>
            <div className="inputDora">
                <p>裏ドラ</p>
                <input
                    key={key-2}
                    className="inputNum"
                    type="number"
                    id="ura"
                    value={ura}
                    min="0"
                    max="20"
                    onInput={handleClick}
                    disabled={!activeList["立直"]}
                ></input>
            </div>
        </>
    );
};

export default InputDora;
