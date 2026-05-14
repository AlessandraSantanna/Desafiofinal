import { useState } from "react";
import { criarPedido } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function PedidoForm({ onNovoPedido }) {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: "",
    idade: "",
    tipo: "resgate",
    descricao: "",
    tem_animal: false,
    regiao: "",
  });

  /* =========================
     ✏️ ALTERAR CAMPOS
  ========================= */
  function handleChange(e) {

    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox"
        ? checked
        : value,
    });
  }

  /* =========================
     🚀 ENVIAR FORMULÁRIO
  ========================= */
  async function handleSubmit(e) {

    e.preventDefault();

    // prioridade automática
    const prioridade =
      form.tipo === "resgate"
        ? "alta"
        : form.tipo === "alimentacao"
        ? "media"
        : "baixa";

    const payload = {
      ...form,
      idade: Number(form.idade),
      prioridade,
    };

    try {

      await criarPedido(payload);

      alert("Pedido criado com sucesso 🚀");

      // limpa formulário
      setForm({
        nome: "",
        idade: "",
        tipo: "resgate",
        descricao: "",
        tem_animal: false,
        regiao: "",
      });

      // callback opcional
      if (onNovoPedido) {
        onNovoPedido();
      }

      // redireciona
      navigate("/pedidos");

    } catch (error) {

      console.error(
        "ERRO FRONT:",
        error.response?.data || error
      );

      alert(
        error.response?.data?.erro ||
        "Erro ao criar pedido ❌"
      );
    }
  }

  return (
    <>
 
    <form
      onSubmit={handleSubmit}
      className="pedido-form"
    >

      <h2>🆘 Preciso de ajuda</h2>

      {/* =========================
          NOME
      ========================= */}
      <div className="form-group">

        <input
          id="nome"
          name="nome"
          placeholder="Digite seu nome"
          value={form.nome}
          onChange={handleChange}
          required
          className="input-field"
        />

      </div>

      {/* =========================
          IDADE
      ========================= */}
      <div className="form-group">

        <input
          id="idade"
          name="idade"
          type="number"
          placeholder="Digite sua idade"
          value={form.idade}
          onChange={handleChange}
          required
          className="input-field"
        />

      </div>

      {/* =========================
          TIPO
      ========================= */}
      <div className="form-group">

        <select
          id="tipo"
          name="tipo"
          value={form.tipo}
          onChange={handleChange}
          className="input-field"
        >

          <option value="resgate">
            Resgate - Crianças e Idosos
          </option>

          <option value="alimentacao">
            Doações
          </option>

          <option value="abrigo">
            Abrigo
          </option>

        </select>

      </div>

      {/* =========================
          DESCRIÇÃO
      ========================= */}
      <div className="form-group">

        <label htmlFor="descricao">
          Descreva a situação
        </label>

        <textarea
          id="descricao"
          name="descricao"
          placeholder="Explique o que está acontecendo"
          value={form.descricao}
          onChange={handleChange}
          className="input-field"
          required
        />

      </div>

      {/* =========================
          ANIMAL
      ========================= */}
      <div className="form-group checkbox-label">

        <input
          type="checkbox"
          name="tem_animal"
          checked={form.tem_animal}
          onChange={handleChange}
        />

        <label>Tem animal</label>

      </div>

      {/* =========================
          REGIÃO
      ========================= */}
      <div className="form-group">

        <select
          name="regiao"
          value={form.regiao}
          onChange={handleChange}
          required
          className="input-field"
        >

          <option value="">
            Selecione a região
          </option>

          <option value="zona_norte">
            Zona Norte
          </option>

          <option value="zona_sul">
            Zona Sul
          </option>

          <option value="zona_oeste">
            Zona Oeste
          </option>

          <option value="centro">
            Centro
          </option>

          <option value="baixada">
            Baixada Fluminense
          </option>

        </select>

      </div>

      {/* =========================
          BOTÃO
      ========================= */}
      <button
        type="submit"
        className="submit-btn"
      >
        Cadastrar
      </button>
    </form>  
  
    </>
  );
}