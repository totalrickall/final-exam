import { Router } from 'express';
import moviesActors from '../controllers/moviesactors';

let router = Router();

router
.get('/:id', (req, res, next) => {
  //console.log('----HERE----', req.params)
  //console.log('----HERE----', req.body);
  let movieid = req.params.id;
  moviesActors.read(movieid).then((val) => {
    res.json(val);
  }).catch((err) => {
    console.log(err);
  })
})
.get('/', (req, res, next) => {
      moviesActors.all().then((val) => {
        //console.log(val)
        res.json(val);
      }).catch((err) => {
        console.log(err);
      })
  })

export default router;