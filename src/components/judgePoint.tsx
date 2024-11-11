import React from "react";

type arg = {
    setPoint: React.Dispatch<React.SetStateAction<string>>;
    parent: string;
    hora: string;
    yakuman: number;
    han: number;
    fu: number;
    dora: number[];
}

const judgePoint = ({setPoint, parent, hora, yakuman, han, fu, dora}: arg) => {
    if(parent === "child"){
        if(hora === "tsumo"){
            switch(han+dora[0]+dora[1]){
                case 1:
                    switch(fu){
                        case 30:
                            setPoint("300-500");
                            break;
                        case 40:
                            setPoint("400-700");
                            break;
                        case 50:
                            setPoint("400-800");
                            break;
                        case 60:
                            setPoint("500-1000");
                            break;
                        case 70:
                            setPoint("600-1200");
                            break;
                        case 80:
                            setPoint("700-1300");
                            break;
                        case 90:
                            setPoint("800-1500");
                            break;
                        case 100:
                            setPoint("800-1600");
                            break;
                        default:
                            setPoint("error");
                            break;
                    }
                    break;
                case 2:
                    switch(fu){
                        case 20:
                            setPoint("400-700");
                            break;
                        case 30:
                            setPoint("500-1000");
                            break;
                        case 40:
                            setPoint("700-1300");
                            break;
                        case 50:
                            setPoint("800-1600");
                            break;
                        case 60:
                            setPoint("1000-2000");
                            break;
                        case 70:
                            setPoint("1200-2300");
                            break;
                        case 80:
                            setPoint("1300-2600");
                            break;
                        case 90:
                            setPoint("1500-2900");
                            break;
                        case 100:
                            setPoint("1600-3200");
                            break;
                        case 110:
                            setPoint("1800-3600");
                            break;
                        default:
                            setPoint("error");
                    }
                    break;
                case 3:
                    switch(fu){
                        case 20:
                            setPoint("700-1300");
                            break;
                        case 25:
                            setPoint("800-1600");
                            break;
                        case 30:
                            setPoint("1000-2000");
                            break;
                        case 40:
                            setPoint("1300-2600");
                            break;
                        case 50:
                            setPoint("1600-3200");
                            break;
                        default:
                            if(fu > 110){
                                setPoint("error");
                            }else{
                                setPoint("2000-4000");
                            }
                            break;
                    }
                    break;
                case 4:
                    if(fu === 20){
                        setPoint("1300-2600");
                    }else if(fu === 25){
                        setPoint("1600-3200");
                    }else if(fu >110){
                        setPoint("error");
                    }else{
                        setPoint("2000-4000");
                    }
                    break;
                case 5:
                    setPoint("2000-4000");
                    break;
                default:
                    if(han+dora[0]+dora[1] === 6 || han+dora[0]+dora[1] === 7){
                        setPoint("3000-6000");
                    }else if(han+dora[0]+dora[1] >= 8 && han+dora[0]+dora[1] <= 10){
                        setPoint("4000-8000");
                    }else if(han+dora[0]+dora[1] === 11 || han+dora[0]+dora[1] === 12){
                        setPoint("6000-12000");
                    }else if(han+dora[0]+dora[1] >= 13){
                        setPoint("8000-16000");
                    }else{
                        switch(yakuman){
                            case 1:
                                setPoint("8000-16000");
                                break;
                            case 2:
                                setPoint("16000-32000");
                                break;
                            case 3:
                                setPoint("24000-48000");
                                break;
                            case 4:
                                setPoint("32000-64000");
                                break;
                            case 5:
                                setPoint("40000-80000");
                                break;
                            case 6:
                                setPoint("48000-96000");
                                break;
                            case 0:
                                setPoint("");
                                break;
                            default:
                                setPoint("error");
                                break;
                        }
                    }
                    break;
            }
        }else if(hora === "ron"){
            switch(han+dora[0]+dora[1]){
                case 1:
                    switch(fu){
                        case 30:
                            setPoint("1000");
                            break;
                        case 40:
                            setPoint("1300");
                            break;
                        case 50:
                            setPoint("1600");
                            break;
                        case 60:
                            setPoint("2000");
                            break;
                        case 70:
                            setPoint("2300");
                            break;
                        case 80:
                            setPoint("2600");
                            break;
                        case 90:
                            setPoint("2900");
                            break;
                        case 100:
                            setPoint("3200");
                            break;
                        case 110:
                            setPoint("3600");
                            break;
                        default:
                            setPoint("error");
                            break;
                    }
                    break;
                case 2:
                    switch(fu){
                        case 25:
                            setPoint("1600");
                            break;
                        case 30:
                            setPoint("2000");
                            break;
                        case 40:
                            setPoint("2600");
                            break;
                        case 50:
                            setPoint("3200");
                            break;
                        case 60:
                            setPoint("3900");
                            break;
                        case 70:
                            setPoint("4500");
                            break;
                        case 80:
                            setPoint("5200");
                            break;
                        case 90:
                            setPoint("5800");
                            break;
                        case 100:
                            setPoint("6400");
                            break;
                        case 110:
                            setPoint("7100");
                            break;
                        default:
                            setPoint("error");
                            break;
                    }
                    break;
                case 3:
                    switch(fu){
                        case 25:
                            setPoint("3200");
                            break;
                        case 30:
                            setPoint("3900");
                            break;
                        case 40:
                            setPoint("5200");
                            break;
                        case 50:
                            setPoint("6400");
                            break;
                        default:
                            if(fu >110){
                                setPoint("error");
                            }else{
                                setPoint("8000");
                            }
                            break;
                    }
                    break;
                case 4:
                    if(fu === 25){
                        setPoint("6400");
                    }else if(fu >110){
                        setPoint("error");
                    }else{
                        setPoint("8000");
                    }
                    break;
                case 5:
                    setPoint("8000");
                    break;
                default:
                    if(han+dora[0]+dora[1] === 6 || han+dora[0]+dora[1] === 7){
                        setPoint("12000");
                    }else if(han+dora[0]+dora[1] >= 8 && han+dora[0]+dora[1] <= 10){
                        setPoint("16000");
                    }else if(han+dora[0]+dora[1] === 11 || han+dora[0]+dora[1] === 12){
                        setPoint("24000");
                    }else if(han+dora[0]+dora[1] >= 13){
                        setPoint("32000");
                    }else{
                        switch(yakuman){
                            case 1:
                                setPoint("32000");
                                break;
                            case 2:
                                setPoint("64000");
                                break;
                            case 3:
                                setPoint("96000");
                                break;
                            case 4:
                                setPoint("128000");
                                break;
                            case 5:
                                setPoint("160000");
                                break;
                            case 6:
                                setPoint("192000");
                                break;
                            case 0:
                                setPoint("");
                                break;
                            default:
                                setPoint("error")
                                break;
                        }
                    }
                    break;
            }
        }
    }else if(parent === "parent"){
        if(hora === "tsumo"){
            switch(han+dora[0]+dora[1]){
                case 1:
                    switch(fu){
                        case 30:
                            setPoint("500オール");
                            break;
                        case 40:
                            setPoint("700オール");
                            break;
                        case 50:
                            setPoint("800オール");
                            break;
                        case 60:
                            setPoint("1000オール");
                            break;
                        case 70:
                            setPoint("1200オール");
                            break;
                        case 80:
                            setPoint("1300オール");
                            break;
                        case 90:
                            setPoint("1500オール");
                            break;
                        case 100:
                            setPoint("1600オール");
                            break;
                        default:
                            setPoint("error");
                            break;
                    }
                    break;
                case 2:
                    switch(fu){
                        case 20:
                            setPoint("700オール");
                            break;
                        case 30:
                            setPoint("1000オール");
                            break;
                        case 40:
                            setPoint("1300オール");
                            break;
                        case 50:
                            setPoint("1600オール");
                            break;
                        case 60:
                            setPoint("2000オール");
                            break;
                        case 70:
                            setPoint("2300オール");
                            break;
                        case 80:
                            setPoint("2600オール");
                            break;
                        case 90:
                            setPoint("2900オール");
                            break;
                        case 100:
                            setPoint("3200オール");
                            break;
                        case 110:
                            setPoint("3600オール");
                            break;
                        default:
                            setPoint("error");
                            break;
                    }
                    break;
                case 3:
                    switch(fu){
                        case 20:
                            setPoint("1300オール");
                            break;
                        case 25:
                            setPoint("1600オール");
                            break;
                        case 30:
                            setPoint("2000オール");
                            break;
                        case 40:
                            setPoint("2600オール");
                            break;
                        case 50:
                            setPoint("3200オール");
                            break;
                        default:
                            if(fu >110){
                                setPoint("error");
                            }else{
                                setPoint("4000オール");
                            }
                            break;
                    }
                    break;
                case 4:
                    if(fu === 20){
                        setPoint("2600オール");
                    }else if(fu === 25){
                        setPoint("3200オール");
                    }else if(fu >110){
                        setPoint("error");
                    }else{
                        setPoint("4000オール");
                    }
                    break;
                case 5:
                    setPoint("4000オール");
                    break;
                default:
                    if(han+dora[0]+dora[1] === 6 || han+dora[0]+dora[1] === 7){
                        setPoint("6000オール");
                    }else if(han+dora[0]+dora[1] >= 8 && han+dora[0]+dora[1] <= 10){
                        setPoint("8000オール");
                    }else if(han+dora[0]+dora[1] === 11 || han+dora[0]+dora[1] === 12){
                        setPoint("12000オール");
                    }else if(han+dora[0]+dora[1] >= 13){
                        setPoint("16000オール");
                    }else{
                        switch(yakuman){
                            case 1:
                                setPoint("16000オール");
                                break;
                            case 2:
                                setPoint("32000オール");
                                break;
                            case 3:
                                setPoint("48000オール");
                                break;
                            case 4:
                                setPoint("64000オール");
                                break;
                            case 5:
                                setPoint("80000オール");
                                break;
                            case 6:
                                setPoint("96000オール");
                                break;
                            case 0:
                                setPoint("");
                                break;
                            default:
                                setPoint("error")
                                break;
                        }
                    }
                    break;
            }
        }else if(hora === "ron"){
            switch(han+dora[0]+dora[1]){
                case 1:
                    switch(fu){
                        case 30:
                            setPoint("1500");
                            break;
                        case 40:
                            setPoint("2000");
                            break;
                        case 50:
                            setPoint("2400");
                            break;
                        case 60:
                            setPoint("2900");
                            break;
                        case 70:
                            setPoint("3400");
                            break;
                        case 80:
                            setPoint("3900");
                            break;
                        case 90:
                            setPoint("4400");
                            break;
                        case 100:
                            setPoint("4800");
                            break;
                        case 110:
                            setPoint("5300");
                            break;
                        default:
                            setPoint("error");
                            break;
                    }
                    break;
                case 2:
                    switch(fu){
                        case 25:
                            setPoint("2400");
                            break;
                        case 30:
                            setPoint("2900");
                            break;
                        case 40:
                            setPoint("3900");
                            break;
                        case 50:
                            setPoint("4800");
                            break;
                        case 60:
                            setPoint("5800");
                            break;
                        case 70:
                            setPoint("6800");
                            break;
                        case 80:
                            setPoint("7700");
                            break;
                        case 90:
                            setPoint("8700");
                            break;
                        case 100:
                            setPoint("9600");
                            break;
                        case 110:
                            setPoint("10600");
                            break;
                        default:
                            setPoint("error");
                            break;
                    }
                    break;
                case 3:
                    switch(fu){
                        case 25:
                            setPoint("4800");
                            break;
                        case 30:
                            setPoint("5800");
                            break;
                        case 40:
                            setPoint("7700");
                            break;
                        case 50:
                            setPoint("9600");
                            break;
                        default:
                            if(fu >110){
                                setPoint("error");
                            }else{
                                setPoint("12000");
                            }
                            break;
                    }
                    break;
                case 4:
                    if(fu === 25){
                        setPoint("9600");
                    }else if(fu >110){
                        setPoint("error");
                    }else{
                        setPoint("12000");
                    }
                    break;
                case 5:
                    setPoint("12000");
                    break;
                default:
                    if(han+dora[0]+dora[1] === 6 || han+dora[0]+dora[1] === 7){
                        setPoint("18000");
                    }else if(han+dora[0]+dora[1] >= 8 && han+dora[0]+dora[1] <= 10){
                        setPoint("24000");
                    }else if(han+dora[0]+dora[1] === 11 ||han+dora[0]+dora[1] === 12){
                        setPoint("36000");
                    }else if(han+dora[0]+dora[1] >= 13){
                        setPoint("48000");
                    }else{
                        switch(yakuman){
                            case 1:
                                setPoint("48000");
                                break;
                            case 2:
                                setPoint("96000");
                                break;
                            case 3:
                                setPoint("144000");
                                break;
                            case 4:
                                setPoint("192000");
                                break;
                            case 5:
                                setPoint("240000");
                                break;
                            case 6:
                                setPoint("288000");
                                break;
                            case 0:
                                setPoint("");
                                break;
                            default:
                                setPoint("error");
                                break;
                        }
                    }
                    break;
            }
        }
    }
};

export default judgePoint;