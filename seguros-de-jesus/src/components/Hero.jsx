import { ShieldCheck, ArrowRight } from "lucide-react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      {/* Imagen de fondo */}
      <div className="hero__background" aria-hidden="true" />

      {/* Degradado sobre la imagen */}
      <div className="hero__overlay" aria-hidden="true" />

      {/* Contenido principal */}
      <div className="hero__container">
        <div className="hero__content">
          <span className="hero__eyebrow">ASESORÍA EN SEGUROS</span>

          <h1 className="hero__title" id="hero-title">
            Protegé lo que
            <br />
            <em>más valorás</em>
          </h1>

          <p className="hero__description">
            Te asesoro de forma personalizada
            <br className="hero__desktop-break" />
            para que elijas la mejor cobertura,
            <br className="hero__desktop-break" />
            con el respaldo de las principales
            <br className="hero__desktop-break" />
            aseguradoras del país.
          </p>

          <a
            href="#cotiza"
            className="hero__button"
            aria-label="Ir al formulario de cotización"
          >
            <ShieldCheck size={26} strokeWidth={1.7} aria-hidden="true" />

            <span>Cotizá tu seguro ahora</span>

            <ArrowRight size={21} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
