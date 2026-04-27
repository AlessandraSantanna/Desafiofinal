export function definirPrioridade({ idade, tipo, tem_animal }) {
  if (tipo === "resgate") return "prioridade alta";

  if (idade <= 12) return "prioridade alta";
  if (idade >= 60) return "prioridade alta";

  if (tem_animal) return "prioridade media";

  return "prioridade baixa";
}