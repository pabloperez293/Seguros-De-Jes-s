
export const camposCotizador = {
  Auto: [
    { name: "marca", label: "Marca", placeholder: "Ej. Volkswagen", required: true },
    { name: "modelo", label: "Modelo", placeholder: "Ej. T-Cross", required: true },
    { name: "version", label: "Versión", placeholder: "Ej. Comfortline" },
    { name: "anio", label: "Año del vehículo", type: "number", min: 1900, max: new Date().getFullYear() + 1, required: true },
    { name: "gnc", label: "¿Tiene GNC?", type: "select", options: ["No", "Sí"], required: true },
    { name: "uso", label: "Uso del vehículo", type: "select", options: ["Particular", "Comercial", "Otro"], required: true },
    { name: "codigoPostal", label: "Código postal", required: true },
    { name: "cobertura", label: "Cobertura deseada", type: "select", options: ["Necesito asesoramiento", "Responsabilidad civil", "Terceros completo", "Todo riesgo"], required: true },
  ],

  Moto: [
    { name: "marca", label: "Marca", required: true },
    { name: "modelo", label: "Modelo", required: true },
    { name: "cilindrada", label: "Cilindrada", placeholder: "Ej. 150 cc", required: true },
    { name: "anio", label: "Año", type: "number", min: 1900, max: new Date().getFullYear() + 1, required: true },
    { name: "uso", label: "Uso", type: "select", options: ["Particular", "Trabajo / reparto", "Otro"], required: true },
    { name: "codigoPostal", label: "Código postal", required: true },
    { name: "cobertura", label: "Cobertura deseada", type: "select", options: ["Necesito asesoramiento", "Responsabilidad civil", "Robo e incendio", "Cobertura amplia"] },
  ],

  Hogar: [
    { name: "tipoVivienda", label: "Tipo de vivienda", type: "select", options: ["Casa", "Departamento", "PH", "Otro"], required: true },
    { name: "localidad", label: "Localidad", required: true },
    { name: "codigoPostal", label: "Código postal", required: true },
    { name: "superficie", label: "Superficie aproximada (m²)", type: "number", min: 1 },
    { name: "ocupacion", label: "Relación con la vivienda", type: "select", options: ["Propietario", "Inquilino", "Otro"] },
    { name: "cobertura", label: "¿Qué querés proteger?", type: "select", options: ["Asesoramiento integral", "Edificio", "Contenido y electrodomésticos", "Robo", "Incendio", "Responsabilidad civil"] },
  ],

  "Vida y Salud": [
    { name: "tipoProteccion", label: "Tipo de protección", type: "select", options: ["Seguro de vida", "Accidentes personales", "Cobertura de salud", "Necesito asesoramiento"], required: true },
    { name: "edad", label: "Edad", type: "number", min: 0, max: 120, required: true },
    { name: "personas", label: "Personas a cubrir", type: "select", options: ["Solo yo", "Pareja", "Grupo familiar", "Otro"], required: true },
    { name: "localidad", label: "Localidad", required: true },
    { name: "detalle", label: "¿Qué cobertura estás buscando?", type: "textarea" },
  ],

  Comercio: [
    { name: "rubro", label: "Rubro comercial", placeholder: "Ej. Indumentaria", required: true },
    { name: "localidad", label: "Localidad", required: true },
    { name: "superficie", label: "Superficie del local (m²)", type: "number", min: 1 },
    { name: "bienes", label: "Bienes a asegurar", placeholder: "Ej. Mercadería, equipos, mobiliario" },
    { name: "cobertura", label: "Cobertura principal", type: "select", options: ["Integral de comercio", "Incendio", "Robo", "Responsabilidad civil", "Necesito asesoramiento"], required: true },
  ],

  Empresa: [
    { name: "actividad", label: "Actividad de la empresa", required: true },
    { name: "localidad", label: "Localidad", required: true },
    { name: "empleados", label: "Cantidad de empleados", type: "number", min: 0 },
    { name: "bienes", label: "Bienes o riesgos a cubrir" },
    { name: "cobertura", label: "Tipo de cobertura", type: "select", options: ["ART", "Flota de vehículos", "Integral de empresa", "Responsabilidad civil", "Accidentes personales", "Necesito asesoramiento"], required: true },
  ],
};
