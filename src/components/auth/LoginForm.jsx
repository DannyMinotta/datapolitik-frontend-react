import React from "react";
import "./../../styles/auth.css";

// Formulario de inicio de sesión de DataPolitik
function LoginForm() {
  return (
    <div className="auth-container">
      <h2>Iniciar sesión en DataPolitik</h2>
      <form>
        <div className="form-group">
          <label htmlFor="loginEmail">Correo electrónico</label>
          <input id="loginEmail" type="email" />
        </div>
        <div className="form-group">
          <label htmlFor="loginPassword">Contraseña</label>
          <input id="loginPassword" type="password" />
        </div>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default LoginForm;
