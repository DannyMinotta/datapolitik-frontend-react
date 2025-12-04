import React from "react";
import "./../../styles/auth.css";

// Formulario de registro de usuario para DataPolitik
function RegisterForm() {
  return (
    <div className="auth-container">
      <h2>Registrarse en DataPolitik</h2>
      <form>
        <div className="form-group">
          <label htmlFor="registerName">Nombre completo</label>
          <input id="registerName" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="registerEmail">Correo electrónico</label>
          <input id="registerEmail" type="email" />
        </div>
        <div className="form-group">
          <label htmlFor="registerPassword">Contraseña</label>
          <input id="registerPassword" type="password" />
        </div>
        <button type="submit">Crear cuenta</button>
      </form>
    </div>
  );
}

export default RegisterForm;
