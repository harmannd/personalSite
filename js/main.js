const app = (function() {
    //Fix nav on small devices
    if ($(window).width() < 700) {
        $('#navbarItems').addClass('collapse navbar-collapse');
    }
    if ($(window).width() > 700) {
        $('#navbarItems').removeClass('collapse navbar-collapse');
    }

    return {
        nav: function() {
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
    app.nav();
});