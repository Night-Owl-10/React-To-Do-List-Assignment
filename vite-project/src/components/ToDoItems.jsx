import ToDoList from "./ToDoList";
import { useState } from "react";
import "./ToDoItems.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';

function ToDoItem() {

    const [items, setItems] = useState([]);
    const [newItems, setNewItems] = useState("");
    const [editItemsIndex, setEditItemsIndex] = useState(null);
    const [editItemsValue, setEditItemsValue] = useState("");

    function handleAddItems() {
        if(newItems.trim() !== "") {
            setItems([...items, newItems]);
            setNewItems("");
        } else {
            alert("No new task was written in the box");
        }
    };
    console.log(items);

    function handleDeleteItems(index) {
        const updatedItems = items.filter((item, i) => i !== index);
        setItems(updatedItems);
    };

    function handleEditItems(index) {
        setEditItemsIndex(index);
        setEditItemsValue(items[index]);
    };

    function handleUpdatedItems() {
        const updatedItems = items.map((item, index) => (index === editItemsIndex ? editItemsValue : item));
        setItems(updatedItems);
        setEditItemsIndex(null);
        setEditItemsValue("");
    };

    return(
        <div className="container">
        <div className="add_edit_Input">
        <textarea className="add_edit_Items" value={newItems} onChange={(e) => setNewItems(e.target.value)}/>
        <button className="add_edit_Button" onClick={handleAddItems}><FontAwesomeIcon icon={faCheck}/></button>
        </div>

        {editItemsIndex !== null && (
            <div className="add_edit_Input">
                <textarea className="add_edit_Items" value={editItemsValue} onChange={(e) => setEditItemsValue(e.target.value)}/>
                <button className="add_edit_Button" onClick={handleUpdatedItems}><FontAwesomeIcon icon={faCheckDouble} /></button>
            </div>
       )}

       <ToDoList items={items} deleteItems={handleDeleteItems} editItems={handleEditItems}/>
        </div>
    );
}

export default ToDoItem;