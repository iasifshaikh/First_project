import React,{ useState } from 'react'
import './App.css'
import Form from './Component/Slider/Form'

import Slider from './Component/Slider/Slider'
import AddUser from './Component/User/AddUser'
import UserList from './Component/User/UserList'

function App() {
  const [usersList, setUsersList] = useState([])

  const AddUserHandler=(eName,eAge)=>{
    setUsersList((prevUserList)=>{
      return[...prevUserList,{name:eName,age:eAge ,id:Math.random().toString()}]
    })
  }
  return (

    <div>
      <Slider/>
      <AddUser onAddUser={AddUserHandler} />
      <UserList user={usersList} />
      <Form/>
    </div>
  )
}

export default App
