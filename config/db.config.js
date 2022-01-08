const pg= require('pg');
const PGUser= 'postgres';
const PGDatabase='testing';
const PGServer='localhost';
const PGPassword='abcd@1234';



const config={
    server:PGServer,
    user:PGUser,
    password:PGPassword,
    database:PGDatabase
}

const pool = new pg.Pool(config);

module.exports=pool;