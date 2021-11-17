import React from "react";
import '../App.css';
import Item from './Item';

const List = ({listObjects, setListObjects, editedList}) => {


    return (
        <div className="item-box">
            <ul className="item-list">
                {editedList.map(listObject => (
                <Item key = {listObject.id}
                    text = {listObject.text}
                    quantity = {listObject.quantity}
                    listObject = {listObject}
                    listObjects={listObjects}
                    setListObjects = {setListObjects}/>
                ))}
            </ul>
        </div>
    );

};

export default List;
