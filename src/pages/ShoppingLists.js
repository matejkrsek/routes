// ShoppingLists.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingAccordion from '../components/ShoppingAccordion';
import { useState } from 'react';

const ShoppingLists = () => {
  
  let Lists = [
    {
      id: "456",
      name: "Na pátek",
      items: [
        { name: "kečup", amount: 8, measure: "balení" },
        { name: "chléb", amount: 8, measure: "plátků" },
        { name: "propiska", amount: 8, measure: "ks" },
        { name: "pivo", amount: 8, measure: "lahváčů" },
      ],
    },
    {
      id: "451",
      name: "Sobotní oběd",
      items: [
        { name: "mouka", amount: 8, measure: "kg" },
        { name: "pečivo", amount: 18, measure: "ks" },
      ],
    },
    {
      id: "478",
      name: "Oslava narozenin tchána",
      items: [
        { name: "mouka", amount: 8, measure: "kg" },
        { name: "čaj", amount: 20, measure: "sáčků" },
      ],
    },
  ];

  const [lists, setLists] = useState(Lists);
  
  return (
    <div className="ShoppingLists">
      <div className="shoppingListsHeader">
        <h2>Shopping Lists</h2>
        <button>Create a new shopping list</button>
      </div>
      <ShoppingAccordion lists={Lists} setLists={setLists}/>
    </div>
  );
};

export default ShoppingLists;
