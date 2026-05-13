import express from "express";
import { criarPedido } from "../controllers/pedidosController.js";
import { listarPedidos } from "../controllers/pedidosController.js";
import { estatisticasPedidos } from "../controllers/pedidosController.js";
import { atualizarStatus } from "../controllers/pedidosController.js";



const router = express.Router();


router.get("/", listarPedidos);              /* GET /pedidos */
router.post("/", criarPedido);               /* POST /pedidos */
 /*router.get("/stats", estatisticasPedidos);   /* GET /pedidos/stats */
router.patch("/:id/resolver", atualizarStatus); /* PATCH /pedidos/:id/resolver */
router.put("/pedidos/:id", atualizarStatus);

export default router;