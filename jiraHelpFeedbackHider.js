// ==UserScript==
// @name         Jira - Feedback and help menu hider
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Hides the Feedback and help menu button
// @author       Daniel Jílek
// @match        https://jira.unicorn.eu/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var feedback = document.getElementById("jira-header-feedback-link");
    feedback.style.display = 'none';

    var help = document.getElementById("system-help-menu");
    help.style.display = 'none';
})();