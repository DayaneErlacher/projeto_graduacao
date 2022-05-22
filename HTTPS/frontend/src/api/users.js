import axios from 'axios';

const getAllUser = () => {
    return (axios.get(`/api/users`));
}

const registerUser = (data) => {
    data = {
        "name": "Laila",
        "age": 78,
        "address": "Av. Fernando Ferrari, 514 - Goiabeiras, Vitória - ES, 29075-910",
        "cpf": "123.456.789-10"
    }
    return (axios.post(`/api/users`, data));
}

const updateUser = (data) => {
    data.address = "Av. Fernando Ferrari, 514 - Goiabeiras, Vitória - ES, 29075-910";
    data.age = 12;
    return (axios.put(`/api/users`, data));
}

const deleteUser = (id) => {
    return (axios.delete(`/api/users/${id}`));
}

const getByIdUser = (id) => {
    return (axios.get(`/api/users/${id}`));
}

export { getAllUser, registerUser, updateUser, deleteUser, getByIdUser};