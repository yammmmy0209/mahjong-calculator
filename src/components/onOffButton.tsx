import React, { useContext } from 'react'
import { disabledContext } from '../App';

type props = {
        name: string;
        han?: number | string;
        plus: any;
        disabled?: boolean;
    };

const OnOffButton = ({name, han, plus, disabled}: props) => {
    const [activeList, setActiveList] = useContext(disabledContext)

    const handleClick = () => {
        if(activeList[name]){
            setActiveList((prev: any) => ({...prev, [name]: false}));
        }else{
            setActiveList((prev: any) => ({...prev, [name]: true}));
        }
        plus(han, name);
    };

    return(
        <div>
            <button
                className={`yakuButton ${activeList[name]? "on" : ""}`}
                id={name}
                onClick={handleClick}
                disabled={disabled}
            >{name}</button>
        </div>
    );
};

export default OnOffButton;