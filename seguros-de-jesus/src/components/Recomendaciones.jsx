
import React from "react";
import "../styles/Recomendaciones.css";

const testimonios = [
  {
    nombre: "Federico Cabana",
    texto:
      "Muy buena atención y predisposición.",
    imagen: "/images/testimonios/Federico.png",
  },
  {
    nombre: "Stella Oviedo",
    texto:
      "Excelente atención👏👍👇👌.",
    imagen: "/images/testimonios/Stella.png",
  },
  {
    nombre: "Natalia Fuente",
    texto:
      "Excelente oficina de seguros muy buena atención siempre responden.",
    imagen: "/images/testimonios/Natalia.png",
  },
];

// Activar solamente cuando la clienta confirme
// que la cifra es correcta.
const CLIENTES_CONFIRMADOS = null;

export default function Recomendaciones() {
  return (
    <section
      className="recomendaciones"
      id="recomendaciones"
    >
      <div className="recomendaciones__container">

        {/* ENCABEZADO */}
        <div className="recomendaciones__eyebrow">
          <span className="recomendaciones__linea" />
          <span>LA CONFIANZA DE NUESTROS CLIENTES</span>
          <span className="recomendaciones__linea" />
        </div>

        {/* TÍTULO PRINCIPAL */}
        <div className="recomendaciones__intro">
          <h2>
            {CLIENTES_CONFIRMADOS ? (
              <>
                Más de{" "}
                <span className="recomendaciones__destacado">
                  {CLIENTES_CONFIRMADOS} personas
                </span>
                <br />
                ya protegen lo que más les importa
              </>
            ) : (
              <>
                Tu tranquilidad es
                <br />
                <span className="recomendaciones__destacado">
                  lo que más nos importa
                </span>
              </>
            )}
          </h2>

          <p>
            Te acompañamos con asesoramiento cercano
            y soluciones de seguros a medida.
          </p>
        </div>

        {/* TESTIMONIOS */}
        <div className="recomendaciones__grid">
          {testimonios.map((testimonio, index) => (
            <article
              className="recomendaciones__item"
              key={index}
            >
              <div className="recomendaciones__foto">
                <img
                  src={testimonio.imagen}
                  alt=""
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display =
                      "none";
                  }}
                />
              </div>

              <div className="recomendaciones__contenido">
                <p className="recomendaciones__frase">
                  “{testimonio.texto}”
                </p>

                <strong className="recomendaciones__nombre">
                  {testimonio.nombre}
                </strong>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
