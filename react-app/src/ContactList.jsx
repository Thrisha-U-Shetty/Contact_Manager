import React from 'react';
import ContactCard from './ContactCard';  

function ContactList({ contacts, getContactId }) {
  const deleteContact = (id) => {
    getContactId(id);  
  };

  const renderList = contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContact}
        key={contact.id}
      />
    );
  });

  return (
    <div className="ContactList">
      <h2 className="title">Contact List</h2>
      <div className="c-list">{renderList}</div>
    </div>
  );
}

export default ContactList;
