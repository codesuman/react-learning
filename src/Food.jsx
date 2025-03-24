function Food() {
    const food1 = 'Pizza';
    const food2 = 'Burger';
    const fruits = ['Apple', 'Orange', 'Banana'];

    return(
        <>
            <ul>
                <li>Sandwich</li>
                <li>{food1}</li>
                <li>{food2.toUpperCase()}</li>
            </ul>

            <hr />

            <ul>
                <li>{fruits[0]}</li>
                <li>{fruits[1]}</li>
                <li>{fruits[2]}</li>
            </ul>

            <hr />

            <ul>
                {fruits.map(f => <li>{f}</li>)}
            </ul>
        </>
    );
}

export default Food;