import React, { useState, useEffect } from 'react';
import AddUser from "./components/AddUser";
import UserList from "./components/UserList"

function App() {
    const [enteredUser, setEnteredUser] = useState([]);
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
            setEnteredUser(loadedUsers);
        
        } catch (error) {
            console.log(`api call error`, error)
        }
        };
        fetchUsers();
    }, [])
     
    

    const userHandler = (uName, uEmail, uZipCode) => {
        setEnteredUser((prev) => {return [...prev, {name: uName, email: uEmail, zipcode: uZipCode, id: Math.floor(Math.random()*1000)}]});

    }

  return (
      <>
      <AddUser onAddUser={userHandler}/>
      <UserList users={enteredUser}/>
      </>
  )
}

export default App;
