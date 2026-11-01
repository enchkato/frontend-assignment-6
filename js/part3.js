$(document).ready(function() {
    let count = 2;

    $("#btn-append").click(function() {
        count++;
        $("#dynamic-list").append('<li class="list-group-item">Item ' + count + '</li>');
    });

    $("#btn-prepend").click(function() {
        count++;
        $("#dynamic-list").prepend('<li class="list-group-item">Item ' + count + '</li>');
    });

    $("#btn-remove").click(function() {
        $("#dynamic-list li").last().remove();
        if (count > 0) {
            count--;
        }
    });

    let imgToggle = false;
    $("#btn-change-img").click(function() {
        if (!imgToggle) {
            $("#attr-img").attr("src", "https://picsum.photos/id/1062/240/130");
            imgToggle = true;
        } else {
            $("#attr-img").attr("src", "https://picsum.photos/id/1025/240/130");
            imgToggle = false;
        }
    });

    let linkToggle = false;
    $("#btn-change-link").click(function() {
        if (!linkToggle) {
            $("#attr-link").attr("href", "https://github.com").text("Open GitHub");
            linkToggle = true;
        } else {
            $("#attr-link").attr("href", "https://astanait.edu.kz").text("Open AITU");
            linkToggle = false;
        }
    });

    $("#form-name").on("keyup", function() {
        let val = $(this).val();
        if (val.length > 0) {
            $("#live-name-out").text(val);
        } else {
            $("#live-name-out").text("-");
        }
    });

    $("#form-email").on("keyup", function() {
        let val = $(this).val();
        if (val.length > 0) {
            $("#live-email-out").text(val);
        } else {
            $("#live-email-out").text("-");
        }
    });
});