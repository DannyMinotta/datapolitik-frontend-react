import React, { useState } from "react";
import "./../../styles/auth.css";
import { registerUser } from "../../services/authService";

// Formulario de registro de usuario para DataPolitik
function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  /**
   * Maneja el envío del formulario de registro.
   * - Valida campos mínimos.
   * - Llama al servicio registerUser (simulación de backend).
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!name || !email || !password) {
      setErrorMessage("Por favor, completa todos los campos.");
      return;
    }

    if (!email.includes("@")) {
      setErrorMessage("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    try {
      setLoading(true);
      const response = await registerUser({ name, email, password });
      setSuccessMessage(response.message);

      // Opcional: limpiar campos tras registrarse
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      setErrorMessage(error.message || "Ocurrió un error al registrar el usuario.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>Registrarse en DataPolitik</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="registerName">Nombre completo</label>
          <input
            id="registerName"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Tu nombre"
          />
        </div>

        <div className="form-group">
          <label htmlFor="registerEmail">Correo electrónico</label>
          <input
            id="registerEmail"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="tu-correo@ejemplo.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="registerPassword">Contraseña</label>
          <input
            id="registerPassword"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Mínimo 6 caracteres"
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Registrando..." : "Crear cuenta"}
        </button>
      </form>

      {errorMessage && <p className="message error">{errorMessage}</p>}
      {successMessage && <p className="message success">{successMessage}</p>}
    </div>
  );
}

export default RegisterForm;
