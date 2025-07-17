import { useEffect, useState } from 'react'
import './App.css'
function App() {
  const [user,setUser] = useState(null);
  const [load,setLoad] = useState(true);
  function getUser() {
    setLoad(true);
    try{
      fetch("https://randomuser.me/api/")
      .then((res) =>res.json())
      .then((data) =>{
        setUser(data.results[0]);
        setLoad(false);
      })
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getUser();
  }, [])
  return (

    <div className='body'>
      {load && <h1>Loading....</h1>}
      {!load && (
        <div className='box'>
        <h1>Random User Generator</h1>
        <img src={user.picture.large} alt="" />
        <h3>{user.name.title} {user.name.first} {user.name.last}</h3>
        <h4>{user.email}</h4>
        <h3>{user.location.city},{user.location.country}</h3>
        <button onClick={getUser}>Next User</button>
      </div>
      )}
      
    </div>
  )
}

export default App
