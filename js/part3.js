$(document).ready(function() {
    let itemCounter = 2;

    $("#btn-append").click(function() {
        itemCounter++;
        $("#dynamic-list").append('<li class="list-group-item">Appended Item ' + itemCounter + '</li>');
    });

    $("#btn-prepend").click(function() {
        itemCounter++;
        $("#dynamic-list").prepend('<li class="list-group-item">Prepended Item ' + itemCounter + '</li>');
    });

    $("#btn-remove").click(function() {
        $("#dynamic-list li:last-child").remove();
    });

    let currentImgState = 1;
    $("#btn-change-img").click(function() {
        if (currentImgState === 1) {
            $("#attr-img").attr("src", "https://picsum.photos/id/1062/240/130");
            currentImgState = 2;
        } else {
            $("#attr-img").attr("src", "https://picsum.photos/id/1025/240/130");
            currentImgState = 1;
        }
    });

    let currentLinkState = 1;
    $("#btn-change-link").click(function() {
        if (currentLinkState === 1) {
            $("#attr-link").attr("href", "https://github.com").text("Visit GitHub");
            currentLinkState = 2;
        } else {
            $("#attr-link").attr("href", "https://astanait.edu.kz").text("Visit AITU Website");
            currentLinkState = 1;
        }
    });

    $("#form-name").on("keyup", function() {
        let nameVal = $(this).val();
        $("#live-name-out").text(nameVal !== "" ? nameVal : "-");
    });

    $("#form-email").on("keyup", function() {
        let emailVal = $(this).val();
        $("#live-email-out").text(emailVal !== "" ? emailVal : "-");
    });
});