// authService.js
// Servicio de autenticación simulado para DataPolitik.
// Usa localStorage para guardar y leer usuarios de manera sencilla.

const STORAGE_KEY = "datapolitik_users";

/**
 * Obtiene el listado de usuarios almacenados en localStorage.
 * Si no hay usuarios, retorna un arreglo vacío.
 */
function getStoredUsers() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch (error) {
    console.error("Error al parsear usuarios almacenados:", error);
    return [];
  }
}

/**
 * Guarda el listado de usuarios en localStorage.
 */
function saveUsers(users) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

/**
 * Registra un nuevo usuario.
 * - Verifica que el correo no esté ya registrado.
 * - Simula un pequeño retardo para imitar una llamada al backend.
 */
export function registerUser({ name, email, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = getStoredUsers();
      const existing = users.find((u) => u.email === email);

      if (existing) {
        reject(new Error("Ya existe un usuario registrado con este correo electrónico."));
        return;
      }

      const newUser = {
        id: Date.now(),
        name,
        email,
        password, // En un backend real estaría hasheada.
      };

      users.push(newUser);
      saveUsers(users);

      resolve({
        message: "Usuario registrado correctamente.",
        user: { id: newUser.id, name: newUser.name, email: newUser.email },
      });
    }, 500); // 500 ms para simular tiempo de respuesta
  });
}

/**
 * Inicia sesión de un usuario.
 * - Verifica que el correo exista.
 * - Verifica que la contraseña coincida.
 */
export function loginUser({ email, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = getStoredUsers();
      const existing = users.find((u) => u.email === email);

      if (!existing) {
        reject(new Error("No existe un usuario registrado con este correo."));
        return;
      }

      if (existing.password !== password) {
        reject(new Error("La contraseña es incorrecta."));
        return;
      }

      resolve({
        message: "Inicio de sesión exitoso.",
        user: {
          id: existing.id,
          name: existing.name,
          email: existing.email,
        },
      });
    }, 500);
  });
}
