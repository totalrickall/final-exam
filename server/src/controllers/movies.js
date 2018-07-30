import connection from '../config/db';
import { resolve } from 'dns';
import { isBuffer } from 'util';

const movies = {
    all: function all() {
        return new Promise((resolve, reject) => {
            connection.query(`call spReadAllMovies()`, (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result[0]);
            });
        })
    },
    read: function read(id) {
        return new Promise((resolve, reject) => {
            connection.query(`call spReadMovie(${id})`, (err, result) => {
                if(err) {
                    reject(err);
                }
                resolve(result[0]);
            });
        })
    },
    create: function create(director, poster, title) {
        return new Promise((resolve, reject) => {
            connection.query(`call spCreateMovie('${director}','${poster}','${title}')`, (err, result) => {
                if(err) {
                    reject(err);
                }
                resolve(result[0]);
            });
        })
    },
    update: function update(id, director, poster, title) {
        return new Promise((resolve, reject) => {
            connection.query(`call spUpdateMovie(${id}, '${director}','${poster}','${title}')`, (err, result) => {
                if(err) {
                    reject(err);
                }
                resolve(result[0]);
            });
        })
    },
    destroy: function destroy(id) {
        return new Promise((resolve, reject) => {
            connection.query(`call spDeleteMovie(${id})`, (err, result) => {
                if(err) {
                    reject(err);
                }
                resolve();
            });
        })
    }
};

export default movies;