// Recuperar los datos almacenados en localStorage
window.onload = function() {
    const ingresoMensual = localStorage.getItem("ingresoMensual") || "$0.00";
    const cuentaTotal = localStorage.getItem("cuentaTotal") || "$0.00";

    // Mostrar los valores en el HTML
    document.getElementById("ingresoMensual").textContent = `$${parseFloat(ingresoMensual).toLocaleString()}`;
    document.getElementById("cuentaTotal").textContent = `$${parseFloat(cuentaTotal).toLocaleString()}`;
}
