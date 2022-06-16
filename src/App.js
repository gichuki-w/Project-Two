import './App.css';
import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import AddItem from './AddItem'
import Search from './Search'


function App() {
  // localStorage.setItem('Project List', JSON.stringify([]))
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('Project List')))
  const [newItems, setNewItems] = useState("");
  const [search, setSearch] = useState("");

  const setAndSetNew = (newItems) => {
    setItems(newItems);
    localStorage.setItem('Project List', JSON.stringify(newItems));
  }

  const addInputItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, repo: item };
    const listItems = [...items, myNewItem];
    setAndSetNew(listItems);

  }
  const handleCheck = (id) => {
    const listItems = items.map((item => item.id === id ? { ...item, checked: !item.checked } : item))
    setAndSetNew(listItems);

  }
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setAndSetNew(listItems);

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItems) return;
    addInputItem(newItems);
    setNewItems('')
  }  
  return (
    <div className="App">
      <Header title="Repository List" />
      <AddItem
        newItems={newItems}
        setNewItems={setNewItems}
        handleSubmit={handleSubmit}
      />
      <Search
        search={search}
        setSearch={setSearch}

      />
      <Content
        items={items.filter(item => ((item.repo).toLowerCase()).includes(search.toLowerCase()))} // matching the item.repo with the search state
        // setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer
        length={items.length}
      />
    </div>
  );
  }
export default App;