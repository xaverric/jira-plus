// ==UserScript==
// @name         Jira - drag disable on issue list
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Disables drag option for issue rows on issue filter screen
// @author       Daniel Jílek
// @match        https://jira.unicorn.eu/issues/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(function ()
    {
        //clean element from event listeners
        let oldElement = document.getElementsByClassName("ui-sortable")[0];
        let newElement = oldElement.cloneNode(true);
        oldElement.parentNode.replaceChild(newElement, oldElement);

        //change cursor style
        let rows = document.getElementsByClassName("issue-table-draggable");
        for (let i = 0; i < rows.length; i++) {
            rows[i].style.cursor = "default";
        }
    }, 800);
})();