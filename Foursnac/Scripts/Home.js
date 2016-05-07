$(document).ready(function () {
    
    $(function () {
        navigator.geolocation.getCurrentPosition(showPosition, positionError);

        function showPosition(position) {
            var coordinates = position.coords;
            window.sessionStorage.setItem('coordinates', coordinates.latitude + '#' + coordinates.longitude);
            ReverseGeolocation(coordinates.latitude, coordinates.longitude);
        }

        function positionError(position) {
            window.history.pushState('Object', 'Foursnac - Peça Delivery em Araçatuba', '/Delivery/Araçatuba');
            window.document.title = 'Delivery de comidas online - Foursnac';
        }
    });

    function ReverseGeolocation(lat, lng) {
        var geocoder = new google.maps.Geocoder();
        var city = null;
        var latlng = new google.maps.LatLng(lat, lng);
        geocoder.geocode({ 'latLng': latlng }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[1]) {
                    for (var i = 0; i < results[0].address_components.length; i++) {
                        for (var x = 0; x < results[0].address_components[i].types.length; x++) {
                            if (results[0].address_components[i].types[x] == 'locality') {
                                city = results[0].address_components[i];
                                break;
                            }
                        }
                    }
                    //Delivery em Araçatuba e Birigui - Foursnac
                    window.history.pushState('Object', 'Delivery em ' + city.long_name, '/Delivery/' + city.long_name);
                    window.document.title = 'Delivery em ' + city.long_name + ' - Foursnac';

                } else {
                    window.history.pushState('Object', 'Foursnac - Peça Delivery em Araçatuba', '/Delivery/Araçatuba');
                    window.document.title = 'Delivery de comidas online - Foursnac';
                }
                } else {
                window.history.pushState('Object', 'Foursnac - Peça Delivery em Araçatuba', '/Delivery/Araçatuba');
                window.document.title = 'Delivery de comidas online - Foursnac';
            }
        });
    }

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

$('.corPassoCir').mouseenter(function (ev) {
    $(this).toggleClass('corPassoHover', true);
});

$('.corPassoCir').mouseleave(function () {
    $(this).toggleClass('corPassoHover', false);
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
        $('#about').addClass('NoDisplay');
     
    }

    sistema();

});

$('#btCepDontPush').click(function () {
    alert('Aguarde, dentro de poucos dias...');
});

$('#btCep').click(function () {
    BuscarEndereco();
});

function somenteNumeros(event) {

    var charCode = (event.which) ? event.which : event.keyCode;
    var cep = $('#Cep').val();
    if (charCode == 8) {
        return true;
    }

    if (cep.length == 5) {
        cep += '-';
    }

    $('#Cep').val(cep);

    if (cep.length == 9) {

        BuscarEndereco();
        
        return false;
        
    }
    if (charCode == 13) {
        BuscarEndereco();
    }
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }

    return true;
}

function numeroFocus(event) {

    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode == 13) {
        $("#complemento").focus();
    }
    return true;
}

function numeroFocus(event) {

    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode == 13)
    {
        $("#complemento").focus();
    }
    return true;
}
function complementoFocus(event) {

    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode == 13) {
        GoToTipo();
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
    $('.LogoCentralHeader').addClass('NoDisplay');

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
        $('.LogoCentralHeader').removeClass('NoDisplay');
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
        $('#about').addClass('NoDisplay');
        $('#num').focus();
    }
}

function GoToTipo() {
    Ir('tipo');
}

function BuscarEndereco() {

    var cep = $('#Cep').val().replace("-", "");
    if (cep.length!=8) {
        cep = "00000000";
    }

    $.ajax({
        url: 'http://api.postmon.com.br/v1/cep/' + cep,
        method: 'GET',
        error: function(XMLHttpRequest, textStatus, errorThrown){
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

$(window).scroll(function () {
 
    var top = $(window).scrollTop();
    var w = screen.width;
    if (w > 700)
    {
        if (top > 50) {
            $('#header').addClass('headerFixo');
            //$('#icoMenu').addClass('icoMenu000'); 
            $('#nav').addClass('fundoIco');
            $('.btCadastrar').addClass('btCadastrarBranco');
            $('.btLogar').addClass('btLogarBranco'); 
            $('.LogoCentralHeader').addClass('MarginAjustLogo');
            
            //$('#btlLR').removeClass('NoDisplay');
            //$('#LogoEscrita').removeClass('NoDisplay');
            $('#icoMenu').addClass('menuicoAPP2');
           // $('#menu').addClass('menuAPP2');

     

        } else {

            $('#header').removeClass('headerFixo');
            //$('#icoMenu').removeClass('icoMenu000');
            $('#nav').removeClass('fundoIco');
            $('.btCadastrar').removeClass('btCadastrarBranco');
            $('.btLogar').removeClass('btLogarBranco');
            $('.LogoCentralHeader').removeClass('MarginAjustLogo');

            //$('#btlLR').addClass('NoDisplay');
            //$('#LogoEscrita').addClass('NoDisplay');
            $('#icoMenu').removeClass('menuicoAPP2');
            $('#menu').removeClass('menuAPP2');
        }
    }
});

function Erro() {
}

function sistema()
{
    var deviceAgent = navigator.userAgent.toLowerCase();
    var android = deviceAgent.match(/(android)/);
    var windowsP = deviceAgent.match(/(Windows Phone)/) ;
    var ios  = deviceAgent.match(/(iphone|ipod|ipad|ios)/);

    if (ios!="") {
        $('.headerAPP').addClass('NoDisplay');
    } else if (android != "") {

        $('#btGStore').removeClass('NoDisplay');
        $('#header').removeClass('top70');
        $('#menu').addClass('menuAPP');
        

    } else if (windowsP  != "") {
        $('.headerAPP').addClass('NoDisplay');
    }

    $('#btGStore').removeClass('NoDisplay');
    $('#header').removeClass('top70');
}


$('.closeAPP').click(function () {
    $('.headerAPP').addClass('NoDisplay');
    $('#menu').removeClass('menuAPP');

});



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

//BarraSocial
addthis.layers({
    'theme': 'transparent',
    'share': {
        'position': 'right',
        'services': 'facebook,twitter,google_plusone_share,pinterest_share,linkedin,more',
        'mobile': false
    }
});

//Zoopim
window.$zopim || (function (d, s) {
    var z = $zopim = function (c) { z._.push(c) }, $ = z.s =
            d.createElement(s), e = d.getElementsByTagName(s)[0]; z.set = function (o) {
                z.set.
                _.push(o)
            }; z._ = []; z.set._ = []; $.async = !0; $.setAttribute("charset", "utf-8");
    $.src = "//v2.zopim.com/?3hCSZlIi04fStrYCFoyIkBr5QCysyWDQ"; z.t = +new Date; $.
    type = "text/javascript"; e.parentNode.insertBefore($, e)
})(document, "script");

//Analytics
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-76623427-1', 'auto');
ga('send', 'pageview');

