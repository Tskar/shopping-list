import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Item({text, quantity, listObject, listObjects, setListObject}) {

    //handle removed items
    const removeHandler = () => {

    };

    //handle picked items
    const pickedHandler = () => {

    };

    return (
        <div className = "to-pick">
            <li className={`item-to-pick ${listObject.picked ? "picked": ''}`}>
                {quantity} {text}
            </li>
            <button onClick={pickedHandler} className="picked-button">
                <i>
                    <FontAwesomeIcon className="faicons-check" icon='check'/>
                </i>
            </button>
            <button onClick={removeHandler} className="remove-button">
                <i>
                    <FontAwesomeIcon className="faicons-trash" icon='trash'/>
                </i>
            </button>

        </div>
    )
}

export default Item;