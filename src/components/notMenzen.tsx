import React, { useContext } from "react";
import OnOffButton from "./onOffButton";
import { HanContext, YakumanContext } from "./yakuButtons";
import { disabledContext } from "../App";
import { yakuList, yakumanList } from "./yakuList";

type props = {
    key: number;
    tsumo: boolean;
}

const NotMenzen = ({key, tsumo}: props) => {
    const [, setHan] = useContext(HanContext);
    const [, setYakuman] = useContext(YakumanContext);
    const [activeList,] =useContext(disabledContext);

    const handleClick = (hanNum: number|string, name: string) => {
        const onOrOff = document.getElementById(name);
        const isOn = onOrOff?.classList.contains("on");
        if(isOn){
            if(typeof hanNum === "string"){
                setYakuman((prev: number) => prev-Number(hanNum));
            }else{
                setHan((prev: number) => prev-hanNum);
            }
        }else{
            if(typeof hanNum === "string"){
                setYakuman((prev: number) => prev+Number(hanNum));
            }else{
                setHan((prev: number) => prev+hanNum);
            }
        }
    }

    const yakuhai = activeList["役牌:場風牌"] || activeList["役牌:自風牌"] || activeList["役牌:白"] || activeList["役牌:發"] || activeList["役牌:中"];

    const hasYaku = yakuList.some(yaku => activeList[yaku]);

    const isYakuman = yakumanList.some(yaku =>activeList[yaku]);

    return(
        <div className="buttons">
            <h2>1翻</h2>
            <div className='buttonBox'>
                <OnOffButton key={key+41} han={1} plus={handleClick} name="断么九" disabled={activeList["清一色"] || activeList["混全帯么九"] || activeList["純全帯么九"] || activeList["一気通貫"] || activeList["混老頭"] || activeList["混一色"] || yakuhai || isYakuman}/>
                <OnOffButton key={key+42} han={1} plus={handleClick} name="役牌:場風牌" disabled={activeList["断么九"] || activeList["七対子"] || activeList["清一色"] || activeList["純全帯么九"] || isYakuman}/>
                <OnOffButton key={key+71} han={1} plus={handleClick} name="役牌:自風牌" disabled={activeList["断么九"] || activeList["七対子"] || activeList["清一色"] || activeList["純全帯么九"] || isYakuman}/>
                <OnOffButton key={key+74} han={1} plus={handleClick} name="役牌:白" disabled={(activeList["役牌:發"] && activeList["役牌:中"]) || activeList["断么九"] || activeList["七対子"] || activeList["清一色"] || activeList["純全帯么九"] || isYakuman}/>
                <OnOffButton key={key+75} han={1} plus={handleClick} name="役牌:發" disabled={(activeList["役牌:白"] && activeList["役牌:中"]) || activeList["断么九"] || activeList["七対子"] || activeList["清一色"] || activeList["純全帯么九"] || isYakuman}/>
                <OnOffButton key={key+76} han={1} plus={handleClick} name="役牌:中" disabled={(activeList["役牌:發"] && activeList["役牌:白"]) || activeList["断么九"] || activeList["七対子"] || activeList["清一色"] || activeList["純全帯么九"] || isYakuman}/>
                <OnOffButton key={key+43} han={1} plus={handleClick} name="嶺上開花" disabled={activeList["槍槓"]|| !tsumo || isYakuman}/>
                <OnOffButton key={key+44} han={1} plus={handleClick} name="槍槓" disabled={activeList["嶺上開花"] || tsumo || isYakuman}/>
                <OnOffButton key={key+45} han={1} plus={handleClick} name="海底摸月" disabled={activeList["河底撈魚"] || !tsumo || isYakuman}/>
                <OnOffButton key={key+46} han={1} plus={handleClick} name="河底撈魚"  disabled={activeList["海底摸月"] || tsumo || isYakuman}/>
                <OnOffButton key={key+47} han={1} plus={handleClick} name="三色同順" disabled={activeList["小三元"] || activeList["三槓子"] || activeList["混老頭"] || activeList["三暗刻"] || activeList["対々和"] || activeList["三色同刻"] || activeList["一気通貫"] || isYakuman}/>
                <OnOffButton key={key+48} han={1} plus={handleClick} name="一気通貫" disabled={activeList["混全帯么九"] || activeList["純全帯么九"] || activeList["小三元"] || activeList["三槓子"] || activeList["三暗刻"] || activeList["対々和"] || activeList["三色同順"] || activeList["三色同刻"] || activeList["断么九"] || isYakuman}/>
                <OnOffButton key={key+49} han={1} plus={handleClick} name="混全帯么九" disabled={activeList["清一色"] || activeList["一気通貫"] || activeList["純全帯么九"] || activeList["混老頭"] || activeList["断么九"] || isYakuman}/>
            </div>
            <h2>2翻</h2>
            <div className='buttonBox'>
                <OnOffButton key={key+50} han={2} plus={handleClick} name="三色同刻" disabled={activeList["三色同順"] || activeList["一気通貫"] || isYakuman}/>
                <OnOffButton key={key+51} han={2} plus={handleClick} name="対々和" disabled={activeList["三色同順"] || activeList["一気通貫"] || isYakuman}/>
                <OnOffButton key={key+52} han={2} plus={handleClick} name="三暗刻" disabled={activeList["三色同順"] || activeList["一気通貫"] || isYakuman}/>
                <OnOffButton key={key+53} han={2} plus={handleClick} name="混老頭"disabled={activeList["純全帯么九"] || activeList["清一色"] || activeList["三色同順"] || activeList["一気通貫"] || activeList["混全帯么九"] || activeList["断么九"] || isYakuman}/>
                <OnOffButton key={key+54} han={2} plus={handleClick} name="三槓子" disabled={activeList["三色同順"] || activeList["一気通貫"] || isYakuman}/>
                <OnOffButton key={key+55} han={2} plus={handleClick} name="小三元" disabled={activeList["清一色"] || activeList["三色同順"] || activeList["一気通貫"] || activeList["三色同刻"] || activeList["断么九"] || isYakuman}/>
                <OnOffButton key={key+56} han={2} plus={handleClick} name="混一色" disabled={activeList["清一色"] || activeList["断么九"] || activeList["純全帯么九"] || isYakuman}/>
                <OnOffButton key={key+57} han={2} plus={handleClick} name="純全帯么九" disabled={activeList["混老頭"] || activeList["一気通貫"] || activeList["断么九"] || activeList["混全帯么九"] || yakuhai || isYakuman}/>
            </div>
            <h2>5翻</h2>
            <div className='buttonBox'>
                <OnOffButton key={key+58} han={5} plus={handleClick} name="清一色" disabled={activeList["混一色"] || activeList["小三元"] || activeList["混全帯么九"] || activeList["純全帯么九"] || yakuhai || isYakuman}/>
            </div>
            <h2>役満</h2>
            <div className='buttonBox'>
                <OnOffButton key={key+59} han={"1"} plus={handleClick} name="大三元"  disabled={activeList["小四喜"] || activeList["緑一色"] || activeList["清老頭"] || activeList["大四喜"] || hasYaku}/>
                <OnOffButton key={key+60} han={"1"} plus={handleClick} name="字一色" disabled={activeList["緑一色"] || activeList["清老頭"] || hasYaku}/>
                <OnOffButton key={key+61} han={"1"} plus={handleClick} name="小四喜" disabled={activeList["大四喜"] || activeList["大三元"] || activeList["緑一色"] || activeList["清老頭"] || hasYaku}/>
                <OnOffButton key={key+62} han={"1"} plus={handleClick} name="緑一色" disabled={activeList["大三元"] || activeList["字一色"] || activeList["小四喜"] || activeList["清老頭"] || activeList["大四喜"] || hasYaku}/>
                <OnOffButton key={key+63} han={"1"} plus={handleClick} name="清老頭" disabled={activeList["大三元"] || activeList["字一色"] || activeList["小四喜"] || activeList["緑一色"] || activeList["大四喜"] || hasYaku}/>
                <OnOffButton key={key+64} han={"1"} plus={handleClick} name="四槓子" disabled={hasYaku}/>
            </div>
            <h2>2倍役満</h2>
            <div className='buttonBox'>
                <OnOffButton key={key} han={"2"} plus={handleClick} name="大四喜" disabled={activeList["小四喜"] || activeList["大三元"] || activeList["緑一色"] || activeList["清老頭"] || hasYaku}/>
            </div>
        </div>
    );
};

export default NotMenzen;