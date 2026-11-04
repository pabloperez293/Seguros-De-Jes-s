
import { useEffect, useState } from "react";
import { ShieldCheck, Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/Navbar.css";

const WHATSAPP = "5491157662077";

const enlaces = [
  { texto: "Seguros", href: "#seguros" },
  { texto: "Empresas", href: "#empresas" },
  { texto: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [abierto, setAbierto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const whatsappURL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    "¡Hola! Quisiera recibir asesoramiento sobre un seguro."
  )}`;

  const cerrarMenu = () => {
    setAbierto(false);
  };

  return (
    <header
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
    >
      <div className="navbar__container">

        {/* LOGO */}
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

        {/* NAVEGACIÓN */}
        <nav
          id="navegacion-principal"
          className={`navbar__links ${
            abierto ? "navbar__links--open" : ""
          }`}
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

        {/* BOTÓN WHATSAPP */}
        <a
          className="navbar__whatsapp"
          href={whatsappURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={20} aria-hidden="true" />
          <span>Consultá por WhatsApp</span>
        </a>

        {/* MENÚ MÓVIL */}
        <button
          type="button"
          className="navbar__toggle"
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={abierto}
          aria-controls="navegacion-principal"
          onClick={() => setAbierto((prev) => !prev)}
        >
          {abierto ? <X size={23} /> : <Menu size={23} />}
        </button>

      </div>
    </header>
  );
}
