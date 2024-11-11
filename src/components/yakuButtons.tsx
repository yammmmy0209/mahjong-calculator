import React, { createContext, useContext, useState } from 'react'
import InputDora from './inputDora';
import RadioButton from './radioButton';
import IsMenzen from './isMenzen';
import NotMenzen from './notMenzen';
import { disabledContext } from '../App';
import InputFu from './inputFu';
import { animateScroll as scroll } from 'react-scroll'
import judgePoint from './judgePoint';

export type Option={
    value: string;
    label: string;
}

export const HanContext = createContext<any>(0);
export const YakumanContext = createContext<any>(0);
export const FuContext = createContext<any>(0);

const YakuButtons = () => {
    const [menzen, setMenzen] = useState(true);
    const [han, setHan] = useState<any>(0);
    const [yakuman, setYakuman] = useState<any>(0)
    const [result, setResult] = useState<number|string>("");
    const [key, setKey] = useState(Date.now());
    const [hora, setHora] = useState("tsumo");
    const [dora, setDora] = useState<number[]>([0, 0]);
    const [fu, setFu] = useState<any>(30)
    const [parent, setParent] = useState("child");
    const [activeList, setActiveList] = useContext(disabledContext);
    const [copyList, ] = useState(activeList);
    const [point, setPoint] = useState<string>("");

    const handleHora = (option: string) => {
        setHora(option);
    }
    const handleMenzen = (option: boolean) => {
        setMenzen(option)
    }
    const handleParent = (option: string) => {
        setParent(option);
    }

    const handleInputDora = () => {
        const inputDora = document.getElementById("dora") as HTMLInputElement;
        const inputUra = document.getElementById("ura") as HTMLInputElement;
        if(activeList["立直"]){
            setDora([Number(inputDora.value), Number(inputUra.value)]);
        }else{
            setDora([Number(inputDora.value), 0]);
        }
    }

    const inputResult = () => {
        if(yakuman === 0){
            if(fu === 0){
                setResult("error");
                setPoint("");
                setTimeout(() => {
                    scroll.scrollToBottom();
                }, 0);
                return;
            }else if(han+dora[0]+dora[1] <= 4){
                if(han+dora[0]+dora[1] === 4 && fu >= 30){
                    setResult(`${han+dora[0]+dora[1]}翻 ${fu}符　　満貫`);
                }else if(han+dora[0]+dora[1] === 3 && fu >= 60){
                    setResult(`${han+dora[0]+dora[1]}翻 ${fu}符　　満貫`);
                }else{
                    setResult(`${han+dora[0]+dora[1]}翻 ${fu}符`);
                }
            }else if(han+dora[0]+dora[1] === 5){
                setResult(`${han+dora[0]+dora[1]}翻　　満貫`);
            }else if(han+dora[0]+dora[1] === 6 || han+dora[0]+dora[1] === 7 ){
                setResult(`${han+dora[0]+dora[1]}翻　　跳満`);
            }else if(han+dora[0]+dora[1] <= 10){
                setResult(`${han+dora[0]+dora[1]}翻　　倍満`);
            }else if(han+dora[0]+dora[1] < 13){
                setResult(`${han+dora[0]+dora[1]}翻　　三倍満`);
            }else{
                setResult(`${han+dora[0]+dora[1]}翻　　数え役満`);
            }
        }else if(yakuman === 1){
            setResult("役満");
        }else if(yakuman >= 2){
            setResult(`${yakuman}倍役満`);
        }
        judgePoint({setPoint, parent, hora, yakuman, han, fu, dora});
        setTimeout(() => {
            
        }, 0);
        scroll.scrollToBottom();
    }

    const submitDisabled = han === 0 && yakuman === 0

    const displayInputFu = (han+dora[0]+dora[1] < 5 && yakuman === 0) && !(activeList["平和"] && activeList["門前清自摸和"]) && !activeList["七対子"]

    const handleReset = () => {
        setHan(0);
        setYakuman(0);
        setResult("");
        setDora([0, 0]);
        setFu(30);
        setPoint("");
        setKey(Date.now());
        setActiveList(copyList);
        window.scrollTo({top:0});
    }

    return(
        <div className="mainContent">
            <div className='App-header'>
                <h1>麻雀点数計算</h1>
                <div className={`options`}>
                    <button className="resetButton" onClick={() => {
                        handleReset();
                        setMenzen(true);
                        setHora("tsumo")
                        setParent("child")
                    }}>リセット</button>
                    <RadioButton
                        hora={hora}
                        menzen={menzen}
                        parent={parent}
                        handleHora={handleHora}
                        handleMenzen={handleMenzen}
                        handleParent={handleParent}
                        handleReset={handleReset}
                    />
                </div>
            </div>
            <div className={`options`}>
                <InputDora key={key} onInput={handleInputDora}/>
            </div>                
            <FuContext.Provider value={[fu, setFu]}>
                <HanContext.Provider value={[han, setHan]}>
                    <YakumanContext.Provider value={[yakuman, setYakuman]}>
                        {menzen && <IsMenzen key={key} tsumo={hora === "tsumo"}/>}
                        {!menzen && <NotMenzen key={key} tsumo={hora === "tsumo"}/>}
                    </YakumanContext.Provider>
                </HanContext.Provider>
                <div className="fuBox" style={displayInputFu? undefined : {userSelect: 'none', pointerEvents: 'none', opacity: '0.4'}}><InputFu key={key} tsumo={hora === "tsumo"} menzen={menzen} displayInputFu={displayInputFu}/></div>
            </FuContext.Provider>
            <div>
                <button className="submitButton" onClick={() => {inputResult()}} disabled={submitDisabled}>決定</button>
            </div>
            <div className='result'>
                <p>{result}</p>
                <p>{point}</p>
            </div>
        </div>
    );
};

export default YakuButtons;