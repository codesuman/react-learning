import { useState } from "react";

const ButtonSection = () => {
    const handleClick = (e) => {
        console.log(e);
        console.log('Hello...');
    };

    const handleClickWithArgs = (name) => {console.log(`Hello, ${name}`)};

    let [count, setCount] = useState(0);

    const handleClickWithCounter = () => {
        if(count < 3) {
            setCount(count+1);
            console.log(`Count : ${count}`);
        } else {
            console.log(`Count exceeding threshold`);
        }
    };

    return (
        <>
            <button onClick={handleClick}>Click me</button>
            <br/>
            <button onClick={() => handleClickWithArgs('Bob')}>Click me +</button>
            <br/>
            <button onClick={handleClickWithCounter}>Counter Btn : {count}</button>
        </>
    );
}

export default ButtonSection;