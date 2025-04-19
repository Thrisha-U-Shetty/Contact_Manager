import './App.css'
import React , {useState , useEffect} from 'react'
// import {uuid} from 'uuidv4';
import Header from './Header.jsx'
import AddContact from './AddContact.jsx'
import ContactList from './ContactList.jsx'

function App() {
   const LOCAL_STORAGE_KEY ="contacts";
   const [contacts , setContacts] =useState([]);
   
   const addContactHandler = (contact) =>{
      setContacts([...contacts , contact]);
   };

   const removeContactHandler = (id) =>{
      const newContactList = contacts.filter((contact) =>{
         return contact.id !== id;
      });

      setContacts(newContactList);
   }

   useEffect(()=>
      {
           const retrivecontact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
           if(retrivecontact)  setContacts(retrivecontact);
         },[])
   

   useEffect(()=>
   {
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
   },[contacts])

  return (
  <>
     <Header/>
     <AddContact addContactHandler={addContactHandler}/>
     <ContactList contacts={contacts} getContactId ={removeContactHandler}/>
  </>
  )
}

export default App
