$(document).ready(function () {
    manageTabMenus();
    validateOnlyNumbers();
    $("input[type='number']").on("change", function () {
        calcularTiempoDensidadPruebasTbl8_1();
        calcularTiempoDensidadPruebasTbl8_2();
        calcularMedioCultivoTbl5_1();
        calcularMedioCultivoTbl5_2();
        calcularMedioCultivoTbl5_3();
        calcularMedioCultivoTbl5_4();
        calcularActividadesCultivoTbl7_1();
        calcularTalentoHumanoTbl6_3();
        calcularTalentoHumanoTbl6_1();
        calcularTalentoHumanoTbl6_2();
        calcularCultivoConvencionalTbl1_1();
        calcularCultivoConvencionalTbl1_3();
        calcularCultivoPcrTbl2_1();
        calcularCultivoPcrTbl2_3();
        calcularDescrCultivoConvencionalTbl3_1();
        calcularDescrCultivopcrTbl4_1();
        calcularDescrCultivoConvencionalTbl3_2();
        calcularDescrCultivoPcrTbl4_2();
    });

});

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

function calcularTiempoDensidadPruebasTbl8_1() {
    var fila1Valores = [];
    var totalColumnas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
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
        filaActual.find("td:last").text(sumaTotal.toFixed(2));
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
        filaActual.find("td:last").text(sumaTotal.toFixed(2));
        totalColumnas[totalColumnas.length - 1] = totalColumnas[totalColumnas.length - 1] + parseFloat(filaActual.find("td:last").text());
    });
    $('#tbl8-tiempo-densidad-pruebas-1 tbody tr:last td:gt(0):lt(14)').each(function (index) {
        $(this).text(totalColumnas[index].toFixed(2));
    });
}

function calcularTiempoDensidadPruebasTbl8_2() {
    var fila1Valores = [];
    var valoresTbl8_1 = [];
    var totalColumnas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    $('#tbl8-tiempo-densidad-pruebas-1 tbody tr:first td:gt(0):lt(9)').each(function () {
        valoresTbl8_1.push(parseFloat($(this).find('input').val()));
    });
    var s = "";
    $('#tbl8-tiempo-densidad-pruebas-2 tbody tr:first-child td:gt(0):lt(9)').each(function () {
        fila1Valores.push($(this).find('input').val());
    });
    fila1Valores = valoresTbl8_1;
    $('#tbl8-tiempo-densidad-pruebas-2 tbody tr:gt(0):lt(4)').each(function () {
        var filaActual = $(this);
        var initialCell = parseFloat(filaActual.find("td:gt(0) input").val());
        totalColumnas[0] = totalColumnas[0] + parseFloat(initialCell);
        cont = 1;
        var sumaTotal = 0;
        filaActual.find("td:gt(1):lt(9)").each(function (index) {
            var dataValue = $(this).text();
            if (dataValue != '') {
                $(this).text((initialCell / parseFloat(fila1Valores[index])).toFixed(3));
                sumaTotal += parseFloat($(this).text());
                totalColumnas[cont] = totalColumnas[cont] + parseFloat($(this).text());
            }
            cont++;
        });
        filaActual.find("td:last").text(sumaTotal.toFixed(2));
        totalColumnas[totalColumnas.length - 1] = totalColumnas[totalColumnas.length - 1] + parseFloat(filaActual.find("td:last").text());
    });
    $('#tbl8-tiempo-densidad-pruebas-2 tbody tr:gt(4):lt(9)').each(function () {
        var filaActual = $(this);
        var initialCell = parseFloat(filaActual.find("td:gt(0) input").val());
        totalColumnas[0] = totalColumnas[0] + parseFloat(initialCell);
        cont = 1;
        var sumaTotal = 0;
        filaActual.find("td:gt(1):lt(9)").each(function () {
            var dataValue = $(this).text();
            if (dataValue != '') {
                $(this).text((initialCell));
                sumaTotal += parseFloat($(this).text());
                totalColumnas[cont] = totalColumnas[cont] + parseFloat($(this).text());
            }
            cont++;
        });
        filaActual.find("td:last").text(sumaTotal.toFixed(2));
        totalColumnas[totalColumnas.length - 1] = totalColumnas[totalColumnas.length - 1] + parseFloat(filaActual.find("td:last").text());
    });
    $('#tbl8-tiempo-densidad-pruebas-2 tbody tr:gt(12):lt(14) td:gt(1):lt(8)').each(function (index) {
        if ($(this).text() != '') {
            totalColumnas[index + 1] = totalColumnas[index + 1] - parseFloat($(this).text())
        }
    });
    $('#tbl8-tiempo-densidad-pruebas-2 tbody tr:last td:gt(0):lt(12)').each(function (index) {
        $(this).text(totalColumnas[index].toFixed(2));
    });
}

function calcularMedioCultivoTbl5_1() {
    var presentacionGr = [];
    var gramosPorPrueba = [];
    var rendimiento = [];
    var valorCultivo = [];
    var valorComercial = [];
    var valorCajaTubo = [];
    var valorCultivoTotal = 0;
    var valorCajaTuboTotal = 0;
    var valorTotal = 0;
    $('#tbl5-medio-cultivo-1 tbody tr:eq(1) td:lt(11)').each(function () {
        presentacionGr.push(parseFloat($(this).find('input').val()).toFixed(3));
    });
    $('#tbl5-medio-cultivo-1 tbody tr:eq(5) td:lt(10)').each(function () {
        gramosPorPrueba.push(parseFloat($(this).find('input').val()).toFixed(3));
    });
    $('#tbl5-medio-cultivo-1 tbody tr:eq(2) td:lt(10)').each(function (index) {
        var valorRendimiento = (presentacionGr[index] / gramosPorPrueba[index]).toFixed(3);
        $(this).text(valorRendimiento);
        rendimiento.push(valorRendimiento);
    });
    $('#tbl5-medio-cultivo-1 tbody tr:eq(4) td:lt(10)').each(function (index) {
        valorReactivoNecesarioXPresentacion = ((presentacionGr[index] / rendimiento[index]) / presentacionGr[index]).toFixed(2);
        $(this).text(valorReactivoNecesarioXPresentacion);
    });
    $('#tbl5-medio-cultivo-1 tbody tr:eq(6) td:lt(10)').each(function () {
        valorComercial.push(parseFloat($(this).find('input').val()).toFixed(3));
    });
    $('#tbl5-medio-cultivo-1 tbody tr:eq(9) td:lt(10)').each(function (index) {
        valorValCultivo = ((gramosPorPrueba[index] * valorComercial[index]) / presentacionGr[index]).toFixed(0);
        valorValCultivo = parseFloat(valorValCultivo);
        $(this).text(valorValCultivo);
        valorCultivo.push(valorValCultivo);
        valorCultivoTotal += valorValCultivo;
    });
    valorCultivo.push(parseFloat($('#tbl5-medio-cultivo-1 tbody tr:eq(9) td:eq(10)').find('input').val()));
    $('#tbl5-medio-cultivo-1 tbody tr:eq(9) td:eq(11)').each(function () {
        $(this).text(valorCultivoTotal + parseFloat($('#tbl5-medio-cultivo-1 tbody tr:eq(9) td:eq(10)').find('input').val()));
    });
    $('#tbl5-medio-cultivo-1 tbody tr:eq(10) td:lt(12)').each(function () {
        var valueValor = parseFloat($(this).find('input').val());
        if (isNaN(valueValor)) {
            valorCajaTubo.push(0)
        } else {
            valorCajaTubo.push(valueValor);
            valorCajaTuboTotal += valueValor;
        }
    });
    $('#tbl5-medio-cultivo-1 tbody tr:eq(10) td:last').text(valorCajaTuboTotal);
    $('#tbl5-medio-cultivo-1 tbody tr:eq(12) td:lt(11)').each(function (index) {
        valorTotal += valorCultivo[index] + valorCajaTubo[index];
        $(this).text(valorCultivo[index] + valorCajaTubo[index]);
    });
    $('#tbl5-medio-cultivo-1 tbody tr:eq(12) td:eq(11)').text(valorTotal);
}

function calcularMedioCultivoTbl5_2() {
    var presentacionGr = [];
    var gramosPorPrueba = [];
    var rendimiento = [];
    var valorCultivo = [];
    var valorComercial = [];
    var valorCajaTubo = [];
    var valorCultivoTotal = 0;
    var valorCajaTuboTotal = 0;
    var totalValorTotalCultivo = 0;
    $('#tbl5-medio-cultivo-2 tbody tr:eq(1) td:lt(9)').each(function () {
        presentacionGr.push(parseFloat($(this).find('input').val()).toFixed(3));
    });
    $('#tbl5-medio-cultivo-2 tbody tr:eq(5) td:lt(9)').each(function () {
        gramosPorPrueba.push(parseFloat($(this).find('input').val()).toFixed(3));
    });
    $('#tbl5-medio-cultivo-2 tbody tr:eq(2) td:lt(9)').each(function (index) {
        var valorRendimiento = (presentacionGr[index] / gramosPorPrueba[index]).toFixed(3);
        $(this).text(valorRendimiento);
        rendimiento.push(valorRendimiento);
    });
    $('#tbl5-medio-cultivo-2 tbody tr:eq(6) td:lt(9)').each(function () {
        valorComercial.push(parseFloat($(this).find('input').val()).toFixed(3));
    });
    $('#tbl5-medio-cultivo-2 tbody tr:eq(9) td:lt(9)').each(function (index) {
        valorValCultivo = ((gramosPorPrueba[index] * valorComercial[index]) / presentacionGr[index]).toFixed(0);
        valorValCultivo = parseFloat(valorValCultivo);
        if (index == 3) {
            valorValCultivo = valorValCultivo / 100;
        } else if (index == 5) {
            valorValCultivo = valorValCultivo / 50;
        }
        $(this).text(valorValCultivo);
        valorCultivo.push(valorValCultivo);
        valorCultivoTotal += valorValCultivo;
    });
    $('#tbl5-medio-cultivo-2 tbody tr:eq(9) td:eq(9)').each(function () {
        $(this).text(valorCultivoTotal);
    });
    $('#tbl5-medio-cultivo-2 tbody tr:eq(10) td:lt(10)').each(function (index) {
        var valueValor = parseFloat($(this).find('input').val());
        if (isNaN(valueValor)) {
            valorCajaTubo.push(0)
        } else {
            valorCajaTubo.push(valueValor);
            valorCajaTuboTotal += valueValor;
        }
    });
    $('#tbl5-medio-cultivo-2 tbody tr:eq(10) td:last').text(valorCajaTuboTotal);
    $('#tbl5-medio-cultivo-2 tbody tr:eq(12) td:lt(9)').each(function (index) {
        var valor = valorCultivo[index] + valorCajaTubo[index];
        if (index == 1) {
            valor = valor / parseFloat($('#tbl5-medio-cultivo-2 tbody tr:eq(13) td:eq(0)').find('input').val());
            valor = parseFloat(valor.toFixed(0));
        }
        $(this).text(valor);
        totalValorTotalCultivo += valor;
    });
    $('#tbl5-medio-cultivo-2 tbody tr:eq(12) td:last').text(parseFloat(totalValorTotalCultivo.toFixed(0)));
}

function calcularMedioCultivoTbl5_3() {
    var presentacionXKit = [];
    var valorKit = [];
    var valorPrueba = [];
    $('#tbl5-medio-cultivo-3 tbody tr:eq(1) td:lt(5)').each(function () {
        presentacionXKit.push(parseFloat($(this).find('input').val()));
    });
    $('#tbl5-medio-cultivo-3 tbody tr:eq(2) td:lt(5)').each(function () {
        valorKit.push(parseFloat($(this).find('input').val()));
    });
    $('#tbl5-medio-cultivo-3 tbody tr:eq(3) td:lt(5)').each(function (index) {
        var valorTest = valorKit[index] / presentacionXKit[index];
        valorTest = parseFloat(valorTest.toFixed(0));
        valorPrueba.push(valorTest);
        $(this).text(valorTest);
    });
    $('#tbl5-medio-cultivo-3 tbody tr:eq(4) td:eq(0)').text(valorPrueba[0] + valorPrueba[1]);
    $('#tbl5-medio-cultivo-3 tbody tr:eq(4) td:eq(1)').text(valorPrueba[2] + valorPrueba[3]);
}

function calcularMedioCultivoTbl5_4() {
    var presentacionXKit = [];
    var valorKit = [];
    var valorPrueba = [];
    $('#tbl5-medio-cultivo-4 tbody tr:eq(1) td:lt(5)').each(function () {
        presentacionXKit.push(parseFloat($(this).find('input').val()));
    });
    $('#tbl5-medio-cultivo-4 tbody tr:eq(2) td:lt(5)').each(function () {
        valorKit.push(parseFloat($(this).find('input').val()));
    });
    $('#tbl5-medio-cultivo-4 tbody tr:eq(3) td:lt(5)').each(function (index) {
        var valorTest = valorKit[index] / presentacionXKit[index];
        valorTest = parseFloat(valorTest.toFixed(0));
        valorPrueba.push(valorTest);
        $(this).text(valorTest);
    });
    $('#tbl5-medio-cultivo-4 tbody tr:eq(4) td:eq(0)').text(valorPrueba[0] + valorPrueba[1]);
    $('#tbl5-medio-cultivo-4 tbody tr:eq(4) td:eq(1)').text(valorPrueba[2] + valorPrueba[3]);
}

function calcularActividadesCultivoTbl7_1() {
    var totalTiempoDensidadPruebas1 = 0;
    var totalTiempoDensidadPruebas2 = 0;
    var alistamientoMaterialesPreparacion1 = 0;
    var alistamientoMaterialesPreparacion2 = 0;
    var total1 = 0;
    $('#tbl8-tiempo-densidad-pruebas-1 tbody tr:gt(0):lt(13) ').each(function (index) {
        var totalFound = parseFloat($(this).find('td:eq(13)').text());
        totalTiempoDensidadPruebas1 += totalFound;
        $('#tbl7-info-actividades-cultivo-1 tbody tr:eq(' + (index + 1) + ') td:eq(1)').text(totalFound);
    });
    $('#tbl8-tiempo-densidad-pruebas-2 tbody tr:gt(0):lt(13) ').each(function (index) {
        var totalFound = parseFloat($(this).find('td:eq(11)').text());
        totalTiempoDensidadPruebas2 += totalFound;
        $('#tbl7-info-actividades-cultivo-1 tbody tr:eq(' + (index + 17) + ') td:eq(1)').text(totalFound);
    });
    alistamientoMaterialesPreparacion1 = $('#tbl7-info-actividades-cultivo-1 tbody tr:eq(0) td:eq(1)').find('input').val();
    alistamientoMaterialesPreparacion2 = $('#tbl7-info-actividades-cultivo-1 tbody tr:eq(16) td:eq(1)').find('input').val();
    $('#tbl7-info-actividades-cultivo-1 tbody tr:eq(14) td:eq(1)').text(totalTiempoDensidadPruebas1 + parseFloat(alistamientoMaterialesPreparacion1));
    $('#tbl7-info-actividades-cultivo-1 tbody tr:eq(30) td:eq(1)').text(totalTiempoDensidadPruebas2 + parseFloat(alistamientoMaterialesPreparacion2));
    $('#tbl7-info-actividades-cultivo-1 tbody tr:lt(5)').each(function () {
        var obj = $(this).find('td:eq(3)').find('input').val();
        total1 += parseFloat(obj);
    });
    $('#tbl7-info-actividades-cultivo-1 tbody tr:eq(5) td:eq(3)').text(total1);
    var s = "";
}

function calcularTalentoHumanoTbl6_3() {
    $('#tbl6-info-talento-humano-cultivo-3 tbody tr:eq(0) td:eq(1)').text((parseFloat($('#tbl6-info-talento-humano-cultivo-1 tbody tr:eq(0) td:eq(0) input').val()) / 30).toFixed(0));
    $('#tbl6-info-talento-humano-cultivo-3 tbody tr:eq(0) td:eq(3)').text((parseFloat($('#tbl6-info-talento-humano-cultivo-1 tbody tr:eq(0) td:eq(1) input').val()) / 30).toFixed(0));

    $('#tbl6-info-talento-humano-cultivo-3 tbody tr:eq(3) td:eq(1)').text((parseFloat($('#tbl6-info-talento-humano-cultivo-1 tbody tr:eq(4) td:eq(0) input').val()) / 30).toFixed(0));
    $('#tbl6-info-talento-humano-cultivo-3 tbody tr:eq(3) td:eq(3)').text((parseFloat($('#tbl6-info-talento-humano-cultivo-1 tbody tr:eq(4) td:eq(1) input').val()) / 30).toFixed(0));

    $('#tbl6-info-talento-humano-cultivo-3 tbody tr:eq(2) td:eq(1)').text(parseFloat($('#tbl1-info-cultivo-convencional-1 tbody tr:eq(0) td:eq(0) input').val())
        + parseFloat($('#tbl1-info-cultivo-convencional-1 tbody tr:eq(1) td:eq(0) input').val()));
    $('#tbl6-info-talento-humano-cultivo-3 tbody tr:eq(5) td:eq(1)').text(parseFloat($('#tbl1-info-cultivo-convencional-1 tbody tr:eq(0) td:eq(0) input').val())
        + parseFloat($('#tbl1-info-cultivo-convencional-1 tbody tr:eq(1) td:eq(0) input').val()));

    $('#tbl6-info-talento-humano-cultivo-3 tbody tr:eq(2) td:eq(3)').text(parseFloat($('#tbl2-info-cultivo-pcr-1 tbody tr:eq(0) td:eq(0) input').val())
        + parseFloat($('#tbl2-info-cultivo-pcr-1 tbody tr:eq(1) td:eq(0) input').val()));
    $('#tbl6-info-talento-humano-cultivo-3 tbody tr:eq(5) td:eq(3)').text(parseFloat($('#tbl2-info-cultivo-pcr-1 tbody tr:eq(0) td:eq(0) input').val())
        + parseFloat($('#tbl2-info-cultivo-pcr-1 tbody tr:eq(1) td:eq(0) input').val()));
}

function calcularTalentoHumanoTbl6_1() {
    var leadTime1 = 0;
    var leadTime2 = 0;
    var leadTimeAux = 0;
    $('#tbl7-info-actividades-cultivo-1 tbody tr:gt(4):lt(9)').each(function (index) {
        if (index != 2)
            leadTime1 += parseFloat($(this).find('td:eq(1)').text());
    });
    $('#tbl7-info-actividades-cultivo-1 tbody tr:lt(5)').each(function () {
        leadTime2 += parseFloat($(this).find('td:eq(3)').find('input').val());
    });
    $('#tbl6-info-talento-humano-cultivo-1 tbody tr:eq(1) td:eq(0)').text(leadTime1);
    $('#tbl6-info-talento-humano-cultivo-2 tbody tr:eq(1) td:eq(0)').text(leadTime1);
    $('#tbl6-info-talento-humano-cultivo-1 tbody tr:eq(1) td:eq(1)').text(leadTime2);


    $('#tbl6-info-talento-humano-cultivo-1 tbody tr:eq(2) td:eq(0)').text((parseFloat($('#tbl6-info-talento-humano-cultivo-3 tbody tr:eq(0) td:eq(1)').text())
        / parseFloat($('#tbl6-info-talento-humano-cultivo-3 tbody tr:eq(1) td:eq(1)').find('input').val())).toFixed(0));
    $('#tbl6-info-talento-humano-cultivo-2 tbody tr:eq(2) td:eq(0)').text((parseFloat($('#tbl6-info-talento-humano-cultivo-3 tbody tr:eq(0) td:eq(1)').text())
        / parseFloat($('#tbl6-info-talento-humano-cultivo-3 tbody tr:eq(1) td:eq(1)').find('input').val())).toFixed(0));
    $('#tbl6-info-talento-humano-cultivo-1 tbody tr:eq(2) td:eq(1)').text((parseFloat($('#tbl6-info-talento-humano-cultivo-3 tbody tr:eq(0) td:eq(3)').text())
        / parseFloat($('#tbl6-info-talento-humano-cultivo-3 tbody tr:eq(1) td:eq(3)').find('input').val())).toFixed(0));

    $('#tbl6-info-talento-humano-cultivo-1 tbody tr:eq(3) td:eq(0)').text(parseFloat($('#tbl6-info-talento-humano-cultivo-1 tbody tr:eq(2) td:eq(0)').text())
        * parseFloat($('#tbl6-info-talento-humano-cultivo-1 tbody tr:eq(1) td:eq(0)').text()));
    $('#tbl6-info-talento-humano-cultivo-1 tbody tr:eq(3) td:eq(1)').text(parseFloat($('#tbl6-info-talento-humano-cultivo-1 tbody tr:eq(2) td:eq(0)').text())
        * parseFloat($('#tbl6-info-talento-humano-cultivo-1 tbody tr:eq(1) td:eq(0)').text()));


    $('#tbl7-info-actividades-cultivo-1 tbody tr:lt(5)').each(function (index) {
        if (index == 0)
            leadTimeAux += parseFloat($(this).find('td:eq(1) input').val());
        else
            leadTimeAux += parseFloat($(this).find('td:eq(1)').text())
    });
    $('#tbl6-info-talento-humano-cultivo-1 tbody tr:eq(5) td:eq(0)').text(leadTimeAux);
    $('#tbl6-info-talento-humano-cultivo-1 tbody tr:eq(5) td:eq(1)').text(parseFloat($('#tbl7-info-actividades-cultivo-1 tbody tr:eq(0) td:eq(3) input').val()));

    $('#tbl6-info-talento-humano-cultivo-1 tbody tr:eq(6) td:eq(0)').text((parseFloat($('#tbl6-info-talento-humano-cultivo-3 tbody tr:eq(3) td:eq(1)').text())
        / parseFloat($('#tbl6-info-talento-humano-cultivo-3 tbody tr:eq(4) td:eq(1)').find('input').val())).toFixed(0));
    $('#tbl6-info-talento-humano-cultivo-2 tbody tr:eq(6) td:eq(0)').text((parseFloat($('#tbl6-info-talento-humano-cultivo-3 tbody tr:eq(3) td:eq(1)').text())
        / parseFloat($('#tbl6-info-talento-humano-cultivo-3 tbody tr:eq(4) td:eq(1)').find('input').val())).toFixed(0));
    $('#tbl6-info-talento-humano-cultivo-1 tbody tr:eq(6) td:eq(1)').text((parseFloat($('#tbl6-info-talento-humano-cultivo-3 tbody tr:eq(3) td:eq(3)').text())
        / parseFloat($('#tbl6-info-talento-humano-cultivo-3 tbody tr:eq(4) td:eq(3)').find('input').val())).toFixed(0));

    $('#tbl6-info-talento-humano-cultivo-1 tbody tr:eq(7) td:eq(0)').text(parseFloat($('#tbl6-info-talento-humano-cultivo-1 tbody tr:eq(6) td:eq(0)').text())
        * parseFloat($('#tbl6-info-talento-humano-cultivo-1 tbody tr:eq(5) td:eq(0)').text()));
    $('#tbl6-info-talento-humano-cultivo-1 tbody tr:eq(7) td:eq(1)').text(parseFloat($('#tbl6-info-talento-humano-cultivo-1 tbody tr:eq(6) td:eq(0)').text())
        * parseFloat($('#tbl6-info-talento-humano-cultivo-1 tbody tr:eq(5) td:eq(0)').text()));
}

function calcularTalentoHumanoTbl6_2() {
    var leadTime1 = 0;
    var leadTimeAux = 0;
    $('#tbl7-info-actividades-cultivo-1 tbody tr:gt(15):lt(5)').each(function () {
        leadTime1 += parseFloat($(this).find('td:eq(3)').find('input').val());
    });
    $('#tbl6-info-talento-humano-cultivo-2 tbody tr:eq(1) td:eq(1)').text(leadTime1);
    $('#tbl6-info-talento-humano-cultivo-2 tbody tr:eq(2) td:eq(1)').text((parseFloat($('#tbl6-info-talento-humano-cultivo-3 tbody tr:eq(0) td:eq(3)').text())
        / parseFloat($('#tbl6-info-talento-humano-cultivo-3 tbody tr:eq(1) td:eq(3)').find('input').val())).toFixed(0));

    $('#tbl6-info-talento-humano-cultivo-2 tbody tr:eq(3) td:eq(0)').text(parseFloat($('#tbl6-info-talento-humano-cultivo-2 tbody tr:eq(2) td:eq(0)').text())
        * parseFloat($('#tbl6-info-talento-humano-cultivo-2 tbody tr:eq(1) td:eq(0)').text()));
    $('#tbl6-info-talento-humano-cultivo-2 tbody tr:eq(3) td:eq(1)').text(parseFloat($('#tbl6-info-talento-humano-cultivo-2 tbody tr:eq(2) td:eq(0)').text())
        * parseFloat($('#tbl6-info-talento-humano-cultivo-2 tbody tr:eq(1) td:eq(0)').text()));

    $('#tbl7-info-actividades-cultivo-1 tbody tr:lt(7)').each(function (index) {
        if (index == 0)
            leadTimeAux += parseFloat($(this).find('td:eq(1) input').val());
        else if (index != 5)
            leadTimeAux += parseFloat($(this).find('td:eq(1)').text());
    });
    $('#tbl6-info-talento-humano-cultivo-2 tbody tr:eq(5) td:eq(0)').text(leadTimeAux);
    $('#tbl6-info-talento-humano-cultivo-2 tbody tr:eq(5) td:eq(1)').text(parseFloat($('#tbl7-info-actividades-cultivo-1 tbody tr:eq(16) td:eq(3) input').val()));

    $('#tbl6-info-talento-humano-cultivo-2 tbody tr:eq(6) td:eq(1)').text((parseFloat($('#tbl6-info-talento-humano-cultivo-3 tbody tr:eq(3) td:eq(3)').text())
        / parseFloat($('#tbl6-info-talento-humano-cultivo-3 tbody tr:eq(4) td:eq(3)').find('input').val())).toFixed(0));

    $('#tbl6-info-talento-humano-cultivo-2 tbody tr:eq(7) td:eq(0)').text(parseFloat($('#tbl6-info-talento-humano-cultivo-2 tbody tr:eq(6) td:eq(0)').text())
        * parseFloat($('#tbl6-info-talento-humano-cultivo-2 tbody tr:eq(5) td:eq(0)').text()));
    $('#tbl6-info-talento-humano-cultivo-2 tbody tr:eq(7) td:eq(1)').text(parseFloat($('#tbl6-info-talento-humano-cultivo-2 tbody tr:eq(6) td:eq(0)').text())
        * parseFloat($('#tbl6-info-talento-humano-cultivo-2 tbody tr:eq(5) td:eq(0)').text()));
}

function calcularCultivoConvencionalTbl1_1() {
    var cultivoListeria = $('#tbl1-info-cultivo-convencional-1 tbody tr:eq(0) td:eq(0) input ').val();
    var cultivoSalmonela = $('#tbl1-info-cultivo-convencional-1 tbody tr:eq(1) td:eq(0) input ').val();

    $('#tbl1-info-cultivo-convencional-1 tbody tr:eq(0) td:eq(1)').text($('#tbl5-medio-cultivo-2 tbody tr:eq(12) td:eq(9)').text());
    $('#tbl1-info-cultivo-convencional-1 tbody tr:eq(1) td:eq(1)').text($('#tbl5-medio-cultivo-1 tbody tr:eq(12) td:eq(11)').text());

    $('#tbl1-info-cultivo-convencional-4 tbody tr:eq(0) td:eq(2)').text($('#tbl5-medio-cultivo-2 tbody tr:eq(12) td:eq(9)').text());
    $('#tbl1-info-cultivo-convencional-4 tbody tr:eq(1) td:eq(1)').text($('#tbl5-medio-cultivo-1 tbody tr:eq(12) td:eq(11)').text());

    $('#tbl1-info-cultivo-convencional-1 tbody tr:eq(0) td:eq(2)').text(parseFloat(cultivoListeria) * parseFloat($('#tbl5-medio-cultivo-2 tbody tr:eq(12) td:eq(9)').text()));
    $('#tbl1-info-cultivo-convencional-1 tbody tr:eq(1) td:eq(2)').text(parseFloat(cultivoSalmonela) * parseFloat($('#tbl5-medio-cultivo-1 tbody tr:eq(12) td:eq(11)').text()));

    $('#tbl1-info-cultivo-convencional-2 tbody tr:eq(0) td:eq(0)').text($('#tbl6-info-talento-humano-cultivo-3 tbody tr:eq(1) td:eq(1) input').val());
    $('#tbl1-info-cultivo-convencional-2 tbody tr:eq(0) td:eq(1)').text($('#tbl6-info-talento-humano-cultivo-3 tbody tr:eq(4) td:eq(1) input').val());
    $('#tbl1-info-cultivo-convencional-2 tbody tr:eq(0) td:eq(2)').text($('#tbl6-info-talento-humano-cultivo-3 tbody tr:eq(1) td:eq(1) input').val());
    $('#tbl1-info-cultivo-convencional-2 tbody tr:eq(0) td:eq(3)').text($('#tbl6-info-talento-humano-cultivo-3 tbody tr:eq(4) td:eq(1) input').val());

    $('#tbl1-info-cultivo-convencional-2 tbody tr:eq(2) td:eq(0)').text(((parseFloat(cultivoListeria) / 30) * parseFloat($('#tbl6-info-talento-humano-cultivo-1 tbody tr:eq(1) td:eq(0)').text())).toFixed(0));
    $('#tbl1-info-cultivo-convencional-2 tbody tr:eq(2) td:eq(1)').text(((parseFloat(cultivoListeria) / 30) * parseFloat($('#tbl6-info-talento-humano-cultivo-1 tbody tr:eq(5) td:eq(0)').text())).toFixed(0));
    $('#tbl1-info-cultivo-convencional-2 tbody tr:eq(2) td:eq(2)').text(((parseFloat(cultivoSalmonela) / 30) * parseFloat($('#tbl6-info-talento-humano-cultivo-2 tbody tr:eq(1) td:eq(0)').text())).toFixed(0));
    $('#tbl1-info-cultivo-convencional-2 tbody tr:eq(2) td:eq(3)').text(((parseFloat(cultivoSalmonela) / 30) * parseFloat($('#tbl6-info-talento-humano-cultivo-2 tbody tr:eq(5) td:eq(0)').text())).toFixed(0));


    $('#tbl1-info-cultivo-convencional-2 tbody tr:eq(1) td').each(function (index) {
        $(this).text(parseFloat($('#tbl1-info-cultivo-convencional-2 tbody tr:eq(0) td:eq(' + index + ')').text())
            - parseFloat($('#tbl1-info-cultivo-convencional-2 tbody tr:eq(2) td:eq(' + index + ')').text()));
    });

    $('#tbl1-info-cultivo-convencional-4 tbody tr:eq(0) td:eq(1)').text((cultivoListeria * parseFloat($('#tbl5-medio-cultivo-1 tbody tr:eq(8) td:eq(0)').text())) / 100);
    $('#tbl1-info-cultivo-convencional-4 tbody tr:eq(1) td:eq(0)').text((cultivoSalmonela * parseFloat($('#tbl5-medio-cultivo-1 tbody tr:eq(8) td:eq(0)').text())) / 100);

    $('#tbl1-info-cultivo-convencional-4 tbody tr:eq(0) td:eq(3)').text(parseFloat($('#tbl1-info-cultivo-convencional-4 tbody tr:eq(0) td:eq(2)').text())
        * parseFloat($('#tbl1-info-cultivo-convencional-4 tbody tr:eq(0) td:eq(1)').text()));
    $('#tbl1-info-cultivo-convencional-4 tbody tr:eq(1) td:eq(2)').text(parseFloat($('#tbl1-info-cultivo-convencional-4 tbody tr:eq(1) td:eq(1)').text())
        * parseFloat($('#tbl1-info-cultivo-convencional-4 tbody tr:eq(1) td:eq(0)').text()));
    $('#tbl1-info-cultivo-convencional-4 tbody tr:eq(2) td:last').text(parseFloat($('#tbl1-info-cultivo-convencional-4 tbody tr:eq(0) td:eq(3)').text())
        + parseFloat($('#tbl1-info-cultivo-convencional-4 tbody tr:eq(1) td:eq(2)').text()));
}

function calcularCultivoConvencionalTbl1_3() {
    var cultivoListeria = parseFloat($('#tbl1-info-cultivo-convencional-1 tbody tr:eq(0) td:eq(0) input ').val());
    var cultivoSalmonela = parseFloat($('#tbl1-info-cultivo-convencional-1 tbody tr:eq(1) td:eq(0) input ').val());
    var porcContaminacionTeorica = parseFloat($('#tbl5-medio-cultivo-2 tbody tr:eq(7) td:eq(0)').text());
    var volumenMuertoPrepListeria = parseFloat($('#tbl1-info-cultivo-convencional-4 tbody tr:eq(0) td:eq(1)').text());
    var volumenMuertoPrepSalmonella = parseFloat($('#tbl1-info-cultivo-convencional-4 tbody tr:eq(1) td:eq(1)').text());
    var precioCultivoListeria = parseFloat($('#tbl1-info-cultivo-convencional-1 tbody tr:eq(0) td:eq(1)').text());
    var precioCultivoSalmonella = parseFloat($('#tbl1-info-cultivo-convencional-1 tbody tr:eq(1) td:eq(1)').text());

    $('#tbl1-info-cultivo-convencional-3 tbody tr:eq(0) td:eq(0)').text(cultivoListeria - (cultivoListeria * porcContaminacionTeorica / 100) - volumenMuertoPrepListeria);
    $('#tbl1-info-cultivo-convencional-3 tbody tr:eq(0) td:eq(1)').text(parseFloat($('#tbl1-info-cultivo-convencional-3 tbody tr:eq(0) td:eq(0)').text()) * precioCultivoListeria);
    $('#tbl1-info-cultivo-convencional-3 tbody tr:eq(1) td:eq(0)').text(cultivoListeria - parseFloat($('#tbl1-info-cultivo-convencional-3 tbody tr:eq(0) td:eq(0)').text()));
    $('#tbl1-info-cultivo-convencional-3 tbody tr:eq(1) td:eq(1)').text(precioCultivoListeria * parseFloat($('#tbl1-info-cultivo-convencional-3 tbody tr:eq(1) td:eq(0)').text()));

    $('#tbl1-info-cultivo-convencional-3 tbody tr:eq(2) td:eq(0)').text(cultivoSalmonela - (cultivoSalmonela * porcContaminacionTeorica / 100) - volumenMuertoPrepSalmonella);
    $('#tbl1-info-cultivo-convencional-3 tbody tr:eq(2) td:eq(1)').text(parseFloat($('#tbl1-info-cultivo-convencional-3 tbody tr:eq(2) td:eq(0)').text()) * precioCultivoSalmonella);
    $('#tbl1-info-cultivo-convencional-3 tbody tr:eq(3) td:eq(0)').text(cultivoSalmonela - parseFloat($('#tbl1-info-cultivo-convencional-3 tbody tr:eq(2) td:eq(0)').text()));
    $('#tbl1-info-cultivo-convencional-3 tbody tr:eq(3) td:eq(1)').text(precioCultivoSalmonella * parseFloat($('#tbl1-info-cultivo-convencional-3 tbody tr:eq(3) td:eq(0)').text()));
}

function calcularCultivoPcrTbl2_1() {
    var cultivoListeria = $('#tbl2-info-cultivo-pcr-1 tbody tr:eq(0) td:eq(0) input ').val();
    var cultivoSalmonela = $('#tbl2-info-cultivo-pcr-1 tbody tr:eq(1) td:eq(0) input ').val();
    var cultivoListeria2 = $('#tbl2-info-cultivo-pcr-1 tbody tr:eq(0) td:eq(3) input ').val();
    var cultivoSalmonela2 = $('#tbl2-info-cultivo-pcr-1 tbody tr:eq(1) td:eq(3) input ').val();

    $('#tbl2-info-cultivo-pcr-1 tbody tr:eq(0) td:eq(1)').text($('#tbl5-medio-cultivo-4 tbody tr:eq(4) td:eq(0)').text());
    $('#tbl2-info-cultivo-pcr-1 tbody tr:eq(1) td:eq(1)').text($('#tbl5-medio-cultivo-4 tbody tr:eq(4) td:eq(1)').text());

    $('#tbl2-info-cultivo-pcr-1 tbody tr:eq(0) td:eq(4)').text($('#tbl5-medio-cultivo-3 tbody tr:eq(4) td:eq(0)').text());
    $('#tbl2-info-cultivo-pcr-1 tbody tr:eq(1) td:eq(4)').text($('#tbl5-medio-cultivo-3 tbody tr:eq(4) td:eq(1)').text());

    $('#tbl2-info-cultivo-pcr-4 tbody tr:eq(0) td:eq(2)').text($('#tbl5-medio-cultivo-4 tbody tr:eq(4) td:eq(0)').text());
    $('#tbl2-info-cultivo-pcr-4 tbody tr:eq(1) td:eq(1)').text($('#tbl5-medio-cultivo-4 tbody tr:eq(4) td:eq(1)').text());

    $('#tbl2-info-cultivo-pcr-4 tbody tr:eq(0) td:eq(5)').text($('#tbl5-medio-cultivo-3 tbody tr:eq(4) td:eq(0)').text());
    $('#tbl2-info-cultivo-pcr-4 tbody tr:eq(1) td:eq(4)').text($('#tbl5-medio-cultivo-3 tbody tr:eq(4) td:eq(1)').text());

    $('#tbl2-info-cultivo-pcr-1 tbody tr:eq(0) td:eq(2)').text(parseFloat(cultivoListeria) * parseFloat($('#tbl5-medio-cultivo-4 tbody tr:eq(4) td:eq(0)').text()));
    $('#tbl2-info-cultivo-pcr-1 tbody tr:eq(1) td:eq(2)').text(parseFloat(cultivoSalmonela) * parseFloat($('#tbl5-medio-cultivo-4 tbody tr:eq(4) td:eq(1)').text()));

    $('#tbl2-info-cultivo-pcr-1 tbody tr:eq(0) td:eq(5)').text(parseFloat(cultivoListeria2) * parseFloat($('#tbl5-medio-cultivo-3 tbody tr:eq(4) td:eq(0)').text()));
    $('#tbl2-info-cultivo-pcr-1 tbody tr:eq(1) td:eq(5)').text(parseFloat(cultivoSalmonela2) * parseFloat($('#tbl5-medio-cultivo-3 tbody tr:eq(4) td:eq(1)').text()));

    $('#tbl2-info-cultivo-pcr-2 tbody tr:eq(0) td:eq(0)').text($('#tbl6-info-talento-humano-cultivo-3 tbody tr:eq(1) td:eq(3) input').val());
    $('#tbl2-info-cultivo-pcr-2 tbody tr:eq(0) td:eq(1)').text($('#tbl6-info-talento-humano-cultivo-3 tbody tr:eq(4) td:eq(3) input').val());
    $('#tbl2-info-cultivo-pcr-2 tbody tr:eq(0) td:eq(2)').text($('#tbl6-info-talento-humano-cultivo-3 tbody tr:eq(1) td:eq(3) input').val());
    $('#tbl2-info-cultivo-pcr-2 tbody tr:eq(0) td:eq(3)').text($('#tbl6-info-talento-humano-cultivo-3 tbody tr:eq(4) td:eq(3) input').val());

    $('#tbl2-info-cultivo-pcr-2 tbody tr:eq(2) td:eq(0)').text(((parseFloat(cultivoListeria) / 30) * parseFloat($('#tbl6-info-talento-humano-cultivo-1 tbody tr:eq(1) td:eq(1)').text())).toFixed(0));
    $('#tbl2-info-cultivo-pcr-2 tbody tr:eq(2) td:eq(1)').text(((parseFloat(cultivoListeria) / 30) * parseFloat($('#tbl6-info-talento-humano-cultivo-1 tbody tr:eq(5) td:eq(1)').text())).toFixed(0));
    $('#tbl2-info-cultivo-pcr-2 tbody tr:eq(2) td:eq(2)').text(((parseFloat(cultivoSalmonela) / 30) * parseFloat($('#tbl6-info-talento-humano-cultivo-2 tbody tr:eq(1) td:eq(1)').text())).toFixed(0));
    $('#tbl2-info-cultivo-pcr-2 tbody tr:eq(2) td:eq(3)').text(((parseFloat(cultivoSalmonela) / 30) * parseFloat($('#tbl6-info-talento-humano-cultivo-2 tbody tr:eq(5) td:eq(1)').text())).toFixed(0));

    $('#tbl2-info-cultivo-pcr-2 tbody tr:eq(1) td').each(function (index) {
        $(this).text(parseFloat($('#tbl2-info-cultivo-pcr-2 tbody tr:eq(0) td:eq(' + index + ')').text())
            - parseFloat($('#tbl2-info-cultivo-pcr-2 tbody tr:eq(2) td:eq(' + index + ')').text()));
    });

    $('#tbl2-info-cultivo-pcr-4 tbody tr:eq(0) td:eq(1)').text((cultivoListeria * 1) / 100);
    $('#tbl2-info-cultivo-pcr-4 tbody tr:eq(1) td:eq(0)').text((cultivoSalmonela * 1) / 100);
    $('#tbl2-info-cultivo-pcr-4 tbody tr:eq(0) td:eq(4)').text((cultivoListeria2 * 1) / 100);
    $('#tbl2-info-cultivo-pcr-4 tbody tr:eq(1) td:eq(3)').text((cultivoSalmonela2 * 1) / 100);

    $('#tbl2-info-cultivo-pcr-4 tbody tr:eq(0) td:eq(3)').text(parseFloat($('#tbl2-info-cultivo-pcr-4 tbody tr:eq(0) td:eq(2)').text())
        * parseFloat($('#tbl2-info-cultivo-pcr-4 tbody tr:eq(0) td:eq(1)').text()));
    $('#tbl2-info-cultivo-pcr-4 tbody tr:eq(1) td:eq(2)').text(parseFloat($('#tbl2-info-cultivo-pcr-4 tbody tr:eq(1) td:eq(1)').text())
        * parseFloat($('#tbl2-info-cultivo-pcr-4 tbody tr:eq(1) td:eq(0)').text()));
    $('#tbl2-info-cultivo-pcr-4 tbody tr:eq(2) td:eq(2)').text(parseFloat($('#tbl2-info-cultivo-pcr-4 tbody tr:eq(0) td:eq(3)').text())
        + parseFloat($('#tbl2-info-cultivo-pcr-4 tbody tr:eq(1) td:eq(2)').text()));

    $('#tbl2-info-cultivo-pcr-4 tbody tr:eq(0) td:eq(6)').text(parseFloat($('#tbl2-info-cultivo-pcr-4 tbody tr:eq(0) td:eq(5)').text())
        * parseFloat($('#tbl2-info-cultivo-pcr-4 tbody tr:eq(0) td:eq(4)').text()));
    $('#tbl2-info-cultivo-pcr-4 tbody tr:eq(1) td:eq(5)').text(parseFloat($('#tbl2-info-cultivo-pcr-4 tbody tr:eq(1) td:eq(4)').text())
        * parseFloat($('#tbl2-info-cultivo-pcr-4 tbody tr:eq(1) td:eq(3)').text()));
    $('#tbl2-info-cultivo-pcr-4 tbody tr:eq(2) td:last').text(parseFloat($('#tbl2-info-cultivo-pcr-4 tbody tr:eq(0) td:eq(6)').text())
        + parseFloat($('#tbl2-info-cultivo-pcr-4 tbody tr:eq(1) td:eq(5)').text()));
}

function calcularCultivoPcrTbl2_3() {
    var cultivoListeria = parseFloat($('#tbl2-info-cultivo-pcr-1 tbody tr:eq(0) td:eq(0) input ').val());
    var cultivoSalmonela = parseFloat($('#tbl2-info-cultivo-pcr-1 tbody tr:eq(1) td:eq(0) input ').val());    
    var volumenMuertoPrepListeria = parseFloat($('#tbl2-info-cultivo-pcr-4 tbody tr:eq(0) td:eq(1)').text());
    var volumenMuertoPrepSalmonella = parseFloat($('#tbl2-info-cultivo-pcr-4 tbody tr:eq(1) td:eq(1)').text());
    var precioCultivoListeria = parseFloat($('#tbl2-info-cultivo-pcr-1 tbody tr:eq(0) td:eq(1)').text());
    var precioCultivoSalmonella = parseFloat($('#tbl2-info-cultivo-pcr-1 tbody tr:eq(1) td:eq(1)').text());

    $('#tbl2-info-cultivo-pcr-3 tbody tr:eq(0) td:eq(0)').text(cultivoListeria - (cultivoListeria * 0 / 100) - volumenMuertoPrepListeria);
    $('#tbl2-info-cultivo-pcr-3 tbody tr:eq(0) td:eq(1)').text(parseFloat($('#tbl2-info-cultivo-pcr-3 tbody tr:eq(0) td:eq(0)').text()) * precioCultivoListeria);
    $('#tbl2-info-cultivo-pcr-3 tbody tr:eq(1) td:eq(0)').text(cultivoListeria - parseFloat($('#tbl2-info-cultivo-pcr-3 tbody tr:eq(0) td:eq(0)').text()));
    $('#tbl2-info-cultivo-pcr-3 tbody tr:eq(1) td:eq(1)').text(precioCultivoListeria * parseFloat($('#tbl2-info-cultivo-pcr-3 tbody tr:eq(1) td:eq(0)').text()));

    $('#tbl2-info-cultivo-pcr-3 tbody tr:eq(2) td:eq(0)').text(cultivoSalmonela - (cultivoSalmonela * 0 / 100) - volumenMuertoPrepSalmonella);
    $('#tbl2-info-cultivo-pcr-3 tbody tr:eq(2) td:eq(1)').text(parseFloat($('#tbl2-info-cultivo-pcr-3 tbody tr:eq(2) td:eq(0)').text()) * precioCultivoSalmonella);
    $('#tbl2-info-cultivo-pcr-3 tbody tr:eq(3) td:eq(0)').text(cultivoSalmonela - parseFloat($('#tbl2-info-cultivo-pcr-3 tbody tr:eq(2) td:eq(0)').text()));
    $('#tbl2-info-cultivo-pcr-3 tbody tr:eq(3) td:eq(1)').text(precioCultivoSalmonella * parseFloat($('#tbl2-info-cultivo-pcr-3 tbody tr:eq(3) td:eq(0)').text()));

    cultivoListeria = parseFloat($('#tbl2-info-cultivo-pcr-1 tbody tr:eq(0) td:eq(3) input ').val());
    cultivoSalmonela = parseFloat($('#tbl2-info-cultivo-pcr-1 tbody tr:eq(1) td:eq(3) input ').val());
    volumenMuertoPrepListeria = parseFloat($('#tbl2-info-cultivo-pcr-4 tbody tr:eq(0) td:eq(4)').text());
    volumenMuertoPrepSalmonella = parseFloat($('#tbl2-info-cultivo-pcr-4 tbody tr:eq(1) td:eq(4)').text());
    precioCultivoListeria = parseFloat($('#tbl2-info-cultivo-pcr-1 tbody tr:eq(0) td:eq(4)').text());
    precioCultivoSalmonella = parseFloat($('#tbl2-info-cultivo-pcr-1 tbody tr:eq(1) td:eq(4)').text());

    $('#tbl2-info-cultivo-pcr-3 tbody tr:eq(0) td:eq(2)').text(cultivoListeria - (cultivoListeria * 0 / 100) - volumenMuertoPrepListeria);
    $('#tbl2-info-cultivo-pcr-3 tbody tr:eq(0) td:eq(3)').text(parseFloat($('#tbl2-info-cultivo-pcr-3 tbody tr:eq(0) td:eq(2)').text()) * precioCultivoListeria);
    $('#tbl2-info-cultivo-pcr-3 tbody tr:eq(1) td:eq(2)').text(cultivoListeria - parseFloat($('#tbl2-info-cultivo-pcr-3 tbody tr:eq(0) td:eq(2)').text()));
    $('#tbl2-info-cultivo-pcr-3 tbody tr:eq(1) td:eq(3)').text(precioCultivoListeria * parseFloat($('#tbl2-info-cultivo-pcr-3 tbody tr:eq(1) td:eq(2)').text()));

    $('#tbl2-info-cultivo-pcr-3 tbody tr:eq(2) td:eq(2)').text(cultivoSalmonela - (cultivoSalmonela * 0 / 100) - volumenMuertoPrepSalmonella);
    $('#tbl2-info-cultivo-pcr-3 tbody tr:eq(2) td:eq(3)').text(parseFloat($('#tbl2-info-cultivo-pcr-3 tbody tr:eq(2) td:eq(2)').text()) * precioCultivoSalmonella);
    $('#tbl2-info-cultivo-pcr-3 tbody tr:eq(3) td:eq(2)').text(cultivoSalmonela - parseFloat($('#tbl2-info-cultivo-pcr-3 tbody tr:eq(2) td:eq(2)').text()));
    $('#tbl2-info-cultivo-pcr-3 tbody tr:eq(3) td:eq(3)').text(precioCultivoSalmonella * parseFloat($('#tbl2-info-cultivo-pcr-3 tbody tr:eq(3) td:eq(2)').text()));
}

function calcularDescrCultivoConvencionalTbl3_1() {
    var total1 = 0;
    var total2 = 0;
    $('#tbl3-descr-cultivo-convencional-1 tbody tr:eq(0) td:eq(0)').text((parseFloat($('#tbl1-info-cultivo-convencional-1 tbody tr:eq(0) td:eq(2)').text())
        / parseFloat($('#tbl1-info-cultivo-convencional-3 tbody tr:eq(0) td:eq(0)').text())).toFixed(0));
    $('#tbl3-descr-cultivo-convencional-1 tbody tr:eq(1) td:eq(0)').text(parseFloat($('#tbl6-info-talento-humano-cultivo-1 tbody tr:eq(3) td:eq(0)').text()));
    $('#tbl3-descr-cultivo-convencional-1 tbody tr:eq(2) td:eq(0)').text(parseFloat($('#tbl6-info-talento-humano-cultivo-1 tbody tr:eq(7) td:eq(0)').text()));
    $('#tbl3-descr-cultivo-convencional-1 tbody tr:lt(3) td').each(function () {
        total1 += parseFloat($(this).text());
    });
    $('#tbl3-descr-cultivo-convencional-1 tbody tr:eq(3) td:eq(0)').text(total1);

    $('#tbl3-descr-cultivo-convencional-1 tbody tr:eq(4) td:eq(0)').text((parseFloat($('#tbl1-info-cultivo-convencional-1 tbody tr:eq(1) td:eq(2)').text())
        / parseFloat($('#tbl1-info-cultivo-convencional-3 tbody tr:eq(2) td:eq(0)').text())).toFixed(0));
    $('#tbl3-descr-cultivo-convencional-1 tbody tr:eq(5) td:eq(0)').text(parseFloat($('#tbl6-info-talento-humano-cultivo-2 tbody tr:eq(3) td:eq(0)').text()));
    $('#tbl3-descr-cultivo-convencional-1 tbody tr:eq(6) td:eq(0)').text(parseFloat($('#tbl6-info-talento-humano-cultivo-2 tbody tr:eq(7) td:eq(0)').text()));
    $('#tbl3-descr-cultivo-convencional-1 tbody tr:gt(3):lt(3) td').each(function () {
        total2 += parseFloat($(this).text());
    });
    $('#tbl3-descr-cultivo-convencional-1 tbody tr:eq(7) td:eq(0)').text(total2);
}

function calcularDescrCultivopcrTbl4_1() {
    var total1 = 0;
    var total2 = 0;
    var total3 = 0;
    var total4 = 0;
    $('#tbl4-descr-cultivo-pcr-1 tbody tr:eq(0) td:eq(0)').text((parseFloat($('#tbl2-info-cultivo-pcr-1 tbody tr:eq(0) td:eq(2)').text())
        / parseFloat($('#tbl2-info-cultivo-pcr-3 tbody tr:eq(0) td:eq(0)').text())).toFixed(0));
    $('#tbl4-descr-cultivo-pcr-1 tbody tr:eq(1) td:eq(0)').text(parseFloat($('#tbl6-info-talento-humano-cultivo-1 tbody tr:eq(3) td:eq(1)').text()));
    $('#tbl4-descr-cultivo-pcr-1 tbody tr:eq(2) td:eq(0)').text(parseFloat($('#tbl6-info-talento-humano-cultivo-1 tbody tr:eq(7) td:eq(1)').text()));
    total1 = parseFloat($('#tbl4-descr-cultivo-pcr-1 tbody tr:eq(0) td:eq(0)').text())
        + parseFloat($('#tbl4-descr-cultivo-pcr-1 tbody tr:eq(1) td:eq(0)').text()) + parseFloat($('#tbl4-descr-cultivo-pcr-1 tbody tr:eq(2) td:eq(0)').text());
    $('#tbl4-descr-cultivo-pcr-1 tbody tr:eq(3) td:eq(0)').text(total1);

    $('#tbl4-descr-cultivo-pcr-1 tbody tr:eq(6) td:eq(0)').text((parseFloat($('#tbl2-info-cultivo-pcr-1 tbody tr:eq(1) td:eq(2)').text())
        / parseFloat($('#tbl2-info-cultivo-pcr-3 tbody tr:eq(2) td:eq(0)').text())).toFixed(0));
    $('#tbl4-descr-cultivo-pcr-1 tbody tr:eq(7) td:eq(0)').text(parseFloat($('#tbl6-info-talento-humano-cultivo-2 tbody tr:eq(3) td:eq(1)').text()));
    $('#tbl4-descr-cultivo-pcr-1 tbody tr:eq(8) td:eq(0)').text(parseFloat($('#tbl6-info-talento-humano-cultivo-2 tbody tr:eq(7) td:eq(1)').text()));
    total2 = parseFloat($('#tbl4-descr-cultivo-pcr-1 tbody tr:eq(6) td:eq(0)').text())
        + parseFloat($('#tbl4-descr-cultivo-pcr-1 tbody tr:eq(7) td:eq(0)').text()) + parseFloat($('#tbl4-descr-cultivo-pcr-1 tbody tr:eq(8) td:eq(0)').text());
    $('#tbl4-descr-cultivo-pcr-1 tbody tr:eq(9) td:eq(0)').text(total2);




    $('#tbl4-descr-cultivo-pcr-1 tbody tr:eq(0) td:eq(1)').text((parseFloat($('#tbl2-info-cultivo-pcr-1 tbody tr:eq(0) td:eq(5)').text())
        / parseFloat($('#tbl2-info-cultivo-pcr-3 tbody tr:eq(0) td:eq(2)').text())).toFixed(0));
    $('#tbl4-descr-cultivo-pcr-1 tbody tr:eq(1) td:eq(1)').text(parseFloat($('#tbl6-info-talento-humano-cultivo-1 tbody tr:eq(2) td:eq(1)').text())
        * parseFloat($('#tbl7-info-actividades-cultivo-1 tbody tr:eq(6) td:eq(3) input').val()));

    $('#tbl4-descr-cultivo-pcr-1 tbody tr:eq(2) td:eq(1)').text(0);
    total3 = parseFloat($('#tbl4-descr-cultivo-pcr-1 tbody tr:eq(0) td:eq(1)').text())
        + parseFloat($('#tbl4-descr-cultivo-pcr-1 tbody tr:eq(1) td:eq(1)').text()) + parseFloat($('#tbl4-descr-cultivo-pcr-1 tbody tr:eq(2) td:eq(1)').text());
    $('#tbl4-descr-cultivo-pcr-1 tbody tr:eq(3) td:eq(1)').text(total3);

    $('#tbl4-descr-cultivo-pcr-1 tbody tr:eq(6) td:eq(1)').text(parseFloat($('#tbl2-info-cultivo-pcr-1 tbody tr:eq(1) td:eq(5)').text())
        / parseFloat($('#tbl2-info-cultivo-pcr-3 tbody tr:eq(2) td:eq(2)').text()));
    $('#tbl4-descr-cultivo-pcr-1 tbody tr:eq(7) td:eq(1)').text(parseFloat($('#tbl6-info-talento-humano-cultivo-1 tbody tr:eq(2) td:eq(1)').text())
        * parseFloat($('#tbl7-info-actividades-cultivo-1 tbody tr:eq(22) td:eq(3) input').val()));
    $('#tbl4-descr-cultivo-pcr-1 tbody tr:eq(8) td:eq(1)').text(0);
    total4 = parseFloat($('#tbl4-descr-cultivo-pcr-1 tbody tr:eq(6) td:eq(1)').text())
        + parseFloat($('#tbl4-descr-cultivo-pcr-1 tbody tr:eq(7) td:eq(1)').text()) + parseFloat($('#tbl4-descr-cultivo-pcr-1 tbody tr:eq(8) td:eq(1)').text());
    $('#tbl4-descr-cultivo-pcr-1 tbody tr:eq(9) td:eq(1)').text(total4);


    $('#tbl4-descr-cultivo-pcr-1 tbody tr:eq(4) td:eq(0)').text(parseFloat(total1) + parseFloat(total3));
    $('#tbl4-descr-cultivo-pcr-1 tbody tr:eq(10) td:eq(0)').text(parseFloat(total2) + parseFloat(total4));   
}

function calcularDescrCultivoConvencionalTbl3_2() {
    $('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(1) td:eq(0)').text(10000000);
    $('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(3) td:eq(0)').text(parseFloat($('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(1) td:eq(0)').text())
        + parseFloat($('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(2) td:eq(0) input').val()));
    $('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(4) td:eq(0)').text(parseFloat(($('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(3) td:eq(0)').text()) / 30).toFixed(0));
    $('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(6) td:eq(0)').text(((parseFloat($('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(5) td:eq(0) input').val())
        * parseFloat($('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(4) td:eq(0)').text())) / parseFloat($('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(0) td:eq(0) input').val())).toFixed(0));
    $('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(8) td:eq(0)').text(parseFloat($('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(7) td:eq(0) input').val())
        * parseFloat($('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(6) td:eq(0)').text()));

    $('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(11) td:eq(0)').text($('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(5) td:eq(0) input').val());
    $('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(12) td:eq(0)').text(parseFloat($('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(11) td:eq(0)').text())
        * parseFloat($('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(10) td:eq(0) input').val()));
    $('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(13) td:eq(0)').text(parseFloat($('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(12) td:eq(0)').text())
        - parseFloat($('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(8) td:eq(0)').text()));
    $('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(14) td:eq(0)').text(parseFloat($('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(13) td:eq(0)').text())
        / parseFloat($('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(11) td:eq(0)').text()));
    $('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(15) td:eq(0)').text(parseFloat($('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(10) td:eq(0) input').val())
        - parseFloat($('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(14) td:eq(0)').text()));

    $('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(18) td:eq(0)').text(parseFloat($('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(11) td:eq(0)').text())
        * parseFloat($('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(14) td:eq(0)').text()));
    $('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(20) td:eq(0)').text(parseFloat($('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(19) td:eq(0) input').val())
        / parseFloat(365));
    $('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(21) td:eq(0)').text(parseFloat($('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(20) td:eq(0)').text())
        * parseFloat($('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(17) td:eq(0) input').val()));
    $('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(22) td:eq(0)').text(parseFloat($('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(11) td:eq(0)').text())
        * parseFloat($('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(21) td:eq(0)').text()));

    $('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(24) td:eq(0)').text(0); //pendiente
    $('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(25) td:eq(0)').text($('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(8) td:eq(0)').text());
    $('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(26) td:eq(0)').text($('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(22) td:eq(0)').text());
    $('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(27) td:eq(0)').text(parseFloat($('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(24) td:eq(0)').text())
        + parseFloat($('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(25) td:eq(0)').text()) + parseFloat($('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(26) td:eq(0)').text()));
}

function calcularDescrCultivoPcrTbl4_2() {
    $('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(1) td:eq(0)').text(10000000);
    $('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(3) td:eq(0)').text(parseFloat($('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(1) td:eq(0)').text())
        + parseFloat($('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(2) td:eq(0) input').val()));
    $('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(4) td:eq(0)').text(parseFloat(($('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(3) td:eq(0)').text()) / 30).toFixed(0));
    $('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(6) td:eq(0)').text(((parseFloat($('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(5) td:eq(0) input').val())
        * parseFloat($('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(4) td:eq(0)').text())) / parseFloat($('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(0) td:eq(0) input').val())).toFixed(0));
    $('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(8) td:eq(0)').text(parseFloat($('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(7) td:eq(0) input').val())
        * parseFloat($('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(6) td:eq(0)').text()));

    $('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(11) td:eq(0)').text($('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(5) td:eq(0) input').val());
    $('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(12) td:eq(0)').text(parseFloat($('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(11) td:eq(0)').text())
        * parseFloat($('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(10) td:eq(0) input').val()));
    $('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(13) td:eq(0)').text(parseFloat($('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(12) td:eq(0)').text())
        - parseFloat($('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(8) td:eq(0)').text()));
    $('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(14) td:eq(0)').text(parseFloat($('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(13) td:eq(0)').text())
        / parseFloat($('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(11) td:eq(0)').text()));
    $('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(15) td:eq(0)').text(parseFloat($('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(10) td:eq(0) input').val())
        - parseFloat($('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(14) td:eq(0)').text()));

    $('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(18) td:eq(0)').text(parseFloat($('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(11) td:eq(0)').text())
        * parseFloat($('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(14) td:eq(0)').text()));
    $('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(20) td:eq(0)').text(parseFloat($('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(19) td:eq(0) input').val()) / parseFloat(365));
    $('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(21) td:eq(0)').text(parseFloat($('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(20) td:eq(0)').text())
        * parseFloat($('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(19) td:eq(0) input').val()));
    $('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(22) td:eq(0)').text(parseFloat($('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(11) td:eq(0)').text())
        * parseFloat($('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(21) td:eq(0)').text()));

    $('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(24) td:eq(0)').text(0);//pendiente
    $('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(25) td:eq(0)').text($('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(8) td:eq(0)').text());
    $('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(26) td:eq(0)').text($('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(22) td:eq(0)').text());
    $('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(27) td:eq(0)').text(parseFloat($('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(24) td:eq(0)').text())
        + parseFloat($('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(25) td:eq(0)').text()) + parseFloat($('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(26) td:eq(0)').text()));

    $('#tbl-total-all thead tr:eq(1)').text(parseFloat($('#tbl4-descr-cultivo-pcr-2 tbody tr:eq(27) td:eq(0)').text())
        - parseFloat($('#tbl3-descr-cultivo-convencional-2 tbody tr:eq(27) td:eq(0)').text()));
     
}