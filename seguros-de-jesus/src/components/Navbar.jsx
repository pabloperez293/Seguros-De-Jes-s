import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import "../styles/Navbar.css";

const WHATSAPP = "5491157662077";

const enlaces = [
  { texto: "Inicio", href: "#inicio" },
  { texto: "Seguros", href: "#seguros" },
  { texto: "Empresas", href: "#empresas" },
  { texto: "Sobre mí", href: "#nosotros" },
  { texto: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [abierto, setAbierto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const revisarScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    revisarScroll();
    window.addEventListener("scroll", revisarScroll, { passive: true });

    return () => window.removeEventListener("scroll", revisarScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__container">
        <a
          className="navbar__logo"
          href="#inicio"
          onClick={() => setAbierto(false)}
        >
          <img src="/images/logoJesus.jpg" alt="Seguros de Jesús" />
        </a>

        <nav
          id="navegacion-principal"
          className={`navbar__links ${abierto ? "navbar__links--open" : ""}`}
          aria-label="Navegación principal"
        >
          {enlaces.map((enlace) => (
            <a
              key={enlace.href}
              href={enlace.href}
              onClick={() => setAbierto(false)}
            >
              {enlace.texto}
            </a>
          ))}
        </nav>

        <a
          className="navbar__whatsapp"
          href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hola, quisiera consultar por un seguro.")}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={19} />
          <span>Consultá por WhatsApp</span>
        </a>

        <button
          className="navbar__toggle"
          type="button"
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          aria-controls="navegacion-principal"
          aria-expanded={abierto}
          onClick={() => setAbierto((valor) => !valor)}
        >
          {abierto ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
