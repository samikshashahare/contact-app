import React from 'react';
import './ContactCard.css';

function ContactCard({ name, number }) {
    return (

        <div className='contact-card'>

            <h3>{name}</h3>
            <span>{number}</span>
        </div>
    )
}

export default ContactCard
