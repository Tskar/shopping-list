import React from "react";
import '../App.css';
import Item from './Item';

const List = ({listObjects, setListObjects}) => {


    return (
        <div className="item-box">
            <ul className="item-list">
                {listObjects.map(listObject => (
                <Item key = {listObject.id}
                    text = {listObject.text}
                    quantity = {listObject.quantity}
                    listObject = {listObject}
                    setListObjects = {setListObjects}
                    listObjects={listObjects}/>
                ))}
                
            </ul>
        </div>
    );

};

export default List;
