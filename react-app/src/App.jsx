import React, { useState, useEffect } from "react";
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import { v4 as uuidv4 } from "uuid";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactList);
  };

  useEffect(() => {
    const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrievedContacts) setContacts(retrievedContacts);
  }, []);

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);

  return (
    <div>
    <Router>
      <h1>Contact Management</h1>
      <Switch>
      <Route path="/" exact Component={ContactList}/>
      <Route path="/add" Component={AddContact}/>

      </Switch>
      

      {/* <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
    </Router>

    </div>
  );
}

export default App;
