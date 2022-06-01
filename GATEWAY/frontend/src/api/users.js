import axios from 'axios';
import CryptoJS from 'crypto-js';

const getAllUser = () => {
    return (axios.get(`/api/users`));
}

const registerUser = (data) => {
    data = {
        "username": "Laila",
        "user_password": "sgdbskj10,1anc",
        "age": 78,
        "address": "Av. Fernando Ferrari, 514 - Goiabeiras, Vitória - ES, 29075-910",
        "cpf": "123.456.789-10"
    }
    data.user_password = CryptoJS.AES.encrypt(JSON.stringify(data.user_password), '_z!:jwS=,[9Ux9dE').toString();
    // var bytes = CryptoJS.AES.decrypt(ciphertext, '_z!:jwS=,[9Ux9dE');
    // var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
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