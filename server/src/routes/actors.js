import { Router } from 'express';
import actors from '../controllers/actors';

let router = Router();

router
.get('/:id?', (req, res, next) => {
    let id = req.params.id;
    if (id) {
      actors.read(id).then((actor) => {
        res.json(actor);
      }).catch((err) => {
        console.log(err);
      })
    } else {
      actors.all().then((actors) => {
        res.json(actors);
      }).catch((err) => {
        console.log(err);
      })
    }
  })
  .post('/', (req, res, next) => {
      let { name } = req.body;
      actors.create(name).then((actor) => {
          res.json(actor);
      }).catch((err) => {
          console.log(err);
      })
  })
  .put('/:id', (req, res, next) => {
      let id = req.params.id;
      let { name } = req.body;
      actors.update(id, name).then((actor) => {
          res.json(actor);
      }).catch((err) => {
          console.log(err);
      })
  })
  .delete('/:id', (req, res, next) => {
      let id = req.params.id;
      actors.destroy(id).then((actor) => {
          res.json(actor);
      }).catch((err) => {
          console.log(err);
      })
  })

export default router;