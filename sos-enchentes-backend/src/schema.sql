-- Active: 1774474549688@@127.0.0.1@5432@sos_enchentes
-- =========================
-- 📦 TABELA PEDIDOS
-- =========================

CREATE TABLE IF NOT EXISTS pedidos (
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  idade INTEGER,
  tipo TEXT NOT NULL,
  descricao TEXT,
  tem_animal BOOLEAN DEFAULT false,
  prioridade VARCHAR(40) DEFAULT 'baixa',
  regiao VARCHAR(100) NOT NULL,
  status TEXT DEFAULT 'pendente',
  data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  data_resolvido TIMESTAMP
);

-- =========================
-- 🤝 TABELA VOLUNTÁRIOS
-- =========================

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

-- =========================
-- 📊 CONSULTA VOLUNTÁRIOS
-- =========================

SELECT
  regiao,
  COALESCE(json_agg(voluntarios.*), '[]') AS lista
FROM voluntarios
GROUP BY regiao
ORDER BY regiao;

DROP TABLE pedidos;

SELECT * FROM pedidos;

ALTER TABLE pedidos
ADD COLUMN IF NOT EXISTS regiao TEXT;
SELECT * FROM pedidos;

SELECT column_name
FROM information_schema.columns
WHERE table_name = 'pedidos';

SELECT * FROM pedidos

DROP TABLE IF EXISTS pedidos;