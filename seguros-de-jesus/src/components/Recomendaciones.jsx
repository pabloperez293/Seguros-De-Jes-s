
import React from "react";
import { MessageCircle, HeartHandshake, ShieldCheck } from "lucide-react";
import "../styles/Recomendaciones.css";

export default function Recomendaciones() {
  return (
    <section className="recomendaciones" id="recomendaciones">
      <div className="recomendaciones__container">
        <div className="recomendaciones__header">
          <span className="recomendaciones__etiqueta">
            NUESTRA FORMA DE TRABAJAR
          </span>

          <h2>
            La tranquilidad empieza
            <br />
            con una buena atención.
          </h2>

          <p>
            Te acompañamos a encontrar la cobertura
            adecuada, con una atención cercana,
            clara y personalizada.
          </p>
        </div>

        <div className="recomendaciones__grid">
          <article className="recomendaciones__card">
            <HeartHandshake size={30} strokeWidth={1.5} />
            <h3>Atención personalizada</h3>
            <p>
              Escuchamos lo que necesitás antes de
              ayudarte a elegir una cobertura.
            </p>
          </article>

          <article className="recomendaciones__card">
            <ShieldCheck size={30} strokeWidth={1.5} />
            <h3>Opciones para vos</h3>
            <p>
              Te orientamos para comparar alternativas
              según tus necesidades.
            </p>
          </article>

          <article className="recomendaciones__card">
            <MessageCircle size={30} strokeWidth={1.5} />
            <h3>Contacto directo</h3>
            <p>
              Podés comunicarte por WhatsApp
              para realizar tus consultas.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
