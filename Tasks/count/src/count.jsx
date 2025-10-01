import React,{ useState } from "react"
import './count.css'
function Counter(){

    const [count,setcount] = useState(0);
    
    const increment = () => {
        setcount(count + 1);
    }

    const decrement = () => {
        setcount(count - 1);
    }
    
     const reset = () => {
        setcount(0);
    }
    
    
    return(<div className="container">
        <div className="Name">{count}</div>
        <button className="btn" onClick={decrement}>decrement</button>
        <button className="btn" onClick={reset}>Reset</button>
        <button className="btn" onClick={increment}>Increment</button>


    </div>)

}
export default Counter