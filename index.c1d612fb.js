!function(){function n(n){return function(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var t=[5,8,2,1,15,2,3,5,9,11,10,4,3,14,1,7,10,3,2,13];function e(){document.body;document.body.innerHTML='\n    <div id="app">\n      <span id="max-label">\n      </span>\n      <span id="zero-label">\n        0\n      </span>\n      <span id="points-label">\n      </span>\n    </div> \n  '}window.barChart=function(){var a,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t;e();var i=document.getElementById("app"),o=+getComputedStyle(i).width.split("px")[0],d=+getComputedStyle(i).height.split("px")[0],l=o/r.length,c=(a=Math).max.apply(a,n(r));document.getElementById("max-label").innerText=c,document.getElementById("points-label").innerText=r.length;var p=document.createDocumentFragment();r.forEach((function(n){var t=document.createElement("div");t.style.width="".concat(l,"px"),t.style.height="".concat(d/c*n,"px"),n<6?t.classList.add("green"):n>5&&n<11?t.classList.add("yellow"):t.classList.add("red"),p.appendChild(t)})),i.appendChild(p)}}();
//# sourceMappingURL=index.c1d612fb.js.map
