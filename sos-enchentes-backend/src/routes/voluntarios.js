import express from "express";
import { listarVoluntariosPorRegiao, criarVoluntario } from "../controllers/pedidosController.js";

const router = express.Router();

router.get("/", listarVoluntariosPorRegiao);
router.post("/", criarVoluntario);

export default router;
