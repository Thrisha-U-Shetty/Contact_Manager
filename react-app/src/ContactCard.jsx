function ContactCard ()
{
    const {id,name,email} = props.contact;
   return(
    <div className="list">
          <div className="name">{name}</div>
          <div className="email">{email}</div>
          <i className="trash" class="fa fa-trash" aria-hidden="true"></i>
       </div>
   )
}
export default ContactCard;