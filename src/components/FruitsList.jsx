import { useState } from "react";

const FruitsList = () => {
    const [fruits, setFruits] = useState(['Apple', 'Banana', 'Water Melon']);
    const [inputFruit, setInputFruit] = useState('');

    return(
        <>
            <ul>
                {
                    fruits.map((fruit, idx) => <li key={idx} onClick={() => {
                        fruits.splice(idx, 1);
                        setFruits([...fruits]);
                    }}>{idx}, {fruit}</li>)
                }
            </ul>

            <input type="text" value={inputFruit} onChange={(event) => setInputFruit(event.target.value)}/>

            <button onClick={() => {
                setFruits((prevFruits) => [...prevFruits, inputFruit]);
                setInputFruit('');
            }}>Add</button>
        </>
    )
}

export default FruitsList;