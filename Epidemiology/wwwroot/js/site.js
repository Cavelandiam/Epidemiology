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
    $('#tbl8-tiempo-densidad-pruebas-1 tbody tr:first td:gt(0):lt(9)').each(function (){
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
        $(this).text(valorCultivo[index] + valorCajaTubo[index]);
    });

    var s = "";
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
        $('#tbl7-info-actividades-cultivo-1 tbody tr:eq(' + (index + 1)+') td:eq(1)').text(totalFound);
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