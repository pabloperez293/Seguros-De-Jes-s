import {
  CarFront,
  Bike,
  House,
  HeartPulse,
  Store,
  Building2,
  ArrowUpRight,
} from "lucide-react";

import "../styles/Seguros.css";

const coberturas = [
  { nombre: "Auto", imagen: "/images/coberturas/auto.jpg", Icono: CarFront },
  { nombre: "Moto", imagen: "/images/coberturas/moto.jpg", Icono: Bike },
  { nombre: "Hogar", imagen: "/images/coberturas/hogar.jpg", Icono: House },
  {
    nombre: "Vida y Salud",
    imagen: "/images/coberturas/vida.jpg",
    Icono: HeartPulse,
  },
  {
    nombre: "Comercio",
    imagen: "/images/coberturas/comercio.jpg",
    Icono: Store,
  },
  {
    nombre: "Empresa",
    imagen: "/images/coberturas/empresa.jpg",
    Icono: Building2,
  },
];

export default function Seguros({ onSeleccionarSeguro }) {
  const seleccionar = (nombre) => {
    onSeleccionarSeguro(nombre);

    document.getElementById("cotiza")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="coberturas" id="seguros">
      <div className="coberturas__intro">
        <span className="coberturas__eyebrow">NUESTRAS COBERTURAS</span>

        <h2>
          Elegí la protección
          <br />
          que necesitás
        </h2>

        <p>
          Soluciones para tu auto, tu hogar, tu familia, tu comercio o tu
          empresa.
        </p>

        <div className="coberturas__linea" />
      </div>

      <div className="coberturas__grid">
        {coberturas.map(({ nombre, imagen, Icono }) => (
          <button
            className="cobertura-card"
            key={nombre}
            type="button"
            onClick={() => seleccionar(nombre)}
            aria-label={`Cotizar seguro de ${nombre}`}
          >
            <img src={imagen} alt="" loading="lazy" />
            <span className="cobertura-card__overlay" />

            <span className="cobertura-card__contenido">
              <Icono size={27} strokeWidth={1.6} />

              <span className="cobertura-card__inferior">
                <span>{nombre}</span>
                <span className="cobertura-card__flecha">
                  <ArrowUpRight size={17} />
                </span>
              </span>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
