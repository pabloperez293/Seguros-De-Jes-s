
import React from "react";
import {
  ArrowUpRight,
  Mail,
  Clock3,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import "../styles/Footer.css";

/* =========================================
   DATOS DEL NEGOCIO
========================================= */

const WHATSAPP = "5491157662077";

const INSTAGRAM =
  "https://www.instagram.com/segurosdejesus/";

const EMAIL = "";

const DIRECCION =
  "Gabino Ezeiza 8909, Loma Hermosa, Buenos Aires, Argentina 1657";

const MAPS_URL =
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(DIRECCION)}`;

const PR_AGENCY_URL =
  "https://www.instagram.com/pr.creativeagency/";

const SSN_URL =
  "https://www.argentina.gob.ar/noticias/nueva-consulta-de-sujetos-habilitados-operar-por-la-ssn";

const PRODUCTORA = {
  nombre: "Ada Carolina De Jesús",
  titulo: "Productora y asesora de seguros",
  matricula: "73494",
};

const HORARIOS = [
  {
    dias: "Lunes a viernes",
    horario: "9:00 a 12:00 y 15:00 a 18:00",
  },
  {
    dias: "Sábados",
    horario: "9:00 a 13:00",
  },
  {
    dias: "Domingos",
    horario: "Cerrado",
  },
];

export default function Footer() {
  const whatsappUrl =
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
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
            INFORMACIÓN DEL NEGOCIO
        ===================================== */}
        <div className="sj-footer__columns">

          {/* MARCA */}
          <div className="sj-footer__brand">
            <strong>Seguros de Jesús</strong>
            <span>ASESORÍA INTEGRAL</span>

            <p>
              Tu tranquilidad, nuestra prioridad.
              Asesoramiento cercano para proteger
              lo que más importa.
            </p>

            <div className="sj-footer__sociales">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
                title="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>

              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar Instagram de Seguros de Jesús"
                title="Instagram"
              >
                <FaInstagram size={20} />
              </a>

              {EMAIL && (
                <a
                  href={`mailto:${EMAIL}`}
                  aria-label="Enviar un correo electrónico"
                  title="Email"
                >
                  <Mail size={20} />
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
            <a href="#ubicacion">Dónde estamos</a>
          </nav>


          {/* HORARIOS */}
          <div className="sj-footer__horarios">
            <h4>Horarios de atención</h4>

            <div className="sj-footer__horariosTitle">
              <Clock3 size={18} />
              <span>Atención presencial</span>
            </div>

            {HORARIOS.map((item) => (
              <div
                className="sj-footer__horario"
                key={item.dias}
              >
                <span>{item.dias}</span>
                <strong>{item.horario}</strong>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================
            MATRÍCULA PROFESIONAL / SSN
        ===================================== */}
        <div className="sj-footer__matricula">
          <div className="sj-footer__matriculaProfesional">
            <div className="sj-footer__matriculaIcono">
              <ShieldCheck size={27} strokeWidth={1.5} />
            </div>

            <div className="sj-footer__matriculaDatos">
              <span className="sj-footer__matriculaLabel">
                INFORMACIÓN PROFESIONAL
              </span>

              <h4>{PRODUCTORA.nombre}</h4>

              <p>{PRODUCTORA.titulo}</p>

              <strong>
                Matrícula N.º {PRODUCTORA.matricula}
              </strong>
            </div>
          </div>

          <div className="sj-footer__matriculaSeparador" />

          <div className="sj-footer__matriculaSSN">
            <span className="sj-footer__matriculaLabel">
              ORGANISMO DE CONTROL
            </span>

          <img
              src="/images/testimonios/ssn-logo.webp"
              alt="Logo de la Superintendencia de Seguros de la Nación (SSN)"
              className="sj-footer__matriculaSSNLogo"
              loading="lazy"
            />

            <p>
              Consultá la inscripción profesional
              en el registro oficial de la SSN.
            </p>

            <a
              href={SSN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar registro oficial
              <ExternalLink size={15} />
            </a>
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

          <a
            href={PR_AGENCY_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Diseño y desarrollo · PR. Creative Agency
            <ArrowUpRight size={13} />
          </a>
        </div>

      </div>
    </footer>
  );
}
