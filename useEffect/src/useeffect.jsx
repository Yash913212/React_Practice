import { useState, useEffect } from "react";

function Effect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    function add() {
        setCount(c => c + 1);
    }

    return (
        <>
            <p>Count : {count}</p>
            <button onClick={add}>Add</button>
        </>
    );
}

export default Effect;