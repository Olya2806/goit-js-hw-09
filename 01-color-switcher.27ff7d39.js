const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body");e.addEventListener("click",(function(){clearInterval(changeColorTimer),t.removeAttribute("disabled",!0),e.setAttribute("disabled",!1)})),e.setAttribute("disabled",!1),t.addEventListener("click",(()=>{changeColorTimer=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),e.removeAttribute("disabled",!1),t.setAttribute("disabled",!0)}));
//# sourceMappingURL=01-color-switcher.27ff7d39.js.map
