import React, { useState } from "react";

function MyLearn() {
    const [foods, setFoods] = useState(["Apple", "Banana", "Kiwi"]);

    function handleAdd() {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods([...foods ,newFood]);
    }
    function handleremovefood(index){

        // _ is for ignorance
        setFoods(foods.filter((_,i) => i !== index))

    }

    return (
        <div>
            <h2>List Of Foods</h2>
            <ul>
                {foods.map((food, index) => <li key ={index} onClick={()=>handleremovefood(index)}>{food}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name"/>
            <button onClick={handleAdd}>Add food</button>
        </div>
    );
}

export default MyLearn;