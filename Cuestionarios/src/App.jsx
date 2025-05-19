
import './App.css'
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage.jsx"
import CuestionariosPage from "./pages/CustionariosPage/CuestionariosPage.jsx"
import ListaPreguntasPage from "./pages/ListaPreguntasPage/ListaPreguntasPage.jsx"
import PreguntaPage from "./pages/PreguntaPage/PreguntaPage.jsx"

function App() {

  const [usuario, setUsuario] = useState(null);


  return (
    <Routes>
      <Route path="/*" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<LoginPage nuevoUsuario={setUsuario} />} />
      {!!usuario && 
        <>
          <Route path="/cuestionarios" element={<CuestionariosPage />} />
          <Route path="/cuestionarios/:idCuestionario" element={<ListaPreguntasPage />} />
          <Route path="/cuestionarios/:idCuestionario/:idPregunta" element={<PreguntaPage />} />
        </>}
    </Routes>
  );
}

export default App
