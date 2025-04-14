import './App.css'
import React , {useState , useEffect} from 'react'
import Header from './Header.jsx'
import AddContact from './AddContact.jsx'
import ContactList from './ContactList.jsx'

function App() {
   const LOCAL_STORAGE_KEY ="contacts";
   const [contacts , setContacts] =useState([]);
   
   const addContactHandler = (contact) =>{
      const newContact = {
         id: Date.now(), 
         ...contact
       };
      setContacts([...contacts , newContact])
   }
   useEffect(()=>
      {
           const retrivecontact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
           if(retrivecontact) {
            setContacts(retrivecontact);
           }
         },[])
   

   useEffect(()=>
   {
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
   },[contacts])

  return (
  <>
     <Header/>
     <AddContact addContactHandler={addContactHandler}/>
     <ContactList contacts={contacts}/>
  </>
  )
}

export default App
