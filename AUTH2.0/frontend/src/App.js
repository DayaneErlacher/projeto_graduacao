import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';

import { deleteUser, getAllUser, registerUser, updateUser } from './api/users';
import Navbar from './components/Navbar';
import Users from './components/Users';


export default function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    getAllUser().then(data => {setUser(JSON.parse(data))})
    // getByIdUser(2).then(data => console.log(data.data))
  }, []);

  return (
    <>
    <Navbar titulo = "AUTH2.0" />
    <button onClick={() => registerUser()}><FaPlus /> Adicionar novo</button>
    <Users values = {user} edit = {updateUser} delete={deleteUser} ></Users>
    </>
  );
}
