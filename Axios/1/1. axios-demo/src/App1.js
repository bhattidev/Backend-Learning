import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUser] = useState([]);

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
      setUser(response.data);
    })
    .catch((error)=>{
      console.error('Error fetching data:', error);
    })
  }, [])

  
   

  return (
    <div style={{ padding: '20px' }}>
      <h2>User List from Dummy API</h2>
      <ul>
{users.map((data)=>( 
           <li key={data.id}>
            <strong>{data.name}</strong> — {data.email}
          </li>)
        )}
         
       
      </ul>
    </div>
  );
}

export default App;
