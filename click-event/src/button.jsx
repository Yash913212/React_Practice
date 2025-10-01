
function Button() {

    //arguments of the function
    // const click = () => console.log("Hello");

    // const click2 = (name) => console.log(`${name} stop clicking me`)

    // return (<button onClick={click}>Click me</button>);
    // return(<button onClick={() => click2("Yash")}>Click Me</button>)



    //arguments of the function conditions

    // let count = 0;

    // const click = (name) =>{
    //     if(count < 5){
    //         count++;
    //         console.log(`${name} you clicked me ${count} times`)
    //     }else{
    //         console.log(`${name} stop clicking me`)
    //     }
    // } 
    // return(<button onClick={() => click("Hello")}>click me</button>)


    //Event parameter

    // const click = (ele) => ele.target.textContent = "Hey😊😊"
    // return(<button onClick={(ele) => click(ele)}>Click me</button>)

    //Image
    const img = './src/assets/react.svg';

    const click = () => console.log("hey");

    return(<img onClick={click} src={img}></img>)

}
export default Button;