import React, { useState } from 'react';


const AddUser = props => {
    
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredZipCode, setEnteredZipCode] = useState('')

    const submitHandler = event => {
        event.preventDefault();
        props.onAddUser(enteredName, enteredEmail, enteredZipCode);
        setEnteredName('');
        setEnteredEmail('');
        setEnteredZipCode('');
        
    }

    const nameHandler = event => {
        setEnteredName(event.target.value);
    }
    const emailHandler = event => {
        setEnteredEmail(event.target.value);
    }
    const zipCodeHandler = event => {
        setEnteredZipCode(event.target.value);
    }
    

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" onChange={nameHandler} value={enteredName}/>
            <label htmlFor="name">Email</label>
            <input id="email" type="email" onChange={emailHandler} value={enteredEmail}/>
            <label htmlFor="name">Zip Code</label>
            <input id="zipCode" type="number" onChange={zipCodeHandler} value={enteredZipCode}/>
            <button type="submit">Add User</button>
        </form>
    )
}


export default AddUser;