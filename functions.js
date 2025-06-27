function convertirAMayusculas(elemento) {
    elemento.value = elemento.value.toUpperCase();
}

function validarFormulario() {
    let nombre = document.forms["registro"]["nombre"].value;
    let appat = document.forms["registro"]["appat"].value;
    let apmat = document.forms["registro"]["apmat"].value;
    let clave = document.forms["registro"]["clave"].value;

    if (clave === "" || Number(clave) < 1) {
        alert("Por favor ingrese una clave válida (mayor o igual a 1)");
        document.getElementById("lclave").focus();
        return false;
    }


    if (nombre === "") {
        alert("Por favor ingrese el nombre");
        document.getElementById("fnom").focus();
        return false;
    }

    if (appat === "") {
        alert("Por favor ingrese el apellido paterno");
        document.getElementById("lappat").focus();
        return false;
    }

    if (apmat === "") {
        alert("Por favor ingrese el apellido materno");
        document.getElementById("lapmat").focus();
        return false;
    }
    return true; 
}
