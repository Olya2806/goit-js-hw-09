!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body");e.addEventListener("click",(function(){clearInterval(a),t.removeAttribute("disabled"),e.setAttribute("disabled",!1)})),e.setAttribute("disabled",!1);var a=null;t.addEventListener("click",(function(){a=setInterval((function(){r.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),e.removeAttribute("disabled"),t.setAttribute("disabled",!1)}))}();
//# sourceMappingURL=01-color-switcher.5d1d05e9.js.map