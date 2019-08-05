let myLibrary = [];

function Book(title,author,pages,read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.info = function() {
    let readYet = read ? 'read' : 'not read yet'
    return title + ' by ' + author + ', ' + pages + ' pages, ' + readYet
}

function addBookToLibrary(book){
    myLibrary.push(book)
}

function render(){
    const shelf = document.querySelector('#shelf')
    myLibrary.forEach(book => {
        let newBook = document.createElement("tr")
        newBook.className = "book"
        for (var prop in book){
            let newCol = document.createElement("td")
            newCol.innerText = book[prop]
            newBook.appendChild(newCol)
            if(prop == 'read'){break;}
        }
        newBook.appendChild(document.createElement("button"))
        shelf.appendChild(newBook)
    })
}

document.querySelector('#newBook').addEventListener('click', (e) => {
    addBookToLibrary()
});

theHobbit = new Book('The Hobbit','J.R.R. Tolkien',295,false)
addBookToLibrary(theHobbit)
addBookToLibrary(theHobbit)
render()