import React, { useState } from 'react';
import { Accordion, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// pole seznamů
var Lists = [
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

  const ShoppingAccordion = ({ lists, setLists }) => {

  const [activeKey, setActiveKey] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedItem, setEditedItem] = useState(null);

  const handleToggle = (id) => {
    setActiveKey(activeKey === id ? null : id);
  };

  const handleEdit = (item) => {
    setEditedItem(item);
    setShowEditModal(true);
  };

  // zatím nefunguje FIX
  const handleEditSave = (editedAmount) => {
    if (editedItem) {
      editedItem.amount = editedAmount;
      setShowEditModal(false);
    }
  };
// taktéž blbne FIX
  const handleDelete = (listId, itemId) => {
    
    // odrstaní deleted item, FIX 
    const updatedLists = lists.map((list) => {
      if (list.id === listId) {
        list.items = list.items.filter((item) => item.id !== itemId);
      }
      return list;
    });
    // Update the state using setLists FIX
    setLists(updatedLists);
  };

  return (
    <Accordion activeKey={activeKey} onSelect={handleToggle}>
      {lists.map((list) => (
        <Accordion.Item key={list.id} eventKey={list.id}>
          <Accordion.Header>
            <div className="accordionHeader">
              <Button variant="link">{list.name}</Button>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              {list.items.map((item) => (
                <li key={item.id}>
                  {`${item.name}: ${item.amount} ${item.measure}`}
                  <Button
                    variant="outline-primary"
                    onClick={() => handleEdit(item)}
                    style={{ marginLeft: '8px' }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outline-danger"
                    onClick={() => handleDelete(list.id, item.id)}
                    style={{ marginLeft: '8px' }}
                  >
                    Delete
                  </Button>
                </li>
              ))}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default ShoppingAccordion;
