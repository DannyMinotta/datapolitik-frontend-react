import React, { useState } from "react";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";

// Componente principal que permite alternar entre Login y Registro
function App() {
  const [showRegister, setShowRegister] = useState(false);

  const handleToggle = () => {
    setShowRegister(!showRegister);
  };

  return (
    <div>
      <header style={{ textAlign: "center", marginTop: "1rem" }}>
        <h1>DataPolitik - Módulo de Autenticación</h1>
      </header>

      <main>
        {showRegister ? <RegisterForm /> : <LoginForm />}

        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <button type="button" onClick={handleToggle}>
            {showRegister
              ? "¿Ya tienes cuenta? Inicia sesión"
              : "¿No tienes cuenta? Regístrate"}
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
