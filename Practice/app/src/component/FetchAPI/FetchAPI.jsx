import React, { useEffect, useState } from 'react'
import User from '../Users/Users';


const FetchAPI = () => {
    
    const [users, setUser] = useState([]);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUser(data));
    }, [])
    // console.log(user);
    return (
        <div div className='grid grid-cols-3 gap-10'>
           {/* <pre>{JSON.stringify(users[0], null, 2)}</pre> */}
           
           {
              users.map((user) => {
                return (
                <div>
                    <User key={user.id} user={user} />
                </div>
                
            )})
           }

        </div>
    )
}

export default FetchAPI;