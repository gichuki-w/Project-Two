import LineItem from "./LineItem"

const ItemList = ({ items, handleCheck, handleDelete }) => {
    return (
            <ul>
                {items.map((item) => (
                    <LineItem
                    key={item.id} //Each li child should have a unique key prop
                    item={item}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                    />
                ) )}
            </ul>
    )
}
export default ItemList