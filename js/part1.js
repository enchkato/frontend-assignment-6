$(document).ready(function() {
    console.log("jQuery is ready!");

    $("#btn-check-ready").click(function() {
        alert("jQuery is ready!");
    });

    $("#btn-change-text").click(function() {
        $("#target-id").text("New text set with jQuery");
    });

    $("#btn-change-html").click(function() {
        $(".target-class").html("<b>HTML content updated</b>");
    });

    $("#btn-change-css").click(function() {
        $("span").css({
            "background-color": "#dc3545",
            "color": "#fff",
            "font-size": "16px",
            "padding": "6px 12px"
        });
    });
});