import React, { useState, useEffect } from 'react';
import Form from "./components/Form";
import Table from "./components/Table"

const initialFormData = {
    name: "",
    email: "",
    address: {
        zipcode: ""
    }
}

function App() {

    const [formData, setFormData] = useState(initialFormData);
    const [tableData, setTableData] = useState([])

    console.log(`tableData: `, tableData)


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const responseData = await response.json();
                setTableData(responseData);
            } catch (error) {
                console.error(error)
            }
        };
        fetchUsers();
    }, [])

    const handleChange = e => {
        if (e.target.id === "zipcode") {
            setFormData({
                ...formData,
                address: {
                    "zipcode": e.target.value
                }
            })
        } else {
            setFormData({ ...formData, [e.target.id]: e.target.value })
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        setTableData([formData, ...tableData]);
        setFormData(initialFormData);
    }



    return (
        <>
            <Form onChange={handleChange} onSubmit={handleSubmit} formData={formData} />
            <Table tableData={tableData} />
        </>
    )
}

export default App;
