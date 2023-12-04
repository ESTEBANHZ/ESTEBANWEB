
document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar el formulario por su ID
    var formulario = document.getElementById('formulario');

    // Agregar un event listener al formulario
    formulario.addEventListener('submit', function (event) {

        // Obtener los valores de los campos del formulario
        var nombre = document.getElementById('Nombre').value;
        var precio = document.getElementById('Precio').value;
        var inventario = document.getElementById('Inventario').value;

        // Verificar si todos los campos están llenos
        if (nombre && precio && inventario) {
            // Mostrar un mensaje indicando que el producto ha sido creado
            alert('Producto creado');
            
            // Aquí puedes agregar código adicional para enviar los datos del formulario o realizar otras acciones.
        } else {
            // Mostrar un mensaje indicando que todos los campos deben estar llenos
            alert('Por favor, complete todos los campos del formulario.');
        }
    });
});
