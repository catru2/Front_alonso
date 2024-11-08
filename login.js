document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();  // Evita el envío del formulario por defecto

    const user_name = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Configura los datos para enviar al backend
    const response = await fetch("http://54.235.240.83:80/user/signin", {  // Cambia la URL según tu backend
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_name, password }),
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
