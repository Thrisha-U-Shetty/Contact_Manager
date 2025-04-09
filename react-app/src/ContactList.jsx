import ContactCard from "./ContactCard";
function ContactList({contacts})
{

   const renderList = contacts.map((contact) =>{
    return(
       <ContactCard contact={contact}/>
    )
   })


  return (
    <>
    <div className="ContactList">
        <h2 className="title">Contact List</h2>
        <div className="c-list">
        <div className="list">{renderList}</div>
        </div>
    </div>

    </>
  )
}
export default ContactList;