
import React from "react";
import "../styles/Aseguradoras.css";

const aseguradoras = [
  {
    nombre: "Rivadavia Seguros",
    logo: "/images/aseguradoras/rivadavia.jpeg",
  },
  {
    nombre: "Federación Patronal",
    logo: "/images/aseguradoras/federacion.jpeg",
  },
  {
    nombre: "Provincia Seguros",
    logo: "/images/aseguradoras/provincia.jpeg",
  },
  {
    nombre: "Providencia Seguros",
    logo: "/images/aseguradoras/providencia.jpeg",
  },
  {
    nombre: "ATM Seguros",
    logo: "/images/aseguradoras/atm.jpeg",
  },
  {
    nombre: "Mercantil Andina",
    logo: "/images/aseguradoras/mercantil.jpeg",
  },
];

export default function Aseguradoras() {
  return (
    <section className="aseguradoras" id="aseguradoras">
      <div className="aseguradoras__contenido">
        <div className="aseguradoras__intro">
          <h2>
            Trabajamos con las
            <br />
            principales aseguradoras
          </h2>

          <span className="aseguradoras__linea" />
        </div>

        <div className="aseguradoras__grid">
          {aseguradoras.map((item) => (
            <div
              className="aseguradoras__card"
              key={item.nombre}
            >
              <img
                src={item.logo}
                alt={item.nombre}
                loading="lazy"
                onError={() => {
                  console.error(
                    `No se pudo cargar: ${item.logo}`
                  );
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="aseguradoras__ondas" aria-hidden="true">
        <svg
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 C230,75 340,165 610,140 C900,110 1090,40 1440,70 L1440,160 L0,160 Z"
            fill="#D8D9CB"
          />

          <path
            d="M0,105 C260,70 420,155 700,150 C960,145 1180,85 1440,100 L1440,160 L0,160 Z"
            fill="#AEB6A0"
            opacity="0.6"
          />
        </svg>
      </div>
    </section>
  );
}
