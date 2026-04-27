import { pool } from "../database/db.js";
import { definirPrioridade } from "../services/prioridadeService.js";


// 🆘 Criar pedido
export async function criarPedido(req, res) {
  const { nome, idade, tipo, descricao, tem_animal, bairro } = req.body;

  const prioridade = definirPrioridade({ idade, tipo, tem_animal });

  try {
    const result = await pool.query(
      `INSERT INTO pedidos 
      (nome, idade, tipo, descricao, tem_animal, prioridade, bairro)
      VALUES ($1,$2,$3,$4,$5,$6,$7)
      RETURNING *`,
      [nome, idade, tipo, descricao, tem_animal, prioridade, bairro]
    );

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
}


// 📋 Listar pedidos com filtro e ordenação
export async function listarPedidos(req, res) {
  const { prioridade } = req.query;

  try {
    let query = `
      SELECT * FROM pedidos
      ${prioridade ? "WHERE prioridade = $1" : ""}
      ORDER BY 
        CASE 
          WHEN prioridade = 'alta' THEN 1
          WHEN prioridade = 'media' THEN 2
          WHEN prioridade = 'baixa' THEN 3
        END
    `;

    const params = prioridade ? [prioridade] : [];

    const result = await pool.query(query, params);

    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
}


// 📊 Estatísticas (melhorada + tempo médio)
export async function estatisticasPedidos(req, res) {
  try {
    const result = await pool.query(`
      SELECT
        COUNT(*) AS total,
        COUNT(*) FILTER (WHERE prioridade = 'alta') AS alta,
        COUNT(*) FILTER (WHERE prioridade = 'media') AS media,
        COUNT(*) FILTER (WHERE prioridade = 'baixa') AS baixa,
        COUNT(*) FILTER (WHERE status = 'resolvido') AS resolvidos,
        AVG(EXTRACT(EPOCH FROM (data_resolvido - data_criacao))/3600) AS media_horas
      FROM pedidos
    `);

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
}


// ✅ Marcar como resolvido
export async function atualizarStatus(req, res) {
  const { id } = req.params;

  try {
    const result = await pool.query(
      `UPDATE pedidos 
       SET status = 'resolvido',
           data_resolvido = CURRENT_TIMESTAMP
       WHERE id = $1
       RETURNING *`,
      [id]
    );

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
}