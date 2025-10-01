import React, { useState } from "react";

function Mycomponent() {
  const [name, setname] = useState("");
  const[quantity,setquantity] = useState();
  const [comment,setcomment] = useState("");

  function handle(event) {
    setname(event.target.value);
  }

  function handler(event){
    setquantity(event.target.value);
  }

  function handerles(event){
    setcomment(event.target.value);
  }

  return (
    <div>
      <p>Name : {name}</p>
      <input type="text" value={name} onChange={handle} />

      <p>Quantity : {quantity}</p>
      <input type="number" value={quantity} onChange={handler}/>

      <p>Comment : {comment}</p>
      <textarea name={comment} onChange={handerles} placeholder="Enter Your text"></textarea>

    </div>
  );
}
export default Mycomponent;
