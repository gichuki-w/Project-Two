function Header({title}) {

    return (
        <div className="header">
            <p>{title}</p>
        </div>
    )
}

Header.defaultProps = {
    title: 'Default Title'
}

export default Header