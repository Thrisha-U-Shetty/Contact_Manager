function ContactCard({ contact })
{
    const { id, name, email } = contact;
   return(
    <div className="list">
  <div className="info">
    <div className="email">{email}</div>
    <div className="name">{name}</div>
  </div>
  <i className="trash fa fa-trash" aria-hidden="true"></i>
</div>

   )
}
export default ContactCard;