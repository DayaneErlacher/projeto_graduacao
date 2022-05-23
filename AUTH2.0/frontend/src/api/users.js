import axios from 'axios';
import qs from 'qs';
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
const registerUser = () => { }
const updateUser = () => { }
const deleteUser = () => { }
const getByIdUser = () => { }

export { getAllUser, registerUser, updateUser, deleteUser, getByIdUser };