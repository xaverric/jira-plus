// ==UserScript==
// @name         Jira - Larger Search Input
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Creates larger search input
// @author       Daniel Jílek
// @match        https://jira.unicorn.eu/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var searchInput = document.getElementById("quickSearchInput");
    searchInput.style.width = '800px';

    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (!mutation.addedNodes) return
            var dropdownMenu = document.getElementsByClassName("quicksearch-dropdown");
            dropdownMenu[0].style.width = '800px';;
        })
    });

    var quicksearchMenu = document.getElementById("quicksearch");
    observer.observe(quicksearchMenu, {
        childList: true
        , subtree: true
        , attributes: true
        , characterData: true
    });
})();
