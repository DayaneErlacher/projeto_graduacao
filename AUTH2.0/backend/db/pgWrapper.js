const Pool = require("pg").Pool;
function query(queryString, cbFunc) {
  const pool = new Pool({
    host: 'postgre-db',
    port: 5432,
    database: 'database_pg',
    user: 'client',
    password: 'Y9!AH&pez1@nnyZD',
  });
  pool.query(queryString, (error, results) => {
    cbFunc(setResponse(error, results));
  });
}
function setResponse(error, results) {
  return {
    error: error,
    results: results ? results : null,
  };
}
module.exports = {
  query,
};