// ==UserScript==
// @name         Jira banner hide
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Hides the maintenance banner
// @author       Jiří Černík
// @match        https://jira.unicorn.eu/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var banner = document.getElementById("announcement-banner");
    banner.style.display = 'none';
    
})();
