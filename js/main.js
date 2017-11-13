const app = (function() {
    if ($(window).width() < 700) {
        $('#navbarItems').addClass('collapse navbar-collapse');
    }
    if ($(window).width() > 700) {
        $('#navbarItems').removeClass('collapse navbar-collapse');
    }

    return {
        hamburger: function() {
            if ($(window).width() < 700) {
                $('#navbarItems').addClass('collapse navbar-collapse');
            }
            if ($(window).width() > 700) {
                $('#navbarItems').removeClass('collapse navbar-collapse');
            }
        }
    };
}());




$(window).resize(function() {
    app.hamburger();
});