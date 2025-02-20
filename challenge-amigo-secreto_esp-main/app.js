let amigoslista = []; // Arreglo global para almacenar los nombres

// Función para agregar amigo
function agregarAmigo() {
    const input = document.getElementById('amigo'); // Obtener el input
    const nombreAmigo = input.value.trim(); // Aqui se especifica el valor del input y elimina los espacios extras para que en el caso de que se ingrese solo un espacio en blanco en el nombre no se agregue

    // Verifica si el campo está vacío
    if (nombreAmigo === "") {
        alert("No has ingresado nada aún");
    } else {
        // Agregar el nombre al arreglo de amigoslista
        amigoslista.push(nombreAmigo);

        // Mostrar el nombre en la lista HTML
        const listaAmigos = document.getElementById('listaAmigos');
        const li = document.createElement('li');
        li.textContent = nombreAmigo;
        listaAmigos.appendChild(li);//Funcion util que agrega elementos dinamicamente 
        

        // Limpiar el input después de agregar el nombre
        input.value = "";
    }
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    if (amigoslista.length === 0) {
        alert("No hay amigos para sortear");
    }

    // Generar un índice aleatorio para elegir un amigo
    const indiceAleatorio = Math.floor(Math.random() * amigoslista.length);//Entre mas alla mejor se nota la aleatoriedad

    // Obtener el amigo aleatorio
    const amigoSorteado = amigoslista[indiceAleatorio];

    // Mostrar el amigo sorteado
    alert("El amigo sorteado es: " + amigoSorteado);
}
