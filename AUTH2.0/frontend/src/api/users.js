import axios from 'axios';
import qs from 'qs';

//REGISTER
const addUser = () => {
    var data = qs.stringify({
      'username': 'test3',
      'password': 'test3',
      'grant_type': 'password',
      'client_id': 'null',
      'client_secret': 'null' 
    });
    var config = {
      method: 'post',
      url: '/auth/register',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
    };
    axios(config)
    .then(function (response) {
      return null;
    })
    .catch(function (error) {
      return error;
    });

}

const getUsers = () => {
    var data = qs.stringify({
        'username': 'test',
        'password': 'test',
        'grant_type': 'password',
        'client_id': 'null',
        'client_secret': 'null'
    });
    var config = {
        method: 'post',
        url: '/auth/login',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
    };
    axios(config)
        .then(function (response) {
            config.url = '/test/hello';
            config.headers.Authorization = 'Bearer ' + response.data.access_token;
            axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data))
            })
            .catch(function (error) {
                console.log(error);
            });
        })
        .catch(function (error) {
            console.log(error);
        });
    return false;
}

export { 
    addUser, 
    getUsers }