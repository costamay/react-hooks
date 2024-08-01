import React, { useState } from 'react'

function Form({setUsers, users}) {
    // const [name, setName] = useState("")
    // const [username, setUsername] = useState("")

    const [formData, setFormData] = useState({
        name : "",
        username: ""
    })

    // const form = {
    //     name : "",
    //     username: ""
    // }

    // formData["name"] = "Titus"


    // console.log("Name......................")
    // console.log(formData.name)
    // console.log("Username......................")
    // console.log(formData.username)

    // const handleOnchangeName = (e) => {
    //     setFormData({
    //         ...formData, name: e.target.value
    //     })
    // }

    // const handleOnchangeUsername = (e) => setUsername(e.target.value)

    const handleOnchange = e => {
        const name = e.target.name
        const value = e.target.value

        setFormData({
            ...formData, [name]: value
        })
        // const {name, value} = e.target


    }

    // console.log(formData)

    const handleSubmit = (e) => {
        e.preventDefault()

        // const formData = {
        //     name : name,
        //     username: username
        // }

        // console.log("This is form data.............")
        // console.log(formData)

        fetch("http://localhost:3000/users",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept" : "application/json"
            },
            body : JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => setUsers([...users, data]))
        .catch(error=> console.log(error))



    }

  return (
    <div className='form-data'>
        <form className='form' onSubmit={handleSubmit}>
            <div className='form-inputs'>
                <h1>User Form</h1>
            </div>
            <div className='form-inputs'>
                <input
                 type='text'
                 name = "name"
                 value={formData.name}
                placeholder='Enter name..'
                onChange={handleOnchange}
                />
            </div>
            <div className='form-inputs'>
                <input
                 type='text' 
                 name="username"
                 value={formData.username}
                 placeholder='Enter username'
                 onChange={handleOnchange}
                 />
            </div>
            <div className='form-inputs'>
                <input 
                type='submit' 
                value='Submit'
                />
            </div>
        </form>

    </div>
  )
}

export default Form