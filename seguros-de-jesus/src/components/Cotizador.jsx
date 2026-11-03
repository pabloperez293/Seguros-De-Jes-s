
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

import "../styles/Cotizador.css";

const WHATSAPP = "5491157662077";

const TIPOS_SEGURO = [
  "Auto",
  "Moto",
  "Hogar",
  "Vida",
  "Comercio",
  "Empresa",
];

export default function Cotizador({
  seguroSeleccionado = "Auto",
}) {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    detalles: "",
  });

  const [seguroManual, setSeguroManual] = useState(null);

  // El seguro elegido desde las tarjetas tiene prioridad
  // cada vez que cambia la selección externa.
  const seguroActual = seguroManual ?? seguroSeleccionado;

  const actualizar = (event) => {
    const { name, value } = event.target;

    if (name === "seguro") {
      setSeguroManual(value);
      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const enviarCotizacion = (event) => {
    event.preventDefault();

    const nombre = form.nombre.trim();
    const telefono = form.telefono.trim();

    if (!nombre || !telefono) return;

    const mensaje = [
      "¡Hola! Quiero solicitar una cotización.",
      "",
      `Seguro: ${seguroActual}`,
      `Nombre: ${nombre}`,
      `Teléfono: ${telefono}`,
      `Detalles: ${form.detalles.trim() || "Sin observaciones"}`,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
      mensaje
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="cotizador" id="cotiza">
      <div className="cotizador__container">
        <div className="cotizador__intro">
          <span className="cotizador__eyebrow">
            COTIZACIÓN PERSONALIZADA
          </span>

          <h2>
            Encontrá el seguro
            <br />
            ideal para vos.
          </h2>

          <p>
            Contanos qué necesitás y te ayudamos
            a elegir una cobertura adecuada.
          </p>

          <div className="cotizador__accent" />
        </div>

        <form
          className="cotizador__form"
          onSubmit={enviarCotizacion}
        >
          <div className="cotizador__field">
            <label htmlFor="cotizador-seguro">
              Tipo de seguro
            </label>

            <select
              id="cotizador-seguro"
              name="seguro"
              value={seguroActual}
              onChange={actualizar}
              required
            >
              {TIPOS_SEGURO.map((seguro) => (
                <option key={seguro} value={seguro}>
                  {seguro}
                </option>
              ))}
            </select>
          </div>

          <div className="cotizador__row">
            <div className="cotizador__field">
              <label htmlFor="cotizador-nombre">
                Nombre completo
              </label>

              <input
                id="cotizador-nombre"
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                value={form.nombre}
                onChange={actualizar}
                autoComplete="name"
                required
              />
            </div>

            <div className="cotizador__field">
              <label htmlFor="cotizador-telefono">
                Teléfono
              </label>

              <input
                id="cotizador-telefono"
                type="tel"
                name="telefono"
                placeholder="11 1234-5678"
                value={form.telefono}
                onChange={actualizar}
                autoComplete="tel"
                required
              />
            </div>
          </div>

          <div className="cotizador__field">
            <label htmlFor="cotizador-detalles">
              ¿Qué necesitás asegurar?
              <span> (opcional)</span>
            </label>

            <textarea
              id="cotizador-detalles"
              name="detalles"
              rows="3"
              placeholder="Contanos brevemente..."
              value={form.detalles}
              onChange={actualizar}
            />
          </div>

          <button
            className="cotizador__submit"
            type="submit"
          >
            <FaWhatsapp size={22} />
            Solicitar cotización
          </button>

          <p className="cotizador__note">
            Te dirigiremos a WhatsApp con tu consulta
            preparada para enviar.
          </p>
        </form>
      </div>
    </section>
  );
}
