!function(e){"function"==typeof define&&define.amd?define(["jquery"],window,e):"object"==typeof module&&module.exports?module.exports=e(require("jquery"),window):e(jQuery,window)}(function(s,n){"use strict";s.migrateVersion="3.0.1",n.console&&n.console.log&&(s&&!/^[12]\./.test(s.fn.jquery)||n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),s.migrateWarnings&&n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),n.console.log("JQMIGRATE: Migrate is installed"+(s.migrateMute?"":" with logging active")+", version "+s.migrateVersion));var r={};function u(e){var t=n.console;r[e]||(r[e]=!0,s.migrateWarnings.push(e),t&&t.warn&&!s.migrateMute&&(t.warn("JQMIGRATE: "+e),s.migrateTrace&&t.trace&&t.trace()))}function e(e,t,r,n){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return u(n),r},set:function(e){u(n),r=e}})}function t(e,t,r,n){e[t]=function(){return u(n),r.apply(this,arguments)}}s.migrateWarnings=[],void 0===s.migrateTrace&&(s.migrateTrace=!0),s.migrateReset=function(){r={},s.migrateWarnings.length=0},"BackCompat"===n.document.compatMode&&u("jQuery is not compatible with Quirks Mode");var o,a=s.fn.init,i=s.isNumeric,c=s.find,l=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,d=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;for(o in s.fn.init=function(e){var t=Array.prototype.slice.call(arguments);return"string"==typeof e&&"#"===e&&(u("jQuery( '#' ) is not a valid selector"),t[0]=[]),a.apply(this,t)},s.fn.init.prototype=s.fn,s.find=function(t){var r=Array.prototype.slice.call(arguments);if("string"==typeof t&&l.test(t))try{n.document.querySelector(t)}catch(e){t=t.replace(d,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{n.document.querySelector(t),u("Attribute selector with '#' must be quoted: "+r[0]),r[0]=t}catch(e){u("Attribute selector with '#' was not fixed: "+r[0])}}return c.apply(this,r)},c)Object.prototype.hasOwnProperty.call(c,o)&&(s.find[o]=c[o]);s.fn.size=function(){return u("jQuery.fn.size() is deprecated and removed; use the .length property"),this.length},s.parseJSON=function(){return u("jQuery.parseJSON is deprecated; use JSON.parse"),JSON.parse.apply(null,arguments)},s.isNumeric=function(e){var t,r,n=i(e),o=(r=(t=e)&&t.toString(),!s.isArray(t)&&0<=r-parseFloat(r)+1);return n!==o&&u("jQuery.isNumeric() should not be called on constructed objects"),o},t(s,"holdReady",s.holdReady,"jQuery.holdReady is deprecated"),t(s,"unique",s.uniqueSort,"jQuery.unique is deprecated; use jQuery.uniqueSort"),e(s.expr,"filters",s.expr.pseudos,"jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),e(s.expr,":",s.expr.pseudos,"jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos");var p=s.ajax;s.ajax=function(){var e=p.apply(this,arguments);return e.promise&&(t(e,"success",e.done,"jQXHR.success is deprecated and removed"),t(e,"error",e.fail,"jQXHR.error is deprecated and removed"),t(e,"complete",e.always,"jQXHR.complete is deprecated and removed")),e};var f=s.fn.removeAttr,y=s.fn.toggleClass,m=/\S+/g;s.fn.removeAttr=function(e){var r=this;return s.each(e.match(m),function(e,t){s.expr.match.bool.test(t)&&(u("jQuery.fn.removeAttr no longer sets boolean properties: "+t),r.prop(t,!1))}),f.apply(this,arguments)};var h=!(s.fn.toggleClass=function(t){return void 0!==t&&"boolean"!=typeof t?y.apply(this,arguments):(u("jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var e=this.getAttribute&&this.getAttribute("class")||"";e&&s.data(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===t?"":s.data(this,"__className__")||"")}))});s.swap&&s.each(["height","width","reliableMarginRight"],function(e,t){var r=s.cssHooks[t]&&s.cssHooks[t].get;r&&(s.cssHooks[t].get=function(){var e;return h=!0,e=r.apply(this,arguments),h=!1,e})}),s.swap=function(e,t,r,n){var o,a,i={};for(a in h||u("jQuery.swap() is undocumented and deprecated"),t)i[a]=e.style[a],e.style[a]=t[a];for(a in o=r.apply(e,n||[]),t)e.style[a]=i[a];return o};var g=s.data;s.data=function(e,t,r){var n;if(t&&"object"==typeof t&&2===arguments.length){n=s.hasData(e)&&g.call(this,e);var o={};for(var a in t)a!==s.camelCase(a)?(u("jQuery.data() always sets/gets camelCased names: "+a),n[a]=t[a]):o[a]=t[a];return g.call(this,e,o),t}return t&&"string"==typeof t&&t!==s.camelCase(t)&&(n=s.hasData(e)&&g.call(this,e))&&t in n?(u("jQuery.data() always sets/gets camelCased names: "+t),2<arguments.length&&(n[t]=r),n[t]):g.apply(this,arguments)};var v=s.Tween.prototype.run,j=function(e){return e};s.Tween.prototype.run=function(){1<s.easing[this.easing].length&&(u("'jQuery.easing."+this.easing.toString()+"' should use only one argument"),s.easing[this.easing]=j),v.apply(this,arguments)},s.fx.interval=s.fx.interval||13,n.requestAnimationFrame&&e(s.fx,"interval",s.fx.interval,"jQuery.fx.interval is deprecated");var Q=s.fn.load,b=s.event.add,w=s.event.fix;s.event.props=[],s.event.fixHooks={},e(s.event.props,"concat",s.event.props.concat,"jQuery.event.props.concat() is deprecated and removed"),s.event.fix=function(e){var t,r=e.type,n=this.fixHooks[r],o=s.event.props;if(o.length)for(u("jQuery.event.props are deprecated and removed: "+o.join());o.length;)s.event.addProp(o.pop());if(n&&!n._migrated_&&(n._migrated_=!0,u("jQuery.event.fixHooks are deprecated and removed: "+r),(o=n.props)&&o.length))for(;o.length;)s.event.addProp(o.pop());return t=w.call(this,e),n&&n.filter?n.filter(t,e):t},s.event.add=function(e,t){return e===n&&"load"===t&&"complete"===n.document.readyState&&u("jQuery(window).on('load'...) called after load event occurred"),b.apply(this,arguments)},s.each(["load","unload","error"],function(e,t){s.fn[t]=function(){var e=Array.prototype.slice.call(arguments,0);return"load"===t&&"string"==typeof e[0]?Q.apply(this,e):(u("jQuery.fn."+t+"() is deprecated"),e.splice(0,0,t),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))}}),s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,r){s.fn[r]=function(e,t){return u("jQuery.fn."+r+"() event shorthand is deprecated"),0<arguments.length?this.on(r,null,e,t):this.trigger(r)}}),s(function(){s(n.document).triggerHandler("ready")}),s.event.special.ready={setup:function(){this===n.document&&u("'ready' event is deprecated")}},s.fn.extend({bind:function(e,t,r){return u("jQuery.fn.bind() is deprecated"),this.on(e,null,t,r)},unbind:function(e,t){return u("jQuery.fn.unbind() is deprecated"),this.off(e,null,t)},delegate:function(e,t,r,n){return u("jQuery.fn.delegate() is deprecated"),this.on(t,e,r,n)},undelegate:function(e,t,r){return u("jQuery.fn.undelegate() is deprecated"),1===arguments.length?this.off(e,"**"):this.off(t,e||"**",r)},hover:function(e,t){return u("jQuery.fn.hover() is deprecated"),this.on("mouseenter",e).on("mouseleave",t||e)}});var x=s.fn.offset;s.fn.offset=function(){var e,t=this[0],r={top:0,left:0};return t&&t.nodeType?(e=(t.ownerDocument||n.document).documentElement,s.contains(e,t)?x.apply(this,arguments):(u("jQuery.fn.offset() requires an element connected to a document"),r)):(u("jQuery.fn.offset() requires a valid DOM element"),r)};var k=s.param;s.param=function(e,t){var r=s.ajaxSettings&&s.ajaxSettings.traditional;return void 0===t&&r&&(u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),t=r),k.call(this,e,t)};var A=s.fn.andSelf||s.fn.addBack;s.fn.andSelf=function(){return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),A.apply(this,arguments)};var S=s.Deferred,q=[["resolve","done",s.Callbacks("once memory"),s.Callbacks("once memory"),"resolved"],["reject","fail",s.Callbacks("once memory"),s.Callbacks("once memory"),"rejected"],["notify","progress",s.Callbacks("memory"),s.Callbacks("memory")]];return s.Deferred=function(e){var a=S(),i=a.promise();return a.pipe=i.pipe=function(){var o=arguments;return u("deferred.pipe() is deprecated"),s.Deferred(function(n){s.each(q,function(e,t){var r=s.isFunction(o[e])&&o[e];a[t[1]](function(){var e=r&&r.apply(this,arguments);e&&s.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[t[0]+"With"](this===i?n.promise():this,r?[e]:arguments)})}),o=null}).promise()},e&&e.call(a,a),a},s.Deferred.exceptionHook=S.exceptionHook,s});