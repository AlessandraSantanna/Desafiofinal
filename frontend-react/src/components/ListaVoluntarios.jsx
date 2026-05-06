import { useState, useEffect } from "react";
import { listarVoluntariosPorRegiao } from "../services/api";

export default function ListaVoluntarios() {
  const [dados, setDados] = useState([]);
  const [aberto, setAberto] = useState(null);

  useEffect(() => {
    listarVoluntariosPorRegiao()
      .then((res) => {
        setDados(Array.isArray(res) ? res : []);
      })
      .catch((err) => {
        console.error("Erro ao carregar voluntários:", err);
        setDados([]);
      });
  }, []);

  return (
    <div className="lista-voluntarios">
      {dados.map((grupo, idx) => (
        <div key={idx} className={`regiao-card cor-${idx % 4}`}>
          <div
            className="regiao-header"
            onClick={() => setAberto(aberto === idx ? null : idx)}
          >
            <span>{grupo.regiao}</span>
            <span className="expand-icon">
              {aberto === idx ? "−" : "+"}
            </span>
          </div>

          {aberto === idx && (
            <ul className="voluntarios-lista">
              {(grupo.lista || []).map((v) => (
                <li key={v.id}>
                  <strong>{v.nome}</strong> - {v.telefone}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}