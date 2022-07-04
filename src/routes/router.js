import express from "express";
var router= express.Router();
import shoppingListRoutes from './shoppingList.routes.js';




require(shoppingListRoutes)(router)



export default router;