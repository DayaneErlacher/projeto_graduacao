import axios from 'axios';
import qs from 'qs';
import CryptoJS from 'crypto-js';

var data = qs.stringify({
    'username': 'test',
    'password': 'test',
    'grant_type': 'password',
    'client_id': 'null',
    'client_secret': 'null'
});

// const registerUser = (data) => {
//   var config = {
//     method: 'post',
//     url: '/auth/login',
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     data: data
// };
//   return new Promise((resolve, reject) => {
//   axios(config)
//       .then(function (response) {
//           config.url = '/api/users';
//           config.headers.Authorization = 'Bearer ' + response.data.access_token;
//           config.data = data;
//           axios(config)
//           .then(function (response) {
//               resolve(JSON.stringify(response.data))
//           })
//           .catch(function (error) {
//               reject(error);
//           });
//       })
//       .catch(function (error) {
//           reject(error);
//       });
//   })

// }

const getAllUser = () => {
    var config = {
        method: 'post',
        url: '/auth/login',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
    };
    return new Promise((resolve, reject) => {
        axios(config)
            .then(function (response) {
                config.url = '/api/users';
                config.method = 'get';
                config.headers.Authorization = 'Bearer ' + response.data.access_token;
                axios(config)
                    .then(function (response) {
                        resolve(JSON.stringify(response.data))
                    })
                    .catch(function (error) {
                        reject(error);
                    });
            })
            .catch(function (error) {
                reject(error);
            });
    })
}
const registerUser = () => {
    var config = {
        method: 'post',
        url: '/auth/login',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
    };
    return new Promise((resolve, reject) => {
        axios(config)
            .then(function (response) {
                config.url = '/api/users';
                config.method = 'post';
                config.headers.Authorization = 'Bearer ' + response.data.access_token;
                var user_password = CryptoJS.AES.encrypt(JSON.stringify("sgdbskj10,1anc"), '_z!:jwS=,[9Ux9dE').toString();
                config.data = qs.stringify({
                    "username": "Carlos",
                    "user_password": user_password,
                    "age": 98,
                    "address": "Av. Fernando Ferrari, 514 - Goiabeiras, Vitória - ES, 29075-910",
                    "cpf": "123.456.789-10"
                })
                axios(config)
                    .then(function (response) {
                        resolve(JSON.stringify(response.data))
                    })
                    .catch(function (error) {
                        reject(error);
                    });
            })
            .catch(function (error) {
                reject(error);
            });
    })
}
const updateUser = () => { }
const deleteUser = () => { }
const getByIdUser = () => { }

export { getAllUser, registerUser, updateUser, deleteUser, getByIdUser };