//this page is intended to be its own page, and to handle everything 
import React, { useState, useEffect } from "react";
import API from '../utils/API';
import axios from 'axios';

function Search() {
    const [items, setItems] = useState([])
    const [result, setResult] = useState([])
  
    useEffect(()=> {
      initialize()
    },[])
  
function initialize() {
  API.makeCall()
  .then(res => setItems(res.data)
    )
    .catch(err => console.log(err));
    };

    function handleChange(event){
const book = event.target.value;
setItems(book);
console.log(items)
    }

    function handleSubmit(event){
event.preventDefault();
axios.get("https://www.googleapis.com/books/v1/volumes?q="+items)
.then(res => {
    console.log(res.data.items)
    setResult(res.data.items)
    console.log(result)
})
    }

    function saveBook(event) {
        event.preventDefault();
        API.saveBook({
          title: this.volumeInfo.title,
          author: this.volumeInfo.authors,
          description: this.volumeInfo.description,
          link: this.volumeInfo.infoLink,
          image: this.volumeInfo.imageLinks.smallThumbnail,
        })
          .then()
          .catch(err => console.log(err));
      };



return(
        <div className='container'>
            <h1>Search for Book</h1>
            <form onSubmit={handleSubmit}>
<input
type='text'
onChange={handleChange}
className='form-control'
autoComplete='off'
/>
<button type='submit' className='srhbtn'>Make Search!</button>
</form>
{result.map(book => (
    <div>
        <p>Title: {book.volumeInfo.title}</p>
        <p>Author: {book.volumeInfo.authors}</p>
        <p>Description: {book.volumeInfo.description}</p>
        <p>Link: {book.volumeInfo.infoLink}</p>
    <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.title}/>
    <button className="savebtn" onClick={saveBook}>Save</button>
    </div>
))}
        </div>
    )
}

export default Search;