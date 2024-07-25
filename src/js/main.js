$(document).ready(function () {
    $('.btn_celular').on('click', function () {
        $('.nav_celular').toggleClass('ativo');
        $('.btn_celular').find('i').toggleClass('fa-x');
    });
});