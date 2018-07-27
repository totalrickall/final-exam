import mysql from 'mysql';
import { connect } from 'tls';

let connection = mysql.createConnection({
    host: 'localhost',
    database: 'practiceDB',
    user: 'mastUser',
    password: 'crimson13'
});
connection.connect();

export default connection;