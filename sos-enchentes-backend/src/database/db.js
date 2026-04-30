import { pool } from "./database/db.js";

async function criarTabelas() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS pedidos (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(100),
        descricao TEXT,
        status VARCHAR(20) DEFAULT 'pendente',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS voluntarios (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(100),
        telefone VARCHAR(20),
        email VARCHAR(100),
        disponibilidade VARCHAR(20),
        observacoes TEXT,
        regiao VARCHAR(50),
        criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log("✅ Tabelas criadas com sucesso!");
  } catch (err) {
    console.error("❌ Erro ao criar tabelas:", err);
  }
}

criarTabelas();