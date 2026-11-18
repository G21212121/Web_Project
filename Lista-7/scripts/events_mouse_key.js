(function () {
    "use strict";

    var stanNajechania = "Oczekiwanie na najechanie (mouseover / mouseout)";
    var ostatnieKlikniecie = "Brak (kliknij wewnątrz ramki — mousedown)";
    var licznikRuchow = 0;
    var ostatniKeyCode = "Brak (naciśnij klawisz w polu poniżej)";

    function odswiezPanelZdarzen(e) {
        var panel = document.getElementById("panel-event");
        var klientX = (typeof e.clientX === "number") ? e.clientX : "-";
        var klientY = (typeof e.clientY === "number") ? e.clientY : "-";
        var ekranX = (typeof e.screenX === "number") ? e.screenX : "-";
        var ekranY = (typeof e.screenY === "number") ? e.screenY : "-";

        if (!panel) {
            return;
        }

        panel.innerHTML =
            "<strong>1. Zdarzenia mouseover / mouseout:</strong> " + stanNajechania + "<br>" +
            "<strong>2. Zdarzenie mousedown:</strong> " + ostatnieKlikniecie + "<br>" +
            "<strong>3. Zdarzenie mousemove (liczba ruchów):</strong> " + licznikRuchow + "<br>" +
            "<strong>Współrzędne okna (clientX, clientY):</strong> " + klientX + ", " + klientY + "<br>" +
            "<strong>Współrzędne ekranu (screenX, screenY):</strong> " + ekranX + ", " + ekranY + "<br>" +
            "<strong>Klawisze modyfikujące:</strong> altKey = " + Boolean(e.altKey) +
            " | ctrlKey = " + Boolean(e.ctrlKey) +
            " | shiftKey = " + Boolean(e.shiftKey) + "<br>" +
            "<strong>Kod klawisza (keyCode):</strong> " + ostatniKeyCode;
    }

    function obsluzMouseMove(event) {
        var e = event || window.event;
        licznikRuchow += 1;
        odswiezPanelZdarzen(e);
    }

    function obsluzMouseDown(event) {
        var e = event || window.event;
        var obszar = document.getElementById("obszar-zdarzen");

        if (obszar) {
            obszar.style.backgroundColor = "#bbdefb";
        }
        ostatnieKlikniecie = "Kliknięto w ramkę w punkcie (" + e.clientX + ", " + e.clientY + ")";
        odswiezPanelZdarzen(e);
    }

    function obsluzMouseOver(event) {
        var e = event || window.event;
        var obszar = document.getElementById("obszar-zdarzen");

        if (obszar) {
            obszar.style.borderColor = "#1565c0";
            obszar.style.backgroundColor = "#e3f2fd";
        }
        stanNajechania = "Kursor wjechał do ramki (wywołano mouseover)";
        odswiezPanelZdarzen(e);
    }

    function obsluzMouseOut(event) {
        var e = event || window.event;
        var obszar = document.getElementById("obszar-zdarzen");

        if (obszar) {
            obszar.style.borderColor = "#666666";
            obszar.style.backgroundColor = "#f5f5f5";
        }
        stanNajechania = "Kursor opuścił ramkę (wywołano mouseout)";
        odswiezPanelZdarzen(e);
    }

    function obsluzKeyDown(event) {
        var e = event || window.event;
        ostatniKeyCode = e.keyCode || e.which;
        odswiezPanelZdarzen(e);
    }

    function inicjalizujZdarzenia() {
        var obszar = document.getElementById("obszar-zdarzen");
        var poleKlawiatury = document.getElementById("pole-klawiatury");

        if (obszar) {
            obszar.addEventListener("mousemove", obsluzMouseMove, false);
            obszar.addEventListener("mousedown", obsluzMouseDown, false);
            obszar.addEventListener("mouseover", obsluzMouseOver, false);
            obszar.addEventListener("mouseout", obsluzMouseOut, false);
        }

        if (poleKlawiatury) {
            poleKlawiatury.addEventListener("keydown", obsluzKeyDown, false);
        }
    }

    window.addEventListener("DOMContentLoaded", inicjalizujZdarzenia, false);
}());