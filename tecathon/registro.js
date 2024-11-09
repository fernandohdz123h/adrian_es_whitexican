function guardarDatos() {
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const ingreso = document.getElementById("ingreso").value;
    const periodoIngresos = document.getElementById("periodoIngresos").value;
    const objetivo = document.getElementById("objetivo").value;

    // Guardar datos en variables o hacer lo necesario con ellos
    console.log("Datos guardados:");
    console.log("Nombre:", nombre);
    console.log("Apellidos:", apellidos);
    console.log("Correo:", correo);
    console.log("Teléfono:", telefono);
    console.log("Ingreso:", ingreso);
    console.log("Periodo de ingresos:", periodoIngresos);
    console.log("Objetivo:", objetivo);

    // Almacenar en localStorage si es necesario
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("apellidos", apellidos);
    localStorage.setItem("correo", correo);
    localStorage.setItem("telefono", telefono);
    localStorage.setItem("ingreso", ingreso);
    localStorage.setItem("periodoIngresos", periodoIngresos);
    localStorage.setItem("objetivo", objetivo);
    
    // Redirigir a otra vista si es necesario
    // window.location.href = "otraVista.html";
}
