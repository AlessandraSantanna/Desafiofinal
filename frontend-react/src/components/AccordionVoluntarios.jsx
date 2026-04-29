import { useState } from "react";

export default function AccordionVoluntarios({ grupo }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={() => setOpen(!open)}>
        <h3>{grupo.regiao}</h3>
        <span>{open ? "−" : "+"}</span>
      </div>
      {open && (
        <div className="accordion-body">
          <ul>
            {grupo.lista.map(v => (
              <li key={v.id}>
                <strong>{v.nome}</strong> - {v.telefone} ({v.disponibilidade})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
