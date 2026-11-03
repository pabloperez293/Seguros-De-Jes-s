import { useEffect, useState } from "react";
import { Menu, X, ShieldCheck, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/Navbar.css";

const WHATSAPP_NUMBER = "5491157662077";

const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Seguros", href: "#seguros" },
  { label: "Nosotros", href: "#sobre-mi" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "¡Hola! Quisiera consultar por un seguro.",
  )}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__container">
        <a
          href="#inicio"
          className="navbar__brand"
          onClick={closeMenu}
          aria-label="Seguros de Jesús - Inicio"
        >
          {!logoError ? (
            <img
              src="/images/logoJesus.jpg"
              alt="Seguros de Jesús"
              className="navbar__logo"
              onError={() => setLogoError(true)}
            />
          ) : (
            <span className="navbar__fallback">
              <ShieldCheck size={49} strokeWidth={1.5} />
              <span>
                Seguros
                <br />
                de Jesús
              </span>
            </span>
          )}
        </a>

        <nav className="navbar__links" aria-label="Navegación principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappUrl}
          className="navbar__whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={21} />
          <span>Cotizá por WhatsApp</span>
        </a>

        <button
          className="navbar__toggle"
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={27} /> : <Menu size={27} />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`navbar__mobile ${menuOpen ? "is-open" : ""}`}
        aria-label="Navegación móvil"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__mobile-whatsapp"
          onClick={closeMenu}
        >
          <FaWhatsapp size={22} />
          Cotizá por WhatsApp
        </a>
      </nav>
    </header>
  );
}
