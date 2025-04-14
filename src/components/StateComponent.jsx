import { useState } from "react";

const StateComponent = () => {
    const [name, setName] = useState('Bob');

    return(
        <>
            <p>{name}</p>
            <button onClick={() => setName('Marley')}>Change Name</button>
        </>
    );
}

export default StateComponent;