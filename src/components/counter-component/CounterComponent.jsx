import { useState } from "react";

import './CounterComponent.css';
import { sculptureList } from './data.js';

const CounterComponent = () => {
    const [index, setIndex] = useState(0);

    return(
        <div className="container">
            <button onClick={() => setIndex((index-1+sculptureList.length)%sculptureList.length)}>Prev</button>

            <h2>{sculptureList[index].name}</h2>
            <p>{sculptureList[index].description}</p>
            
            <button onClick={() => setIndex((index+1)%sculptureList.length)}>Next</button>
        </div>
    );
}

export default CounterComponent;