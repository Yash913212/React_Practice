import { useState } from "react"
import React from "react"



function component(){

    const [name,setname] = useState("hello");
    const [age,setage] = useState(0);
    const [bool,setbool] = useState(false);

    const btn = () =>{

        setname("Yash")
    }
    const ojas = ()=>{
        setage(age+1)
    }
    const guns = () => {
        setbool(!bool);
    }

    return(<div> 

            <p>Name : {name}</p>
            <button onClick={btn}>Set name</button>

            <p>Age : {age}</p>
            <button onClick={ojas}>Increment age</button>

            <p>IsEmployed : {bool ? "yes" : "no"}</p>
            <button onClick={guns}>Employed Status</button>
    </div>)

}
export default component