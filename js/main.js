// Validación de Email
function esEmailValido(email) {
    // Expresión regular para validar email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

// Validación de Teléfono
function esTelefonoValido(telefono) {
    // Expresión regular para validar teléfono (solo números)
    const regexTelefono = /^[0-9]+$/;
    return regexTelefono.test(telefono);
}

// Función de Validación del Formulario
function validarFormulario() {
    // Obtener valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const email = document.getElementById('email').value.trim();
    const consulta = document.getElementById('consulta').value.trim();

    // Verificar campos vacíos
    if (!nombre) {
        alert('Por favor, ingrese su nombre.');
        return false;
    }

    if (!apellido) {
        alert('Por favor, ingrese su apellido.');
        return false;
    }

    if (!telefono) {
        alert('Por favor, ingrese su teléfono.');
        return false;
    }

    if (!email) {
        alert('Por favor, ingrese su email.');
        return false;
    }

    if (!consulta) {
        alert('Por favor, ingrese su consulta.');
        return false;
    }

    // Verificar formato de email
    if (!esEmailValido(email)) {
        alert('Por favor, ingrese un email válido.');
        return false;
    }

    // Verificar formato de teléfono
    if (!esTelefonoValido(telefono)) {
        alert('Por favor, ingrese un teléfono válido (solo números).');
        return false;
    }

    // Si todo es válido, permitir el envío del formulario
    return true;
}
