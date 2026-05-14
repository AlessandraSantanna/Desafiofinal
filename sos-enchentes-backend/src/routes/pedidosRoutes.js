import express from "express";

import {
  criarPedido,
  listarPedidos,
  estatisticasPedidos,
  atualizarStatus
} from "../controllers/pedidosController.js";

const router = express.Router();

/* 📋 listar pedidos */
router.get("/", listarPedidos);

/* 🆘 criar pedido */
router.post("/", criarPedido);

/* 📊 estatísticas */
router.get("/stats", estatisticasPedidos);

/* ✅ resolver pedido */
router.put("/:id/resolver", atualizarStatus);

export default router;