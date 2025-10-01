
function List(){
    const fruits = ["apple" , "orange" , "banana" , "Guava" , "Yash"];

    const ListItems = fruits.map(fruit => <li>{fruit}</li>)

    return (<ol>{ListItems}</ol>);
}
export default List;