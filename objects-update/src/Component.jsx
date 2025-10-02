import { useState } from "react"

function Mycomp() {
    const [car, setCar] = useState({
        year: 2021,
        make: "Ford",
        model: "Mustang",
    });

    function handle(event) {
        const { name, value, type } = event.target;
        setCar(car => ({
            ...car,
            [name]: type === "number" ? Number(value) : value
        }));
    }

    return (
        <div>
            <p>My favourite car is : {car.year} {car.make} {car.model}</p>
            <input type="number" name="year" value={car.year} onChange={handle} /><br />
            <input type="text" name="make" value={car.make} onChange={handle} /><br />
            <input type="text" name="model" value={car.model} onChange={handle} />
        </div>
    );
}

export default Mycomp;