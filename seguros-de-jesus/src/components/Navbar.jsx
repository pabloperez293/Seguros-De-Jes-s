
import { useEffect, useState } from "react";
import { ShieldCheck, Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/Navbar.css";

const WHATSAPP = "5491157662077";

const enlaces = [
  { texto: "Seguros", href: "#seguros" },
  { texto: "Empresas", href: "#aseguradoras" },
  { texto: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [abierto, setAbierto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Detectar scroll */
  useEffect(() => {
    const manejarScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    manejarScroll();

    window.addEventListener("scroll", manejarScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", manejarScroll);
    };
  }, []);

  /* Bloquear scroll cuando el menú está abierto */
  useEffect(() => {
    if (!abierto) return;

    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = overflowAnterior;
    };
  }, [abierto]);

  /* Cerrar con Escape */
  useEffect(() => {
    if (!abierto) return;

    const manejarTecla = (event) => {
      if (event.key === "Escape") {
        setAbierto(false);
      }
    };

    window.addEventListener("keydown", manejarTecla);

    return () => {
      window.removeEventListener("keydown", manejarTecla);
    };
  }, [abierto]);

  /* Cerrar si se vuelve a escritorio */
  useEffect(() => {
    const media = window.matchMedia("(min-width: 851px)");

    const manejarCambio = (event) => {
      if (event.matches) setAbierto(false);
    };

    media.addEventListener("change", manejarCambio);

    return () => {
      media.removeEventListener("change", manejarCambio);
    };
  }, []);

  const whatsappURL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    "¡Hola! Quisiera recibir asesoramiento sobre un seguro."
  )}`;

  const cerrarMenu = () => setAbierto(false);

  return (
  <header
  className={`navbar ${scrolled ? "navbar--scrolled" : ""} ${
    abierto ? "navbar--menu-open" : ""
  }`}
>
      <div className="navbar__container">

        {/* LOGO ORIGINAL DEL NAVBAR */}
        <a
          href="#inicio"
          className="navbar__logo"
          aria-label="Seguros de Jesús - Ir al inicio"
          onClick={cerrarMenu}
        >
          <ShieldCheck
            className="navbar__logo-icon"
            strokeWidth={1.4}
            aria-hidden="true"
          />

          <div className="navbar__logo-text">
            <span className="navbar__logo-title">
              Seguros
              <br />
              de Jesús
            </span>

            <span className="navbar__logo-subtitle">
              ASESORÍA INTEGRAL
            </span>
          </div>
        </a>

        {/* NAVEGACIÓN DE ESCRITORIO */}
        <nav
          className="navbar__links"
          aria-label="Navegación principal"
        >
          {enlaces.map((enlace) => (
            <a
              key={enlace.texto}
              href={enlace.href}
              onClick={cerrarMenu}
            >
              {enlace.texto}
            </a>
          ))}
        </nav>

        {/* WHATSAPP DEL NAVBAR */}
        <a
          className="navbar__whatsapp"
          href={whatsappURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={20} aria-hidden="true" />
          <span>Consultá por WhatsApp</span>
        </a>

        {/* BOTÓN HAMBURGUESA */}
        <button
          type="button"
          className={`navbar__toggle ${
            abierto ? "navbar__toggle--open" : ""
          }`}
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={abierto}
          aria-controls="navegacion-principal"
          onClick={() => setAbierto((prev) => !prev)}
        >
          {abierto ? <X size={23} /> : <Menu size={23} />}
        </button>

      </div>

      {/* ======================================
          MENÚ FULLSCREEN
      ====================================== */}

      <div
        id="navegacion-principal"
        className={`navbar__overlay ${
          abierto ? "navbar__overlay--open" : ""
        }`}
        aria-hidden={!abierto}
        inert={!abierto}
      >
        {/* CERRAR */}
        <button
          type="button"
          className="navbar__overlayClose"
          aria-label="Cerrar menú"
          onClick={cerrarMenu}
          tabIndex={abierto ? 0 : -1}
        >
          <X size={24} />
        </button>

        {/* LOGO CENTRADO */}
        <a
          href="#inicio"
          className="navbar__overlayBrand"
          onClick={cerrarMenu}
          tabIndex={abierto ? 0 : -1}
        >
          <div className="navbar__overlayLogo">
            <img
              src="/images/logoJesus.jpg"
              alt="Logo de Seguros de Jesús"
            />
          </div>

          <span>SEGUROS DE JESÚS</span>
        </a>

        {/* ENLACES CENTRADOS */}
        <nav
          className="navbar__overlayLinks"
          aria-label="Navegación móvil"
        >
          {enlaces.map((enlace, index) => (
            <a
              key={enlace.texto}
              href={enlace.href}
              onClick={cerrarMenu}
              style={{ "--item-index": index }}
              tabIndex={abierto ? 0 : -1}
            >
              {enlace.texto}
            </a>
          ))}
        </nav>

        {/* WHATSAPP INFERIOR */}
        <div className="navbar__overlayBottom">
          <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__overlayWhatsapp"
            onClick={cerrarMenu}
            tabIndex={abierto ? 0 : -1}
          >
            <FaWhatsapp size={22} />
            <span>Consultas por WhatsApp</span>
          </a>

          <p>ESTAMOS PARA ACOMPAÑARTE</p>
        </div>
      </div>
    </header>
  );
}
