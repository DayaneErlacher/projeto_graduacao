import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';

import { deleteUser, getAllUser, registerUser, updateUser } from './api/users';
import Navbar from './components/Navbar';
import Users from './components/Users';


export default function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    getAllUser().then(data => setUser(data.data))
    // getByIdUser(2).then(data => console.log(data.data))
  }, []);

  return (
    <>
    <Navbar titulo = "HTTPS" />
    <button onClick={() => registerUser()}><FaPlus /> Adicionar novo</button>
    <Users values = {user} edit = {updateUser} delete={deleteUser} ></Users>
    </>
  );
}
