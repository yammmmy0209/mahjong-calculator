import React, { createContext, useState } from 'react';
import './App.css';
import YakuButtons from './components/yakuButtons'

export const disabledContext = createContext<any>({});

function App() {
  const [activeList, setActiveList] = useState({
    "立直": false,
    "一発": false,
    "門前清自摸和": false,
    "平和": false,
    "断么九": false,
    "一盃口": false,
    "役牌:場風牌": false,
    "役牌:自風牌": false,
    "役牌:白": false,
    "役牌:發": false,
    "役牌:中": false,
    "嶺上開花": false,
    "槍槓": false,
    "海底摸月": false,
    "河底撈魚": false,
    "三色同順": false,
    "三色同刻": false,
    "一気通貫": false,
    "混全帯么九": false,
    "七対子": false,
    "対々和": false,
    "三暗刻": false,
    "混老頭": false,
    "三槓子": false,
    "小三元": false,
    "ダブル立直": false,
    "混一色": false,
    "純全帯么九": false,
    "二盃口": false,
    "清一色": false,
    "国士無双": false,
    "四暗刻": false,
    "大三元": false,
    "字一色": false,
    "小四喜": false,
    "緑一色": false,
    "清老頭": false,
    "四槓子": false,
    "九蓮宝燈": false,
    "天和": false,
    "地和": false,
    "大四喜": false,
    "国士無双13面待ち": false,
    "四暗刻単騎": false,
    "純正九蓮宝燈": false,
})


  return (
    <div className="App">
      <div>
        <disabledContext.Provider value={[activeList, setActiveList]}>
          <YakuButtons/>
        </disabledContext.Provider>
      </div>
    </div>
  );
}

export default App;