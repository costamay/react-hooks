import React, { useEffect, useState } from 'react'
import User from './User'
import Form from './Form'

const data = [
  {
    id: 1,
    name: "Joy"
  },
  {
    id: 2,
    name: "Terry"
  },
  {
    id: 3,
    name: "Victor"
  }
]

function Counter() {

  //use state hook
   
    const [users, setUsers] = useState([])
    const [count, setCount] = useState(0)

    
    // const [number, setNumber] = useState([])
    // const [active, setActive] = useState(false)
    // console.log("initial state.................")
    // console.log(count)

    console.log("initial state for users.................")
    console.log(users)


    const handleClick = () => setCount(count + 1)


    //use effect hook

    // useEffect with dependancy Array, the side effect will occur each and everytime
    // useEffect(() =>  {})

    // empty dependency array mean the useEffect will occur once the page load
    // useEffect(() =>  {}, [])

    // useEffect with dependency array having variable, it will be called each time there is a change to that variable/s
    // useEffect(() =>  {}, [count])

    useEffect(() => {
      fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(users => setUsers(users))
      .catch(error=> console.log(error))
    }, [])

    console.log("current state for users.................")
    console.log(users)

    const displayUsers = users.map(user => <User user={user} key={user.id}/>)
  return (
    <div>
        <p>{count}</p>
        {/* <button onClick = {() => setCount(count + 1)}>Click Me</button> */}
        <button onClick = {handleClick}>Click Me</button>
        <Form setUsers={setUsers} users={users}/>
        <div className='users-wrapper'>
        {displayUsers}
        </div>
      

    </div>
  )
}

export default Counter