$(document).ready(function() {
    $(".accordion-header-custom").click(function() {
        const content = $(this).next(".accordion-content-custom");
        const icon = $(this).find(".icon");

        if (content.is(":visible")) {
            content.slideUp(250);
            icon.html("&plus;");
        } else {
            $(".accordion-content-custom").slideUp(250);
            $(".accordion-header-custom .icon").html("&plus;");

            content.slideDown(250);
            icon.html("&minus;");
        }
    });
});