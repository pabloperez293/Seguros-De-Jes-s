import {
  CarFront,
  Bike,
  House,
  HeartPulse,
  Store,
  Building2,
  ArrowUpRight,
} from "lucide-react";
import useScrollReveal from "../hooks/useScrollReveal";
import "../styles/Seguros.css";

const coberturas = [
  { nombre: "Auto", imagen: "/images/coberturas/auto.jpeg", Icono: CarFront },
  { nombre: "Moto", imagen: "/images/coberturas/moto.jpeg", Icono: Bike },
  { nombre: "Hogar", imagen: "/images/coberturas/hogar.jpeg", Icono: House },
  {
    nombre: "Vida y Salud",
    imagen: "/images/coberturas/vida.jpeg",
    Icono: HeartPulse,
  },
  {
    nombre: "Comercio",
    imagen: "/images/coberturas/comercio.jpeg",
    Icono: Store,
  },
  {
    nombre: "Empresa",
    imagen: "/images/coberturas/empresa.jpeg",
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
  const { ref, visible } = useScrollReveal();
  return (
    <section
      ref={ref}
      className={`coberturas reveal ${visible ? "reveal--visible" : ""}`}
      id="seguros"
    >
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
