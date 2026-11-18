(function () {
    "use strict";

    function opiszElement(el) {
        var szczegoly = "";

        if (!el) {
            return "brak elementu (null)";
        }

        if (el.alt) {
            szczegoly += ", alt: \"" + el.alt + "\"";
        } else if (el.href) {
            szczegoly += ", href: \"" + el.getAttribute("href") + "\"";
        }

        return "&lt;" + el.tagName.toLowerCase() + "&gt; (id: \"" +
            (el.id || "brak") + "\", name: \"" + (el.name || "brak") + "\"" +
            szczegoly + ")";
    }

    function pokazKolekcjeDOM() {
        var kontener = document.getElementById("wynik-kolekcji");
        var kolekcjaImages = document.images;
        var kolekcjaLinks = document.links;
        var kolekcjaForms = document.forms;
        var kolekcjaAnchors = document.anchors;
        var raport = "";

        if (!kontener) {
            return;
        }

        raport += "<strong>1. Kolekcja document.images</strong> (liczba: " + kolekcjaImages.length + ")<br>";
        raport += "• item(0): " + opiszElement(kolekcjaImages.item(0)) + "<br>";
        raport += "• namedItem('img_ostrow'): " + opiszElement(kolekcjaImages.namedItem("img_ostrow")) + "<br><br>";

        raport += "<strong>2. Kolekcja document.links</strong> (liczba: " + kolekcjaLinks.length + ")<br>";
        raport += "• item(0): " + opiszElement(kolekcjaLinks.item(0)) + "<br>";
        raport += "• namedItem('link_bilety'): " + opiszElement(kolekcjaLinks.namedItem("link_bilety")) + "<br><br>";

        raport += "<strong>3. Kolekcja document.forms</strong> (liczba: " + kolekcjaForms.length + ")<br>";
        raport += "• item(0): " + opiszElement(kolekcjaForms.item(0)) + "<br>";
        raport += "• namedItem('form_przewodnik'): " + opiszElement(kolekcjaForms.namedItem("form_przewodnik")) + "<br><br>";

        raport += "<strong>4. Kolekcja document.anchors</strong> (liczba: " + kolekcjaAnchors.length + ")<br>";
        raport += "• item(0): " + opiszElement(kolekcjaAnchors.item(0)) + "<br>";
        raport += "• namedItem('kotwica_zoo'): " + opiszElement(kolekcjaAnchors.namedItem("kotwica_zoo"));

        kontener.innerHTML = raport;
    }

    function inicjalizujKolekcje() {
        var btn = document.getElementById("btn-kolekcje");
        if (btn) {
            btn.addEventListener("click", pokazKolekcjeDOM, false);
        }
        pokazKolekcjeDOM();
    }

    window.addEventListener("DOMContentLoaded", inicjalizujKolekcje, false);
}());