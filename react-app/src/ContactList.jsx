import ContactCard from "./ContactCard";
function ContactList({contacts})
{

  const deleteConatct =(id) =>{
    props.getContactId(id)
  }

   const renderList = contacts.map((contact) =>{
    return(
       <ContactCard contact={contact} clickHandler={deleteConatct} key={contact.id} />
    )
   })


  return (
    <>
    <div className="ContactList">
        <h2 className="title">Contact List</h2>
        <div className="c-list">
              {renderList}
</div>

    </div>

    </>
  )
}
export default ContactList;