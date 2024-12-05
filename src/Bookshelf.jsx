import { useState } from "react";

const Bookshelf = (props) => {
  // state vars here
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca yarros" },
    { title: "The Lion, the Witch, and the Wardrobe", author: "C.S. Lewis" },
  ]);

  const [newBook, setnewBook] = useState({ title: "", author: "" });
  // handle fucntions here
  const handleInputChange = (event) => {
    setnewBook({ ...newBook, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, newBook]);
    console.log(books)
    setnewBook({ title: "", author: "" });
  };

  // code to display here
  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title: </label>
            <input type="text" 
            id='title'
            name="title"
            value={newBook.title}
            onChange={handleInputChange} 
            required
            />
            <label htmlFor="author">Author: </label>
            <input type="text"
            id="author"
            name="author"
            value={newBook.author}
            onChange={handleInputChange}
            required
            />
            <button type="submit">Submit</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        
        {books.map((book, index) =>{
            return <div key = {index} className="formDiv">
                
                {book.title}
                {book.author}
                </div>

        })}
            
        
      </div>
    </div>
  );
};

export default Bookshelf;


// // src/components/TodoList.jsx

// const TodoList = (props) => {
    
//     return (
//       <ul>
//         {props.todos.map((todo, index) => {
//           return <li key={index}>{todo}</li>;
//         })}
//       </ul>
//     );
//   };
  
//   export default TodoList;
  