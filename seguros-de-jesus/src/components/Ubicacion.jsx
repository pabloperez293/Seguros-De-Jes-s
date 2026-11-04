import React from "react";
import { MapPin, ArrowUpRight, Navigation } from "lucide-react";
import "../styles/Ubicacion.css";

const DIRECCION =
  "Gabino Ezeiza 8909, Loma Hermosa, Buenos Aires, Argentina 1657";

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(DIRECCION)}`;

const MAPS_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(DIRECCION)}&output=embed`;

export default function Ubicacion() {
  return (
    <section className="ubicacion" id="ubicacion">
      <div className="ubicacion__container">
        <div className="ubicacion__info">
          <span className="ubicacion__eyebrow">NUESTRA UBICACIÓN</span>

          <h2>
            Siempre cerca
            <br />
            <em>de vos.</em>
          </h2>

          <p className="ubicacion__descripcion">
            Además de asesorarte de manera online, contamos con un espacio
            físico donde podés encontrarnos y realizar tus consultas.
          </p>

          <div className="ubicacion__direccion">
            <div className="ubicacion__icono">
              <MapPin size={23} />
            </div>

            <div>
              <strong>Gabino Ezeiza 8909</strong>
              <span>Loma Hermosa, Buenos Aires</span>
              <small>CP 1657 · Argentina</small>
            </div>
          </div>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ubicacion__boton"
          >
            <Navigation size={18} />
            Cómo llegar
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="ubicacion__mapa">
          <iframe
            title="Ubicación de Seguros de Jesús"
            src={MAPS_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />

          <div className="ubicacion__mapaEtiqueta">
            <MapPin size={17} />
            <span>Seguros de Jesús · Loma Hermosa</span>
          </div>
        </div>
      </div>
    </section>
  );
}
