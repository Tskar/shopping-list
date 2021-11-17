import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Item({text, quantity, listObject, listObjects, setListObjects}) {

    //handle removed items
    const removeHandler = () => {
        setListObjects(listObjects.filter((item) => item.id !== listObject.id));
    };

    //handle picked items
    const pickedHandler = () => {
        setListObjects(listObjects.map((item) => {
            if(item.id === listObject.id) {
                return {
                    ...item, picked: !item.picked
                };
            }
            return item;
        }));
    };

    return (
        <div className = "to-pick">
            <li className={`item-to-pick ${listObject.picked ? "picked": ''}`}>
                {quantity} {text}
            </li>
            <button className="picked-button" onClick={pickedHandler}>
                <i>
                    <FontAwesomeIcon className="faicons-check" icon='check'/>
                </i>
            </button>
            <button className="remove-button" onClick={removeHandler}>
                <i>
                    <FontAwesomeIcon className="faicons-trash" icon='trash'/>
                </i>
            </button>

        </div>
    );
};

export default Item;