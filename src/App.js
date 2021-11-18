import { useEffect, useState } from 'react';
import './App.css';
import List from "./Components/List";
import {library} from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, {ThemeProvider} from 'styled-components';
import {createGlobalStyle} from 'styled-components';


//using button designs from fontAwesome
//adding buttons to the library to be used
library.add(faPlus);
library.add(faTrash);
library.add(faCheck);


//Styled container
const Container = styled.div`
  text-align: center;
  justify-content: center;
`;


//Global style to switch attributes features
const GlobalStyles = createGlobalStyle`
body {
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  transition: 1s;
}
`;

//Styled buttons
const Buttons = styled.button`
  color: ${props => props.theme.buttonColor};
  transition: 1s;
`;

//Styled input fields
const Input = styled.input`
  background: ${props => props.theme.inputColor};
`;
//Styled option fields
const Select = styled.select`
  background: ${props => props.theme.inputColor};
`;

//toggle characteristics for dark and light mode
const lightTheme = {
  body: 'rgb(243, 217, 217)',
  text: 'rgb(0, 0, 0)',
  inputColor: 'white',
  buttonColor: 'rgb(0, 0, 0)'
};

const darkTheme = {
  body: "#121212",
  text: 'rgb(243, 217, 217)',
  inputColor: 'rgb(243, 217, 217)',
  buttonColor: 'rgb(243, 217, 217)'
}


function App() {

  //initialize states
  const [inputText, setInputText] = useState("");
  const [inputQuantity, setInputQuantity] = useState();
  const [listObjects, setListObjects] = useState([]);
  const [status, setStatus] = useState("items");
  const [editedList, setEditedList] = useState([]);
  const [theme, setTheme] = useState("light");

  //useEffect to update everytime status is changed
  useEffect (() => {
    editedListHandler();
  }, [listObjects, status]);


  //adress new item input
  const newItemHandler = (e) => {
      setInputText(e.target.value);
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
      removed: false,
      id: Math.random() * 1000
    }]);
    setInputText('');
    setInputQuantity(1);
  
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

  const toggleHandler =() => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === "light"? lightTheme: darkTheme}>
      <GlobalStyles />
      <Container>
          <header>
            <h1>.list</h1>
          </header>
          <form>
            <Input className = "input-text-box" type = "text" value={inputText} placeholder = "item" onChange={newItemHandler}/>
            <Input className = "quantity-box" type = "number" value = {inputQuantity} placeholder = "1" min="1" onChange={itemQuantityHandler} />
            <Buttons className = "add-button" type = "submit" onClick={addItemHandler}>
              <i>
                <FontAwesomeIcon className="faicons-plus" icon='plus' />
              </i>
            </Buttons>     
            
            <div className="option-select">
              <Select className="list-options" onChange={statusHandler}>
                <option value="items">items</option>
                <option value="picked">picked items</option>
                <option value="unpicked">unpicked items</option>
              </Select>
            </div>
            <div>
            <label className="switch">
              <input type="checkbox" onClick={toggleHandler} />
              <span className="toggler"/>
            </label>
            </div>
          </form>
          <List listObjects={listObjects}
                setListObjects={setListObjects}
                editedList={editedList}
                />
      </Container>
    </ThemeProvider> 
  );
};

export default App;