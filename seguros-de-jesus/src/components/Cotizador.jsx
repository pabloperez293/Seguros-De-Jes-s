
import { useState } from "react";
import {
  CarFront,
  Bike,
  House,
  HeartPulse,
  Store,
  Building2,
  Send,
} from "lucide-react";

import { camposCotizador } from "../data/camposCotizador";
import "../styles/Cotizador.css";

const WHATSAPP = "5491157662077";

const tipos = [
  { nombre: "Auto", Icono: CarFront },
  { nombre: "Moto", Icono: Bike },
  { nombre: "Hogar", Icono: House },
  { nombre: "Vida y Salud", Icono: HeartPulse },
  { nombre: "Comercio", Icono: Store },
  { nombre: "Empresa", Icono: Building2 },
];

function Campo({ campo, valor, onChange }) {
  const id = `cotizador-${campo.name}`;

  const propsComunes = {
    id,
    value: valor || "",
    required: Boolean(campo.required),
    onChange: (e) => onChange(campo.name, e.target.value),
  };

  return (
    <div className={`cotizador__campo ${campo.type === "textarea" ? "cotizador__campo--full" : ""}`}>
      <label htmlFor={id}>
        {campo.label}
        {campo.required && <span> *</span>}
      </label>

      {campo.type === "select" ? (
        <select {...propsComunes}>
          <option value="">Seleccionar</option>
          {campo.options.map((opcion) => (
            <option key={opcion} value={opcion}>
              {opcion}
            </option>
          ))}
        </select>
      ) : campo.type === "textarea" ? (
        <textarea
          {...propsComunes}
          placeholder={campo.placeholder || "Contanos un poco más"}
          rows={3}
        />
      ) : (
        <input
          {...propsComunes}
          type={campo.type || "text"}
          placeholder={campo.placeholder || ""}
          min={campo.min}
          max={campo.max}
        />
      )}
    </div>
  );
}

export default function Cotizador({
  seguroSeleccionado = "Auto",
  onCambiarSeguro,
}) {
  const [formularios, setFormularios] = useState({});
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");

  const campos = camposCotizador[seguroSeleccionado] || camposCotizador.Auto;
  const valores = formularios[seguroSeleccionado] || {};

  const cambiarCampo = (campo, valor) => {
    setFormularios((prev) => ({
      ...prev,
      [seguroSeleccionado]: {
        ...(prev[seguroSeleccionado] || {}),
        [campo]: valor,
      },
    }));
  };

  const enviar = (e) => {
    e.preventDefault();

    const detalles = campos
      .filter((campo) => String(valores[campo.name] ?? "").trim())
      .map((campo) => `${campo.label}: ${valores[campo.name]}`)
      .join("\n");

    const mensaje = [
      "Hola, quisiera solicitar una cotización de seguro.",
      "",
      `Tipo de seguro: ${seguroSeleccionado}`,
      "",
      detalles,
      "",
      "Datos de contacto:",
      `Nombre: ${nombre.trim()}`,
      `Teléfono: ${telefono.trim()}`,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`;

    const ventana = window.open(url, "_blank", "noopener,noreferrer");

    if (!ventana) {
      window.location.href = url;
    }
  };

  return (
    <section className="cotizador" id="cotiza">
      <div className="cotizador__presentacion">
        <span className="cotizador__eyebrow">
          ASESORAMIENTO PERSONALIZADO
        </span>

        <h2>Cotizá tu seguro</h2>

        <div className="cotizador__linea" />

        <p>
          Completá los datos y te ayudamos a encontrar
          la mejor cobertura para vos.
        </p>
      </div>

      <form className="cotizador__formulario" onSubmit={enviar}>
        <h3>¿Qué querés asegurar?</h3>

        <div className="cotizador__tipos">
          {tipos.map(({ nombre: tipo, Icono }) => (
            <button
              key={tipo}
              type="button"
              className={`cotizador__tipo ${seguroSeleccionado === tipo ? "activo" : ""}`}
              aria-pressed={seguroSeleccionado === tipo}
              onClick={() => onCambiarSeguro(tipo)}
            >
              <Icono size={19} strokeWidth={1.7} />
              {tipo}
            </button>
          ))}
        </div>

        <div className="cotizador__campos">
          {campos.map((campo) => (
            <Campo
              key={`${seguroSeleccionado}-${campo.name}`}
              campo={campo}
              valor={valores[campo.name]}
              onChange={cambiarCampo}
            />
          ))}
        </div>

        <h3 className="cotizador__subtitulo">
          Tus datos de contacto
        </h3>

        <div className="cotizador__campos">
          <div className="cotizador__campo">
            <label htmlFor="cotizador-nombre">Nombre *</label>
            <input
              id="cotizador-nombre"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Tu nombre"
              autoComplete="name"
              required
            />
          </div>

          <div className="cotizador__campo">
            <label htmlFor="cotizador-telefono">
              Teléfono / WhatsApp *
            </label>
            <input
              id="cotizador-telefono"
              type="tel"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              placeholder="Ej. 11 1234-5678"
              autoComplete="tel"
              required
            />
          </div>
        </div>

        <button className="cotizador__enviar" type="submit">
          <Send size={19} />
          Preparar solicitud de cotización
        </button>

        <p className="cotizador__aviso">
          Al continuar, se abrirá WhatsApp con tu solicitud preparada.
          La cotización final depende de la aseguradora.
        </p>
      </form>
    </section>
  );
}
