
import {
  CarFront,
  Bike,
  House,
  HeartHandshake,
  BriefcaseBusiness,
  Building2,
  ChevronRight,
} from "lucide-react";

import "../styles/Seguros.css";

const seguros = [
  {
    id: "auto",
    title: "Auto",
    icon: CarFront,
  },
  {
    id: "moto",
    title: "Moto",
    icon: Bike,
  },
  {
    id: "hogar",
    title: "Hogar",
    icon: House,
  },
  {
    id: "vida",
    title: "Vida",
    icon: HeartHandshake,
  },
  {
    id: "comercio",
    title: "Comercio",
    icon: BriefcaseBusiness,
  },
  {
    id: "empresa",
    title: "Empresa",
    icon: Building2,
  },
];

export default function Seguros({ onSeleccionarSeguro }) {
  const seleccionarSeguro = (tipoSeguro) => {
    if (typeof onSeleccionarSeguro === "function") {
      onSeleccionarSeguro(tipoSeguro);
    }
  };

  return (
    <section
      className="seguros"
      id="seguros"
      aria-labelledby="seguros-title"
    >
      <div className="seguros__container">
        {/* Presentación de la sección */}
        <div className="seguros__intro">
          <span className="seguros__eyebrow">
            NUESTROS SEGUROS
          </span>

          <h2 id="seguros-title">
            Elegí la cobertura
            <br />
            que necesitás
          </h2>

          <p>
            Contamos con distintas opciones
            para vos, tu familia y tu negocio.
          </p>

          <span
            className="seguros__line"
            aria-hidden="true"
          />
        </div>

        {/* Tarjetas de seguros */}
        <div className="seguros__grid">
          {seguros.map((seguro) => {
            const Icon = seguro.icon;

            return (
              <a
                key={seguro.id}
                href="#cotiza"
                className="seguros__card"
                aria-label={`Cotizar seguro de ${seguro.title}`}
                onClick={() =>
                  seleccionarSeguro(seguro.title)
                }
              >
                <Icon
                  size={43}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />

                <h3>{seguro.title}</h3>

                <ChevronRight
                  className="seguros__arrow"
                  size={18}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
