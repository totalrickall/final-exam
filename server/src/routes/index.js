import { Router } from 'express';
import moviesRouter from './movies';
import actorsRouter from './actors';
import moviesActorsRouter from './moviesactors';

let router = Router();

router.use('/movies', moviesRouter);
router.use('/actors', actorsRouter);
router.use('/movies-actors', moviesActorsRouter);

export default router;