(function () {
    "use strict";

    function zastosujStyle() {
        var selectTlo = document.getElementById("wybor-tla");
        var selectTekst = document.getElementById("wybor-tekstu");
        var selectCzcionka = document.getElementById("wybor-czcionki");
        var glownyObszar = document.querySelector("main");
        var naglowek = document.querySelector(".main-header");
        var panel = document.querySelector(".js-panel");
        var status = document.getElementById("status-stylu");

        if (selectTlo && selectTekst && selectCzcionka) {
            document.body.style.backgroundColor = selectTlo.value;
            document.body.style.color = selectTekst.value;
            document.body.style.fontFamily = selectCzcionka.value;

            if (glownyObszar) {
                glownyObszar.style.backgroundImage = "none";
                glownyObszar.style.backgroundColor = selectTlo.value;
            }
            if (naglowek) {
                naglowek.style.backgroundColor = selectTlo.value;
            }
            if (panel) {
                panel.style.backgroundColor = selectTlo.value;
            }

            if (status) {
                status.textContent = "Aktywne style — Tło: " + selectTlo.value +
                    ", Tekst: " + selectTekst.value +
                    ", Czcionka: " + selectCzcionka.value;
            }
        }
    }

    function przywrocDomyslne() {
        var selectTlo = document.getElementById("wybor-tla");
        var selectTekst = document.getElementById("wybor-tekstu");
        var selectCzcionka = document.getElementById("wybor-czcionki");
        var glownyObszar = document.querySelector("main");
        var naglowek = document.querySelector(".main-header");
        var panel = document.querySelector(".js-panel");
        var status = document.getElementById("status-stylu");

        document.body.style.backgroundColor = "";
        document.body.style.color = "";
        document.body.style.fontFamily = "";

        if (glownyObszar) {
            glownyObszar.style.backgroundImage = "";
            glownyObszar.style.backgroundColor = "";
        }
        if (naglowek) {
            naglowek.style.backgroundColor = "";
        }
        if (panel) {
            panel.style.backgroundColor = "";
        }

        if (selectTlo) {
            selectTlo.selectedIndex = 0;
        }
        if (selectTekst) {
            selectTekst.selectedIndex = 0;
        }
        if (selectCzcionka) {
            selectCzcionka.selectedIndex = 0;
        }
        if (status) {
            status.textContent = "Przywrócono domyślne style strony.";
        }
    }

    function inicjalizujZmianeStylow() {
        var btnZastosuj = document.getElementById("btn-zastosuj-styl");
        var btnReset = document.getElementById("btn-reset-styl");
        var selectTlo = document.getElementById("wybor-tla");
        var selectTekst = document.getElementById("wybor-tekstu");
        var selectCzcionka = document.getElementById("wybor-czcionki");

        if (btnZastosuj) {
            btnZastosuj.addEventListener("click", zastosujStyle, false);
        }
        if (btnReset) {
            btnReset.addEventListener("click", przywrocDomyslne, false);
        }
        if (selectTlo) {
            selectTlo.addEventListener("change", zastosujStyle, false);
        }
        if (selectTekst) {
            selectTekst.addEventListener("change", zastosujStyle, false);
        }
        if (selectCzcionka) {
            selectCzcionka.addEventListener("change", zastosujStyle, false);
        }
    }

    window.addEventListener("DOMContentLoaded", inicjalizujZmianeStylow, false);
}());