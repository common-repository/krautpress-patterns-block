!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=3)}([function(t,e){!function(){t.exports=this.wp.element}()},function(t,e){!function(){t.exports=this.wp.blocks}()},function(t,e){!function(){t.exports=this.wp.blockEditor}()},function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(1),i=r(2);r(4);Object(o.registerBlockType)("krautpress/patterns",{title:krautpressPatternsBlockStrings.title,category:"layout",attributes:{pattern:{type:"string",default:""}},variations:krautpressPatternsBlockVariationData,edit:function(t){var e=t.attributes.pattern;function r(t,e){var r=wp.data.select("core/block-editor").getSettings().__experimentalBlockPatterns.find((function(e){return e.name===t})),n=wp.blocks.parse(r.content);wp.data.dispatch("core/block-editor").replaceBlock(e,n)}return""!==e&&r(e,t.clientId),Object(n.createElement)("div",null,Object(n.createElement)(i.__experimentalBlockVariationPicker,{label:krautpressPatternsBlockStrings.variationPickerLabel,instructions:krautpressPatternsBlockStrings.variationPickerInstructions,variations:krautpressPatternsBlockVariationData,onSelect:function(e){r(e.name,t.clientId)}}))}})},function(t,e,r){}]);