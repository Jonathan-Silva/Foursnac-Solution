
$(document).ready(function () {

    

    $('#aLogin').click(function (event) {
        event.preventDefault();
        var dest = '';
        var url = document.URL;

        if (url.lastIndexOf('localhost') > -1) {
            dest = 'http://localhost:8080';
        } else {
            dest = 'http://app.foursnac.com';
        }

        window.location = dest + '/login.html';

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
    }
});

var video = document.getElementById("divVideo");

function playPause() {
    if (video.paused) {
        video.play();
        $('#btPlay').addClass('btPlayTrnasparent');
    }
    else {
        video.pause();
        $('#btPlay').removeClass('btPlayTrnasparent');
    }
}

function Estabelecimento() {
    var url = document.URL;
    var email = $('#email').val() + '#';

    if (url.lastIndexOf('localhost') > -1) {
        document.location.href = 'http://localhost:8080/foursnac/main.html#Home#' + email;
    } else {
        document.location.href = 'http://app.foursnac.com.br/foursnac/main.html#Home#' + email;
    }

    //document.location.href = document.URL + '/foursnac/main.html#Home#' + $('#email').val() + '#';

}