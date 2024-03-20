//# sourceMappingURL=form_manager.js.map
/*

 handlebars v4.7.7

Copyright (C) 2011-2019 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
var process=process||{env:{NODE_ENV:"development"}};
(function(d,b){"object"===typeof exports&&"object"===typeof module?module.exports=b():"function"===typeof define&&define.amd?define([],b):"object"===typeof exports?exports.Handlebars=b():d.HandlebarsCustom=b()})(this,function(){return function(d){function b(h){if(a[h])return a[h].exports;var e=a[h]={exports:{},id:h,loaded:!1};d[h].call(e.exports,e,e.exports,b);e.loaded=!0;return e.exports}var a={};b.m=d;b.c=a;b.p="";return b(0)}([function(d,b,a){function h(){var x=new p.HandlebarsEnvironment;f.extend(x,
p);x.SafeString=q["default"];x.Exception=k["default"];x.Utils=f;x.escapeExpression=f.escapeExpression;x.VM=r;x.template=function(D){return r.template(D,x)};return x}var e=a(1)["default"],l=a(2)["default"];b.__esModule=!0;var g=a(3),p=e(g);g=a(36);var q=l(g);g=a(5);var k=l(g);g=a(4);var f=e(g);g=a(37);var r=e(g);a=a(43);l=l(a);a=h();a.create=h;l["default"](a);a["default"]=a;b["default"]=a;d.exports=b["default"]},function(d,b){b["default"]=function(a){if(a&&a.__esModule)return a;var h={};if(null!=a)for(var e in a)Object.prototype.hasOwnProperty.call(a,
e)&&(h[e]=a[e]);h["default"]=a;return h};b.__esModule=!0},function(d,b){b["default"]=function(a){return a&&a.__esModule?a:{"default":a}};b.__esModule=!0},function(d,b,a){function h(f,r,x){this.helpers=f||{};this.partials=r||{};this.decorators=x||{};p.registerDefaultHelpers(this);q.registerDefaultDecorators(this)}d=a(2)["default"];b.__esModule=!0;b.HandlebarsEnvironment=h;var e=a(4),l=a(5),g=d(l),p=a(9),q=a(29);l=a(31);d=d(l);var k=a(32);b.VERSION="4.7.7";b.COMPILER_REVISION=8;b.LAST_COMPATIBLE_COMPILER_REVISION=
7;b.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};h.prototype={constructor:h,logger:d["default"],log:d["default"].log,registerHelper:function(f,r){if("[object Object]"===e.toString.call(f)){if(r)throw new g["default"]("Arg not supported with multiple helpers");e.extend(this.helpers,f)}else this.helpers[f]=r},unregisterHelper:function(f){delete this.helpers[f]},registerPartial:function(f,
r){if("[object Object]"===e.toString.call(f))e.extend(this.partials,f);else{if("undefined"===typeof r)throw new g["default"]('Attempting to register a partial called "'+f+'" as undefined');this.partials[f]=r}},unregisterPartial:function(f){delete this.partials[f]},registerDecorator:function(f,r){if("[object Object]"===e.toString.call(f)){if(r)throw new g["default"]("Arg not supported with multiple decorators");e.extend(this.decorators,f)}else this.decorators[f]=r},unregisterDecorator:function(f){delete this.decorators[f]},
resetLoggedPropertyAccesses:function(){k.resetLoggedProperties()}};b.log=d["default"].log;b.createFrame=e.createFrame;b.logger=d["default"]},function(d,b){function a(k){return e[k]}function h(k){for(var f=1;f<arguments.length;f++)for(var r in arguments[f])Object.prototype.hasOwnProperty.call(arguments[f],r)&&(k[r]=arguments[f][r]);return k}b.__esModule=!0;b.extend=h;b.indexOf=function(k,f){for(var r=0,x=k.length;r<x;r++)if(k[r]===f)return r;return-1};b.escapeExpression=function(k){if("string"!==typeof k){if(k&&
k.toHTML)return k.toHTML();if(null==k)return"";if(!k)return k+"";k=""+k}return g.test(k)?k.replace(l,a):k};b.isEmpty=function(k){return k||0===k?q(k)&&0===k.length?!0:!1:!0};b.createFrame=function(k){var f=h({},k);f._parent=k;return f};b.blockParams=function(k,f){k.path=f;return k};b.appendContextPath=function(k,f){return(k?k+".":"")+f};var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},l=/[&<>"'`=]/g,g=/[&<>"'`=]/,p=Object.prototype.toString;b.toString=
p;d=function(k){return"function"===typeof k};d(/x/)&&(b.isFunction=d=function(k){return"function"===typeof k&&"[object Function]"===p.call(k)});b.isFunction=d;var q=Array.isArray||function(k){return k&&"object"===typeof k?"[object Array]"===p.call(k):!1};b.isArray=q},function(d,b,a){function h(g,p){p=p&&p.loc;var q=void 0,k=void 0,f=void 0,r=void 0;p&&(q=p.start.line,k=p.end.line,f=p.start.column,r=p.end.column,g+=" - "+q+":"+f);g=Error.prototype.constructor.call(this,g);for(var x=0;x<l.length;x++)this[l[x]]=
g[l[x]];Error.captureStackTrace&&Error.captureStackTrace(this,h);try{p&&(this.lineNumber=q,this.endLineNumber=k,e?(Object.defineProperty(this,"column",{value:f,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:r,enumerable:!0})):(this.column=f,this.endColumn=r))}catch(D){}}var e=a(6)["default"];b.__esModule=!0;var l="description fileName lineNumber endLineNumber message name number stack".split(" ");h.prototype=Error();b["default"]=h;d.exports=b["default"]},function(d,b,a){d.exports={"default":a(7),
__esModule:!0}},function(d,b,a){var h=a(8);d.exports=function(e,l,g){return h.setDesc(e,l,g)}},function(d,b){b=Object;d.exports={create:b.create,getProto:b.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:b.getOwnPropertyDescriptor,setDesc:b.defineProperty,setDescs:b.defineProperties,getKeys:b.keys,getNames:b.getOwnPropertyNames,getSymbols:b.getOwnPropertySymbols,each:[].forEach}},function(d,b,a){d=a(2)["default"];b.__esModule=!0;b.registerDefaultHelpers=function(f){h["default"](f);e["default"](f);
l["default"](f);g["default"](f);p["default"](f);q["default"](f);k["default"](f)};b.moveHelperToHooks=function(f,r,x){f.helpers[r]&&(f.hooks[r]=f.helpers[r],x||delete f.helpers[r])};b=a(10);var h=d(b);b=a(11);var e=d(b);b=a(24);var l=d(b);b=a(25);var g=d(b);b=a(26);var p=d(b);b=a(27);var q=d(b);a=a(28);var k=d(a)},function(d,b,a){b.__esModule=!0;var h=a(4);b["default"]=function(e){e.registerHelper("blockHelperMissing",function(l,g){var p=g.inverse,q=g.fn;if(!0===l)return q(this);if(!1===l||null==l)return p(this);
if(h.isArray(l))return 0<l.length?(g.ids&&(g.ids=[g.name]),e.helpers.each(l,g)):p(this);g.data&&g.ids&&(p=h.createFrame(g.data),p.contextPath=h.appendContextPath(g.data.contextPath,g.name),g={data:p});return q(l,g)})};d.exports=b["default"]},function(d,b,a){(function(h){var e=a(12)["default"],l=a(2)["default"];b.__esModule=!0;var g=a(4),p=a(5),q=l(p);b["default"]=function(k){k.registerHelper("each",function(f,r){function x(C,A,n){m&&(m.key=C,m.index=A,m.first=0===A,m.last=!!n,c&&(m.contextPath=c+
C));z+=D(f[C],{data:m,blockParams:g.blockParams([f[C],C],[c+C,null])})}if(!r)throw new q["default"]("Must pass iterator to #each");var D=r.fn,E=r.inverse,v=0,z="",m=void 0,c=void 0;r.data&&r.ids&&(c=g.appendContextPath(r.data.contextPath,r.ids[0])+".");g.isFunction(f)&&(f=f.call(this));r.data&&(m=g.createFrame(r.data));if(f&&"object"===typeof f)if(g.isArray(f))for(r=f.length;v<r;v++)v in f&&x(v,v,v===f.length-1);else if(h.Symbol&&f[h.Symbol.iterator]){r=[];for(var y=f[h.Symbol.iterator](),w=y.next();!w.done;w=
y.next())r.push(w.value);f=r;for(r=f.length;v<r;v++)x(v,v,v===f.length-1)}else(function(){var C=void 0;e(f).forEach(function(A){void 0!==C&&x(C,v-1);C=A;v++});void 0!==C&&x(C,v-1,!0)})();0===v&&(z=E(this));return z})};d.exports=b["default"]}).call(b,function(){return this}())},function(d,b,a){d.exports={"default":a(13),__esModule:!0}},function(d,b,a){a(14);d.exports=a(20).Object.keys},function(d,b,a){var h=a(15);a(17)("keys",function(e){return function(l){return e(h(l))}})},function(d,b,a){var h=
a(16);d.exports=function(e){return Object(h(e))}},function(d,b){d.exports=function(a){if(void 0==a)throw TypeError("Can't call method on  "+a);return a}},function(d,b,a){var h=a(18),e=a(20),l=a(23);d.exports=function(g,p){var q=(e.Object||{})[g]||Object[g],k={};k[g]=p(q);h(h.S+h.F*l(function(){q(1)}),"Object",k)}},function(d,b,a){var h=a(19),e=a(20),l=a(21),g=function(p,q,k){var f=p&g.F,r=p&g.G,x=p&g.S,D=p&g.P,E=p&g.B;p&=g.W;var v=r?e:e[q]||(e[q]={});x=r?h:x?h[q]:(h[q]||{}).prototype;var z;r&&(k=
q);for(z in k)if(q=!f&&x&&z in x,!(q&&z in v)){var m=q?x[z]:k[z];v[z]=r&&"function"!=typeof x[z]?k[z]:E&&q?l(m,h):p&&x[z]==m?function(c){var y=function(w){return this instanceof c?new c(w):c(w)};y.prototype=c.prototype;return y}(m):D&&"function"==typeof m?l(Function.call,m):m;D&&((v.prototype||(v.prototype={}))[z]=m)}};g.F=1;g.G=2;g.S=4;g.P=8;g.B=16;g.W=32;d.exports=g},function(d,b){d=d.exports="undefined"!=typeof window&&Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();
"number"==typeof __g&&(__g=d)},function(d,b){d=d.exports={version:"1.2.6"};"number"==typeof __e&&(__e=d)},function(d,b,a){var h=a(22);d.exports=function(e,l,g){h(e);if(void 0===l)return e;switch(g){case 1:return function(p){return e.call(l,p)};case 2:return function(p,q){return e.call(l,p,q)};case 3:return function(p,q,k){return e.call(l,p,q,k)}}return function(){return e.apply(l,arguments)}}},function(d,b){d.exports=function(a){if("function"!=typeof a)throw TypeError(a+" is not a function!");return a}},
function(d,b){d.exports=function(a){try{return!!a()}catch(h){return!0}}},function(d,b,a){var h=a(2)["default"];b.__esModule=!0;a=a(5);var e=h(a);b["default"]=function(l){l.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new e["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"');})};d.exports=b["default"]},function(d,b,a){var h=a(2)["default"];b.__esModule=!0;var e=a(4);a=a(5);var l=h(a);b["default"]=function(g){g.registerHelper("if",function(p,q){if(2!=arguments.length)throw new l["default"]("#if requires exactly one argument");
e.isFunction(p)&&(p=p.call(this));return!q.hash.includeZero&&!p||e.isEmpty(p)?q.inverse(this):q.fn(this)});g.registerHelper("unless",function(p,q){if(2!=arguments.length)throw new l["default"]("#unless requires exactly one argument");return g.helpers["if"].call(this,p,{fn:q.inverse,inverse:q.fn,hash:q.hash})})};d.exports=b["default"]},function(d,b){b.__esModule=!0;b["default"]=function(a){a.registerHelper("log",function(){for(var h=[void 0],e=arguments[arguments.length-1],l=0;l<arguments.length-1;l++)h.push(arguments[l]);
l=1;null!=e.hash.level?l=e.hash.level:e.data&&null!=e.data.level&&(l=e.data.level);h[0]=l;a.log.apply(a,h)})};d.exports=b["default"]},function(d,b){b.__esModule=!0;b["default"]=function(a){a.registerHelper("lookup",function(h,e,l){return h?l.lookupProperty(h,e):h})};d.exports=b["default"]},function(d,b,a){var h=a(2)["default"];b.__esModule=!0;var e=a(4);a=a(5);var l=h(a);b["default"]=function(g){g.registerHelper("with",function(p,q){if(2!=arguments.length)throw new l["default"]("#with requires exactly one argument");
e.isFunction(p)&&(p=p.call(this));var k=q.fn;if(e.isEmpty(p))return q.inverse(this);var f=q.data;q.data&&q.ids&&(f=e.createFrame(q.data),f.contextPath=e.appendContextPath(q.data.contextPath,q.ids[0]));return k(p,{data:f,blockParams:e.blockParams([p],[f&&f.contextPath])})})};d.exports=b["default"]},function(d,b,a){d=a(2)["default"];b.__esModule=!0;b.registerDefaultDecorators=function(e){h["default"](e)};b=a(30);var h=d(b)},function(d,b,a){b.__esModule=!0;var h=a(4);b["default"]=function(e){e.registerDecorator("inline",
function(l,g,p,q){var k=l;g.partials||(g.partials={},k=function(f,r){var x=p.partials;p.partials=h.extend({},x,g.partials);f=l(f,r);p.partials=x;return f});g.partials[q.args[0]]=q.fn;return k})};d.exports=b["default"]},function(d,b,a){b.__esModule=!0;var h=a(4),e={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(l){if("string"===typeof l){var g=h.indexOf(e.methodMap,l.toLowerCase());l=0<=g?g:parseInt(l,10)}return l},log:function(l){l=e.lookupLevel(l);if("undefined"!==typeof console&&
e.lookupLevel(e.level)<=l){var g=e.methodMap[l];console[g]||(g="log");for(var p=arguments.length,q=Array(1<p?p-1:0),k=1;k<p;k++)q[k-1]=arguments[k];console[g].apply(console,q)}}};b["default"]=e;d.exports=b["default"]},function(d,b,a){function h(k,f){if(void 0!==k.whitelist[f])return!0===k.whitelist[f];if(void 0!==k.defaultValue)return k.defaultValue;!0!==q[f]&&(q[f]=!0,p.log("error",'Handlebars: Access has been denied to resolve the property "'+f+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'));
return!1}var e=a(33)["default"],l=a(12)["default"];d=a(1)["default"];b.__esModule=!0;b.createProtoAccessControl=function(k){var f=e(null);f.constructor=!1;f.__defineGetter__=!1;f.__defineSetter__=!1;f.__lookupGetter__=!1;var r=e(null);r.__proto__=!1;return{properties:{whitelist:g.createNewLookupObject(r,k.allowedProtoProperties),defaultValue:k.allowProtoPropertiesByDefault},methods:{whitelist:g.createNewLookupObject(f,k.allowedProtoMethods),defaultValue:k.allowProtoMethodsByDefault}}};b.resultIsAllowed=
function(k,f,r){return"function"===typeof k?h(f.methods,r):h(f.properties,r)};b.resetLoggedProperties=function(){l(q).forEach(function(k){delete q[k]})};var g=a(35);b=a(31);var p=d(b),q=e(null)},function(d,b,a){d.exports={"default":a(34),__esModule:!0}},function(d,b,a){var h=a(8);d.exports=function(e,l){return h.create(e,l)}},function(d,b,a){var h=a(33)["default"];b.__esModule=!0;b.createNewLookupObject=function(){for(var l=arguments.length,g=Array(l),p=0;p<l;p++)g[p]=arguments[p];return e.extend.apply(void 0,
[h(null)].concat(g))};var e=a(4)},function(d,b){function a(h){this.string=h}b.__esModule=!0;a.prototype.toString=a.prototype.toHTML=function(){return""+this.string};b["default"]=a;d.exports=b["default"]},function(d,b,a){function h(c,y,w,C,A,n,t){function u(B){var F=1>=arguments.length||void 0===arguments[1]?{}:arguments[1],G=t;!t||B==t[0]||B===c.nullContext&&null===t[0]||(G=[B].concat(t));return w(c,B,c.helpers,c.partials,F.data||C,n&&[F.blockParams].concat(n),G)}u=g(w,u,c,t,C,n);u.program=y;u.depth=
t?t.length:0;u.blockParams=A||0;return u}function e(){return""}function l(c,y){y&&"root"in y||(y=y?E.createFrame(y):{},y.root=c);return y}function g(c,y,w,C,A,n){if(c.decorator){var t={};y=c.decorator(y,t,w,C&&C[0],A,n,C);x.extend(y,t)}return y}function p(c,y){f(c).forEach(function(w){c[w]=q(c[w],y)})}function q(c,y){var w=y.lookupProperty;return z.wrapHelper(c,function(C){return x.extend({lookupProperty:w},C)})}var k=a(38)["default"],f=a(12)["default"],r=a(1)["default"];d=a(2)["default"];b.__esModule=
!0;b.checkRevision=function(c){var y=c&&c[0]||1,w=E.COMPILER_REVISION;if(!(y>=E.LAST_COMPATIBLE_COMPILER_REVISION&&y<=E.COMPILER_REVISION)){if(y<E.LAST_COMPATIBLE_COMPILER_REVISION)throw new D["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+E.REVISION_CHANGES[w]+") or downgrade your runtime to an older version ("+E.REVISION_CHANGES[y]+").");throw new D["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+
c[1]+").");}};b.template=function(c,y){function w(n){function t(H){return""+c.main(A,H,A.helpers,A.partials,B,G,F)}var u=1>=arguments.length||void 0===arguments[1]?{}:arguments[1],B=u.data;w._setup(u);!u.partial&&c.useData&&(B=l(n,B));var F=void 0,G=c.useBlockParams?[]:void 0;c.useDepths&&(F=u.depths?n!=u.depths[0]?[n].concat(u.depths):u.depths:[n]);t=g(c.main,t,A,u.depths||[],B,G);return t(n,u)}if(!y)throw new D["default"]("No environment passed to template");if(!c||!c.main)throw new D["default"]("Unknown template object: "+
typeof c);c.main.decorator=c.main_d;y.VM.checkRevision(c.compiler);var C=c.compiler&&7===c.compiler[0],A={strict:function(n,t,u){if(!(n&&t in n))throw new D["default"]('"'+t+'" not defined in '+n,{loc:u});return A.lookupProperty(n,t)},lookupProperty:function(n,t){var u=n[t];if(null==u||Object.prototype.hasOwnProperty.call(n,t)||m.resultIsAllowed(u,A.protoAccessControl,t))return u},lookup:function(n,t){for(var u=n.length,B=0;B<u;B++)if(null!=(n[B]&&A.lookupProperty(n[B],t)))return n[B][t]},lambda:function(n,
t){return"function"===typeof n?n.call(t):n},escapeExpression:x.escapeExpression,invokePartial:function(n,t,u){u.hash&&(t=x.extend({},t,u.hash),u.ids&&(u.ids[0]=!0));n=y.VM.resolvePartial.call(this,n,t,u);var B=x.extend({},u,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),F=y.VM.invokePartial.call(this,n,t,B);null==F&&y.compile&&(u.partials[u.name]=y.compile(n,c.compilerOptions,y),F=u.partials[u.name](t,B));if(null!=F){if(u.indent){n=F.split("\n");t=0;for(B=n.length;t<B&&(n[t]||t+1!==
B);t++)n[t]=u.indent+n[t];F=n.join("\n")}return F}throw new D["default"]("The partial "+u.name+" could not be compiled when running in runtime-only mode");},fn:function(n){var t=c[n];t.decorator=c[n+"_d"];return t},programs:[],program:function(n,t,u,B,F){var G=this.programs[n],H=this.fn(n);t||F||B||u?G=h(this,n,H,t,u,B,F):G||(G=this.programs[n]=h(this,n,H));return G},data:function(n,t){for(;n&&t--;)n=n._parent;return n},mergeIfNeeded:function(n,t){var u=n||t;n&&t&&n!==t&&(u=x.extend({},t,n));return u},
nullContext:k({}),noop:y.VM.noop,compilerInfo:c.compiler};w.isTop=!0;w._setup=function(n){if(n.partial)A.protoAccessControl=n.protoAccessControl,A.helpers=n.helpers,A.partials=n.partials,A.decorators=n.decorators,A.hooks=n.hooks;else{var t=x.extend({},y.helpers,n.helpers);p(t,A);A.helpers=t;c.usePartial&&(A.partials=A.mergeIfNeeded(n.partials,y.partials));if(c.usePartial||c.useDecorators)A.decorators=x.extend({},y.decorators,n.decorators);A.hooks={};A.protoAccessControl=m.createProtoAccessControl(n);
n=n.allowCallsToHelperMissing||C;v.moveHelperToHooks(A,"helperMissing",n);v.moveHelperToHooks(A,"blockHelperMissing",n)}};w._child=function(n,t,u,B){if(c.useBlockParams&&!u)throw new D["default"]("must pass block params");if(c.useDepths&&!B)throw new D["default"]("must pass parent depths");return h(A,n,c[n],t,0,u,B)};return w};b.wrapProgram=h;b.resolvePartial=function(c,y,w){c?c.call||w.name||(w.name=c,c=w.partials[c]):c="@partial-block"===w.name?w.data["partial-block"]:w.partials[w.name];return c};
b.invokePartial=function(c,y,w){var C=w.data&&w.data["partial-block"];w.partial=!0;w.ids&&(w.data.contextPath=w.ids[0]||w.data.contextPath);var A=void 0;w.fn&&w.fn!==e&&function(){w.data=E.createFrame(w.data);var n=w.fn;A=w.data["partial-block"]=function(t){var u=1>=arguments.length||void 0===arguments[1]?{}:arguments[1];u.data=E.createFrame(u.data);u.data["partial-block"]=C;return n(t,u)};n.partials&&(w.partials=x.extend({},w.partials,n.partials))}();void 0===c&&A&&(c=A);if(void 0===c)throw new D["default"]("The partial "+
w.name+" could not be found");if(c instanceof Function)return c(y,w)};b.noop=e;b=a(4);var x=r(b);b=a(5);var D=d(b),E=a(3),v=a(9),z=a(42),m=a(32)},function(d,b,a){d.exports={"default":a(39),__esModule:!0}},function(d,b,a){a(40);d.exports=a(20).Object.seal},function(d,b,a){var h=a(41);a(17)("seal",function(e){return function(l){return e&&h(l)?e(l):l}})},function(d,b){d.exports=function(a){return"object"===typeof a?null!==a:"function"===typeof a}},function(d,b){b.__esModule=!0;b.wrapHelper=function(a,
h){return"function"!==typeof a?a:function(){arguments[arguments.length-1]=h(arguments[arguments.length-1]);return a.apply(this,arguments)}}},function(d,b){(function(a){b.__esModule=!0;b["default"]=function(h){var e="undefined"!==typeof a?a:window,l=e.Handlebars;h.noConflict=function(){e.Handlebars===h&&(e.Handlebars=l);return h}};d.exports=b["default"]}).call(b,function(){return this}())}])});process=process||{env:{NODE_ENV:"development"}};
HandlebarsCustom.registerHelper("i18n",function(d,b,a){void 0===b&&(b=[]);Array.isArray(b)||(b=[b]);return $L({code:d,params:b,default:a})});process=process||{env:{NODE_ENV:"development"}};
window.optionTypeFormManager=function(){var d=HandlebarsCustom.templates["plugin-configurable-option"],b=HandlebarsCustom.templates["plugin-form-group"],a,h,e,l,g,p,q=[],k=function(v){$(v.target).siblings('input[type="hidden"]').val(v.target.checked?"on":"off")},f=function(v){q.some(function(m){return"default"===m.code})||q.unshift({code:"default"});_.each(q,function(m){m.name=$L({code:m.name});m.name?$(e).append(b(m)):$(e).append('<div group-code="'+m.code+'"></div>')});var z=_.sortBy(a,"displayOrder");
_.each(z,function(m){m.fieldGroup&&q.some(function(y){return y.code===m.fieldGroup})||(m.fieldGroup="default");var c={optionTypeId:m.id,name:m.fieldContext+"."+m.fieldName,selectedItemName:m.fieldContext+"."+m.fieldName+".item",errorName:m.fieldName,context:m.fieldContext,defaultLabel:m.fieldLabel,value:m.defaultValue,defaultValue:m.defaultValue,required:m.required,excludeFromSearch:m.excludeFromSearch||!1,hideLock:!0,fieldClass:m.fieldClass,dependsOnCode:m.dependsOnCode,visibleOnCode:m.visibleOnCode,
requireOnCode:m.requireOnCode,dependsOnValue:m.dependsOnValue,code:m.code||m.fieldName||m.id,id:m.id,contextualDefault:m.contextualDefault,optionSource:m.optionSource,optionList:m.optionList,noBlank:m.noBlank,placeHolder:m.placeHolder,extraParams:{optionTypeId:m.id},isMulti:"on"===_.get(m,"config.multiSelect",!1)||"true"===_.get(m,"config.multiSelect",!1),suggestionTemplatePath:_.get(m,"config.suggestionTemplatePath",void 0),editable:m.editable,helpBlock:m.helpBlock,helpBlockFieldCode:m.helpBlockFieldCode};
m.visibleOnCode&&(c.fieldClass="visible-on-input");m.requireOnCode&&(c.fieldClass="require-on-input");c.lockName=c.name;"on"===c.isMulti&&(c.isMulti=!0);"hidden"!=m.type&&(c.label=m.fieldCode||"gomorpheus.label.option."+_.get(m,"fieldLabel","").toLowerCase().replace(/\s/g,""));switch(m.type){case "hidden":c.isHidden=!0;c.hidden=!0;break;case "text":c.isText=!0;break;case "number":c.isNumber=!0;break;case "password":c.isPassword=!0;break;case "typeahead":!c.isMulti&&Array.isArray(c.value)?(c.value=
c.value[0],c.values=[c.value[0]]):c.values=c.defaultValue;c.isMultiTypeahead=!0;c.optionSource="/options/typeahead";c.configStr=JSON.stringify(c);break;case "checkbox":c.isCheckbox=!0;c.hiddenName=c.name.split(".");c.hiddenName[c.hiddenName.length-1]="_"+c.hiddenName[c.hiddenName.length-1];c.hiddenName=c.hiddenName.join(".");c.isChecked=!1;c.checkedValue="off";if("on"==c.value||1==c.value)c.checkedValue="on",c.isChecked=!0;break;case "select":c.isSelect=!0;c.required&&c.value&&(c.noBlank=!0);c.configStr=
JSON.stringify(c);break;case "tileSelect":c.isRadio=!0;c.fieldClass+=" tile";c.required&&c.value&&(c.noBlank=!0);c.configStr=JSON.stringify(c);break;case "radio":c.isRadio=!0;c.configStr=JSON.stringify(c);break;case "textarea":c.isTextarea=!0}m.defaultErrorMessage="You must enter a "+(m.fieldLabel||m.code||"").toLowerCase();$(e).find('[group-code="'+m.fieldGroup+'"]').append(d(c))});v&&v();e.trigger("options::loaded");p=z;$(document).trigger("option-form:loaded")},r=function(v){x();a=v;f()},x=function(){$(e).empty()},
D=function(){$.ajax({url:l,method:"GET",cache:!1,success:function(v){var z=_.get(v,"optionValues");z&&(g=z);g&&_.each(v.optionTypes,function(m){var c=_.get(g,m.fieldName);c||-1==m.fieldContext.search("customOptions")||(c=_.get(g,"customOptions."+m.fieldName));c&&(m.defaultValue=c)});r(v.optionTypes)},error:function(v){}})},E=function(v){$(e).find("[error-for]").each(function(){$(this).attr("block-text");$(this).empty()});$(e).find(".has-error").removeClass("has-error");for(var z in v){var m=$(e).find('[error-for="'+
z+'"]');m.closest(".form-group").addClass("has-error");m.text(v[z])}};return{init:function(v,z){h=z||{};a=_.get(z,"optionTypes",[]);(e=v)?(z.hasOwnProperty("loadUrl")&&(l=z.loadUrl),z.hasOwnProperty("validateUrl"),z.hasOwnProperty("optionValues")&&(g=z.optionValues),l&&D(),$(e).on("change","[type=checkbox]",k),v.off("ajax:error"),v.on("ajax:error",function(m,c){m=JSON.parse(c);E(m.errors)}),v.off("ajax:fatal"),v.on("ajax:fatal",function(m,c){m=JSON.parse(c);E(m.errors)})):console.error("You must have a wrapper element to use this component")},
reload:function(){},update:r,clear:x,validate:function(v,z){var m=e.closest("form").find('[name^="config.customOptions."]').serialize();v=v||"/provisioning/instances/custom-options/"+h.layoutId+"?asJSON=true&co.validate=true&"+m;return $.ajax({url:v,method:"POST",contentType:"application/json; charset=utf-8",dataType:"json",data:JSON.stringify(z),cache:!1})},build:f,findFormObject:function(v){return p.find(z=>z.code===v)},showErrors:E,clearOptionValues:function(){g=void 0}}};