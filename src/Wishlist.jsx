import React, { useState, useEffect } from 'react';
import "./App.css";
import Wishlistinput from './components/Wishlistinput';
import Wish from './components/Wish';

function Wishlist() {
  const [listWish, setListwish] = useState([]);


  useEffect(() => {
    const savedWishes = localStorage.getItem('wishlist');
    if (savedWishes) {
      setListwish(JSON.parse(savedWishes));
      console.log("Loaded from localStorage:", savedWishes);
    }
  }, []);

  
  useEffect(() => {
    if (listWish.length > 0) {
      console.log("Saving to localStorage:", listWish); 
      localStorage.setItem('wishlist', JSON.stringify(listWish));
    }
  }, [listWish]);

  
  const addList = (inputText) => {
    if (inputText !== '') {
      const updatedList = [...listWish, inputText];
      setListwish(updatedList);
      console.log("Updated listWish:", updatedList);
    }
  };

  
  const deleteListItem = (key) => {
    const newListWish = [...listWish];
    newListWish.splice(key, 1);
    setListwish(newListWish);
  };

  
  const updateItem = (index, newText) => {
    const updatedList = [...listWish];
    updatedList[index] = newText;  
    setListwish(updatedList)
  };

  return (
    <div className="main-container">
      <div className="center-container">
        <Wishlistinput addList={addList} />
        <h1 className="app-heading">Wishlist</h1>
        <hr />
        {listWish.map((listItem, i) => (
          <Wish
            key={i}
            index={i}
            item={listItem}
            deleteItem={deleteListItem}
            updateItem={updateItem} 
          />
        ))}
      </div>
    </div>
  );
}

export default Wishlist;


// import React, { useState } from 'react';
// import "./App.css"
// import Wishlistinput from './components/Wishlistinput'
// import Wish from './Wish';

// function Wishlist() {
//   const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']); // Initial items
//   let addList = (inputText)=>{
//     if (inputText!=='')
//          setListwish([...listWish, inputText]);
//       }
//   const deleteItem = (index) => {
//     const newItems = items.filter((item, i) => i !== index); // Remove item at index
//     setItems(newItems); // Update state
//   };

//   return (
//     <div className="wishlist-container">
//       <h2 className="app-heading">My Wishlist</h2>
//       <ul>
//         {items.map((item, index) => (
//           <Wish key={index} index={index} item={item} deleteItem={deleteItem} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Wishlist;
// import React, { useState } from 'react';
// import Wish from './Wish';
// import './App.css'; // Ensure your CSS file is imported

// function Wishlist() {
//   const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']); // Initial items

//   const deleteItem = (index) => {
//     const newItems = items.filter((item, i) => i !== index); // Remove item at index
//     setItems(newItems); // Update state
//   };

//   return (
//     <div className="wishlist-container">
//       <h2 className="app-heading">My Wishlist</h2>
//       <ul>
//         {items.map((item, index) => (
//           <Wish key={index} index={index} item={item} deleteItem={deleteItem} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Wishlist;