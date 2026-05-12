
DROP TABLE IF EXISTS pedidos;
DROP TABLE IF EXISTS voluntarios;

CREATE TABLE pedidos (
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  idade INTEGER,
  tipo TEXT NOT NULL,
  descricao TEXT,
  tem_animal BOOLEAN DEFAULT false,
  prioridade TEXT,
  regiao TEXT,
  status TEXT DEFAULT 'pendente',
  data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  data_resolvido TIMESTAMP
);

CREATE TABLE voluntarios (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100),
  telefone VARCHAR(20),
  email VARCHAR(100),
  disponibilidade VARCHAR(20),
  observacoes TEXT,
  regiao VARCHAR(50),
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
