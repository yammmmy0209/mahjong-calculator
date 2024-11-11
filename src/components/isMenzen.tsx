import React, { useContext } from "react";
import OnOffButton from "./onOffButton";
import { FuContext, HanContext, YakumanContext } from "./yakuButtons";
import { disabledContext } from "../App";
import { yakuList, yakumanList } from "./yakuList";

type props = {
    key: number;
    tsumo: boolean;
}

const IsMenzen = ({key, tsumo}: props) => {
    const [, setHan] = useContext(HanContext);
    const [, setYakuman] = useContext(YakumanContext);
    const [, setFu] = useContext(FuContext);
    const [activeList, setActiveList] =useContext(disabledContext);

    const handleClick = (hanNum: number|string, name: string) => {
        if(activeList[name]){
            if(typeof hanNum === "string"){
                setYakuman((prev: number) => prev-Number(hanNum));
            }else{
                setHan((prev: number) => prev-hanNum);
                if(name === "立直" || name === "ダブル立直"){
                    if(activeList["一発"]){
                        setActiveList((prev: any) => ({...prev, "一発": false}));
                        setHan((prev: number) => prev-1);
                    }
                }
                if(name === "平和" || name === "七対子"){
                    setFu(30);
                }
            }
        }else{
            if(typeof hanNum === "string"){
                setYakuman((prev: number) => prev+Number(hanNum));
            }else{
                setHan((prev: number) => prev+hanNum);
                if(tsumo && !activeList["門前清自摸和"] && name !== "門前清自摸和"){
                    setActiveList((prev: any) => ({...prev, "門前清自摸和": true}));
                    setHan((prev: number) => prev+1);
                }
                if(name === "平和"){
                    setFu(20);
                }
                if(name === "一発"){
                    if(activeList["嶺上開花"]){
                        setActiveList((prev: any) => ({ ...prev, "嶺上開花": false }));
                        setHan((prev: number) => prev-1);
                    }
                }
                if(name === "七対子"){
                    setFu(25);
                }
            }
        }
    }

    const yakuhai = activeList["役牌:場風牌"] || activeList["役牌:自風牌"] || activeList["役牌:白"] || activeList["役牌:發"] || activeList["役牌:中"];

    const hasYaku = yakuList.some(yaku => activeList[yaku]);

    const isYakuman = yakumanList.some(yaku =>activeList[yaku]);

    return(
        <div className={"buttons"}>
            <h2>1翻</h2>
            <div className={'buttonBox'}>
                <OnOffButton key={key+1} han={1} plus={handleClick} name="立直" disabled={activeList["ダブル立直"] || isYakuman}/>
                <OnOffButton key={key+2} han={1} plus={handleClick} name="一発" disabled={(!activeList["立直"] && !activeList["ダブル立直"]) || isYakuman}/>
                <OnOffButton key={key+3} han={1} plus={handleClick} name="門前清自摸和" disabled={!tsumo || isYakuman}/>
                <OnOffButton key={key-3} han={1} plus={handleClick} name="平和" disabled={yakuhai || activeList["七対子"] || activeList["三色同刻"] || isYakuman}/>
                <OnOffButton key={key+4} han={1} plus={handleClick} name="断么九" disabled={activeList["清一色"] || activeList["混全帯么九"] || activeList["純全帯么九"] || activeList["一気通貫"] || activeList["混老頭"] || activeList["混一色"] || yakuhai || isYakuman}/>
                <OnOffButton key={key+5} han={1} plus={handleClick} name="一盃口"disabled={activeList["二盃口"] || activeList["三槓子"] || activeList["混老頭"] || activeList["三暗刻"] || activeList["対々和"] || activeList["七対子"] || activeList["三色同刻"] || isYakuman}/>
                <OnOffButton key={key+6} han={1} plus={handleClick} name="役牌:場風牌" disabled={activeList["平和"] || activeList["断么九"] || activeList["七対子"] || activeList["清一色"] || activeList["純全帯么九"] || isYakuman}/>
                <OnOffButton key={key+65} han={1} plus={handleClick} name="役牌:自風牌"disabled={activeList["平和"] || activeList["断么九"] || activeList["七対子"] || activeList["清一色"] || activeList["純全帯么九"] || isYakuman}/>
                <OnOffButton key={key+68} han={1} plus={handleClick} name="役牌:白" disabled={(activeList["役牌:發"] && activeList["役牌:中"]) || activeList["平和"] || activeList["断么九"] || activeList["七対子"] || activeList["清一色"] || activeList["純全帯么九"] || isYakuman}/>
                <OnOffButton key={key+69} han={1} plus={handleClick} name="役牌:發" disabled={(activeList["役牌:白"] && activeList["役牌:中"]) || activeList["平和"] || activeList["断么九"] || activeList["七対子"] || activeList["清一色"] || activeList["純全帯么九"] || isYakuman}/>
                <OnOffButton key={key+70} han={1} plus={handleClick} name="役牌:中" disabled={(activeList["役牌:發"] && activeList["役牌:白"]) || activeList["平和"] || activeList["断么九"] || activeList["七対子"] || activeList["清一色"] || activeList["純全帯么九"] || isYakuman}/>
                <OnOffButton key={key+7} han={1} plus={handleClick} name="嶺上開花" disabled={activeList["平和"] || activeList["槍槓"] || activeList["一発"] || activeList["七対子"] || !tsumo || isYakuman}/>
                <OnOffButton key={key+8} han={1} plus={handleClick} name="槍槓" disabled={activeList["河底撈魚"] || activeList["嶺上開花"] || tsumo || isYakuman}/>
                <OnOffButton key={key+9} han={1} plus={handleClick} name="海底摸月" disabled={activeList["河底撈魚"] || activeList["槍槓"] || !tsumo || isYakuman}/>
                <OnOffButton key={key+10} han={1} plus={handleClick} name="河底撈魚" disabled={activeList["海底摸月"] || activeList["槍槓"] || tsumo || isYakuman}/>
            </div>
            <h2>2翻</h2>
            <div className={'buttonBox'}>
                <OnOffButton key={key+11} han={2} plus={handleClick} name="三色同順" disabled={activeList["小三元"] || activeList["三槓子"] || activeList["混老頭"] || activeList["三暗刻"] || activeList["対々和"] || activeList["七対子"] || activeList["三色同刻"] || activeList["一気通貫"] || isYakuman}/>
                <OnOffButton key={key+12} han={2} plus={handleClick} name="三色同刻" disabled={activeList["平和"] || activeList["二盃口"] || activeList["七対子"] || activeList["三色同順"] || activeList["一気通貫"] || activeList["一盃口"] || isYakuman}/>
                <OnOffButton key={key+13} han={2} plus={handleClick} name="一気通貫" disabled={activeList["混全帯么九"] || activeList["純全帯么九"] || activeList["小三元"] || activeList["三槓子"] || activeList["三暗刻"] || activeList["対々和"] || activeList["七対子"] || activeList["三色同順"] || activeList["三色同刻"] || activeList["断么九"] || isYakuman}/>
                <OnOffButton key={key+14} han={2} plus={handleClick} name="混全帯么九" disabled={activeList["清一色"] || activeList["一気通貫"] || activeList["純全帯么九"] || activeList["混老頭"] || activeList["断么九"] || isYakuman}/>
                <OnOffButton key={key+15} han={2} plus={handleClick} name="七対子" disabled={activeList["平和"] || activeList["三槓子"] || activeList["混老頭"] || activeList["三暗刻"] || activeList["対々和"] || activeList["三色同順"] || activeList["三色同刻"] || activeList["一気通貫"] || activeList["一盃口"] || activeList["二盃口"] || yakuhai || isYakuman}/>
                <OnOffButton key={key+16} han={2} plus={handleClick} name="対々和" disabled={activeList["平和"] || activeList["二盃口"] || activeList["三色同順"] || activeList["一気通貫"] || activeList["七対子"] || activeList["一盃口"] || isYakuman}/>
                <OnOffButton key={key+17} han={2} plus={handleClick} name="三暗刻" disabled={activeList["平和"] || activeList["二盃口"] || activeList["三色同順"] || activeList["一気通貫"] || activeList["七対子"] || activeList["一盃口"] || isYakuman}/>
                <OnOffButton key={key+18} han={2} plus={handleClick} name="混老頭" disabled={activeList["平和"] || activeList["純全帯么九"] || activeList["清一色"] || activeList["二盃口"] || activeList["三色同順"] || activeList["一気通貫"] || activeList["混全帯么九"] || activeList["断么九"] || activeList["一盃口"] || isYakuman}/>
                <OnOffButton key={key+19} han={2} plus={handleClick} name="三槓子" disabled={activeList["平和"] || activeList["二盃口"] || activeList["三色同順"] || activeList["一気通貫"] || activeList["七対子"] || activeList["一盃口"] || isYakuman}/>
                <OnOffButton key={key+20} han={2} plus={handleClick} name="小三元" disabled={activeList["平和"] || activeList["清一色"] || activeList["三色同順"] || activeList["一気通貫"] || activeList["三色同刻"] || activeList["七対子"] || activeList["断么九"] || isYakuman}/>
                <OnOffButton key={key+21} han={2} plus={handleClick} name="ダブル立直" disabled={activeList["立直"] || isYakuman}/>
            </div>
            <h2>3翻</h2>
            <div className={'buttonBox'}>
                <OnOffButton key={key+22} han={3} plus={handleClick} name="混一色" disabled={activeList["清一色"] || activeList["断么九"] || activeList["純全帯么九"] || isYakuman}/>
                <OnOffButton key={key+23} han={3} plus={handleClick} name="純全帯么九" disabled={activeList["混老頭"] || activeList["一気通貫"] || activeList["断么九"] || activeList["混全帯么九"] || activeList["七対子"] || yakuhai || isYakuman}/>
                <OnOffButton key={key+24} han={3} plus={handleClick} name="二盃口" disabled={activeList["小三元"] || activeList["三槓子"] || activeList["混老頭"] || activeList["三暗刻"] || activeList["対々和"] || activeList["一気通貫"] || activeList["三色同順"] || activeList["三色同刻"] || activeList["七対子"] || activeList["一盃口"] || isYakuman}/>
            </div>
            <h2>6翻</h2>
            <div className='buttonBox'>
                <OnOffButton key={key+25} han={6} plus={handleClick} name="清一色" disabled={activeList["混一色"] || activeList["小三元"] || activeList["混全帯么九"] || activeList["純全帯么九"] || yakuhai || isYakuman}/>
            </div>
            <h2>役満</h2>
            <div className='buttonBox'>
                <OnOffButton key={key+26} han={"1"} plus={handleClick} name="国士無双"disabled={yakumanList.filter((value) => value !== "国士無双" && value !== "天和" && value !== "地和").some(yaku => activeList[yaku]) || hasYaku}/>
                <OnOffButton key={key+27} han={"1"} plus={handleClick} name="四暗刻" disabled={!tsumo || activeList["四暗刻単騎"] || activeList["国士無双"] || activeList["九蓮宝燈"] || activeList["国士無双13面待ち"] || activeList["純正九蓮宝燈"] || hasYaku}/>
                <OnOffButton key={key+28} han={"1"} plus={handleClick} name="大三元" disabled={activeList["国士無双"] || activeList["小四喜"] || activeList["緑一色"] || activeList["清老頭"] || activeList["九蓮宝燈"] || activeList["大四喜"] || activeList["国士無双13面待ち"] || activeList["純正九蓮宝燈"] || hasYaku}/>
                <OnOffButton key={key+29} han={"1"} plus={handleClick} name="字一色" disabled={activeList["国士無双"] || activeList["緑一色"] || activeList["清老頭"] || activeList["九蓮宝燈"] || activeList["国士無双13面待ち"] || activeList["純正九蓮宝燈"] || hasYaku}/>
                <OnOffButton key={key+30} han={"1"} plus={handleClick} name="小四喜" disabled={activeList["大四喜"] || activeList["国士無双"] || activeList["大三元"] || activeList["緑一色"] || activeList["清老頭"] || activeList["九蓮宝燈"] || activeList["国士無双13面待ち"] || activeList["純正九蓮宝燈"] || hasYaku}/>
                <OnOffButton key={key+31} han={"1"} plus={handleClick} name="緑一色" disabled={activeList["国士無双"] || activeList["大三元"] || activeList["字一色"] || activeList["小四喜"] || activeList["清老頭"] || activeList["九蓮宝燈"] || activeList["大四喜"] || activeList["国士無双13面待ち"] || activeList["純正九蓮宝燈"] || hasYaku}/>
                <OnOffButton key={key+32} han={"1"} plus={handleClick} name="清老頭" disabled={activeList["国士無双"] || activeList["大三元"] || activeList["字一色"] || activeList["小四喜"] || activeList["緑一色"] || activeList["九蓮宝燈"] || activeList["大四喜"] || activeList["国士無双13面待ち"] || activeList["純正九蓮宝燈"] || hasYaku}/>
                <OnOffButton key={key+33} han={"1"} plus={handleClick} name="四槓子" disabled={activeList["天和"] || activeList["地和"] || activeList["国士無双"] || activeList["九蓮宝燈"] || activeList["国士無双13面待ち"] || activeList["純正九蓮宝燈"] || hasYaku}/>
                <OnOffButton key={key+34} han={"1"} plus={handleClick} name="九蓮宝燈" disabled={yakumanList.filter((value) => value !== "九蓮宝燈" && value !== "天和" && value !== "地和").some(yaku => activeList[yaku]) || hasYaku}/>
                <OnOffButton key={key+35} han={"1"} plus={handleClick} name="天和" disabled={!tsumo || activeList["地和"] || activeList["四槓子"] || hasYaku}/>
                <OnOffButton key={key+36} han={"1"} plus={handleClick} name="地和" disabled={!tsumo || activeList["天和"] || activeList["四槓子"] || hasYaku}/>
            </div>
            <h2>2倍役満</h2>
            <div className='buttonBox'>
                <OnOffButton key={key+37} han={"2"} plus={handleClick} name="大四喜" disabled={activeList["小四喜"] || activeList["国士無双"] || activeList["大三元"] || activeList["緑一色"] || activeList["清老頭"] || activeList["九蓮宝燈"] || activeList["国士無双13面待ち"] || activeList["純正九蓮宝燈"] || hasYaku}/>
                <OnOffButton key={key+38} han={"2"} plus={handleClick} name="国士無双13面待ち" disabled={yakumanList.filter((value) => value !== "国士無双13面待ち" && value !== "天和" && value !== "地和").some(yaku => activeList[yaku]) || hasYaku}/>
                <OnOffButton key={key+39} han={"2"} plus={handleClick} name="四暗刻単騎" disabled={activeList["四暗刻"] || activeList["国士無双"] || activeList["九蓮宝燈"] || activeList["国士無双13面待ち"] || activeList["純正九蓮宝燈"] || hasYaku}/>
                <OnOffButton key={key+40} han={"2"} plus={handleClick} name="純正九蓮宝燈" disabled={yakumanList.filter((value) => value !== "純正九蓮宝燈" && value !== "天和" && value !== "地和").some(yaku => activeList[yaku]) || hasYaku}/>
            </div>
        </div>
    );
};

export default IsMenzen;