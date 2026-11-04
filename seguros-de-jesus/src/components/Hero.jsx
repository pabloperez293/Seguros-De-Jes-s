import { ArrowRight, ShieldCheck } from "lucide-react";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__container">
        <div className="hero__content hero__content--animated">
          <span className="hero__eyebrow">
            SEGUROS EN LOMA HERMOSA · BUENOS AIRES
          </span>

          <h1>
            Protegé lo que
            <br />
            <em>más valorás</em>
          </h1>

          <p className="hero__description">
            Te asesoramos de forma personalizada para que elijas la mejor
            cobertura, con el respaldo de las principales aseguradoras del país.
          </p>

          <a className="hero__button" href="#cotiza">
            Cotizá tu seguro ahora
            <ArrowRight size={19} />
          </a>

          <div className="hero__trust">
            <ShieldCheck size={25} color="#788665" />
            <span>
              Asesoramiento cercano y personalizado para personas, familias y
              empresas.
            </span>
          </div>
        </div>
      </div>

      <div className="hero__image hero__image--animated" aria-hidden="true">
        <img src="/images/hero-auto.jpg" alt="" fetchPriority="high" />
      </div>
    </section>
  );
}
