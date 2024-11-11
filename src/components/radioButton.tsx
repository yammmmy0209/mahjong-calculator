import React from "react";

type props = {
    hora: string;
    menzen: boolean;
    parent: string;
    handleHora: any;
    handleMenzen: any;
    handleParent: any;
    handleReset: any;
}

const RadioButton = ({hora, menzen, parent, handleHora, handleMenzen, handleParent, handleReset}: props) => {

    return(
        <>
        <div className={"radio"} style={{display: 'inline-block'}}>
            <label key={5}><input
                type="radio"
                name="radio3"
                onClick={() => handleParent("child")}
                checked={parent === "child"}
            />子</label>
            <label key={6}><input
                type="radio"
                name="radio3"
                onClick={() => handleParent("parent")}
                checked={parent === "parent"}
            />親</label>
        </div>
        <div className="radio" style={{display: 'inline-block'}}>
            <label key={1}><input
            type="radio"
            name="radio1"
            onClick={() => {
                handleHora("tsumo");
                handleReset();
            }}
            checked={hora === "tsumo"}
        />ツモ</label>
            <label key={2}><input
                type="radio"
                name="radio1"
                onClick={() => {
                    handleHora("ron");
                    handleReset();
                }}
                checked={hora === "ron"}
            />ロン</label>
        </div>
        <div className="radio" style={{display: 'inline-block'}}>
            <label key={3}><input
                type="radio"
                name="radio2"
                onClick={() => {
                    handleMenzen(true);
                    handleReset();
                }}
                checked={menzen}
            />門前</label>
            <label key={4}><input
                type="radio"
                name="radio2"
                onClick={() => {
                    handleMenzen(false);
                    handleReset();
                }}
                checked={!menzen}
            />副露</label>
        </div>
        </>
    );
};

export default RadioButton;