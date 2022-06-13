import { FaPlus } from "react-icons/fa";
import { useRef } from 'react';

const AddItem = ({ newItems, setNewItems, handleSubmit }) => {
    const inputRef = useRef();
    return (
        <form className="addForm" onSubmit={handleSubmit}>
            <label htmlFor="addItem">Add Item</label>
            <input
                autoFocus
                ref={inputRef} 
                className="input"
                type="text"
                id="addItem"
                placeholder="Add Item"
                required
                value={newItems}
                onChange= {(e) =>
                    setNewItems(e.target.value)
                }
            />
            <button
                type="submit"
                aria-label="Add Item"
                onClick={() => inputRef.current.focus()}
            ><FaPlus /> 
            </button>

        </form>
    )
}
export default AddItem