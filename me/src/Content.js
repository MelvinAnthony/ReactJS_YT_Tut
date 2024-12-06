import React from 'react'

import { useState } from 'react'

import { FaTrashAlt } from "react-icons/fa"

export const Content = () => {
    const [items, setItems] = useState([
        {
            id:1,
            checket: true,
            item:"pratice Coding"
        },
        {
            id:2,
            checket: false,
            item:"play Cricket"
        },
        {
            id:3,
            checked: false,
            item:"Read About AI"
        }
    ]);

/*     const numbers = [-2,-1,0,1,2,3,4]
    const itemss = numbers.filter(n => n>=0).map( n => ({number:n}))
    console.log(itemss) */

  return (
    <main>
        <ul>
            {items.map((item) => (
              <li className='item'>
                  <input 
                  type="checkbox"
                  checked = {item.checked}                  
                  />
                  <label>{item.item}</label>
                  <FaTrashAlt 
                    role='button'
                    tabIndex='0'                  
                  />
              </li>
            ))}
        </ul>
    </main>

  )
}

export default Content