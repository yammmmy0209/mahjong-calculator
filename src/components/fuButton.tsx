import React, { useContext } from "react";
import { ActiveContext } from "./inputFu";

type props = {
    name: string;
    onClick: any;
}

const FuButton = ({name, onClick}: props) => {
const [active, ] = useContext(ActiveContext)

const handleClick = () => {
    onClick(name);
}

    return(
        <button
            className={`fuButton ${active[name]? "on" : ""}`}
            id={name}
            onClick={handleClick}
        >{name}</button>
    );
};

export default FuButton;