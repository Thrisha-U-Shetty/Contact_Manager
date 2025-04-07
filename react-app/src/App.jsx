import './App.css'
import Header from './Header.jsx'
import AddContact from './AddContact.jsx'
import ContactList from './ContactList.jsx'

function App() {
   const contacts =[
    {
      id:'1',
      name:'Thrisha',
      email:'thrisha@gmail.com'
    },
    {
      id:'2',
      name:'Yash',
      email:'yash@gmail.com'
    }
   ]

  return (
  <>
     <Header/>
     <AddContact/>
     <ContactList contacts={contacts}/>
  </>
  )
}

export default App
