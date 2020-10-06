!function(n){var t={};function a(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return n[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=n,a.c=t,a.d=function(n,t,e){a.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,t){if(1&t&&(n=a(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)a.d(e,r,function(t){return n[t]}.bind(null,r));return e},a.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(t,"a",t),t},a.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},a.p="",a(a.s=0)}([function(n,t,a){"use strict";a.r(t);var e=()=>'\n    <div class="Header-main">\n      <div class="Header-logo">\n        <a href="/Rick-morty-spa/">\n          <img src="https://partner.redbubble.com/partnership-portal/client/eab637076b22c782edf0015a0ec3c686.png" alt="Logo">\n        </a>\n      </div>\n      <div class="Header-nav">\n        <a href="#/about">About</a>\n      </div>\n    </div>\n  ';const r="https://rickandmortyapi.com/api/character/";var i=async n=>{const t=n?`${r}${n}`:r;try{const n=await fetch(t);return await n.json()}catch(n){console.log("Fetch Error",n)}};var o=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/";var s=()=>'\n    <div class="Error404">\n      <h2>Error 404</h2>\n    </div>\n  ';var c=n=>{if(n.length<=3){return"/"===n?n:"/:id"}return"/"+n};const l={"/":async()=>`\n    <div class="Characters">\n      ${(await i()).results.map(n=>`\n        <article class="Characters-item">\n          <a href="#/${n.id}/">\n            <img src="${n.image}" alt="${n.name}">\n            <h2>${n.name}</h2>\n          </a>\n        </article>\n      `).join("")}\n    </div>\n  `,"/:id":async()=>{const n=o(),t=await i(n);return`\n    <div class="Characters-inner">\n      <article class="Characters-card">\n        <img src="${t.image}" alt="${t.name}">\n        <h2>${t.name}</h2>\n      </article>\n      <article class="Characters-card">\n        <h3>Episodes: <span>${t.episode.length}</span></h3>\n        <h3>Status: <span>${t.status}</span></h3>\n        <h3>Species: <span>${t.species}</span></h3>\n        <h3>Gender: <span>${t.gender}</span></h3>\n        <h3>Origin: <span>${t.origin.name}</span></h3>\n        <h3>Last Location: <span>${t.location.name}</span></h3>\n      </article>\n    </div>\n  `},"/about":()=>'\n    <div class="about">\n      <h2>About this project</h2>\n      <p>Practice creating a <strong>Single Page Application</strong> using <strong>JavaScript</strong> and <strong>Rick and Morty API</strong>.</p>\n      <div class="about__images">\n        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="JavaScript" height="200" width="200">\n        <img src="https://image.flaticon.com/icons/png/512/20/20183.png" alt="Plus" height="30">\n        <img src="https://repository-images.githubusercontent.com/120371205/b6740400-92d4-11ea-8a13-d5f6e0558e9b" alt="Rick and Morty API" height="200" width="200">\n      </div>\n    </div>\n  '};var d=async()=>{const n=document.getElementById("header"),t=document.getElementById("content");n.innerHTML=await e();let a=o(),r=await c(a),i=l[r]?l[r]:s;t.innerHTML=await i()};window.addEventListener("load",d),window.addEventListener("hashchange",d)}]);