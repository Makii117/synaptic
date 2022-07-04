import express from 'express';
var router = express.Router();
import controller from '../controllers/shoppingList.controller.js';
import auth from '../middleware/auth.js';


router.get('/shoppingList',auth,controller.getShoppingList);
router.post('/shoppingList',auth,controller.addToList);
router.patch('/shoppingList',auth,controller.updateList);
router.patch('/shoppingList/:item',auth,controller.updateListItem);

router.delete('/shoppingList',auth,controller.removeList);

router.delete('/shoppingList/:item',auth,controller.removeListItem);

export default router;
