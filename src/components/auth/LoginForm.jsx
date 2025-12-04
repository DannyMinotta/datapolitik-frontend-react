import React, { useState } from "react";
import "./../../styles/auth.css";
import { loginUser } from "../../services/authService";

// Formulario de inicio de sesión de DataPolitik
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  /**
   * Maneja el envío del formulario de inicio de sesión.
   * - Valida campos mínimos en el frontend.
   * - Llama al servicio loginUser (simulación de backend).
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!email || !password) {
      setErrorMessage("Por favor, ingresa el correo y la contraseña.");
      return;
    }

    if (!email.includes("@")) {
      setErrorMessage("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    try {
      setLoading(true);
      const response = await loginUser({ email, password });
      setSuccessMessage(response.message);
    } catch (error) {
      setErrorMessage(error.message || "Ocurrió un error al iniciar sesión.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>Iniciar sesión en DataPolitik</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="loginEmail">Correo electrónico</label>
          <input
            id="loginEmail"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="tu-correo@ejemplo.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="loginPassword">Contraseña</label>
          <input
            id="loginPassword"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="********"
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Ingresando..." : "Ingresar"}
        </button>
      </form>

      {errorMessage && <p className="message error">{errorMessage}</p>}
      {successMessage && <p className="message success">{successMessage}</p>}
    </div>
  );
}

export default LoginForm;
