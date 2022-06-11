import './App.css';
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import { useState } from 'react'
import AddItem from './AddItem'


function App() {

    const [items, setItems] = useState([
      {
          id: 1,
          checked: true,
          repo: "Project One"
      },
      {
          id: 2,
          checked: false,
          repo: "Project Two"
      },
      {
          id: 3,
          checked: false,
          repo: "Project Three"
      },
      {
          id: 4,
          checked: false,
          repo: "Project Four"
  }
    ])
    const handleCheck = (id) => {
      const listItems = items.map((item => item.id === id ? {...item, checked: !item.checked} : item))
      setItems(listItems)
      localStorage.setItem('Project List', JSON.stringify(listItems))
  }
  const handleDelete = (id) => {
      const listItems = items.filter((item) => item.id !== id)
      setItems(listItems)
      localStorage.setItem('Project List', JSON.stringify(listItems))
      // console.log(id)
  }
    return (
      <div className="App">
        <Header title="Repositories" />
        <AddItem/>
        <Content
          items={items}
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
