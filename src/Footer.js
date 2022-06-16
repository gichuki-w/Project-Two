function Footer({length}) {

    return (
        <div className="footer">
            <p>{length} {length === 1 ? "item" : "items"}</p>
        </div>
    )
}
export default Footer