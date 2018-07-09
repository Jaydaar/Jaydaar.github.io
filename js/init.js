(function($) {
    $(function() {
        $('.sidenav').sidenav();
        $('.parallax').parallax();
        $('.dropdown-trigger').dropdown({ hover: true });
        $('.modal').modal();
        M.AutoInit(document.body)
        $('.tabs').tabs();
        $('.carousel').carousel({ 'dist': 0, 'indicators': true });
    }); // end of document ready
})(jQuery); // end of jQuery name space