import express from 'express';
var router = express.Router();
import controller from '../controllers/automation.controller.js';
import auth from '../middleware/auth.js';

router.get('/automations',auth,controller.getAllAutomations)
router.get('/automation',auth,controller.getAutomation)
router.post('/automation',auth,controller.addAutomation)
router.delete('/automation',auth,controller.removeAutomation)
router.put('/automation',auth,controller.updateAutomation)


export default router;

