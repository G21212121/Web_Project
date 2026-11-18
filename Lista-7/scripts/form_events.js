(function () {
    "use strict";

    function obsluzFocus(event) {
        var e = event || window.event;
        var pole = e.target || e.srcElement;
        var boxPomocy = document.getElementById("pomoc-formularza");
        var tekstPomocy;

        if (!boxPomocy || !pole) {
            return;
        }

        tekstPomocy = pole.getAttribute("data-help") ||
            "Wypełnij aktywne pole: " + (pole.name || pole.tagName.toLowerCase());
        boxPomocy.textContent = "Podpowiedź: " + tekstPomocy;
        boxPomocy.style.backgroundColor = "#e8f5e9";
        boxPomocy.style.borderColor = "#2e7d32";
    }

    function obsluzBlur(event) {
        var e = event || window.event;
        var pole = e.target || e.srcElement;
        var boxPomocy = document.getElementById("pomoc-formularza");

        if (!boxPomocy || !pole) {
            return;
        }

        boxPomocy.textContent = "Opuszczono pole \"" + (pole.name || "formularza") +
            "\" Kliknij kolejne pole, aby wyświetlić pomoc.";
        boxPomocy.style.backgroundColor = "#fff8e1";
        boxPomocy.style.borderColor = "#f57f17";
    }

    function obsluzSubmit(event) {
        var e = event || window.event;
        var potwierdzenie = window.confirm("Czy na pewno chcesz wysłać formularz osobowy?");

        if (!potwierdzenie) {
            if (e.preventDefault) {
                e.preventDefault();
            }
            return false;
        }
        return true;
    }

    function obsluzReset(event) {
        var e = event || window.event;
        var potwierdzenie = window.confirm("Czy na pewno chcesz wyczyścić wszystkie pola formularza?");

        if (!potwierdzenie) {
            if (e.preventDefault) {
                e.preventDefault();
            }
            return false;
        }
        return true;
    }

    function inicjalizujFormularz() {
        var formularz = document.getElementById("formularz-osobowy");
        var pola;
        var i;

        if (!formularz) {
            return;
        }

        pola = formularz.querySelectorAll("input, select, textarea");
        for (i = 0; i < pola.length; i += 1) {
            if (pola[i].type !== "submit" && pola[i].type !== "reset") {
                pola[i].addEventListener("focus", obsluzFocus, false);
                pola[i].addEventListener("blur", obsluzBlur, false);
            }
        }

        formularz.addEventListener("submit", obsluzSubmit, false);
        formularz.addEventListener("reset", obsluzReset, false);
    }

    window.addEventListener("DOMContentLoaded", inicjalizujFormularz, false);
}());