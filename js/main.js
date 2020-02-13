$(function () {
    $('.gif-img').hover(function () {
        // on mouse enter
        var $link = $(this).attr('src');
        var customdata = $(this).parent().attr('href');

        $(this).data("link", $link);
        $(this).attr('src', customdata);

    }, function () {
        // on mouse leave
        $(this).attr('src', $(this).data("link"));
    });

});