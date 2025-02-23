import "./ToDolist.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function ToDoList(props) {

    return(
        <div>
            {props.items.map((item, index) => (
                <div key={index} className="ToDoContainer">
                <p className="ToDoPara">{item}</p>
                <button className="editButton" onClick={() => props.editItems(index)}><FontAwesomeIcon icon={faPenToSquare} /></button>
                <button className="deleteButton" onClick={() => props.deleteItems(index)}><FontAwesomeIcon icon={faTrash} /></button>
        </div>
            ))}
        </div>
    );
}

export default ToDoList;