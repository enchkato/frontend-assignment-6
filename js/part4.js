$(document).ready(function() {
    const box = $("#anim-target");

    function resetBox() {
        box.stop(true, true).css({
            "top": "20px",
            "left": "20px",
            "width": "70px",
            "height": "70px",
            "opacity": "1"
        });
    }

    $("#btn-anim-reset").click(function() {
        resetBox();
    });

    $("#btn-basic-anim").click(function() {
        resetBox();
        box.animate({
            left: "250px",
            width: "120px",
            height: "120px"
        }, 800);
    });

    $("#btn-seq-anim").click(function() {
        resetBox();
        box.animate({ left: "300px" }, 600)
           .animate({ top: "180px" }, 600)
           .animate({ width: "40px", height: "40px" }, 500)
           .animate({ left: "20px", top: "20px", width: "70px", height: "70px" }, 700);
    });

    $("#btn-comb-anim").click(function() {
        resetBox();
        box.animate({
            left: "200px",
            top: "120px",
            width: "140px",
            height: "140px",
            opacity: 0.3
        }, 1000);
    });
});