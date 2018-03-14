// ==UserScript==
// @name Enhance FCCU
// @version 1.1
// @author Mark Williams
// @description "Fix FCCU Changes"
// @match        https://www.firstcommunityexpressnet.com/*
// @run-at document-start
// @grant GM_addStyle

// ==/UserScript==
// Git: https://raw.githubusercontent.com/themarkwilliams/EnhanceFCCU/master/userscript.js

//Make the amounts green
GM_addStyle('.amount-column { color:red !important;}'); // 3/10/18

//Add bold to the green deposits
GM_addStyle('.amount-credit-column { font-weight:bold !important; }');// 3/10/18
