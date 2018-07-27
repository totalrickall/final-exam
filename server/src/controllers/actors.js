import connection from '../config/db';
import { resolve } from 'dns';
import { isBuffer } from 'util';

const actors = {
    all: function all() {
        return new Promise((resolve, reject) => {
            connection.query(`call spReadAllActors()`, (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result[0]);
            });
        })
    },
    read: function read(id) {
        return new Promise((resolve, reject) => {
            connection.query(`call spReadActor(${id})`, (err, result) => {
                if(err) {
                    reject(err);
                }
                resolve(result[0]);
            });
        })
    },
    create: function create(name) {
        return new Promise((resolve, reject) => {
            connection.query(`call spCreateActor('${name}')`, (err, result) => {
                if(err) {
                    reject(err);
                }
                resolve(result[0]);
            });
        })
    },
    update: function update(id, name) {
        return new Promise((resolve, reject) => {
            connection.query(`call spUpdateActor(${id}, '${name}')`, (err, result) => {
                if(err) {
                    reject(err);
                }
                resolve(result[0]);
            });
        })
    },
    destroy: function destroy(id) {
        return new Promise((resolve, reject) => {
            connection.query(`call spDeleteActor(${id})`, (err, result) => {
                if(err) {
                    reject(err);
                }
                resolve(result[0]);
            });
        })
    }
};

export default actors;