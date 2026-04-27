# 🆘 Projeto - SOS Enchentes - Oferecer Ajuda

## 1. Apresentação da Ideia
Esse é o meu projeto. A ideia surgiu a partir do desafio sobre enchentes no Brasil. Pensando nesse cenário, decidi focar no problema de pessoas e animais que precisam de apoio durante situações de emergência, como resgates e abrigos. A proposta é criar uma aplicação que facilite o registro e a organização de pedidos de ajuda.

## 2. Problema Escolhido
O problema escolhido foi a dificuldade de organizar e centralizar informações sobre pedidos de ajuda em situações de crise. Muitas vezes, voluntários e organizações não têm acesso rápido a quem precisa de suporte, o que atrasa o atendimento.

## 3. Solução Proposta
A solução proposta foi desenvolver um sistema onde qualquer pessoa pode:
- Registrar pedidos de ajuda (resgate ou abrigo).
- Visualizar os pedidos existentes.
- Resolver pedidos já atendidos.  

Assim, criamos um fluxo simples e eficiente para conectar quem precisa de ajuda com quem pode oferecer suporte.

## 4. Estrutura do Sistema
O projeto foi dividido em três partes principais:

- **Front-end**  
  Desenvolvido em **React**, responsável pela interface do usuário.  
  Principais funcionalidades:
  - Formulário para criar novos pedidos.
  - Listagem de pedidos existentes.
  - Botão para marcar pedidos como resolvidos.

- **Back-end**  
  Implementado em **Node.js/Express** (ou outro framework que você usou).  
  Responsável por:
  - Receber e armazenar os pedidos.
  - Expor endpoints para criar, listar e resolver pedidos.

- **Banco de Dados**  
  Utilizado para persistir os pedidos (ex.: MongoDB, PostgreSQL ou outro).  
  Estrutura básica:
  - `id`
  - `nome`
  - `telefone`
  - `idade`
  - `tipo` (resgate ou abrigo)
  - `descricao`
  - `tem_animal`
  - `bairro`
  - `status` (pendente ou resolvido)

---

## 🎯 Objetivo do Desafio
Mais do que escrever código, o objetivo foi:
- Exercitar **pensamento crítico**.
- Fazer **análise de problemas reais**.
- Organizar dados de forma clara.
- Construir uma solução tecnológica coerente.  

O sistema demonstra como a tecnologia pode ser aplicada para apoiar comunidades em momentos de necessidade.
