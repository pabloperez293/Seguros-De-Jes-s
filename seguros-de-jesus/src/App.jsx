
import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Seguros from "./components/Seguros";
import Cotizador from "./components/Cotizador";

import Aseguradoras from "./components/Aseguradoras";
import Recomendaciones from "./components/Recomendaciones";
import Ubicacion from "./components/Ubicacion";
import Footer from "./components/Footer";

export default function App() {
  const [seguroSeleccionado, setSeguroSeleccionado] =
    useState("Auto");

  return (
    <>
      <Navbar />

      <main>
        <Hero />


        <Seguros
          onSeleccionarSeguro={setSeguroSeleccionado}
        />

        <Cotizador
          seguroSeleccionado={seguroSeleccionado}
          onCambiarSeguro={setSeguroSeleccionado}
        />

        <Aseguradoras />
        <Recomendaciones />

      </main>
<Ubicacion />

      <Footer />
    </>
  );
}
