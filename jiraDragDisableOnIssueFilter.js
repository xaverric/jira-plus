// ==UserScript==
// @name         Jira - drag disable on issue list
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  Disables drag option for issue rows on issue filter screen
// @author       Daniel Jílek
// @match        https://jira.unicorn.eu/issues/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    let dragDisableTimeout = 500;

    let cursorChange = function () {
        //change cursor style
        let rows = document.getElementsByClassName("issue-table-draggable");
        for (let i = 0; i < rows.length; i++) {
            rows[i].style.cursor = "default";
        }
    };

    let dragDisable = function (timeout) {
        setTimeout(function () {
            // clean mousedown events from website
            function handler(e) {
                cursorChange();
                e.stopPropagation();
            }

            document.addEventListener("mousedown", handler, true);

            cursorChange();

        }, timeout);
    };

    dragDisable(dragDisableTimeout);
})();