// ==UserScript==
// @name         CSDN 1-Click Downloader
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  1-Click Download CSDN pages to PDF
// @author       Spica Y
// @connect      www.csdn.net
// @match        https://blog.csdn.net/*/article/details/*
// @icon         none
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Add a button to the page
    const button = document.createElement('button');
    button.textContent = 'Download Blog';
    button.style.position = 'fixed';
    button.style.top = '50px';
    button.style.right = '5px';
    button.style.zIndex = 1000;
    button.style.padding = '5px 10px';
    button.style.background = 'white';
    button.style.border = '1px solid #ccc';
    button.style.cursor = 'pointer';
    document.body.appendChild(button);

    // Add click event to the button
    button.onclick = function() {
        $("#side").remove();
        $("#comment_title, #comment_list, #comment_bar, #comment_form, .announce, #ad_cen, #ad_bot").remove();
        $(".nav_top_2011, #header, #navigator").remove();
        $(".p4course_target, .comment-box, .recommend-box, #csdn-toolbar, #tool-box").remove();
        $("aside").remove();
        $(".tool-box").remove();
        $("#toolBarBox").remove();
        $("main").css('display', 'block'); // Adjusting to 'block' instead of 'content' for proper display
        $("main").css('float', 'none');   // Adjusting to 'none' to center the content after other elements are removed
        $(".option-box").remove();
        $("body").css('min-width', '0');
        window.print();
    };
})();
