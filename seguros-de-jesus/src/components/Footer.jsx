
import React from "react";
import {
  ArrowUpRight,
  MapPin,
  Mail,
} from "lucide-react";

import {
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import "../styles/Footer.css";

/* =========================================
   DATOS DE CONTACTO
========================================= */

const WHATSAPP = "5491157662077";

// Completar con los datos reales de la clienta.
// Mientras estén vacíos, no se mostrarán esos enlaces.
const INSTAGRAM = "";
const EMAIL = "";
const UBICACION = "Argentina";

// Web o Instagram de PR. Creative Agency (opcional).
const PR_AGENCY_URL = "https://www.instagram.com/pr.creativeagency/";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    "Hola, quisiera recibir asesoramiento sobre un seguro."
  )}`;

  return (
    <footer className="sj-footer" id="contacto">
      <div className="sj-footer__inner">

        {/* =====================================
            ENCABEZADO PRINCIPAL
        ===================================== */}
        <div className="sj-footer__hero">
          <div className="sj-footer__heroText">
            <span className="sj-footer__eyebrow">
              SEGUROS DE JESÚS · ASESORÍA INTEGRAL
            </span>

            <h2>
              Cuidamos lo que
              <br />
              hace única <em>tu vida.</em>
            </h2>

            <p>
              Cada historia es diferente. Te ayudamos
              a encontrar la protección adecuada para
              lo que más valorás.
            </p>
          </div>

          <div className="sj-footer__logoWrap">
            <img
              src="/images/logoJesus.jpg"
              alt="Logo de Seguros de Jesús"
              className="sj-footer__logo"
              loading="lazy"
            />
          </div>
        </div>

        {/* =====================================
            LLAMADO A LA ACCIÓN
        ===================================== */}
        <div className="sj-footer__contacto">
          <div>
            <span className="sj-footer__miniLabel">
              ESTAMOS PARA ACOMPAÑARTE
            </span>

            <h3>¿Hablamos de tu próximo seguro?</h3>

            <p>
              Contanos qué necesitás y te asesoramos.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sj-footer__whatsapp"
          >
            <FaWhatsapp size={21} />
            <span>Escribinos por WhatsApp</span>
            <ArrowUpRight size={19} />
          </a>
        </div>

        {/* =====================================
            COLUMNAS INFERIORES
        ===================================== */}
        <div className="sj-footer__columns">

          {/* MARCA Y REDES SOCIALES */}
          <div className="sj-footer__brand">
            <strong>Seguros de Jesús</strong>
            <span>ASESORÍA INTEGRAL</span>

            <p>
              Tu tranquilidad, nuestra prioridad.
            </p>

            <div className="sj-footer__sociales">

              {/* WHATSAPP */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
                title="WhatsApp"
              >
                <FaWhatsapp size={21} />
              </a>

              {/* INSTAGRAM */}
              {INSTAGRAM && (
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visitar Instagram"
                  title="Instagram"
                >
<Instagram size={17} />                </a>
              )}

              {/* EMAIL */}
              {EMAIL && (
                <a
                  href={`mailto:${EMAIL}`}
                  aria-label="Enviar un correo electrónico"
                  title="Email"
                >
                  <Mail size={21} />
                </a>
              )}

            </div>
          </div>

          {/* NAVEGACIÓN */}
          <nav
            className="sj-footer__nav"
            aria-label="Navegación del pie de página"
          >
            <h4>Explorá</h4>

            <a href="#inicio">Inicio</a>
            <a href="#seguros">Coberturas</a>
            <a href="#cotiza">Cotizá tu seguro</a>
            <a href="#aseguradoras">Aseguradoras</a>
          </nav>

          {/* CONTACTO */}
          <div className="sj-footer__info">
            <h4>Contacto</h4>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={17} />
              WhatsApp
            </a>

            {INSTAGRAM && (
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
              >
<FaInstagram size={17} />                Instagram
              </a>
            )}

            {EMAIL && (
              <a href={`mailto:${EMAIL}`}>
                <Mail size={17} />
                {EMAIL}
              </a>
            )}

            <p>
              <MapPin size={17} />
              {UBICACION}
            </p>
          </div>
        </div>

        {/* =====================================
            COPYRIGHT Y CRÉDITOS
        ===================================== */}
        <div className="sj-footer__bottom">
          <span>
            © {new Date().getFullYear()} Seguros de Jesús.
            Todos los derechos reservados.
          </span>

          {PR_AGENCY_URL ? (
            <a
              href={PR_AGENCY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Diseño y desarrollo · PR. Creative Agency
              <ArrowUpRight size={13} />
            </a>
          ) : (
            <span>
              Diseño y desarrollo · PR. Creative Agency
            </span>
          )}
        </div>

      </div>
    </footer>
  );
}
