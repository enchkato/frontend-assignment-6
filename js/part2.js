$(document).ready(function() {
    $("#btn-hide").click(function() {
        $("#vis-text").hide(400);
    });

    $("#btn-show").click(function() {
        $("#vis-text").show(400);
    });

    $("#btn-toggle").click(function() {
        $("#vis-text").toggle(400);
    });

    $("#btn-fade-out").click(function() {
        $("#fade-img").fadeOut(500);
    });

    $("#btn-fade-in").click(function() {
        $("#fade-img").fadeIn(500);
    });

    $("#btn-fade-toggle").click(function() {
        $("#fade-img").fadeToggle(500);
    });

    $("#btn-slide-up").click(function() {
        $("#slide-box").slideUp(400);
    });

    $("#btn-slide-down").click(function() {
        $("#slide-box").slideDown(400);
    });

    $("#btn-slide-toggle").click(function() {
        $("#slide-box").slideToggle(400);
    });
});