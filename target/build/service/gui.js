define(["base/observable","base/sys"],function(a,b){var c=a.extend({init:function(a){var c=this,d,e=b.isDefined;if(b.isString(a))d=document.createElement(a);else if(a!==null&&b.isObj(a))/HTML[a-zA-z]*Element/i.test(a.toString())?d=a:(d=document.createElement(a.tag),e(a.id)&&(d.id=a.id),e(a.cls)&&(d.className=a.cls),e(a.innerHTML)&&(d.innerHTML=a.innerHTML),e(a.innerText)&&(d.innerText=a.innerText),e(a.src)&&(d.src=a.src),e(a.style)&&(d.style.cssText=a.style),e(a.clickable)&&(c.onClickEvent=a.clickable.onClickEvent,d.addEventListener("click",function(a){c.onClickEvent()},!1)));else throw"Invalid instantiation of Sys.Element, invalid input, needs element string or object";b.isEmpty(a.renderTo)||(a.renderTo==="body"?document.getElementsByTagName("body")[0].appendChild(d):document.getElementById(a.renderTo).appendChild(d)),c.el=d,this._super()}});return c})