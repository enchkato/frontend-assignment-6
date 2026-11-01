$(document).ready(function() {
    console.log("jQuery is ready!");

    $("#btn-check-ready").click(function() {
        console.log("jQuery is working properly. Student: Kudaibergen Temirlan, Group: SE-2528");
        alert("jQuery is ready!");
    });

    $("#btn-change-text").click(function() {
        $("#target-id").text("Text updated with .text() method");
    });

    $("#btn-change-html").click(function() {
        $(".target-class").html("<strong>Content updated with .html() tag</strong>");
    });

    $("#btn-change-css").click(function() {
        $("span").css({
            "background-color": "#dc3545",
            "color": "#ffffff",
            "font-size": "16px",
            "padding": "8px 14px"
        });
    });
});