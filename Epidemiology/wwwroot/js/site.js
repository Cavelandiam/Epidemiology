$(document).ready(function () {
    $("input[type='number']").on("change", function () {
        let num = $(this).val();
        if (!num.match(/^\d+/)) {
            $(this).val(1);
        }
    });

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
});