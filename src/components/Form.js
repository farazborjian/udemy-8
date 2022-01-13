import React from 'react';


const Form = ({onChange, formData, onSubmit}) => {
    
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" onChange={onChange} value={formData.name}/>
            <label htmlFor="name">Email</label>
            <input id="email" type="email" onChange={onChange} value={formData.email}/>
            <label htmlFor="name">Zip Code</label>
            <input id="zipcode" type="number" onChange={onChange} value={formData.address.zipcode}/>
            <button type="submit">Add User</button>
        </form>
    )
}


export default Form;