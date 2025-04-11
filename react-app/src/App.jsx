import './App.css'
import React , {useState} from 'react'
import Header from './Header.jsx'
import AddContact from './AddContact.jsx'
import ContactList from './ContactList.jsx'

function App() {
   const [contacts , setContacts] =useState([]);

  return (
  <>
     <Header/>
     <AddContact/>
     <ContactList contacts={contacts}/>
  </>
  )
}

export default App
