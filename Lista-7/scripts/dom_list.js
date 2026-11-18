(function () {
    "use strict";

    var licznikElementow = 2;

    function aktualizujStatus(komunikat) {
        var status = document.getElementById("status-dom");
        if (status) {
            status.textContent = komunikat;
        }
    }

    function utworzNowyElementListy(opisDodatkowy) {
        var nowyLi = document.createElement("li");
        var tekst;

        licznikElementow += 1;
        tekst = document.createTextNode("Element " + licznikElementow + opisDodatkowy);
        nowyLi.appendChild(tekst);
        return nowyLi;
    }

    function dodajNaKoniec() {
        var lista = document.getElementById("lista-elementow");
        var nowyLi;

        if (!lista) {
            return;
        }

        nowyLi = utworzNowyElementListy(" (dodany przez appendChild)");
        lista.appendChild(nowyLi);
        aktualizujStatus("Dodano nowy element na końcu listy (createElement, createTextNode, appendChild).");
    }

    function wstawPrzedPierwszym() {
        var lista = document.getElementById("lista-elementow");
        var nowyLi;
        var pierwszyElement;

        if (!lista) {
            return;
        }

        nowyLi = utworzNowyElementListy(" (wstawiony przez insertBefore)");
        pierwszyElement = lista.firstElementChild;

        if (pierwszyElement) {
            lista.insertBefore(nowyLi, pierwszyElement);
            aktualizujStatus("Wstawiono nowy element przed pierwszym elementem listy (insertBefore).");
        } else {
            lista.appendChild(nowyLi);
            aktualizujStatus("Lista była pusta — dodano pierwszy element (appendChild).");
        }
    }

    function zamienPierwszy() {
        var lista = document.getElementById("lista-elementow");
        var pierwszyElement;
        var nowyLi;

        if (!lista) {
            return;
        }

        pierwszyElement = lista.firstElementChild;
        if (!pierwszyElement) {
            aktualizujStatus("Brak elementów do zamiany — lista jest pusta.");
            return;
        }

        nowyLi = utworzNowyElementListy(" (zamieniony przez replaceChild)");
        lista.replaceChild(nowyLi, pierwszyElement);
        aktualizujStatus("Zamieniono pierwszy element listy na nowy (replaceChild).");
    }

    function usunOstatni() {
        var lista = document.getElementById("lista-elementow");
        var ostatniElement;
        var rodzic;

        if (!lista) {
            return;
        }

        ostatniElement = lista.lastElementChild;
        if (!ostatniElement) {
            aktualizujStatus("Lista jest już pusta — brak elementów do usunięcia.");
            return;
        }

        rodzic = ostatniElement.parentNode;
        rodzic.removeChild(ostatniElement);

        if (rodzic.children.length === 0) {
            licznikElementow = 0;
            aktualizujStatus("Usunięto ostatni element (parentNode.removeChild) — lista jest teraz pusta.");
        } else {
            aktualizujStatus("Usunięto ostatni element za pomocą parentNode.removeChild (rodzic: <" +
                rodzic.tagName.toLowerCase() + ">).");
        }
    }

    function inicjalizujListeDOM() {
        var btnAppend = document.getElementById("btn-append");
        var btnInsert = document.getElementById("btn-insert");
        var btnReplace = document.getElementById("btn-replace");
        var btnRemove = document.getElementById("btn-remove");

        if (btnAppend) {
            btnAppend.addEventListener("click", dodajNaKoniec, false);
        }
        if (btnInsert) {
            btnInsert.addEventListener("click", wstawPrzedPierwszym, false);
        }
        if (btnReplace) {
            btnReplace.addEventListener("click", zamienPierwszy, false);
        }
        if (btnRemove) {
            btnRemove.addEventListener("click", usunOstatni, false);
        }
    }

    window.addEventListener("DOMContentLoaded", inicjalizujListeDOM, false);
}());