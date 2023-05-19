$(document).ready(function () {
    manageTabMenus();
    validateOnlyNumbers();
    $("input[type='number']").on("change", function () {
        calcularTiempoDensidadPruebasTbl8();
    });
    
});

function calcularTiempoDensidadPruebasTbl8() {
    var fila1Valores = [];
    $('#tbl8-tiempo-densidad-pruebas-1 tbody tr:first-child td:gt(0):lt(11)').each(function () {
        fila1Valores.push($(this).find('input').val());
    });
    $('#tbl8-tiempo-densidad-pruebas-1 tbody tr:gt(0):lt(5)').each(function () {
        var filaActual = $(this);
        var initialCell = filaActual.find("td:gt(0) input").val();
        filaActual.find("td:gt(1):lt(11)").each(function (index) {
            if ($(this).text() != '') {
                $(this).text((initialCell / fila1Valores[index]).toFixed(3));
            } 

        });
    });
    $('#tbl8-tiempo-densidad-pruebas-1 tbody tr:gt(4):lt(13)').each(function () {
        var filaActual = $(this);
        var initialCell = filaActual.find("td:gt(0) input").val();
        filaActual.find("td:gt(1):lt(11)").each(function () {
            if ($(this).text() != '') {
                $(this).text((initialCell));
            }

        });
    });
}

function manageTabMenus() {
    $('ul.tabs li a:first').addClass('active');
    $('.secciones article').hide();
    $('.secciones article:first').show();
    $('ul.tabs li a').click(function () {
        $('ul.tabs li a').removeClass('active');
        $(this).addClass('active');
        $('.secciones article').hide();
        var activeTab = $(this).attr('href');
        $(activeTab).show();
        return false;
    });
}

function validateOnlyNumbers() {
    $("input[type='number']").on("change", function () {
        let num = $(this).val();
        if (!num.match(/^\d+/)) {
            $(this).val(1);
        }
    });
}

/*

tbl1-info-cultivo-convencional-1,2,3,4
tbl2-info-cultivo-pcr-1,2,3,4
tbl3-descr-cultivo-convencional-1
tbl4-descr-cultivo-pcr-1
tbl5-medio-cultivo-1,2,3,4
tbl6-info-talento-humano-cultivo-1,2,3
tbl7-info-actividades-cultivo-1
tbl8-tiempo-densidad-pruebas-1,2

*/