import { useEffect, useState } from 'react';
import './App.css';
import List from "./Components/List";
import {library} from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


//using button designs from fontAwesome
//adding buttons to the library to be used
library.add(faPlus);
library.add(faTrash);
library.add(faCheck);

function App() {

  //initialize states
  const [inputText, setInputText] = useState("");
  const [inputQuantity, setInputQuantity] = useState();
  const [listObjects, setListObjects] = useState([]);
  const [status, setStatus] = useState("items");
  const [editedList, setEditedList] = useState([]);


  //useEffect to update everytime status is changed
  useEffect (() => {
    editedListHandler();
  }, [listObjects, status]);


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

  //filter the list based on picked or not.
  const editedListHandler = () => {
    switch(status) {
      case "picked":
        setEditedList(listObjects.filter(listObject => listObject.picked === true));
        break;
      case "unpicked":
        setEditedList(listObjects.filter(listObject => listObject.picked === false));
        break;  
      default:
        setEditedList(listObjects);
        break;
    }
  };

  const statusHandler = (e) => {
    console.log(e.target.value);
    setStatus(e.target.value);
  };

  return (
    <div className="App">
      <header>
        <h1>.list</h1>
      </header>
      <form>
        <input className = "input-text-box" type = "text" placeholder = "item" onChange={newItemHandler}/>
        <input className = "quantity-box" type = "number" placeholder = "1" min="1" onChange={itemQuantityHandler} />
        <button className = "add-button" type = "submit" onClick={addItemHandler}>
          <i>
            <FontAwesomeIcon className="faicons-plus" icon='plus' />
          </i>
        </button>     
        
        <div className="option-select">
          <select className="list-options" onChange={statusHandler}>
            <option value="items">items</option>
            <option value="picked">picked items</option>
            <option value="unpicked">unpicked items</option>
          </select>
        </div>
      </form>
      <List listObjects={listObjects}
            setListObjects={setListObjects}
            editedList={editedList}
            />
    </div>
  );
};

export default App;