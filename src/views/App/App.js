import React, { useEffect, useState } from 'react'
import './App.css';
import { ContactData } from './../ContactData/ContactData';
import ContactCard from '../../components/ContactCard/ContactCard';

function App() {
  const [contacts, setContacts] = useState(ContactData);
  const [searchTerm, setsearchTerm] = useState('');

  useEffect(()=>{
const filteredContacts = ContactData.filter((contact)=>{
const name = contact.name.toLowerCase();
const number = contact.number.toString();

const query = searchTerm.toLowerCase();


return (name.includes(query) || number.includes(query))

})

setContacts(filteredContacts);

  },[searchTerm])

return (

  <>

      <h1 className='text-center'>Contact App </h1>
      <input  type='text' 
       placeholder='Search' 
       className='input-box'
        value={searchTerm} 
        onChange={(e) => {setsearchTerm(e.target.value)}}
        />

      <div className='contact-card-list'>
        {/* ContactData? this operator is called optional chaining operator  */}
        
        {
        contacts.map((contact, index) => {
          const { name, number } = contact;
          return <div><ContactCard key={index} name={name} number={number} /></div>
        })
        }
      </div>
    </>
  )
}

export default App