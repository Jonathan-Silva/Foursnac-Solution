function somenteNumeros(event) {


    var charCode = (event.which) ? event.which : event.keyCode

    var valor = 0;


    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }

    return true;
}

