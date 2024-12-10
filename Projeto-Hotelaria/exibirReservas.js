function exibirReservas() {
    const listaReservas = document.getElementById('listaReservas');
     listaReservas.innerHTML = ''; // Limpa a lista antes de adicionar novos itens

    reservas.forEach(reserva => {
        const itemReserva = document.createElement('li');
        itemReserva.textContent = `Cliente: ${reserva.cliente}, Quarto: ${reserva.quarto}, Check-In: ${reserva.checkIn}, Check-Out: ${reserva.checkOut}`;
        listaReservas.appendChild(itemReserva);
    });
}

function exibirReservas() {
    const listaReservas = document.getElementById('listaReservas');
     listaReservas.innerHTML = ''; // Limpa a lista antes de adicionar novos itens

    reservas.forEach(reserva => {
        const itemReserva = document.createElement('li');
        itemReserva.textContent = ` Cliente: ${reserva.cliente}, Quarto: ${reserva.quarto}, Check-In: ${reserva.checkIn}, Check-Out: ${reserva.checkOut}`;
        listaReservas.appendChild(itemReserva);
    });
}
function carregarReservas() {
    const reservasSalvas = localStorage.getItem('reservas');
    if (reservasSalvas) {
        reservas = JSON.parse(reservasSalvas);
    }
}

const listaReserva = document.getElementById("listaReservas");
if(listaReserva){
    exibirReservas()
}

if (funcionarioLogado) {
    preencherHospedes();
    preencherHospedesExcluir();
    preencherHospedesAtt()

}
//MEUDEUSOQQ TACONTECENDO

