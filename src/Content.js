import ItemList from "./ItemList"

function Content({items, handleCheck, handleDelete }) {
    
    
    return (
        <div className="Content">
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                    <p style={{color: '#fff'}}>Your list is empty</p>
            )}
        </div>
    )
}
export default Content