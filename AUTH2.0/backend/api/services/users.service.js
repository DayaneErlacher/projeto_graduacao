const pgPool = require("../../db/pgWrapper");

module.exports = {
    getAll: getAll,
    getUser: getUser,
    add: add,
    deleteUser: deleteUser,
    update: update
};

function getAll() {
    return new Promise((resolve, reject) => {
        const getUserQuery = `SELECT * FROM users ORDER BY id`;

        pgPool.query(getUserQuery, (response, err) => {
            if (err) reject(err)
            else resolve(response.results.rows);
        });
    })
}

function getUser(id) {
    return new Promise((resolve, reject) => {
        const getUserQuery = `SELECT * FROM users WHERE id = ${id}`
        console.log(getUserQuery)
        // pgPool.query(getUserQuery, (response, err) => {
        //     console.log(response.results.rows)
        //     if (err) reject(err)
        //     else resolve(response.results.rows);
        // });
    })
}

function add(user) {
    return new Promise((resolve, reject) => {
        const getUserQuery = `INSERT INTO users(username, user_password, age, address, cpf) 
        VALUES('${user.username}', '${user.user_password}',  ${user.age}, '${user.address}', '${user.cpf}')`
        pgPool.query(getUserQuery, (response, err) => {
            if (err) reject(err)
            else resolve(true);
        });
    })
}

function deleteUser(id) {
    return new Promise((resolve, reject) => {
        const getUserQuery = `DELETE FROM users WHERE id = ${id}`
        console.log(getUserQuery)
        // pgPool.query(getUserQuery, (response, err) => {
        //     console.log(response.results.rows)
        //     if (err) reject(err)
        //     else resolve(response.results.rows);
        // });
    })
}

function update(user) {
    return new Promise((resolve, reject) => {
        const getUserQuery = `UPDATE users SET username = '${user.username}', user_password = '${user.user_password}', age = ${user.age}, address = '${user.address}', cpf = '${user.cpf}' WHERE id = ${user.id}`
        console.log(getUserQuery)
        // pgPool.query(getUserQuery, (response, err) => {
        //     console.log(response.results.rows)
        //     if (err) reject(err)
        //     else resolve(response.results.rows);
        // });
    })
}