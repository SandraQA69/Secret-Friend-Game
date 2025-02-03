Descripción:

Este proyecto tiene como objetivo fortalecer las habilidades en lógica de programación mediante la implementación de una sencilla aplicación de "Amigo Secreto".
La aplicación permite añadir amigos a una lista y luego realizar un sorteo aleatorio para asignar un amigo secreto a cada uno.

Funcionalidades:

Añadir amigo: Los usuarios pueden ingresar el nombre de un amigo a través de un campo de texto, y el nombre se añadirá a la lista de amigos.
Sortear amigo secreto: Se puede realizar un sorteo aleatorio, seleccionando un amigo de la lista y mostrando su nombre como el "Amigo Secreto".

Instrucciones de uso:

Añadir amigo:

Escribe el nombre de un amigo en el campo de texto.
Haz clic en el botón "Añadir" para agregar el nombre a la lista.

Sortear amigo secreto:

Haz clic en el botón "Sortear" para seleccionar aleatoriamente un amigo de la lista y mostrar el resultado.

Estructura del código

HTML: Estructura básica con un campo de texto para ingresar nombres, una lista donde se muestran los amigos añadidos y un área para mostrar el resultado del sorteo.
JavaScript:
adicionarAmigo(): Función que toma el valor del campo de texto y lo añade a un array de amigos, actualizando la lista en pantalla.
actualizarLista(): Función que actualiza el DOM para reflejar la lista de amigos actualmente añadidos.
sortearAmigo(): Función que realiza un sorteo aleatorio de la lista de amigos y muestra el resultado.
Requisitos
Navegador web moderno que soporte JavaScript.
