export function definirPrioridade({ idade, tipo, tem_animal }) {
  if (tipo === "resgate") return "alta";

  if (idade <= 12) return "alta";
  if (idade >= 60) return "alta";

  if (tem_animal) return "media";

  return "baixa";
}
