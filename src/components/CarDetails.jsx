import { useState } from "react";

const CarDetails = () => {
    const [car, setCar] = useState({
        year: 2015,
        make: 'Tata',
        model: 'Nexon'
    });

    return(
        <div>
            <p>Car is {car.year}, {car.make} {car.model}</p>

            <input type="number" value={car.year} 
                onChange={(event) => setCar((prevCar) => ({...prevCar, year: event.target.value}))}/>
            
            <input type="text" value={car.make} 
                onChange={(event) => setCar((prevCar) => ({...prevCar, make: event.target.value}))}/>

            <input type="text" value={car.model} 
                onChange={(event) => setCar((prevCar) => ({...prevCar, model: event.target.value}))}/>
        </div>
    );
}

export default CarDetails;