/* var titles = document.getElementsByClassName('title');
console.log(Array.isArray(titles));
console.log(Array.isArray(Array.from(titles)));
Array.from(titles).forEach((item)=>{
    console.log(item);
}); */

//Query the DOM
/* const wrap = document.querySelector('#wrapper');
//console.log(wrap);
const wmf = document.querySelector('#book-list li:nth-child(2) .name');
console.log(wmf);
const books = document.querySelectorAll('#book-list .name');
//console.log(books);
Array.from(books).forEach((book)=>{

    console.log(book);
}); */

//innerHTML and TextContent modify
const bookList = document.querySelectorAll('#book-list li .name');
console.log(bookList);
bookList.forEach(function(book){
    console.log(book.textContent);
    book.textContent += ' (text)';
});

const books = document.querySelector('#book-list');
console.log(books.innerHTML);
books.innerHTML += '<h2>All text is Replaced</h2>';