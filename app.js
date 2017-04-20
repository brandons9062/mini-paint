$('document').ready(function () {
    var color = 'white';
    var colors = 'red green yellow blue white';
    var clickety = false;
    var dblClickety = false;



    $('.box').on('mousedown', function (event) {
        clickety = true;
    });

    $('.box').on('dblclick', function (event) {
        clickety = false;
        dblClickety = true;
    });

    $('.box').on('mouseup', function (event) {
        clickety = false;
        dblClickety = false;
    });


    $('.box').on('mouseup', function (event) {
        clickety = false;
    });

    $('.box').on('mouseover', function (event) {
        if (clickety === true) {
            $(this).addClass(color);
        };
        if (dblClickety == true) {
            $(this).removeClass(colors);
        }
    });

    $('.box').on('dblclick', function (event) {
        $(this).removeClass(colors);
    });

    $('#reset').on('click', function (event) {
        $('.box').removeClass(colors);
    });

    $('#red').on('click', function (event) {
        color = 'red';
    });
    $('#green').on('click', function (event) {
        color = 'green';
    });
    $('#blue').on('click', function (event) {
        color = 'blue';
    });
    $('#yellow').on('click', function (event) {
        color = 'yellow';
    });
    $('#white').on('click', function (event) {
        color = 'white';
    });

});
