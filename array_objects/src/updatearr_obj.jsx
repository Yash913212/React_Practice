import { useState } from "react"

function Newfun(){


    const [cars, setCars] = useState([]);
    const [caryear, setCarYear] = useState(new Date().getFullYear());
    const [carmake, setCarMake] = useState("");
    const [carmodel, setCarModel] = useState("");



    function Addcar() {
        const Newcar = {
            year: caryear,
            make: carmake,
            model: carmodel
        };
        setCars(cars => [...cars, Newcar]);
        // Optionally clear fields after add:
        // setCarYear(new Date().getFullYear());
        // setCarMake("");
        // setCarModel("");

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }
    function Removecar(index){
        setCars(c => c.filter((_,i) => i !== index))

    }
    function yearchange(event) {
        setCarYear(event.target.value);
    }
    function makechange(event) {
        setCarMake(event.target.value);
    }
    function modelchange(event) {
        setCarModel(event.target.value);
    }

    return(<div>
        <h2>List of car objects</h2>
        <ul>
            {cars.map((car, index) => 
                <li key={index} onClick={() => {Removecar(index)}}>
                    {car.year} {car.make} {car.model}
                </li>
            )}
        </ul>
        <input type="number" value={caryear} onChange={yearchange}/><br/>
        <input type="text" value={carmake} onChange={makechange}/><br/>
        <input type="text" value={carmodel} onChange={modelchange}/><br/>

    <button onClick={Addcar}>Add Car</button>



    </div>)

}
export default Newfun