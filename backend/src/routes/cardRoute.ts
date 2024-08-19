import express from 'express';
import { Request,Response } from 'express';
import cardCtrl from  '../controllers/cardController';

const router=express.Router();

router.route('/cards')
.get(cardCtrl.listCards)
.post(cardCtrl.createCard)

router.route('/cards/:title')
.get(cardCtrl.editorByTitle);

export default router;
