import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';


const Buttons = styled.button`
  color: ${props => props.theme.buttonColor};
`;

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
            <Buttons className="picked-button" onClick={pickedHandler}>
                <i>
                    <FontAwesomeIcon className="faicons-check" icon='check'/>
                </i>
            </Buttons>
            <Buttons className="remove-button" onClick={removeHandler}>
                <i>
                    <FontAwesomeIcon className="faicons-trash" icon='trash'/>
                </i>
            </Buttons>

        </div>
    );
};

export default Item;