import React, { useEffect, useState } from 'react';
import Users from './components/Users';
import Navbar from './components/Navbar';
import { getUsers } from "./api/users";

export default function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    // getUsers().then(data => etUser(data.data))
    getUsers()
  }, []);

  return (
    <>
    <Navbar titulo = "OAUTH2.0" />
    <Users values = {user} ></Users>
    </>
  );
}
