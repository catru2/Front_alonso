document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();  

    const user_name = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    
    const response = await fetch("http://localhost:8000/user/signin", {  
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_name, password }),
    });

   
    const result = await response.json();
    const messageElement = document.getElementById("responseMessage");

    if (response.ok) {
        messageElement.innerText = "Inicio de sesión exitoso";
    } else {
        messageElement.innerText = result.message || "Error en el inicio de sesión";
    }
});