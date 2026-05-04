import { pool } from "../database/db.js";
import { definirPrioridade } from "../services/prioridadeService.js";

/* 🆘 Criar pedido*/
export async function criarPedido(req, res) {
  try {
    // 🔥 pegar dados do body
    const { nome, idade, tipo, descricao, bairro, tem_animal } = req.body;

    // 🔥 validação básica
    if (!nome || !tipo || !bairro) {
      return res.status(400).json({
        erro: "Nome, tipo e bairro são obrigatórios"
      });
    }

    // 🔥 calcular prioridade
    const prioridade = definirPrioridade({ idade, tipo, tem_animal });

    // 🔥 inserir no banco
    const result = await pool.query(
      `INSERT INTO pedidos 
      (nome, idade, tipo, descricao, tem_animal, prioridade, bairro)
      VALUES ($1,$2,$3,$4,$5,$6,$7)
      RETURNING *`,
      [
        nome,
        Number(idade) || null,
        tipo?.toString().slice(0, 50),
        descricao?.toString().slice(0, 255),
        Boolean(tem_animal),
        prioridade?.toString().slice(0, 20),
        bairro?.toString().slice(0, 100)
      ]
    );

    res.json(result.rows[0]);

  } catch (error) {
    console.error("ERRO AO CRIAR PEDIDO:", error);
    res.status(500).json({ erro: error.message });
  }
}
/* 📋 Listar pedidos */
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

/* 📊 Estatísticas */
export async function estatisticasPedidos(req, res) {
  try {
    const result = await pool.query(`
      SELECT
        COUNT(*) AS total,
        COUNT(*) FILTER (WHERE prioridade = 'alta') AS alta,
        COUNT(*) FILTER (WHERE prioridade = 'media') AS media,
        COUNT(*) FILTER (WHERE prioridade = 'baixa') AS baixa,
        COUNT(*) FILTER (WHERE status = 'resolvido') AS resolvidos,
        
      FROM pedidos
    `);
    res.json(result.rows[0]);
  } catch (error) {
  // res.status(500).json({ erro: "Erro ao buscar estatísticas" });
  console.error("ERRO STATS:", error);
res.status(500).json({ erro: error.message });
  }
}

/* ✅ Atualizar status */
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



/* 📌 Listar voluntários por região */
export async function listarVoluntariosPorRegiao(req, res) {
  try {
    const result = await pool.query(`
      SELECT regiao, json_agg(voluntarios.*) AS lista
      FROM voluntarios
      GROUP BY regiao
      ORDER BY regiao;
    `);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }

  
}
/* 🆘 Criar voluntário */
export async function criarVoluntario(req, res) {
  const { nome, telefone, email, disponibilidade, observacoes, regiao } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO voluntarios 
       (nome, telefone, email, disponibilidade, observacoes, regiao)
       VALUES ($1,$2,$3,$4,$5,$6)
       RETURNING *`,
      [nome, telefone, email, disponibilidade, observacoes, regiao]
    );

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
}
