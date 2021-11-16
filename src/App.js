import { useState } from 'react';
import './App.css';

function App() {

  //initialize states
  const [inputText, setInputText] = useState("");
  const [inputQuantity, setInputQuantity] = useState();
  const [listObjects, setListObjects] = useState([]);

  //adress new item input
  const newItemHandler = (e) => {
    if(e.target.value.length > 0) {
      setInputText(e.target.value);
    }
  }

  //adress the quantity
  const itemQuantityHandler = (e) => {
      setInputQuantity(e.target.value);
  }

  //Add the new entry to the list
  const addItemHandler = (e) => {
    e.preventDefault();
    setListObjects([...listObjects,
    { text: inputText,
      quantity: inputQuantity,
      picked: false,
      id: Math.random() * 1000
    }]);
    setInputText("");
  };


  return (
    <div className="App">
      <header>
        <h1>.list</h1>
      </header>
      <form>
        <input className = "input-text-box" type = "text" placeholder = "item" onChange={newItemHandler}/>
        <input className = "quantity-box" type = "number" placeholder = "1" min="1" onChange={itemQuantityHandler} />
        <button className = "add-button" type = "submit" onClick={addItemHandler}/>
        
        <div className="option-select">
          <select className="list-options">
            <option value="items">items</option>
            <option value="picked">picked items</option>
            <option value="unpicked">unpicked items</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default App;
