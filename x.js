//Create a Book class with the following:

  //Properties:
      //title (string)
      //author (string)
      //pages (number)
      //isAvailable (boolean, default: true)


  //Methods:
      //borrow() - Marks the book as not available
      //returnBook() - Marks the book as available
      //getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      //isLongBook() - Returns true if pages > 300, false otherwise
      class Book{
        title
        author
        pages
        isAvailable=true
        constructor(title,author,pages,isAvailable){
            this.title=title
            this.author=author
            this.pages=pages
            this.isAvailable=isAvailable
        }
        borrow(){
            if(!this.isAvailable){
                return true
            }return false
        }
        returnBook(){
if(this.isAvailable){
return true
}return false
        }
        getInfo(){
console.log(`book title is ${this.title} author is ${this.author} pages are ${this.pages} `)
        }
        isLongBook(){
if(this.pages>300){
    return true
}return false
        }
      }
let b=new Book("ss","ram",400,true)
b.borrow()
b.returnBook()
b.getInfo()
b.isLongBook()