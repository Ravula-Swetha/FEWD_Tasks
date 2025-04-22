function Props(props){
    return(
        <>
        <h1>Props Example</h1>
        <p>Props are used to send information from parent to child component</p>
        <h1>Hello {props.name}</h1>
        <h1>Welcome to {props.college}</h1>
        <hr></hr>
        </>
    )
}

export default Props;