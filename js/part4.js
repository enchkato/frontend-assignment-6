$(document).ready(function() {
    const box = $("#anim-box");

    function reset() {
        box.stop(true, true).css({
            "top": "20px",
            "left": "20px",
            "width": "70px",
            "height": "70px",
            "opacity": "1"
        });
    }

    $("#btn-reset").click(function() {
        reset();
    });

    $("#btn-basic").click(function() {
        reset();
        box.animate({
            left: "220px",
            width: "110px",
            height: "110px"
        }, 600);
    });

    $("#btn-seq").click(function() {
        reset();
        box.animate({ left: "260px" }, 400)
           .animate({ top: "160px" }, 400)
           .animate({ width: "40px", height: "40px" }, 300)
           .animate({ left: "20px", top: "20px", width: "70px", height: "70px" }, 500);
    });

    $("#btn-comb").click(function() {
        reset();
        box.animate({
            left: "180px",
            top: "100px",
            width: "130px",
            height: "130px",
            opacity: 0.4
        }, 800);
    });
});