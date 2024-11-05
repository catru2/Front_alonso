document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();  // Evita el envío del formulario por defecto

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Configura los datos para enviar al backend
    const response = await fetch("http://localhost:3000/api/login", {  // Cambia la URL según tu backend
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    });

    // Procesa la respuesta del backend
    const result = await response.json();
    const messageElement = document.getElementById("responseMessage");

    if (response.ok) {
        messageElement.innerText = "Inicio de sesión exitoso";
        // Aquí podrías redirigir al usuario o guardar tokens si es necesario
    } else {
        messageElement.innerText = result.message || "Error en el inicio de sesión";
    }
});
