import './App.css'
import React , {useState , useEffect} from 'react'
import Header from './Header.jsx'
import AddContact from './AddContact.jsx'
import ContactList from './ContactList.jsx'

function App() {
   const [contacts , setContacts] =useState([]);
   
   const addContactHandler = (contact) =>{
      console.log(contact);
      setContacts([...contacts , contact])
   }

  return (
  <>
     <Header/>
     <AddContact addContactHandler={addContactHandler}/>
     <ContactList contacts={contacts}/>
  </>
  )
}

export default App
