"use strict";
/**
 * Handle user cookies - DSGVO conform
 */
$(document).ready(function () {
    let acceptCookies = document.querySelector(".acceptCookies");

    // show alert if acceptCookies is not available
    if (!getCookie("acceptCookies")) {
        console.log("SHOW COOKIE MODAL");
        $("#cookieModal").modal("show");
        //cookieAlert.classList.add("show");
    }

    // remember users choice for 1 year
    acceptCookies.addEventListener("click", function () {
        setCookie("acceptCookies", true, 365);
        $("#cookieModal").modal("hide");
    });
});

/**
 * set user cookie
 * @param cname
 * @param cvalue
 * @param exdays
 */
function setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/**
 * get user cookie
 * @param cname
 * @returns {string}
 */
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}