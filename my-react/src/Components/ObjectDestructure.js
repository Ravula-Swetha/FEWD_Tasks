const books = {
    "title" : "Almond",
    "published" : 2018,
    "genre" : "Psychology"
}
function ObjectDestructure(){
    let {title, published, genre} = books;
    return(
       
        <>
        <h1>Destructing: Objects</h1>
        <h3>Book Title: {[title]}</h3>
        <h3>Publiched: {[published]}</h3>
        <h3>Genre: {[genre]}</h3>
        <hr></hr>
        </>
    )
}

export default ObjectDestructure;