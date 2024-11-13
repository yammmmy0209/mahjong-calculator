import React, { createContext, useContext, useEffect, useState } from "react";
import { FuContext } from "./yakuButtons";
import FuButton from "./fuButton";
import { disabledContext } from "../App";
import { yakuList } from "./yakuList";

type props = {
    key: number;
    tsumo: boolean;
    menzen: boolean;
    displayInputFu: boolean;
}

export const ActiveContext = createContext<any>(0);

const InputFu = ({key, tsumo, menzen, displayInputFu}: props) => {
    const [head, setHead] = useState(0);
    const [wait, setWait] = useState(0);
    const [, setFu] = useContext(FuContext);
    const [activeList, ] =useContext(disabledContext)
    const [active, setActive] = useState<any>({
        "数牌・客風牌": true,
        "自風牌・三元牌": false,
        "連風牌": false,
        "両面・双碰": true,
        "嵌張・辺張・単騎": false
    });

    useEffect(() => {
        if(!displayInputFu){
            Object.keys(active).forEach((key:string) => setActive((prev: any) => ({...prev, [key]: false})));
            setHead(0);
            setWait(0);
        }else{
            if(yakuList.some(yaku => activeList[yaku])){
                return;
            }
            setActive((prev: any) => ({...prev, "数牌・客風牌": true}));
            setActive((prev: any) => ({...prev, "両面・双碰": true}));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeList]);

    const handleHead = (name: string) => {
        if(!active[name]){
            setActive((prev: any) => ({...prev, [name]: true}));
            if(name === "自風牌・三元牌"){
                setActive((prev: any) => ({...prev, "連風牌": false}))
                setActive((prev: any) => ({...prev, "数牌・客風牌": false}))
                setHead(2);
            }else if(name === "連風牌"){
                setActive((prev: any) => ({...prev, "自風牌・三元牌": false}))
                setActive((prev: any) => ({...prev, "数牌・客風牌": false}))
                setHead(4);
            }else if(name === "数牌・客風牌"){
                setActive((prev: any) => ({...prev, "連風牌": false}))
                setActive((prev: any) => ({...prev, "自風牌・三元牌": false}))
                setHead(0);
            }
        }
    }

    const handleWait = (name: string) => {
        if(!active[name]){
            setActive((prev: any) => ({...prev, [name]: true}));
            if(name === "両面・双碰"){
                setActive((prev: any) => ({...prev, "嵌張・辺張・単騎": false}));
                setWait(0);
            }else if(name === "嵌張・辺張・単騎"){
                setActive((prev: any) => ({...prev, "両面・双碰": false}));
                setWait(2);
            }
        }
    }


    const handleInputFu = () => {
        const anko28 = document.getElementById("anko28") as HTMLInputElement;
        const minko28 = document.getElementById("minko28") as HTMLInputElement;
        const ankan28 = document.getElementById("ankan28") as HTMLInputElement;
        const minkan28 = document.getElementById("minkan28") as HTMLInputElement;
        const anko19 = document.getElementById("anko19") as HTMLInputElement;
        const minko19 = document.getElementById("minko19") as HTMLInputElement;
        const ankan19 = document.getElementById("ankan19") as HTMLInputElement;
        const minkan19 = document.getElementById("minkan19") as HTMLInputElement;
        let fuValue = 20+head+wait+Number(anko28.value)*4+Number(minko28.value)*2+Number(ankan28.value)*16+Number(minkan28.value)*8+Number(anko19.value)*8+Number(minko19.value)*4+Number(ankan19.value)*32+Number(minkan19.value)*16;
        if(!tsumo && menzen){
            fuValue += 10;
        }else if(tsumo){
            fuValue += 2;
        }
        if(fuValue > 20 && fuValue <= 30){
            setFu(30);
        }else if(fuValue <= 40){
            setFu(40);
        }else if(fuValue <= 50){
            setFu(50);
        }else if(fuValue <= 60){
            setFu(60);
        }else if(fuValue <= 70){
            setFu(70);
        }else if(fuValue <= 80){
            setFu(80);
        }else if(fuValue <= 90){
            setFu(90);
        }else if(fuValue <= 100){
            setFu(100);
        }else if(fuValue <= 110){
            setFu(110);
        }else{
            setFu(0);
        }
    };

    const disabledStyle = menzen? {opacity: '0.5', userSelect: 'none'}: undefined;


    return(
        <>
            <h3>中張牌(2~8牌)</h3>
            <div className="options">
                <div className="inputFu">
                    <p>暗刻</p>
                    <input
                        key={key-10}
                        className="inputNum"
                        type="number"
                        inputMode="numeric"
                        id="anko28"
                        defaultValue={0}
                        min="0"
                        max="4"
                        onInput={handleInputFu}
                    ></input>
                </div>
                <div className="inputFu">
                    <p>明刻</p>
                    <input
                        key={key-12}
                        className="inputNum"
                        type="number"
                        inputMode="numeric"
                        id="minko28"
                        defaultValue={0}
                        min="0"
                        max="4"
                        onInput={handleInputFu}
                        disabled={menzen}
                        style={disabledStyle as React.CSSProperties}
                    ></input>
                </div>
                <div className="inputFu">
                    <p>暗槓</p>
                    <input
                        key={key-4}
                        className="inputNum"
                        type="number"
                        inputMode="numeric"
                        id="ankan28"
                        defaultValue={0}
                        min="0"
                        max="4"
                        onInput={handleInputFu}
                    ></input>
                </div>
                <div className="inputFu">
                    <p>明槓</p>
                    <input
                        key={key-5}
                        className="inputNum"
                        type="number"
                        inputMode="numeric"
                        id="minkan28"
                        defaultValue={0}
                        min="0"
                        max="4"
                        onInput={handleInputFu}
                        disabled={menzen}
                        style={disabledStyle as React.CSSProperties}
                    ></input>
                </div>
            </div>
            <h3>么九牌(1, 9, 字牌)</h3>
            <div className="options">
                <div className="inputFu">
                    <p>暗刻</p>
                    <input
                        key={key-6}
                        className="inputNum"
                        type="number"
                        inputMode="numeric"
                        id="anko19"
                        defaultValue={0}
                        min="0"
                        max="4"
                        onInput={handleInputFu}
                    ></input>
                </div>
                <div className="inputFu">
                <p>明刻</p>
                    <input
                        key={key-7}
                        className="inputNum"
                        type="number"
                        inputMode="numeric"
                        id="minko19"
                        defaultValue={0}
                        min="0"
                        max="4"
                        onInput={handleInputFu}
                        disabled={menzen}
                        style={disabledStyle as React.CSSProperties}
                    ></input>
                </div>
                <div className="inputFu">
                    <p>暗槓</p>
                    <input
                        key={key-8}
                        className="inputNum"
                        type="number"
                        inputMode="numeric"
                        id="ankan19"
                        defaultValue={0}
                        min="0"
                        max="4"
                        onInput={handleInputFu}
                    ></input>
                </div>
                <div className="inputFu">
                    <p>明槓</p>
                    <input
                        key={key-9}
                        className="inputNum"
                        type="number"
                        inputMode="numeric"
                        id="minkan19"
                        defaultValue={0}
                        min="0"
                        max="4"
                        onInput={handleInputFu}
                        disabled={menzen}
                        style={disabledStyle as React.CSSProperties}
                    ></input>
                </div>
            </div>
            <ActiveContext.Provider value={[active, setActive]}>
                <div>
                    <h3>雀頭</h3>
                    <FuButton key={key+102} name={"数牌・客風牌"} onClick={handleHead}/>
                    <FuButton key={key+100} name={"自風牌・三元牌"} onClick={handleHead}/>
                    <FuButton key={key+101} name={"連風牌"} onClick={handleHead}/>
                </div>
                <div>
                    <h3>待ち</h3>
                    <FuButton key={key+103} name={"両面・双碰"} onClick={handleWait}/>
                    <FuButton key={key+104} name={"嵌張・辺張・単騎"} onClick={handleWait}/>
                </div>
            </ActiveContext.Provider>
        </>
    );
};

export default InputFu;