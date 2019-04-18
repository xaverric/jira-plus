// ==UserScript==
// @name         Jira
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Makes your JIRA world even better!
// @author       Daniel Jílek, Jiří Černík
// @match        https://jira.unicorn.eu/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    /* ----------------- Help and Feedback hider ----------------- */
    var feedback = document.getElementById("jira-header-feedback-link");
    feedback.style.display = 'none';

    var help = document.getElementById("system-help-menu");
    help.style.display = 'none';

    /* ----------------- Larger edit dialog ----------------- */
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (!mutation.addedNodes) return
            var editComment = document.getElementById("edit-comment");
            editComment.style.width = '80%';
            editComment.style.left = '10%';
            editComment.style.top = '10%';
            editComment.style.margin = '0';
            editComment.style.position = 'fixed';
            editComment.style.zIndex = '3000';
            editComment.style.border = '1px solid #FAFAFA';
            editComment.style.borderRadius = '4px 4px 4px 4px';
            editComment.style.overflow = 'hidden';
            editComment.style.boxShadow = '0 16px 30px -14px rgba(9,30,66,0.25), 0 0 1px rgba(9,30,66,0.31)';
        })
    });

    observer.observe(document.body, {
        childList: true
        , subtree: true
        , attributes: true
        , characterData: true
    });

    /* ----------------- Larger Search input ----------------- */
    var searchInput = document.getElementById("quickSearchInput");
    searchInput.style.width = '800px';

    var observer2 = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (!mutation.addedNodes) return
            var dropdownMenu = document.getElementsByClassName("quicksearch-dropdown");
            dropdownMenu[0].style.width = '800px';;
        })
    });

    var quicksearchMenu = document.getElementById("quicksearch");
    observer2.observe(quicksearchMenu, {
        childList: true
        , subtree: true
        , attributes: true
        , characterData: true
    });

    /* ----------------- Maintenance banner hider ----------------- */
    var banner = document.getElementById("announcement-banner");
    banner.style.display = 'none';


    /* ----------------- Sidebar hider ----------------- */
    var rightSide = document.getElementById("viewissuesidebar");
    if(rightSide) rightSide.style.width = "20%";

    setTimeout(function ()
    {var sidebar = document.getElementsByClassName("aui-sidebar");
        sidebar[0].remove();
    }, 800);

    /* ----------------- Drag disable on issue filter ----------------- */
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