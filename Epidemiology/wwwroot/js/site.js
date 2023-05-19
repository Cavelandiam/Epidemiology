$(document).ready(function () {
    manageTabMenus();
    validateOnlyNumbers();
    $("input[type='number']").on("change", function () {
        calcularTiempoDensidadPruebasTbl8();
    });
    
});

function calcularTiempoDensidadPruebasTbl8() {
    var fila1Valores = [];
    var totalColumnas = [0,0,0,0,0,0,0,0,0,0,0,0,0];
    $('#tbl8-tiempo-densidad-pruebas-1 tbody tr:first-child td:gt(0):lt(11)').each(function () {
        fila1Valores.push($(this).find('input').val());
    });
    $('#tbl8-tiempo-densidad-pruebas-1 tbody tr:gt(0):lt(4)').each(function () {
        var filaActual = $(this);
        var initialCell = parseFloat(filaActual.find("td:gt(0) input").val());
        totalColumnas[0] = totalColumnas[0] + parseFloat(initialCell);
        cont = 1;
        var sumaTotal = 0;
        filaActual.find("td:gt(1):lt(11)").each(function (index) {
            var dataValue = $(this).text();
            if (dataValue != '') {
                $(this).text((initialCell / parseFloat(fila1Valores[index])).toFixed(3));
                sumaTotal += parseFloat($(this).text());
                totalColumnas[cont] = totalColumnas[cont] + parseFloat($(this).text());                
            }
            cont++;
        });
        filaActual.find("td:last").text(sumaTotal.toFixed(3));
        totalColumnas[totalColumnas.length - 1] = totalColumnas[totalColumnas.length - 1] + parseFloat(filaActual.find("td:last").text());
    });
    $('#tbl8-tiempo-densidad-pruebas-1 tbody tr:gt(4):lt(9)').each(function () {
        var filaActual = $(this);
        var initialCell = parseFloat(filaActual.find("td:gt(0) input").val());
        totalColumnas[0] = totalColumnas[0] + parseFloat(initialCell);
        cont = 1;
        var sumaTotal = 0;
        filaActual.find("td:gt(1):lt(11)").each(function () {
            var dataValue = $(this).text();
            if (dataValue != '') {
                $(this).text((initialCell));
                sumaTotal += parseFloat($(this).text());
                totalColumnas[cont] = totalColumnas[cont] + parseFloat($(this).text());                
            }
            cont++;
        });
        filaActual.find("td:last").text(sumaTotal.toFixed(3));
        totalColumnas[totalColumnas.length - 1] = totalColumnas[totalColumnas.length - 1] + parseFloat(filaActual.find("td:last").text());
    });
    $('#tbl8-tiempo-densidad-pruebas-1 tbody tr:last td:gt(0):lt(14)').each(function (index) {
        $(this).text(totalColumnas[index].toFixed(3));
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