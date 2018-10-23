// ==UserScript==
// @name         Jira - Larger Edit Dialog
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Creates larger edit dialog in JIRA
// @author       You
// @match        https://jira.unicorn.eu/browse/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (!mutation.addedNodes) return
               for (var i = 0; i < mutation.addedNodes.length; i++) {
                   var editComment = document.getElementById("edit-comment");
                   editComment.style.width = '80%';
                   editComment.style.marginLeft = '0';
                   editComment.style.marginRight = '0';
                   editComment.style.left = '10%';
                   editComment.style.top = '10%';
                   editComment.style.marginTop = '0';
                   editComment.style.position = 'fixed';
                   editComment.style.zIndex = '3000';
                   editComment.style.background = '#fff';
                   editComment.style.border = '1px solid #ADADAD';
                   editComment.style.borderRadius = '10px 10px 10px 10px';
                   editComment.style.overflow = 'hidden';
                   editComment.style.boxShadow = '0 16px 30px -14px rgba(9,30,66,0.25), 0 0 1px rgba(9,30,66,0.31)';
            }
        })
    });

    observer.observe(document.body, {
        childList: true
        , subtree: true
        , attributes: true
        , characterData: true
    });
})();