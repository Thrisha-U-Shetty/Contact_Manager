import React from 'react';

function ContactCard({ contact, clickHandler }) {
  const { id, name, email } = contact;

  return (
    <div className="list">
      <div className="info">
        <div className="email">{email}</div>
        <div className="name">{name}</div>
      </div>
      <i
        className="trash fa fa-trash"
        aria-hidden="true"
        style={{ color: 'red' }}
        onClick={() => clickHandler(id)} 
      ></i>
    </div>
  );
}

export default ContactCard;  
