var footer = new XMLHttpRequest();
    footer.open("GET", "js-header-footer/footer.html", true);
    footer.onreadystatechange = function () {
        if (footer.readyState === 4 && footer.status === 200) {
            document.getElementById("footer").innerHTML = footer.responseText;
        }
    };
footer.send();

var navbar = new XMLHttpRequest();
    navbar.open("GET", "js-header-footer/header.html", true);
    navbar.onreadystatechange = function () {
        if (navbar.readyState === 4 && navbar.status === 200) {
            document.getElementById("header").innerHTML = navbar.responseText;
        }
    };
navbar.send();

var navbar_fr = new XMLHttpRequest();
    navbar_fr.open("GET", "js-header-footer/header_french.html", true);
    navbar_fr.onreadystatechange = function () {
        if (navbar_fr.readyState === 4 && navbar_fr.status === 200) {
            document.getElementById("header_french").innerHTML = navbar_fr.responseText;
        }
    };
navbar_fr.send();


var footer_french = new XMLHttpRequest();
    footer_french.open("GET", "js-header-footer/footer_french.html", true);
    footer_french.onreadystatechange = function () {
        if (footer_french.readyState === 4 && footer_french.status === 200) {
            document.getElementById("footer_french").innerHTML = footer_french.responseText;
        }
    };
footer_french.send();




 