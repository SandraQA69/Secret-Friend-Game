// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array que almacenará los nombres de los amigos
let amigos = [];

// Espera a que el DOM esté completamente cargado para agregar los event listeners
document.addEventListener("DOMContentLoaded", () => {
    // Event listener para el botón de añadir amigo
    document.querySelector(".button-add").addEventListener("click", adicionarAmigo);
    // Event listener para el botón de sorteo
    document.querySelector(".button-draw").addEventListener("click", sortearAmigo);
});

// Función que añade un nuevo amigo a la lista
function adicionarAmigo() {
    // Obtiene el valor del input de nombre del amigo
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Elimina los espacios en blanco al principio y al final
    
    // Verifica si el nombre está vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre."); // Muestra un mensaje si el campo está vacío
        return;
    }
    
    // Añade el nombre del amigo al array 'amigos'
    amigos.push(nombre);
    input.value = ""; // Limpia el campo de texto después de añadir el nombre
    actualizarLista(); // Actualiza la lista visual en la pantalla
}

// Función que actualiza la lista de amigos mostrada en el HTML
function actualizarLista() {
    // Obtiene el elemento de la lista en el HTML
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpia la lista actual para evitar duplicados
    
    // Itera sobre el array de amigos y los añade como elementos <li> a la lista
    amigos.forEach(amigo => {
        let li = document.createElement("li"); // Crea un nuevo elemento <li>
        li.textContent = amigo; // Asigna el nombre del amigo al contenido del <li>
        lista.appendChild(li); // Añade el <li> al final de la lista
    });
}

// Función que realiza el sorteo para elegir un amigo secreto aleatorio
function sortearAmigo() {
    // Verifica si la lista de amigos está vacía
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear."); // Muestra un mensaje si la lista está vacía
        return;
    }
    
    // Genera un índice aleatorio para seleccionar un amigo de la lista
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio]; // Obtiene el nombre del amigo sorteado
    
    // Muestra el resultado del sorteo en el HTML
    document.getElementById("resultado").textContent = "El amigo secreto es: " + amigoSorteado;
}
