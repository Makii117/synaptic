import express from 'express';
var router = express.Router();
import controller from '../controllers/finances.controller.js';
import auth from '../middleware/auth.js';


router.get('/finances/overview',auth,controller.getOverview)
router.post('/finances/addExpense',auth,controller.addExpense)
router.get('/finances/expenses',auth,controller.getExpenses)
router.post('/finances/addProfit',auth,controller.addProfit)
router.post('/finances/addTurnover',auth,controller.addTurnover)
router.post('/finances/addFutureExpense',auth,controller.addFutureExpense)
router.delete('/finances/removeFutureExpense',auth,controller.removeFutureExpense)
router.get('/finances/kamate',auth,controller.kamate)
router.get('/finances/dugovi',auth,controller.dugovi)
router.delete('/finances/removeItem',auth,controller.removeExP)


export default router;

