
import "../styles/Extras.css";

const aseguradoras = [
  "Rivadavia Seguros",
  "Federación Patronal",
  "Provincia Seguros",
  "Providencia Seguros",
  "ATM Seguros",
  "Mercantil Andina",
];

export default function Aseguradoras() {
  return (
    <section className="aseguradoras" id="aseguradoras">
      <div className="aseguradoras__intro">
        <span className="seccion-etiqueta">RESPALDO Y CONFIANZA</span>

        <h2>
          Trabajamos con las
          <br />
          principales aseguradoras
        </h2>

        <div className="seccion-linea" />
      </div>

      <div className="aseguradoras__grid">
        {aseguradoras.map((nombre) => (
          <div className="aseguradoras__card" key={nombre}>
            <span>{nombre}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
