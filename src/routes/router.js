import express from "express";
var router= express.Router();
import shoppingListRoutes from './shoppingList.routes.js';
import financeRoutes from './finances.routes.js';



require(financeRoutes)(router)
require(shoppingListRoutes)(router)



export default router;