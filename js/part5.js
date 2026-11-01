$(document).ready(function() {
    $(".accordion-header-custom").click(function() {
        const currentContent = $(this).next(".accordion-content-custom");
        const currentIcon = $(this).find(".icon");

        if (currentContent.is(":visible")) {
            currentContent.slideUp(300);
            currentIcon.html("&plus;");
        } else {
            $(".accordion-content-custom").slideUp(300);
            $(".accordion-header-custom .icon").html("&plus;");

            currentContent.slideDown(300);
            currentIcon.html("&minus;");
        }
    });
});