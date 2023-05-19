$(document).ready(function () {
    manageTabMenus();
    validateOnlyNumbers();
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