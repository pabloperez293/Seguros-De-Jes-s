
import { ArrowRight, ShieldCheck } from "lucide-react";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__container">
        <div className="hero__content">
          <span className="hero__eyebrow">
            ASESORÍA EN SEGUROS
          </span>

          <h1>
            Protegé lo que
            <br />
            <em>más valorás</em>
          </h1>

          <p className="hero__description">
            Te asesoramos de forma personalizada para que
            elijas la mejor cobertura, con el respaldo de
            las principales aseguradoras del país.
          </p>

          <a className="hero__button" href="#cotiza">
            Cotizá tu seguro ahora
            <ArrowRight size={19} />
          </a>

          <div className="hero__trust">
            <ShieldCheck size={25} color="#788665" />
            <span>
              Asesoramiento cercano y personalizado
              para personas, familias y empresas.
            </span>
          </div>
        </div>
      </div>

      <div className="hero__image" aria-hidden="true">
        <img
          src="/images/hero-auto.jpg"
          alt=""
          fetchPriority="high"
        />
      </div>
    </section>
  );
}
