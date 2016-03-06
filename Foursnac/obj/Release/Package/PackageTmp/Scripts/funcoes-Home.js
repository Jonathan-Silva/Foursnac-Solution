

$(document).ready(function () {

    /*var body = $('body');
    var $window = $(window);

    body.addClass('is-loading');

    $window.on('load', function () {
        window.setTimeout(function () {
            body.removeClass('is-loading');
        }, 100);
    });

    $('#menu').append($('<a/>').attr('href', '#menu').addClass('close'));
    $('#menu').appendTo(body);
    $('#menu').panel({
        delay: 500,
        hideOnClick: true,
        hideOnSwipe: true,
        resetScroll: true,
        resetForms: true,
        side: 'right',
        target: body,
        visibleClass: 'is-menu-visible'
    });
    $('#menu')
        .append('<a href="#menu" class="close"></a>')
        .appendTo($body)
        .panel({
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            side: 'right',
            target: $body,
            visibleClass: 'is-menu-visible'
        });*/

    $('.tipo').click(function (event) {
        event.preventDefault();
        var cep = $('#Cep').val();
        var tipo = $(this).attr('id');
        var numero = $("#num").val();
        var complemento = $("#complemento").val();

        var destino = '';
        var url = document.URL;

        if (url.lastIndexOf('localhost') > -1) {
            destino = 'http://localhost:8080';
        } else {
            destino = 'http://app.foursnac.com';
        }

        document.location.href = destino + '/foursnac/pedidos/main.html#PedidosMain#' + cep + "#" + numero + "#" + complemento + "#" + tipo;
    });

    $('#aLogin').click(function (ev) {
        event.preventDefault();

    });

});

$('#Passo1').mouseenter(function () {

    $('#Passo1').addClass('corPassoHover');

});

$('#Passo1').mouseleave(function () {

    $('#Passo1').removeClass('corPassoHover');

});

$('#Passo2').mouseenter(function () {

    $('#Passo2').addClass('corPassoHover');

});

$('#Passo2').mouseleave(function () {

    $('#Passo2').removeClass('corPassoHover');

});

$('#Passo3').mouseenter(function () {

    $('#Passo3').addClass('corPassoHover');

});

$('#Passo3').mouseleave(function () {

    $('#Passo3').removeClass('corPassoHover');

});

$('#Passo4').mouseenter(function () {

    $('#Passo4').addClass('corPassoHover');

});

$('#Passo4').mouseleave(function () {

    $('#Passo4').removeClass('corPassoHover');

});

$(window).width(function () {

    var x = screen.width;

    if (x < 700) {

        $('#divCirculo1').removeClass('col-md-3');
        $('#divCirculo1').removeClass('col-sm-3');
        $('#divCirculo1').removeClass('col-sm-12');
        $('#divCirculo1').removeClass('col-xs-12');

        $('#divCirculo1').addClass('col-md-offset-3');
        $('#divCirculo1').addClass('col-md-3');
        $('#divCirculo1').addClass('col-sm-3');
        $('#divCirculo1').addClass('col-sm-6');
        $('#divCirculo1').addClass('col-xs-6');


        $('#divCirculo2').removeClass('col-md-3');
        $('#divCirculo2').removeClass('col-sm-3');
        $('#divCirculo2').removeClass('col-sm-12');
        $('#divCirculo2').removeClass('col-xs-12');

        $('#divCirculo2').addClass('col-md-3');
        $('#divCirculo2').addClass('col-sm-3');
        $('#divCirculo2').addClass('col-sm-6');
        $('#divCirculo2').addClass('col-xs-6');

        $('#divCirculo3').removeClass('col-md-3');
        $('#divCirculo3').removeClass('col-sm-3');
        $('#divCirculo3').removeClass('col-sm-12');
        $('#divCirculo3').removeClass('col-xs-12');

        $('#divCirculo3').addClass('col-md-offset-3');
        $('#divCirculo3').addClass('col-md-3');
        $('#divCirculo3').addClass('col-sm-3');
        $('#divCirculo3').addClass('col-sm-6');
        $('#divCirculo3').addClass('col-xs-6');


        $('#divCirculo4').removeClass('col-md-3');
        $('#divCirculo4').removeClass('col-sm-3');
        $('#divCirculo4').removeClass('col-sm-12');
        $('#divCirculo4').removeClass('col-xs-12');

        $('#divCirculo4').addClass('col-md-3');
        $('#divCirculo4').addClass('col-sm-3');
        $('#divCirculo4').addClass('col-sm-6');
        $('#divCirculo4').addClass('col-xs-6');


        $('#footer').addClass('NoDisplay');
        $('#Passo').addClass('NoDisplay');
    }


});


$('#btCepDontPush').click(function () {
    alert('Aguarde, dentro de poucos dias...');
});

$('#btCep').click(function () {
    BuscarEndereco();
    console.log($('#Cep').val());
});

function somenteNumeros(event) {

    var charCode = (event.which) ? event.which : event.keyCode;
    var cep = $('#Cep').val();

    if (cep.length == 5) {
        cep += '-';
    }

    $('#Cep').val(cep);

    if (cep.length >= 9) {

        if (charCode == 13) {
            console.log("tecla enter")
            BuscarEndereco();
        }

        return false;
    }

    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }

    return true;
}

function Voltar() {
    $('#CaixaCep').removeClass('NoDisplay');
    $('#NaoSei').removeClass('NoDisplay');
    $('.LogoCentral1').addClass('NoDisplay');
    $('.LogoCentral').removeClass('NoDisplay');
    $('.Titulo').removeClass('Subir1');
    $('.Titulo').removeClass('Subir2');

    $('#CaixaResultado').addClass('NoDisplay');
    $('#CaixaTipo').addClass('NoDisplay');
    $('#icoVoltar').addClass('NoDisplay');
    $('#Cep').focus();

}

function Ir(tipo) {
    if (tipo == 'tipo') {
        $('#CaixaTipo').removeClass('NoDisplay');
        $('#CaixaResultado').addClass('NoDisplay');
        $('.LogoCentral').addClass('NoDisplay');
        $('.LogoCentral1').addClass('NoDisplay');
        $('.Titulo').removeClass('Subir');
        $('.Titulo').removeClass('Subir1');
        $('.Titulo').removeClass('Subir2');
    } else {
        $('#CaixaCep').addClass('NoDisplay');
        $('#CaixaResultado').removeClass('NoDisplay');
        $('#NaoSei').addClass('NoDisplay');
        $('#Logo1').addClass('NoDisplay');
        $('.LogoCentral').addClass('NoDisplay');
        $('.LogoCentral1').removeClass('NoDisplay');
        $('#icoVoltar').removeClass('NoDisplay');
        $('#footer').addClass('NoDisplay');
        $('#Passo').addClass('NoDisplay');
        $('#num').focus();
    }
}

function GoToTipo() {
    Ir('tipo');
}

function BuscarEndereco() {

    var cep = $('#Cep').val().replace("-", "");
    if (cep.length != 8) {
        cep = "00000000";
    }

    $.ajax({
        url: 'http://api.postmon.com.br/v1/cep/' + cep,
        method: 'GET',
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Cep inválido.");
        },
        success: function (data) {

            $('#uf').val(data.estado);
            $('#cidade').val(data.cidade);
            $('#rua').val(data.logradouro);
            Ir('pesquisa');


        }

    });

}

$('#Cep').focus(function () {
    var x = screen.width;

    if (x < 700) {
        $('.Titulo').addClass('Subir');
    }
});

$('#num').focus(function () {
    var x = screen.width;

    if (x < 700) {
        $('.Titulo').removeClass('Subir');
        $('.Titulo').addClass('Subir1');
        $('.Titulo').removeClass('Subir2');
    }
});

$('#complemento').focus(function () {
    var x = screen.width;

    if (x < 700) {
        $('.Titulo').removeClass('Subir1');
        $('.Titulo').removeClass('Subir');
        $('.Titulo').addClass('Subir2');
    }
});

