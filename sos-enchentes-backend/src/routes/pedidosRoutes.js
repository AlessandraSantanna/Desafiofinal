import express from "express";
import { criarPedido } from "../controllers/pedidosController.js";
import { listarPedidos } from "../controllers/pedidosController.js";
import { estatisticasPedidos } from "../controllers/pedidosController.js";
import { atualizarStatus } from "../controllers/pedidosController.js";



const router = express.Router();


router.get("/pedidos", listarPedidos);
router.post("/pedidos", criarPedido);
router.get("/pedidos/stats", estatisticasPedidos);
router.patch("/pedidos/:id/resolver", atualizarStatus);

export default router;