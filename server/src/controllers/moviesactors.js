import connection from '../config/db';
import { rejects } from 'assert';

const moviesActors = {
    all: function all() {
        return new Promise((resolve, reject) => {
            connection.query(`call spReadAllMoviesActorsXref()`, (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result[0]);
            });
        })
    },
    read: function read(movieid) {
        return new Promise((resolve, reject) => {
            connection.query(`call spReadMovieActorXref(${movieid})`, (err, result) => {
                if(err) {
                    reject(err);
                }
                resolve(result[0]);
            })
        })
    }
};


export default moviesActors;