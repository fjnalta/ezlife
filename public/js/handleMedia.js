$(document).ready(function () {
    $("#tabContent").fadeIn("slow", function () {
        $("#loadingSpinner").attr("hidden",true);
        $("#tabContent").attr("hidden",false);
    });
});