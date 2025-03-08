// ==UserScript==
// @name Enhance FCCU
// @version 1.3
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

// Hide the Chat bubble
GM_addStyle('#ncr-cb-chat-win-trigger { display:none !important; }'); // 7/14/24
GM_addStyle('#ncr-cb-chat-win-notif-section-popping { display:none !important; }'); // 7/14/24
GM_addStyle('#ncr-cb-chat-win-notif-section { display:none !important; }'); // 3/7/25
