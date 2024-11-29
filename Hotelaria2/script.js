function calcularPreco() {
    const tipoQuarto = document.getElementById("tipoQuarto").value;
    const checkIn = new Date(document.getElementById("checkIn").value);
    const checkOut = new Date(document.getElementById("checkOut").value);

    if (checkOut <= checkIn) {
        alert("A data de check-out deve ser maior que a de check-in!");
        return;
    }

    const precoPorDia = {
        pequeno: 100,
        medio: 200,
        grande: 300
    };

    const dias = (checkOut - checkIn) / (1000 * 60 * 60 * 24);
    const precoTotal = dias * precoPorDia[tipoQuarto];

    document.getElementById("precoTotal").textContent = `Preço total: R$ ${precoTotal}`;
    document.getElementById("confirmarReserva").style.display = "flex";
    document.getElementById("cancelarReserva").style.display = "flex";
}

function cancelarReserva() {
    document.getElementById("formReserva").reset();
    document.getElementById("precoTotal").textContent = "";
    document.getElementById("confirmarReserva").style.display = "none";
    document.getElementById("cancelarReserva").style.display = "none";
}

  window.addEventListener("load", function () {
    if (window.location.hash) {
        window.history.replaceState(null, null, window.location.pathname);
    }
});