import { FaPlus } from "react-icons/fa";

const AddItem = ({newItems,setNewItems, handleSubmit}) => {
    return (
        <form className="addForm" onSubmit={handleSubmit}>
            <label htmlFor="addItem">Add Item</label>
            <input
                className="input"
                type="text"
                autoFocus
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
            ><FaPlus /> 
            </button>

        </form>
    )
}

export default AddItem