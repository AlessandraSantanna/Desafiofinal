-- Active: 1774474549688@@127.0.0.1@5432@sos_enchentes
CREATE TABLE IF NOT EXISTS pedidos (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100),
  idade INT,
  tipo VARCHAR(50),
  descricao TEXT,
  tem_animal BOOLEAN,
  prioridade VARCHAR(10),
  status VARCHAR(20) DEFAULT 'pendente',
  regiao VARCHAR(100)
);

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
ALTER TABLE pedidos 
ADD COLUMN IF NOT EXISTS data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE pedidos 
ADD COLUMN IF NOT EXISTS data_resolvido TIMESTAMP;

ALTER TABLE pedidos 
ALTER COLUMN prioridade TYPE VARCHAR(40);


SELECT 
  regiao, 
  COALESCE(json_agg(voluntarios.*), '[]') AS lista
FROM voluntarios
GROUP BY regiao
ORDER BY regiao;

ALTER TABLE pedidos
RENAME COLUMN bairro TO regiao;


CREATE TABLE IF NOT EXISTS pedidos (
  id SERIAL PRIMARY KEY,
  nome TEXT,
  regiao TEXT,
  tipo TEXT
);

INSERT INTO pedidos (nome, regiao, tipo)
VALUES ('Maria', 'centro', 'resgate');

ALTER TABLE pedidos ADD COLUMN bairro TEXT;
ALTER TABLE pedidos
ADD COLUMN IF NOT EXISTS regiao TEXT;

ALTER TABLE pedidos
DROP COLUMN bairro;