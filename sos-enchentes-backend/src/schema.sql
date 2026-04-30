CREATE TABLE IF NOT EXISTS pedidos (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100),
  idade INT,
  tipo VARCHAR(50),
  descricao TEXT,
  tem_animal BOOLEAN,
  prioridade VARCHAR(10),
  status VARCHAR(20) DEFAULT 'pendente',
  bairro VARCHAR(100),
  data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  data_resolvido TIMESTAMP
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
