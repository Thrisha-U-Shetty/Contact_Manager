function ContactList({contacts})
{

   const renderList = contacts.map((contact) =>{
    return(
       <div className="list">
          <div className="name">{contact.name}</div>
          <div className="email">{contact.email}</div>
          <i className="trash" class="fa fa-trash" aria-hidden="true"></i>

       </div>
    )
   })


  return (
    <>
    <div className="ContactList">
        <h2>Contact List</h2>
        <div>{renderList}</div>
    </div>

    </>
  )
}
export default ContactList;