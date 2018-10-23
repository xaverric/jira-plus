// ==UserScript==
// @name         Jira UI ++
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Makes JIRA UI wider
// @author       Jiří Černík
// @match        https://jira.unicorn.eu/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var rightSide = document.getElementById("viewissuesidebar");
    if(rightSide) rightSide.style.width = "20%";

    setTimeout(function ()
               {var sidebar = document.getElementsByClassName("aui-sidebar");
                sidebar[0].remove();
               }, 800);
})();
