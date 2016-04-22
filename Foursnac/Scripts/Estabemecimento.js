
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

}

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