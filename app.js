// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const nombreAmigos = [];

function agregarAmigo(){
    const input = document.getElementById('amigo');
    const amigo = input.value.trim();

    if (amigo === '') {
        alert('Por favor ingresa un nombre valido');
        return;
    }

    console.log(amigo)
    input.value = ''; //limpia el input

    nombreAmigos.push(amigo);
    console.log(nombreAmigos);
    mostrarAmigos();
}

function mostrarAmigos() {
    const ul = document.getElementById('listaAmigos');
    ul.innerHTML = ''; // Limpia la lista antes de agregar nuevos elementos

    nombreAmigos.forEach(function(amigo) {
        ul.innerHTML += `<li>${amigo}</li>`;
    });
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    if (nombreAmigos.length === 0) {
        resultado.innerHTML = '<li>No hay amigos para sortear.</li>';
        return;
    }

  
    const indiceAleatorio = Math.floor(Math.random() * nombreAmigos.length);
    console.log(indiceAleatorio);
  
    const amigoSorteado = nombreAmigos[indiceAleatorio];
    resultado.innerHTML = `<li>El amigo sorteado es: <strong>${amigoSorteado}</strong></li>`;
}