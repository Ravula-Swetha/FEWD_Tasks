function DestructingArrays(){
    let fruits = ["Apple", "Orange", "Grapes", "Banane", "Mango", "Watermelon"];
    let [first, second, ...rest] = fruits;
    return(
        <>
        <h1>Destructing: Arrays</h1>
        <h3>Fruits: {[first]}</h3>
        <h3>{[second]}</h3>
        <h3>{[rest]}</h3>
        <hr></hr>
        </>
    )
}


export default DestructingArrays;