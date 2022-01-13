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
    useEffect(() => {
        const fetchUsers = async () => {
            try {
            
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const responseData= await response.json();
            const loadedUsers = [];
            for(const key in responseData) {
                loadedUsers.push({
                    name: responseData[key].name,
                    email: responseData[key].email,
                    zipcode: responseData[key].address.zipcode
                })
            }
            setTableData(loadedUsers);
        
        } catch (error) {
            console.error(`api call error`, error)
        }
        };
        fetchUsers();
    }, [])
     
    const changeHandler = e => {
        if(e.target.id === "zipcode") {
            setFormData({...formData, address: {
                [e.target.id]: e.target.value
            }})
        } else setFormData({...formData, [e.target.id]: e.target.value})
    }

    const submitHandler = e => {
        e.preventDefault();
        setTableData([formData, ...tableData]);
    }

    

  return (
      <>
      <Form onChange={changeHandler} onSubmit={submitHandler} formData={formData}/>
      <Table tableData={tableData}/>
      </>
  )
}

export default App;
