import React, { useState } from 'react'
import food from './data'
import Menu from './Menu'
import Categories from './Categories'


const allCategories =['all', ...new Set(food.map((item)=>item.category))]

function App() {
    const [menuItems, setMenuItems] = useState(food);
    const [categories,setCategories] = useState(allCategories)

    const filterItems = (category) => {
        if (category === 'all'){
            setMenuItems(food);
            return;
        }
        const newItems = food.filter((item)=> item.category ===category)
        setMenuItems(newItems)
    }
  return (
      <main>
      <section className="menu section">
      <div className="title">
      <h2>our menu</h2>
      <div className="underline"></div>
      </div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={ menuItems }/>
      </section>
      </main>
  )
}

export default App