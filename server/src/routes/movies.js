import { Router } from 'express';
import movies from '../controllers/movies';

let router = Router();

router
.get('/:id?', (req, res, next) => {
    let id = req.params.id;
    if (id) {
      movies.read(id).then((movie) => {
        res.json(movie);
      }).catch((err) => {
        console.log(err);
      })
    } else {
      movies.all().then((movies) => {
        res.json(movies);
      }).catch((err) => {
        console.log(err);
      })
    }
  })
  .post('/', (req, res, next) => {
      let { director, poster, title } = req.body;
      movies.create(director, poster, title).then((movie) => {
          res.json(movie);
      }).catch((err) => {
          console.log(err);
      })
  })
  .put('/:id', (req, res, next) => {
      let id = req.params.id;
      let { director, poster, title } = req.body;
      movies.update(id, director, poster, title).then((movie) => {
          res.json(movie);
      }).catch((err) => {
          console.log(err);
      })
  })
  .delete('/:id', (req, res, next) => {
      let id = req.params.id;
      movies.destroy(id).then((movie) => {
          res.json(movie);
      }).catch((err) => {
          console.log(err);
      })
  })

export default router;