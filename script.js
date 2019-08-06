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
    console.log('2nd click')
}

function openAddBookForm(){
    let formArea = document.querySelector(".buttons")
    while (formArea.firstChild){
        formArea.removeChild(formArea.firstChild)
    }
    
    formArea.innerHTML += 
    '<form>     <div>       <label for="title">Title:</label >       <input type="text" id="title" name="bookTitle">     </div>     <div>       <label for="author">Author:</label>       <input type="text" id="author" name="bookAuthor">     </div>     <div>       <label for="pages">Pages:</label>       <input type="text" id="pages" name="bookPages">     </div>     <div>         <input type="radio" name="hasRead" value="true"> Has been read<br>    <input type="radio" name="hasRead" value="false" checked> Has not been read<br>     </div>     <div class="button">             <button type="submit" id="submitForm">submit</button>           </div>   </form>';

    document.querySelector('#submitForm').addEventListener('click', (e) => addBookToLibrary());
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
    openAddBookForm()
});

theHobbit = new Book('The Hobbit','J.R.R. Tolkien',295,false)
myLibrary.push(theHobbit)
myLibrary.push(theHobbit)
render()