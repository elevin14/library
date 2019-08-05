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

function addBookToLibrary(){
    openAddBookForm();
    console.log('2nd click')
}

function openAddBookForm(){
    let formArea = document.querySelector(".buttons")
    while (formArea.firstChild){
        formArea.removeChild(formArea.firstChild)
    }
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
    console.log('first click')
});

theHobbit = new Book('The Hobbit','J.R.R. Tolkien',295,false)
myLibrary.push(theHobbit)
myLibrary.push(theHobbit)
render()