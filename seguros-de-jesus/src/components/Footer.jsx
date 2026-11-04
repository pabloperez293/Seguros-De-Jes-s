import { ArrowUpRight, MessageCircle, ShieldCheck } from "lucide-react";
import "../styles/Extras.css";

const WHATSAPP = "5491157662077";

export default function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="footer__inner">
        <div className="footer__marca" id="nosotros">
          <ShieldCheck size={33} strokeWidth={1.4} />
          <div>
            <strong>Seguros de Jesús</strong>
            <span>Asesoría integral en seguros</span>
          </div>
        </div>

        <div className="footer__contenido">
          <div>
            <span className="seccion-etiqueta">ESTAMOS PARA ASESORARTE</span>

            <h2>
              Tu tranquilidad
              <br />
              es nuestra prioridad.
            </h2>

            <p>
              Te acompañamos para encontrar una cobertura que se adapte a tus
              necesidades.
            </p>
          </div>

          <div className="footer__acciones">
            <a href="#cotiza" className="footer__boton">
              Solicitar cotización
              <ArrowUpRight size={18} />
            </a>

            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__whatsapp"
            >
              <MessageCircle size={19} />
              Hablar por WhatsApp
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Seguros de Jesús</span>
          <span>Asesoramiento personalizado</span>
        </div>
      </div>
    </footer>
  );
}
