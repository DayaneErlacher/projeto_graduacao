import axios from 'axios';

const getUsers = () => {
    return (axios.get(`/api/users`));
}

export default getUsers;