var IdealImageSlider=function(){"use strict";var t=function(t,i){return t["r"+i]||t["webkitR"+i]||t["mozR"+i]||t["msR"+i]||function(t){setTimeout(t,1e3/60)}}(window,"equestAnimationFrame"),i=function(i,e){function s(){var a=(new Date).getTime(),u=a-n;u>=e?i.call():r.value=t(s)}var n=(new Date).getTime(),r={};return r.value=t(s),r},e=function(t,i){var e=Object.prototype.toString.call(i).slice(8,-1);return void 0!==i&&null!==i&&e===t},s=function(t){return Math.round(t)===t},n=function(t){t=t||{};for(var i=1;i<arguments.length;i++){var s=arguments[i];if(s)for(var r in s)s.hasOwnProperty(r)&&(e("Object",s[r])&&null!==s[r]?n(t[r],s[r]):t[r]=s[r])}return t},r=function(t,i){return i?t.classList?t.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(t.className):!1},a=function(t,i){i&&(t.classList?t.classList.add(i):t.className+=" "+i)},u=function(t,i){i&&(t.classList?t.classList.remove(i):t.className=t.className.replace(new RegExp("(^|\\b)"+i.split(" ").join("|")+"(\\b|$)","gi")," "))},h=function(t){return Array.prototype.slice.call(t)},o=function(t,i,e){null!==t&&"undefined"!=typeof t&&(t.addEventListener?t.addEventListener(i,e,!1):t.attachEvent?t.attachEvent("on"+i,e):t["on"+i]=e)},l=function(t,i){if(!t.style.backgroundImage){var e=new Image;e.setAttribute("src",t.getAttribute("data-src")),e.onload=function(){t.style.backgroundImage="url("+t.getAttribute("data-src")+")",t.setAttribute("data-actual-width",this.naturalWidth),t.setAttribute("data-actual-height",this.naturalHeight),"function"==typeof i&&i(this)}}},d=function(){var t="(-webkit-min-device-pixel-ratio: 1.5),(min--moz-device-pixel-ratio: 1.5),(-o-min-device-pixel-ratio: 3/2),(min-resolution: 1.5dppx)";return window.devicePixelRatio>1?!0:window.matchMedia&&window.matchMedia(t).matches?!0:!1},c=function(t,i,e){t.style.webkitTransitionDuration=t.style.MozTransitionDuration=t.style.msTransitionDuration=t.style.OTransitionDuration=t.style.transitionDuration=e+"ms",t.style.webkitTransform=t.style.MozTransform=t.style.msTransform=t.style.OTransform="translateX("+i+"px)"},b=function(t){t.style.removeProperty("-webkit-transition-duration"),t.style.removeProperty("transition-duration"),t.style.removeProperty("-webkit-transform"),t.style.removeProperty("-ms-transform"),t.style.removeProperty("transform")},g=function(i){var e=i.time,s=+new Date+e,n=function(){var r=+new Date,a=s-r;if(60>a)return void i.run(1);var u=1-a/e;i.run(u),t(n)};n()},p=function(t,i){if("undefined"==typeof i&&(i=!0),!s(t.settings.height)){var e=Math.round(t._attributes.container.offsetHeight),n=e;if(t._attributes.aspectWidth&&t._attributes.aspectHeight)n=t._attributes.aspectHeight/t._attributes.aspectWidth*t._attributes.container.offsetWidth;else{var r=t._attributes.currentSlide.getAttribute("data-actual-width"),a=t._attributes.currentSlide.getAttribute("data-actual-height");r&&a&&(n=a/r*t._attributes.container.offsetWidth)}var u=parseInt(t.settings.maxHeight,10);u&&n>u&&(n=u),n=Math.round(n),n!==e&&(i?g({time:t.settings.transitionDuration,run:function(i){t._attributes.container.style.height=Math.round(i*(n-e)+e)+"px"}}):t._attributes.container.style.height=n+"px")}},f={vars:{start:{},delta:{},isScrolling:void 0,direction:null},start:function(t){if(!r(this._attributes.container,this.settings.classes.animating)){var i=t.touches[0];f.vars.start={x:i.pageX,y:i.pageY,time:+new Date},f.vars.delta={},f.vars.isScrolling=void 0,f.vars.direction=null,this.stop(),this.settings.beforeChange.apply(this),a(this._attributes.container,this.settings.classes.touching)}},move:function(t){if(!r(this._attributes.container,this.settings.classes.animating)&&!(t.touches.length>1||t.scale&&1!==t.scale)){var i=t.touches[0];f.vars.delta={x:i.pageX-f.vars.start.x,y:i.pageY-f.vars.start.y},"undefined"==typeof f.vars.isScrolling&&(f.vars.isScrolling=!!(f.vars.isScrolling||Math.abs(f.vars.delta.x)<Math.abs(f.vars.delta.y))),f.vars.isScrolling||(t.preventDefault(),c(this._attributes.previousSlide,f.vars.delta.x-this._attributes.previousSlide.offsetWidth,0),c(this._attributes.currentSlide,f.vars.delta.x,0),c(this._attributes.nextSlide,f.vars.delta.x+this._attributes.currentSlide.offsetWidth,0))}},end:function(t){if(!r(this._attributes.container,this.settings.classes.animating)){var e=+new Date-f.vars.start.time,s=Number(e)<250&&Math.abs(f.vars.delta.x)>20||Math.abs(f.vars.delta.x)>this._attributes.currentSlide.offsetWidth/2,n=f.vars.delta.x<0?"next":"previous",h=this.settings.transitionDuration?this.settings.transitionDuration/2:0;f.vars.isScrolling||(s?(f.vars.direction=n,"next"==f.vars.direction?(c(this._attributes.currentSlide,-this._attributes.currentSlide.offsetWidth,h),c(this._attributes.nextSlide,0,h)):(c(this._attributes.previousSlide,0,h),c(this._attributes.currentSlide,this._attributes.currentSlide.offsetWidth,h)),i(f.transitionEnd.bind(this),h)):"next"==n?(c(this._attributes.currentSlide,0,h),c(this._attributes.nextSlide,this._attributes.currentSlide.offsetWidth,h)):(c(this._attributes.previousSlide,-this._attributes.previousSlide.offsetWidth,h),c(this._attributes.currentSlide,0,h)),h&&(a(this._attributes.container,this.settings.classes.animating),i(function(){u(this._attributes.container,this.settings.classes.animating)}.bind(this),h)))}},transitionEnd:function(t){if(f.vars.direction){b(this._attributes.previousSlide),b(this._attributes.currentSlide),b(this._attributes.nextSlide),u(this._attributes.container,this.settings.classes.touching),u(this._attributes.previousSlide,this.settings.classes.previousSlide),u(this._attributes.currentSlide,this.settings.classes.currentSlide),u(this._attributes.nextSlide,this.settings.classes.nextSlide),this._attributes.currentSlide.setAttribute("aria-hidden","true");var i=this._attributes.slides,e=i.indexOf(this._attributes.currentSlide);"next"==f.vars.direction?(this._attributes.previousSlide=this._attributes.currentSlide,this._attributes.currentSlide=i[e+1],this._attributes.nextSlide=i[e+2],"undefined"==typeof this._attributes.currentSlide&&"undefined"==typeof this._attributes.nextSlide?(this._attributes.currentSlide=i[0],this._attributes.nextSlide=i[1]):"undefined"==typeof this._attributes.nextSlide&&(this._attributes.nextSlide=i[0]),l(this._attributes.nextSlide)):(this._attributes.nextSlide=this._attributes.currentSlide,this._attributes.previousSlide=i[e-2],this._attributes.currentSlide=i[e-1],"undefined"==typeof this._attributes.currentSlide&&"undefined"==typeof this._attributes.previousSlide?(this._attributes.currentSlide=i[i.length-1],this._attributes.previousSlide=i[i.length-2]):"undefined"==typeof this._attributes.previousSlide&&(this._attributes.previousSlide=i[i.length-1]),l(this._attributes.previousSlide)),a(this._attributes.previousSlide,this.settings.classes.previousSlide),a(this._attributes.currentSlide,this.settings.classes.currentSlide),a(this._attributes.nextSlide,this.settings.classes.nextSlide),this._attributes.currentSlide.setAttribute("aria-hidden","false"),p(this),this.settings.afterChange.apply(this)}}},S=function(t){this.settings={selector:"",height:"auto",initialHeight:400,maxHeight:null,interval:4e3,transitionDuration:700,effect:"slide",disableNav:!1,keyboardNav:!0,previousNavSelector:"",nextNavSelector:"",classes:{container:"ideal-image-slider",slide:"iis-slide",previousSlide:"iis-previous-slide",currentSlide:"iis-current-slide",nextSlide:"iis-next-slide",previousNav:"iis-previous-nav",nextNav:"iis-next-nav",animating:"iis-is-animating",touchEnabled:"iis-touch-enabled",touching:"iis-is-touching",directionPrevious:"iis-direction-previous",directionNext:"iis-direction-next"},onInit:function(){},onStart:function(){},onStop:function(){},onDestroy:function(){},beforeChange:function(){},afterChange:function(){}},"string"==typeof t?this.settings.selector=t:"object"==typeof t&&n(this.settings,t);var i=document.querySelector(this.settings.selector);if(!i)return null;var e=h(i.children),u=[];i.innerHTML="",Array.prototype.forEach.call(e,function(t,e){if(t instanceof HTMLImageElement||t instanceof HTMLAnchorElement){var s=document.createElement("a"),r="",h="";if(t instanceof HTMLAnchorElement){r=t.getAttribute("href"),h=t.getAttribute("target");var o=t.querySelector("img");if(null===o)return;t=o}"undefined"!=typeof t.dataset?(n(s.dataset,t.dataset),t.dataset.src?s.dataset.src=t.dataset.src:s.dataset.src=t.src,d()&&t.dataset["src-2x"]&&(s.dataset.src=t.dataset["src-2x"])):t.getAttribute("data-src")?s.setAttribute("data-src",t.getAttribute("data-src")):s.setAttribute("data-src",t.getAttribute("src")),r&&s.setAttribute("href",r),h&&s.setAttribute("target",h),t.getAttribute("className")&&a(s,t.getAttribute("className")),t.getAttribute("id")&&s.setAttribute("id",t.getAttribute("id")),t.getAttribute("title")&&s.setAttribute("title",t.getAttribute("title")),t.getAttribute("alt")&&(s.innerHTML=t.getAttribute("alt")),s.setAttribute("role","tabpanel"),s.setAttribute("aria-hidden","true"),s.style.cssText+="-webkit-transition-duration:"+this.settings.transitionDuration+"ms;-moz-transition-duration:"+this.settings.transitionDuration+"ms;-o-transition-duration:"+this.settings.transitionDuration+"ms;transition-duration:"+this.settings.transitionDuration+"ms;",i.appendChild(s),u.push(s)}}.bind(this));var c=u;if(c.length<=1)return i.innerHTML="",Array.prototype.forEach.call(e,function(t,e){i.appendChild(t)}),null;if(!this.settings.disableNav){var b,g;this.settings.previousNavSelector?b=document.querySelector(this.settings.previousNavSelector):(b=document.createElement("a"),i.appendChild(b)),this.settings.nextNavSelector?g=document.querySelector(this.settings.nextNavSelector):(g=document.createElement("a"),i.appendChild(g)),a(b,this.settings.classes.previousNav),a(g,this.settings.classes.nextNav),o(b,"click",function(){return r(this._attributes.container,this.settings.classes.animating)?!1:(this.stop(),void this.previousSlide())}.bind(this)),o(g,"click",function(){return r(this._attributes.container,this.settings.classes.animating)?!1:(this.stop(),void this.nextSlide())}.bind(this)),("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)&&(this.settings.effect="slide",b.style.display="none",g.style.display="none",a(i,this.settings.classes.touchEnabled),o(i,"touchstart",f.start.bind(this),!1),o(i,"touchmove",f.move.bind(this),!1),o(i,"touchend",f.end.bind(this),!1)),this.settings.keyboardNav&&o(document,"keyup",function(t){t=t||window.event;var i="number"==typeof t.which?t.which:t.keyCode;if(37==i){if(r(this._attributes.container,this.settings.classes.animating))return!1;this.stop(),this.previousSlide()}else if(39==i){if(r(this._attributes.container,this.settings.classes.animating))return!1;this.stop(),this.nextSlide()}}.bind(this))}if(this._attributes={container:i,slides:c,previousSlide:"undefined"!=typeof c[c.length-1]?c[c.length-1]:c[0],currentSlide:c[0],nextSlide:"undefined"!=typeof c[1]?c[1]:c[0],timerId:0,origChildren:e,aspectWidth:0,aspectHeight:0},s(this.settings.height))this._attributes.container.style.height=this.settings.height+"px";else{if(s(this.settings.initialHeight)&&(this._attributes.container.style.height=this.settings.initialHeight+"px"),this.settings.height.indexOf(":")>-1){var S=this.settings.height.split(":");2==S.length&&s(parseInt(S[0],10))&&s(parseInt(S[1],10))&&(this._attributes.aspectWidth=parseInt(S[0],10),this._attributes.aspectHeight=parseInt(S[1],10))}o(window,"resize",function(){p(this,!1)}.bind(this))}a(i,this.settings.classes.container),a(i,"iis-effect-"+this.settings.effect),Array.prototype.forEach.call(this._attributes.slides,function(t,i){a(t,this.settings.classes.slide)}.bind(this)),a(this._attributes.previousSlide,this.settings.classes.previousSlide),a(this._attributes.currentSlide,this.settings.classes.currentSlide),a(this._attributes.nextSlide,this.settings.classes.nextSlide),this._attributes.currentSlide.setAttribute("aria-hidden","false"),l(this._attributes.currentSlide,function(){this.settings.onInit.apply(this),p(this,!1)}.bind(this)),l(this._attributes.previousSlide),l(this._attributes.nextSlide)};return S.prototype.get=function(t){return this._attributes?this._attributes.hasOwnProperty(t)?this._attributes[t]:void 0:null},S.prototype.set=function(t,i){return this._attributes?this._attributes[t]=i:null},S.prototype.start=function(){this._attributes&&(this._attributes.timerId=setInterval(this.nextSlide.bind(this),this.settings.interval),this.settings.onStart.apply(this),window.onblur=function(){this.stop()}.bind(this))},S.prototype.stop=function(){this._attributes&&(clearInterval(this._attributes.timerId),this._attributes.timerId=0,this.settings.onStop.apply(this))},S.prototype.previousSlide=function(){this.settings.beforeChange.apply(this),u(this._attributes.previousSlide,this.settings.classes.previousSlide),u(this._attributes.currentSlide,this.settings.classes.currentSlide),u(this._attributes.nextSlide,this.settings.classes.nextSlide),this._attributes.currentSlide.setAttribute("aria-hidden","true");var t=this._attributes.slides,e=t.indexOf(this._attributes.currentSlide);this._attributes.nextSlide=this._attributes.currentSlide,this._attributes.previousSlide=t[e-2],this._attributes.currentSlide=t[e-1],"undefined"==typeof this._attributes.currentSlide&&"undefined"==typeof this._attributes.previousSlide?(this._attributes.currentSlide=t[t.length-1],this._attributes.previousSlide=t[t.length-2]):"undefined"==typeof this._attributes.previousSlide&&(this._attributes.previousSlide=t[t.length-1]),l(this._attributes.previousSlide),a(this._attributes.previousSlide,this.settings.classes.previousSlide),a(this._attributes.currentSlide,this.settings.classes.currentSlide),a(this._attributes.nextSlide,this.settings.classes.nextSlide),this._attributes.currentSlide.setAttribute("aria-hidden","false"),a(this._attributes.container,this.settings.classes.directionPrevious),i(function(){u(this._attributes.container,this.settings.classes.directionPrevious)}.bind(this),this.settings.transitionDuration),this.settings.transitionDuration&&(a(this._attributes.container,this.settings.classes.animating),i(function(){u(this._attributes.container,this.settings.classes.animating)}.bind(this),this.settings.transitionDuration)),p(this),this.settings.afterChange.apply(this)},S.prototype.nextSlide=function(){this.settings.beforeChange.apply(this),u(this._attributes.previousSlide,this.settings.classes.previousSlide),u(this._attributes.currentSlide,this.settings.classes.currentSlide),u(this._attributes.nextSlide,this.settings.classes.nextSlide),this._attributes.currentSlide.setAttribute("aria-hidden","true");var t=this._attributes.slides,e=t.indexOf(this._attributes.currentSlide);this._attributes.previousSlide=this._attributes.currentSlide,this._attributes.currentSlide=t[e+1],this._attributes.nextSlide=t[e+2],"undefined"==typeof this._attributes.currentSlide&&"undefined"==typeof this._attributes.nextSlide?(this._attributes.currentSlide=t[0],this._attributes.nextSlide=t[1]):"undefined"==typeof this._attributes.nextSlide&&(this._attributes.nextSlide=t[0]),l(this._attributes.nextSlide),a(this._attributes.previousSlide,this.settings.classes.previousSlide),a(this._attributes.currentSlide,this.settings.classes.currentSlide),a(this._attributes.nextSlide,this.settings.classes.nextSlide),this._attributes.currentSlide.setAttribute("aria-hidden","false"),a(this._attributes.container,this.settings.classes.directionNext),i(function(){u(this._attributes.container,this.settings.classes.directionNext)}.bind(this),this.settings.transitionDuration),this.settings.transitionDuration&&(a(this._attributes.container,this.settings.classes.animating),i(function(){u(this._attributes.container,this.settings.classes.animating)}.bind(this),this.settings.transitionDuration)),p(this),this.settings.afterChange.apply(this)},S.prototype.gotoSlide=function(t){this.settings.beforeChange.apply(this),this.stop(),u(this._attributes.previousSlide,this.settings.classes.previousSlide),u(this._attributes.currentSlide,this.settings.classes.currentSlide),u(this._attributes.nextSlide,this.settings.classes.nextSlide),this._attributes.currentSlide.setAttribute("aria-hidden","true"),t--;var e=this._attributes.slides,s=e.indexOf(this._attributes.currentSlide);this._attributes.previousSlide=e[t-1],this._attributes.currentSlide=e[t],this._attributes.nextSlide=e[t+1],"undefined"==typeof this._attributes.previousSlide&&(this._attributes.previousSlide=e[e.length-1]),"undefined"==typeof this._attributes.nextSlide&&(this._attributes.nextSlide=e[0]),l(this._attributes.previousSlide),l(this._attributes.currentSlide),l(this._attributes.nextSlide),a(this._attributes.previousSlide,this.settings.classes.previousSlide),a(this._attributes.currentSlide,this.settings.classes.currentSlide),a(this._attributes.nextSlide,this.settings.classes.nextSlide),this._attributes.currentSlide.setAttribute("aria-hidden","false"),s>t?(a(this._attributes.container,this.settings.classes.directionPrevious),i(function(){u(this._attributes.container,this.settings.classes.directionPrevious)}.bind(this),this.settings.transitionDuration)):(a(this._attributes.container,this.settings.classes.directionNext),i(function(){u(this._attributes.container,this.settings.classes.directionNext)}.bind(this),this.settings.transitionDuration)),this.settings.transitionDuration&&(a(this._attributes.container,this.settings.classes.animating),i(function(){u(this._attributes.container,this.settings.classes.animating)}.bind(this),this.settings.transitionDuration)),p(this),this.settings.afterChange.apply(this)},S.prototype.destroy=function(){clearInterval(this._attributes.timerId),this._attributes.timerId=0,this._attributes.container.innerHTML="",Array.prototype.forEach.call(this._attributes.origChildren,function(t,i){this._attributes.container.appendChild(t)}.bind(this)),u(this._attributes.container,this.settings.classes.container),u(this._attributes.container,"iis-effect-"+this.settings.effect),this._attributes.container.style.height="",this.settings.onDestroy.apply(this)},{_hasClass:r,_addClass:a,_removeClass:u,Slider:S}}();