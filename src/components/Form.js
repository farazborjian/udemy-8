import React from 'react';


const Form = ({ onChange, formData, onSubmit }) => {

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" onChange={onChange} value={formData.name} />
            <label htmlFor="email">Email</label>
            <input id="email" type="email" onChange={onChange} value={formData.email} />
            <label htmlFor="zipcode">Zip Code</label>
            <input id="zipcode" type="text" onChange={onChange} value={formData.address.zipcode} />
            <input type="submit" value="Submit Form" />
        </form>
    )
}


export default Form;