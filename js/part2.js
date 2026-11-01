$(document).ready(function() {
    $("#btn-hide").click(function() {
        $("#vis-text").hide();
    });

    $("#btn-show").click(function() {
        $("#vis-text").show();
    });

    $("#btn-toggle").click(function() {
        $("#vis-text").toggle();
    });

    $("#btn-fade-out").click(function() {
        $("#fade-img").fadeOut();
    });

    $("#btn-fade-in").click(function() {
        $("#fade-img").fadeIn();
    });

    $("#btn-fade-toggle").click(function() {
        $("#fade-img").fadeToggle();
    });

    $("#btn-slide-up").click(function() {
        $("#slide-box").slideUp();
    });

    $("#btn-slide-down").click(function() {
        $("#slide-box").slideDown();
    });

    $("#btn-slide-toggle").click(function() {
        $("#slide-box").slideToggle();
    });
});