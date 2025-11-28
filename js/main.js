/**
  * @license jCanvas v21.0.1F
  * Copyright 2017 Caleb Evans
  * Released under the MIT license
  */

 !function (a, b, c) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = function (a, b) { return c(a, b) } : c(a, b) }("undefined" != typeof window ? window.jQuery : {}, "undefined" != typeof window ? window : this, function (a, b) {
   "use strict"; function c(a) { var b, c = this; for (b in a) Object.prototype.hasOwnProperty.call(a, b) && (c[b] = a[b]); return c } function d() { ra(this, d.baseDefaults) } function e(a) { return "string" === ta(a) } function f(a) { return "function" === ta(a) } function g(a) { return !isNaN(pa(a)) && !isNaN(qa(a)) } function h(a) { return a && a.getContext ? a.getContext("2d") : null } function i(a) { var b, c; for (b in a) Object.prototype.hasOwnProperty.call(a, b) && (c = a[b], "string" === ta(c) && g(c) && "text" !== b && (a[b] = qa(c))); void 0 !== a.text && (a.text = String(a.text)) } function j(a) { return a = ra({}, a), a.masks = a.masks.slice(0), a } function k(a, b) { var c; a.save(), c = j(b.transforms), b.savedTransforms.push(c) } function l(a, b) { 0 === b.savedTransforms.length ? b.transforms = j(Fa) : (a.restore(), b.transforms = b.savedTransforms.pop()) } function m(a, b, c, d) { c[d] && (f(c[d]) ? b[d] = c[d].call(a, c) : b[d] = c[d]) } function n(a, b, c) { m(a, b, c, "fillStyle"), m(a, b, c, "strokeStyle"), b.lineWidth = c.strokeWidth, c.rounded ? b.lineCap = b.lineJoin = "round" : (b.lineCap = c.strokeCap, b.lineJoin = c.strokeJoin, b.miterLimit = c.miterLimit), c.strokeDash || (c.strokeDash = []), b.setLineDash && b.setLineDash(c.strokeDash), b.webkitLineDash = c.strokeDash, b.lineDashOffset = b.webkitLineDashOffset = b.mozDashOffset = c.strokeDashOffset, b.shadowOffsetX = c.shadowX, b.shadowOffsetY = c.shadowY, b.shadowBlur = c.shadowBlur, b.shadowColor = c.shadowColor, b.globalAlpha = c.opacity, b.globalCompositeOperation = c.compositing, c.imageSmoothing && (b.imageSmoothingEnabled = c.imageSmoothing) } function o(a, b, c) { c.mask && (c.autosave && k(a, b), a.clip(), b.transforms.masks.push(c._args)) } function p(a, b) { b._transformed && a.restore() } function q(a, b, c) { var d; c.closed && b.closePath(), c.shadowStroke && 0 !== c.strokeWidth ? (b.stroke(), b.fill(), b.shadowColor = "transparent", b.shadowBlur = 0, b.stroke()) : (b.fill(), "transparent" !== c.fillStyle && (b.shadowColor = "transparent"), 0 !== c.strokeWidth && b.stroke()), c.closed || b.closePath(), p(b, c), c.mask && (d = s(a), o(b, d, c)) } function r(a, b, c, d, e) { c._toRad = c.inDegrees ? va / 180 : 1, c._transformed = !0, b.save(), c.fromCenter || c._centered || void 0 === d || (void 0 === e && (e = d), c.x += d / 2, c.y += e / 2, c._centered = !0), c.rotate && S(b, c, null), 1 === c.scale && 1 === c.scaleX && 1 === c.scaleY || T(b, c, null), (c.translate || c.translateX || c.translateY) && U(b, c, null) } function s(b) { var c, d = Ea.dataCache; return d._canvas === b && d._data ? c = d._data : (c = a.data(b, "jCanvas"), c || (c = { canvas: b, layers: [], layer: { names: {}, groups: {} }, eventHooks: {}, intersecting: [], lastIntersected: null, cursor: a(b).css("cursor"), drag: { layer: null, dragging: !1 }, event: { type: null, x: null, y: null }, events: {}, transforms: j(Fa), savedTransforms: [], animating: !1, animated: null, pixelRatio: 1, scaled: !1, redrawOnMousemove: !1 }, a.data(b, "jCanvas", c)), d._canvas = b, d._data = c), c } function t(a, b, c) { var d; for (d in Ia.events) Object.prototype.hasOwnProperty.call(Ia.events, d) && (c[d] || c.cursors && c.cursors[d]) && v(a, b, c, d); b.events.mouseout || (a.bind("mouseout.jCanvas", function () { var c, d = b.drag.layer; for (d && (b.drag = {}, G(a, b, d, "dragcancel")), c = 0; c < b.layers.length; c += 1)d = b.layers[c], d._hovered && a.triggerLayerEvent(b.layers[c], "mouseout"); a.drawLayers() }), b.events.mouseout = !0) } function u(a, b, c, d) { Ia.events[d](a, b), c._event = !0 } function v(a, b, c, d) { u(a, b, c, d), "mouseover" !== d && "mouseout" !== d && "mousemove" !== d || (b.redrawOnMousemove = !0) } function w(a, b, c) { var d, e, f; if (c.draggable || c.cursors) { for (d = ["mousedown", "mousemove", "mouseup"], f = 0; f < d.length; f += 1)e = d[f], u(a, b, c, e); c._event = !0 } } function x(a, b, c, d) { var f = b.layer.names; d ? void 0 !== d.name && e(c.name) && c.name !== d.name && delete f[c.name] : d = c, e(d.name) && (f[d.name] = c) } function y(a, b, c, d) { var e, f, g, h, i, j = b.layer.groups; if (d) { if (void 0 !== d.groups && null !== c.groups) for (g = 0; g < c.groups.length; g += 1)if (f = c.groups[g], e = j[f]) { for (i = 0; i < e.length; i += 1)if (e[i] === c) { h = i, e.splice(i, 1); break } 0 === e.length && delete j[f] } } else d = c; if (void 0 !== d.groups && null !== d.groups) for (g = 0; g < d.groups.length; g += 1)f = d.groups[g], e = j[f], e || (e = j[f] = [], e.name = f), void 0 === h && (h = e.length), e.splice(h, 0, c) } function z(a) { var b, c, d, e; for (b = null, c = a.intersecting.length - 1; c >= 0; c -= 1)if (b = a.intersecting[c], b._masks) { for (e = b._masks.length - 1; e >= 0; e -= 1)if (d = b._masks[e], !d.intersects) { b.intersects = !1; break } if (b.intersects && !b.intangible) break } return b && b.intangible && (b = null), b } function A(a, b, c, d) { c && c.visible && c._method && (c._next = d || null, c._method && c._method.call(a, c)) } function B(a, b, c) { var d, e, f, g, h, i, j, k, l, m; if (g = b.drag, e = g.layer, h = e && e.dragGroups || [], d = b.layers, "mousemove" === c || "touchmove" === c) { if (g.dragging || (g.dragging = !0, e.dragging = !0, e.bringToFront && (d.splice(e.index, 1), e.index = d.push(e)), e._startX = e.x, e._startY = e.y, e._endX = e._eventX, e._endY = e._eventY, G(a, b, e, "dragstart")), g.dragging) for (l = e._eventX - (e._endX - e._startX), m = e._eventY - (e._endY - e._startY), e.updateDragX && (l = e.updateDragX.call(a[0], e, l)), e.updateDragY && (m = e.updateDragY.call(a[0], e, m)), e.dx = l - e.x, e.dy = m - e.y, "y" !== e.restrictDragToAxis && (e.x = l), "x" !== e.restrictDragToAxis && (e.y = m), G(a, b, e, "drag"), k = 0; k < h.length; k += 1)if (j = h[k], i = b.layer.groups[j], e.groups && i) for (f = 0; f < i.length; f += 1)i[f] !== e && ("y" !== e.restrictDragToAxis && "y" !== i[f].restrictDragToAxis && (i[f].x += e.dx), "x" !== e.restrictDragToAxis && "x" !== i[f].restrictDragToAxis && (i[f].y += e.dy)) } else "mouseup" !== c && "touchend" !== c || (g.dragging && (e.dragging = !1, g.dragging = !1, b.redrawOnMousemove = b.originalRedrawOnMousemove, G(a, b, e, "dragstop")), b.drag = {}) } function C(b, c, d) { var e; c.cursors && (e = c.cursors[d]), -1 !== a.inArray(e, Ga.cursors) && (e = Ga.prefix + e), e && b.css({ cursor: e }) } function D(a, b) { a.css({ cursor: b.cursor }) } function E(a, b, c, d, e) { d[c] && b._running && !b._running[c] && (b._running[c] = !0, d[c].call(a[0], b, e), b._running[c] = !1) } function F(b, c) { return !(b.disableEvents || b.intangible && -1 !== a.inArray(c, Ha)) } function G(a, b, c, d, e) { F(c, d) && ("mouseout" !== d && C(a, c, d), E(a, c, d, c, e), E(a, c, d, b.eventHooks, e), E(a, c, d, Ia.eventHooks, e)) } function H(b, d, f, g) { var h, j, k, l = d._layer ? f : d; return d._args = f, (d.draggable || d.dragGroups) && (d.layer = !0, d.draggable = !0), d._method || (g ? d._method = g : d.method ? d._method = a.fn[d.method] : d.type && (d._method = a.fn[Da.drawings[d.type]])), d.layer && !d._layer ? (h = a(b), j = s(b), k = j.layers, (null === l.name || e(l.name) && void 0 === j.layer.names[l.name]) && (i(d), l = new c(d), l.canvas = b, l.layer = !0, l._layer = !0, l._running = {}, null !== l.data ? l.data = ra({}, l.data) : l.data = {}, null !== l.groups ? l.groups = l.groups.slice(0) : l.groups = [], x(h, j, l), y(h, j, l), t(h, j, l), w(h, j, l), d._event = l._event, l._method === a.fn.drawText && h.measureText(l), null === l.index && (l.index = k.length), k.splice(l.index, 0, l), d._args = l, G(h, j, l, "add"))) : d.layer || i(d), l } function I(a) { var b, c; for (c = 0; c < Ga.props.length; c += 1)b = Ga.props[c], a[b] = a["_" + b] } function J(a, b) { var c, d; for (d = 0; d < Ga.props.length; d += 1)c = Ga.props[d], void 0 !== a[c] && (a["_" + c] = a[c], Ga.propsObj[c] = !0, b && delete a[c]) } function K(a, b, c) { var d, e, g, h; for (d in c) if (Object.prototype.hasOwnProperty.call(c, d) && (e = c[d], f(e) && (c[d] = e.call(a, b, d)), "object" === ta(e) && ua(e))) { for (g in e) Object.prototype.hasOwnProperty.call(e, g) && (h = e[g], void 0 !== b[d] && (b[d + "." + g] = b[d][g], c[d + "." + g] = h)); delete c[d] } return c } function L(a) { var b; for (b in a) Object.prototype.hasOwnProperty.call(a, b) && -1 !== b.indexOf(".") && delete a[b] } function M(b) { var c, d, e = [], f = 1; return "transparent" === b ? b = "rgba(0, 0, 0, 0)" : b.match(/^([a-z]+|#[0-9a-f]+)$/gi) && (d = ka.head, c = d.style.color, d.style.color = b, b = a.css(d, "color"), d.style.color = c), b.match(/^rgb/gi) && (e = b.match(/(\d+(\.\d+)?)/gi), b.match(/%/gi) && (f = 2.55), e[0] *= f, e[1] *= f, e[2] *= f, void 0 !== e[3] ? e[3] = qa(e[3]) : e[3] = 1), e } function N(a) { var b, c = 3; for ("array" !== ta(a.start) && (a.start = M(a.start), a.end = M(a.end)), a.now = [], 1 === a.start[3] && 1 === a.end[3] || (c = 4), b = 0; b < c; b += 1)a.now[b] = a.start[b] + (a.end[b] - a.start[b]) * a.pos, b < 3 && (a.now[b] = wa(a.now[b])); 1 !== a.start[3] || 1 !== a.end[3] ? a.now = "rgba(" + a.now.join(",") + ")" : (a.now.slice(0, 3), a.now = "rgb(" + a.now.join(",") + ")"), a.elem.nodeName ? a.elem.style[a.prop] = a.now : a.elem[a.prop] = a.now } function O(a) { return Da.touchEvents[a] && (a = Da.touchEvents[a]), a } function P(a) { return Da.mouseEvents[a] && (a = Da.mouseEvents[a]), a } function Q(a) { Ia.events[a] = function (b, c) { function d(a) { g.x = a.offsetX, g.y = a.offsetY, g.type = e, g.event = a, ("mousemove" !== a.type || c.redrawOnMousemove || c.drag.dragging) && b.drawLayers({ resetFire: !0 }), a.preventDefault() } var e, f, g; g = c.event, e = "mouseover" === a || "mouseout" === a ? "mousemove" : a, f = O(e), c.events[e] || (f !== e ? b.bind(e + ".jCanvas " + f + ".jCanvas", d) : b.bind(e + ".jCanvas", d), c.events[e] = !0) } } function R(a, b, c) { var d, e, f, g, h, i, j, k; (d = c._args) && (e = s(a), f = e.event, null !== f.x && null !== f.y && (i = f.x * e.pixelRatio, j = f.y * e.pixelRatio, g = b.isPointInPath(i, j) || b.isPointInStroke && b.isPointInStroke(i, j)), h = e.transforms, d.eventX = f.x, d.eventY = f.y, d.event = f.event, k = e.transforms.rotate, i = d.eventX, j = d.eventY, 0 !== k ? (d._eventX = i * za(-k) - j * ya(-k), d._eventY = j * za(-k) + i * ya(-k)) : (d._eventX = i, d._eventY = j), d._eventX /= h.scaleX, d._eventY /= h.scaleY, g && e.intersecting.push(d), d.intersects = Boolean(g)) } function S(a, b, c) { b._toRad = b.inDegrees ? va / 180 : 1, a.translate(b.x, b.y), a.rotate(b.rotate * b._toRad), a.translate(-b.x, -b.y), c && (c.rotate += b.rotate * b._toRad) } function T(a, b, c) { 1 !== b.scale && (b.scaleX = b.scaleY = b.scale), a.translate(b.x, b.y), a.scale(b.scaleX, b.scaleY), a.translate(-b.x, -b.y), c && (c.scaleX *= b.scaleX, c.scaleY *= b.scaleY) } function U(a, b, c) { b.translate && (b.translateX = b.translateY = b.translate), a.translate(b.translateX, b.translateY), c && (c.translateX += b.translateX, c.translateY += b.translateY) } function V(a) { for (; a < 0;)a += 2 * va; return a } function W(a, b) { return a.x + a.radius * za(b) } function X(a, b) { return a.y + a.radius * ya(b) } function Y(a, b, c, d) { var e, f, g, h, i, j, k, l, m, n, o; c === d ? (m = 0, n = 0) : (m = c.x, n = c.y), d.inDegrees || 360 !== d.end || (d.end = 2 * va), d.start *= c._toRad, d.end *= c._toRad, d.start -= va / 2, d.end -= va / 2, o = va / 180, d.ccw && (o *= -1), e = W(d, d.start + o), f = X(d, d.start + o), g = W(d, d.start), h = X(d, d.start), $(a, b, c, d, e, f, g, h), b.arc(d.x + m, d.y + n, d.radius, d.start, d.end, d.ccw), i = W(d, d.end + o), j = X(d, d.end + o), k = W(d, d.end), l = X(d, d.end), _(a, b, c, d, k, l, i, j) } function Z(a, b, c, d, e, f, g, h) { var i, j, k, l, m, n, o; d.arrowRadius && !c.closed && (o = Aa(h - f, g - e), o -= va, m = c.strokeWidth * za(o), n = c.strokeWidth * ya(o), i = g + d.arrowRadius * za(o + d.arrowAngle / 2), j = h + d.arrowRadius * ya(o + d.arrowAngle / 2), k = g + d.arrowRadius * za(o - d.arrowAngle / 2), l = h + d.arrowRadius * ya(o - d.arrowAngle / 2), b.moveTo(i - m, j - n), b.lineTo(g - m, h - n), b.lineTo(k - m, l - n), b.moveTo(g - m, h - n), b.lineTo(g + m, h + n), b.moveTo(g, h)) } function $(a, b, c, d, e, f, g, h) { d._arrowAngleConverted || (d.arrowAngle *= c._toRad, d._arrowAngleConverted = !0), d.startArrow && Z(a, b, c, d, e, f, g, h) } function _(a, b, c, d, e, f, g, h) { d._arrowAngleConverted || (d.arrowAngle *= c._toRad, d._arrowAngleConverted = !0), d.endArrow && Z(a, b, c, d, e, f, g, h) } function aa(a, b, c, d) { var e, f, g; for (e = 2, $(a, b, c, d, d.x2 + c.x, d.y2 + c.y, d.x1 + c.x, d.y1 + c.y), void 0 !== d.x1 && void 0 !== d.y1 && b.moveTo(d.x1 + c.x, d.y1 + c.y); ;) { if (f = d["x" + e], g = d["y" + e], void 0 === f || void 0 === g) break; b.lineTo(f + c.x, g + c.y), e += 1 } e -= 1, _(a, b, c, d, d["x" + (e - 1)] + c.x, d["y" + (e - 1)] + c.y, d["x" + e] + c.x, d["y" + e] + c.y) } function ba(a, b, c, d) { var e, f, g, h, i; for (e = 2, $(a, b, c, d, d.cx1 + c.x, d.cy1 + c.y, d.x1 + c.x, d.y1 + c.y), void 0 !== d.x1 && void 0 !== d.y1 && b.moveTo(d.x1 + c.x, d.y1 + c.y); ;) { if (f = d["x" + e], g = d["y" + e], h = d["cx" + (e - 1)], i = d["cy" + (e - 1)], void 0 === f || void 0 === g || void 0 === h || void 0 === i) break; b.quadraticCurveTo(h + c.x, i + c.y, f + c.x, g + c.y), e += 1 } e -= 1, _(a, b, c, d, d["cx" + (e - 1)] + c.x, d["cy" + (e - 1)] + c.y, d["x" + e] + c.x, d["y" + e] + c.y) } function ca(a, b, c, d) { var e, f, g, h, i, j, k, l; for (e = 2, f = 1, $(a, b, c, d, d.cx1 + c.x, d.cy1 + c.y, d.x1 + c.x, d.y1 + c.y), void 0 !== d.x1 && void 0 !== d.y1 && b.moveTo(d.x1 + c.x, d.y1 + c.y); ;) { if (g = d["x" + e], h = d["y" + e], i = d["cx" + f], j = d["cy" + f], k = d["cx" + (f + 1)], l = d["cy" + (f + 1)], void 0 === g || void 0 === h || void 0 === i || void 0 === j || void 0 === k || void 0 === l) break; b.bezierCurveTo(i + c.x, j + c.y, k + c.x, l + c.y, g + c.x, h + c.y), e += 1, f += 2 } e -= 1, f -= 2, _(a, b, c, d, d["cx" + (f + 1)] + c.x, d["cy" + (f + 1)] + c.y, d["x" + e] + c.x, d["y" + e] + c.y) } function da(a, b, c) { return b *= a._toRad, b -= va / 2, c * za(b) } function ea(a, b, c) { return b *= a._toRad, b -= va / 2, c * ya(b) } function fa(a, b, c, d) { var e, f, g, h, i, j, k, l, m, n, o; for (c === d ? (h = 0, i = 0) : (h = c.x, i = c.y), e = 1, j = l = n = d.x + h, k = m = o = d.y + i, $(a, b, c, d, j + da(c, d.a1, d.l1), k + ea(c, d.a1, d.l1), j, k), void 0 !== d.x && void 0 !== d.y && b.moveTo(j, k); ;) { if (f = d["a" + e], g = d["l" + e], void 0 === f || void 0 === g) break; l = n, m = o, n += da(c, f, g), o += ea(c, f, g), b.lineTo(n, o), e += 1 } _(a, b, c, d, l, m, n, o) } function ga(a, b, c) { isNaN(pa(c.fontSize)) || (c.fontSize += "px"), b.font = c.fontStyle + " " + c.fontSize + " " + c.fontFamily } function ha(b, c, d, e) { var f, g, h, i = Ea.propCache; if (i.text === d.text && i.fontStyle === d.fontStyle && i.fontSize === d.fontSize && i.fontFamily === d.fontFamily && i.maxWidth === d.maxWidth && i.lineHeight === d.lineHeight) d.width = i.width, d.height = i.height; else { for (d.width = c.measureText(e[0]).width, h = 1; h < e.length; h += 1)(g = c.measureText(e[h]).width) > d.width && (d.width = g); f = b.style.fontSize, b.style.fontSize = d.fontSize, d.height = qa(a.css(b, "fontSize")) * e.length * d.lineHeight, b.style.fontSize = f } } function ia(a, b) { var c, d, e, f, g, h, i = String(b.text), j = b.maxWidth, k = i.split("\n"), l = []; for (e = 0; e < k.length; e += 1) { if (f = k[e], g = f.split(" "), c = [], d = "", 1 === g.length || a.measureText(f).width < j) c = [f]; else { for (h = 0; h < g.length; h += 1)a.measureText(d + g[h]).width > j && ("" !== d && c.push(d), d = ""), d += g[h], h !== g.length - 1 && (d += " "); c.push(d) } l = l.concat(c.join("\n").replace(/((\n))|($)/gi, "$2").split("\n")) } return l } var ja, ka = b.document, la = b.Image, ma = b.Array, na = b.getComputedStyle, oa = b.Math, pa = b.Number, qa = b.parseFloat, ra = a.extend, sa = a.inArray, ta = function (a) { return Object.prototype.toString.call(a).slice(8, -1).toLowerCase() }, ua = a.isPlainObject, va = oa.PI, wa = oa.round, xa = oa.abs, ya = oa.sin, za = oa.cos, Aa = oa.atan2, Ba = ma.prototype.slice, Ca = a.event.fix, Da = {}, Ea = { dataCache: {}, propCache: {}, imageCache: {} }, Fa = { rotate: 0, scaleX: 1, scaleY: 1, translateX: 0, translateY: 0, masks: [] }, Ga = {}, Ha = ["mousedown", "mousemove", "mouseup", "mouseover", "mouseout", "touchstart", "touchmove", "touchend"], Ia = { events: {}, eventHooks: {}, future: {} }; d.baseDefaults = { align: "center", arrowAngle: 90, arrowRadius: 0, autosave: !0, baseline: "middle", bringToFront: !1, ccw: !1, closed: !1, compositing: "source-over", concavity: 0, cornerRadius: 0, count: 1, cropFromCenter: !0, crossOrigin: null, cursors: null, disableEvents: !1, draggable: !1, dragGroups: null, groups: null, data: null, dx: null, dy: null, end: 360, eventX: null, eventY: null, fillStyle: "transparent", fontStyle: "normal", fontSize: "12pt", fontFamily: "sans-serif", fromCenter: !0, height: null, imageSmoothing: !0, inDegrees: !0, intangible: !1, index: null, letterSpacing: null, lineHeight: 1, layer: !1, mask: !1, maxWidth: null, miterLimit: 10, name: null, opacity: 1, r1: null, r2: null, radius: 0, repeat: "repeat", respectAlign: !1, restrictDragToAxis: null, rotate: 0, rounded: !1, scale: 1, scaleX: 1, scaleY: 1, shadowBlur: 0, shadowColor: "transparent", shadowStroke: !1, shadowX: 0, shadowY: 0, sHeight: null, sides: 0, source: "", spread: 0, start: 0, strokeCap: "butt", strokeDash: null, strokeDashOffset: 0, strokeJoin: "miter", strokeStyle: "transparent", strokeWidth: 1, sWidth: null, sx: null, sy: null, text: "", translate: 0, translateX: 0, translateY: 0, type: null, visible: !0, width: null, x: 0, y: 0 }, ja = new d, c.prototype = ja, Ia.extend = function (b) { return b.name && (b.props && ra(ja, b.props), a.fn[b.name] = function a(d) { var e, f, g, i, j = this; for (f = 0; f < j.length; f += 1)e = j[f], (g = h(e)) && (i = new c(d), H(e, i, d, a), n(e, g, i), b.fn.call(e, g, i)); return j }, b.type && (Da.drawings[b.type] = b.name)), a.fn[b.name] }, a.fn.getEventHooks = function () { var a, b, c = this, d = {}; return 0 !== c.length && (a = c[0], b = s(a), d = b.eventHooks), d }, a.fn.setEventHooks = function (a) { var b, c, d = this; for (b = 0; b < d.length; b += 1)c = s(d[b]), ra(c.eventHooks, a); return d }, a.fn.getLayers = function (a) { var b, c, d, e, g, h = this, i = []; if (0 !== h.length) if (b = h[0], c = s(b), d = c.layers, f(a)) for (g = 0; g < d.length; g += 1)e = d[g], a.call(b, e) && i.push(e); else i = d; return i }, a.fn.getLayer = function (a) { var b, c, d, f, g, h, i = this; if (0 !== i.length) if (b = i[0], c = s(b), d = c.layers, h = ta(a), a && a.layer) f = a; else if ("number" === h) a < 0 && (a = d.length + a), f = d[a]; else if ("regexp" === h) { for (g = 0; g < d.length; g += 1)if (e(d[g].name) && d[g].name.match(a)) { f = d[g]; break } } else f = c.layer.names[a]; return f }, a.fn.getLayerGroup = function (a) { var b, c, d, e, f, g = this, h = ta(a); if (0 !== g.length) if (b = g[0], "array" === h) f = a; else if ("regexp" === h) { c = s(b), d = c.layer.groups; for (e in d) if (e.match(a)) { f = d[e]; break } } else c = s(b), f = c.layer.groups[a]; return f }, a.fn.getLayerIndex = function (a) { var b = this, c = b.getLayers(), d = b.getLayer(a); return sa(d, c) }, a.fn.setLayer = function (b, c) { var d, e, f, h, j, k, l, m = this; for (e = 0; e < m.length; e += 1)if (d = a(m[e]), f = s(m[e]), h = a(m[e]).getLayer(b)) { x(d, f, h, c), y(d, f, h, c), i(c); for (j in c) Object.prototype.hasOwnProperty.call(c, j) && (k = c[j], l = ta(k), "object" === l && ua(k) ? (h[j] = ra({}, k), i(h[j])) : "array" === l ? h[j] = k.slice(0) : "string" === l ? 0 === k.indexOf("+=") ? h[j] += qa(k.substr(2)) : 0 === k.indexOf("-=") ? h[j] -= qa(k.substr(2)) : !isNaN(k) && g(k) && "text" !== j ? h[j] = qa(k) : h[j] = k : h[j] = k); t(d, f, h), w(d, f, h), !1 === a.isEmptyObject(c) && G(d, f, h, "change", c) } return m }, a.fn.setLayers = function (b, c) { var d, e, f, g, h = this; for (e = 0; e < h.length; e += 1)for (d = a(h[e]), f = d.getLayers(c), g = 0; g < f.length; g += 1)d.setLayer(f[g], b); return h }, a.fn.setLayerGroup = function (b, c) { var d, e, f, g, h = this; for (e = 0; e < h.length; e += 1)if (d = a(h[e]), f = d.getLayerGroup(b)) for (g = 0; g < f.length; g += 1)d.setLayer(f[g], c); return h }, a.fn.moveLayer = function (b, c) { var d, e, f, g, h, i = this; for (e = 0; e < i.length; e += 1)d = a(i[e]), f = s(i[e]), g = f.layers, (h = d.getLayer(b)) && (h.index = sa(h, g), g.splice(h.index, 1), g.splice(c, 0, h), c < 0 && (c = g.length + c), h.index = c, G(d, f, h, "move")); return i }, a.fn.removeLayer = function (b) { var c, d, e, f, g, h = this; for (d = 0; d < h.length; d += 1)c = a(h[d]), e = s(h[d]), f = c.getLayers(), (g = c.getLayer(b)) && (g.index = sa(g, f), f.splice(g.index, 1), delete g._layer, x(c, e, g, { name: null }), y(c, e, g, { groups: null }), G(c, e, g, "remove")); return h }, a.fn.removeLayers = function (b) { var c, d, e, f, g, h, i = this; for (d = 0; d < i.length; d += 1) { for (c = a(i[d]), e = s(i[d]), f = c.getLayers(b).slice(0), h = 0; h < f.length; h += 1)g = f[h], c.removeLayer(g); e.layer.names = {}, e.layer.groups = {} } return i }, a.fn.removeLayerGroup = function (b) { var c, d, e, f, g = this; if (void 0 !== b) for (d = 0; d < g.length; d += 1)if (c = a(g[d]), e = c.getLayerGroup(b)) for (e = e.slice(0), f = 0; f < e.length; f += 1)c.removeLayer(e[f]); return g }, a.fn.addLayerToGroup = function (b, c) { var d, e, f, g = this, h = [c]; for (e = 0; e < g.length; e += 1)d = a(g[e]), f = d.getLayer(b), f.groups && (h = f.groups.slice(0), -1 === sa(c, f.groups) && h.push(c)), d.setLayer(f, { groups: h }); return g }, a.fn.removeLayerFromGroup = function (b, c) { var d, e, f, g, h = this, i = []; for (e = 0; e < h.length; e += 1)d = a(h[e]), f = d.getLayer(b), f.groups && -1 !== (g = sa(c, f.groups)) && (i = f.groups.slice(0), i.splice(g, 1), d.setLayer(f, { groups: i })); return h }, Ga.cursors = ["grab", "grabbing", "zoom-in", "zoom-out"], Ga.prefix = function () { var a = na(ka.documentElement, ""); return "-" + (Ba.call(a).join("").match(/-(moz|webkit|ms)-/) || "" === a.OLink && ["", "o"])[1] + "-" }(), a.fn.triggerLayerEvent = function (b, c) { var d, e, f, g = this; for (e = 0; e < g.length; e += 1)d = a(g[e]), f = s(g[e]), (b = d.getLayer(b)) && G(d, f, b, c); return g }, a.fn.drawLayer = function (b) { var c, d, e, f, g = this; for (c = 0; c < g.length; c += 1)e = a(g[c]), (d = h(g[c])) && (f = e.getLayer(b), A(e, d, f)); return g }, a.fn.drawLayers = function (b) { var c, d, e, f, g, i, k, l, m, n, o, p, q, r = this, t = b || {}; for (l = t.index, l || (l = 0), d = 0; d < r.length; d += 1)if (c = a(r[d]), e = h(r[d])) { for (n = s(r[d]), !1 !== t.clear && c.clearCanvas(), t.complete && (n.drawLayersComplete = t.complete), f = n.layers, k = l; k < f.length; k += 1)if (g = f[k], g.index = k, t.resetFire && (g._fired = !1), A(c, e, g, k + 1), g._masks = n.transforms.masks.slice(0), g._method === a.fn.drawImage && g.visible) { q = !0; break } if (q) continue; m = k, t.complete && (t.complete.call(r[d]), delete n.drawLayersComplete), g = z(n), o = n.event, p = o.type, n.drag.layer && B(c, n, p), i = n.lastIntersected, null === i || g === i || !i._hovered || i._fired || n.drag.dragging || (n.lastIntersected = null, i._fired = !0, i._hovered = !1, G(c, n, i, "mouseout"), D(c, n)), g && (g[p] || (p = P(p)), g._event && g.intersects && (n.lastIntersected = g, (g.mouseover || g.mouseout || g.cursors) && !n.drag.dragging && (g._hovered || g._fired || (g._fired = !0, g._hovered = !0, G(c, n, g, "mouseover"))), g._fired || (g._fired = !0, o.type = null, G(c, n, g, p)), !g.draggable || g.disableEvents || "mousedown" !== p && "touchstart" !== p || (n.drag.layer = g, n.originalRedrawOnMousemove = n.redrawOnMousemove, n.redrawOnMousemove = !0))), null !== g || n.drag.dragging || D(c, n), m === f.length && (n.intersecting.length = 0, n.transforms = j(Fa), n.savedTransforms.length = 0) } return r }, a.fn.addLayer = function (a) { var b, d, e = this; for (b = 0; b < e.length; b += 1)h(e[b]) && (d = new c(a), d.layer = !0, H(e[b], d, a)); return e }, Ga.props = ["width", "height", "opacity", "lineHeight"], Ga.propsObj = {}, a.fn.animateLayer = function () { var b, c, d, e, g, i = this, j = Ba.call(arguments, 0); for ("object" === ta(j[2]) ? (j.splice(2, 0, j[2].duration || null), j.splice(3, 0, j[3].easing || null), j.splice(4, 0, j[4].complete || null), j.splice(5, 0, j[5].step || null)) : (void 0 === j[2] ? (j.splice(2, 0, null), j.splice(3, 0, null), j.splice(4, 0, null)) : f(j[2]) && (j.splice(2, 0, null), j.splice(3, 0, null)), void 0 === j[3] ? (j[3] = null, j.splice(4, 0, null)) : f(j[3]) && j.splice(3, 0, null)), c = 0; c < i.length; c += 1)b = a(i[c]), h(i[c]) && (d = s(i[c]), (e = b.getLayer(j[0])) && e._method !== a.fn.draw && (g = ra({}, j[1]), g = K(i[c], e, g), J(g, !0), J(e), e.style = Ga.propsObj, a(e).animate(g, { duration: j[2], easing: a.easing[j[3]] ? j[3] : null, complete: function (a, b, c) { return function () { I(c), L(c), b.animating && b.animated !== c || a.drawLayers(), c._animating = !1, b.animating = !1, b.animated = null, j[4] && j[4].call(a[0], c), G(a, b, c, "animateend") } }(b, d, e), step: function (a, b, c) { return function (d, e) { var f, g, h, i = !1; "_" === e.prop[0] && (i = !0, e.prop = e.prop.replace("_", ""), c[e.prop] = c["_" + e.prop]), -1 !== e.prop.indexOf(".") && (f = e.prop.split("."), g = f[0], h = f[1], c[g] && (c[g][h] = e.now)), c._pos !== e.pos && (c._pos = e.pos, c._animating || b.animating || (c._animating = !0, b.animating = !0, b.animated = c), b.animating && b.animated !== c || a.drawLayers()), j[5] && j[5].call(a[0], d, e, c), G(a, b, c, "animate", e), i && (e.prop = "_" + e.prop) } }(b, d, e) }), G(b, d, e, "animatestart"))); return i }, a.fn.animateLayerGroup = function (b) { var c, d, e, f, g = this, h = Ba.call(arguments, 0); for (d = 0; d < g.length; d += 1)if (c = a(g[d]), e = c.getLayerGroup(b)) for (f = 0; f < e.length; f += 1)h[0] = e[f], c.animateLayer.apply(c, h); return g }, a.fn.delayLayer = function (b, c) { var d, e, f, g, h = this; for (c = c || 0, e = 0; e < h.length; e += 1)d = a(h[e]), f = s(h[e]), (g = d.getLayer(b)) && (a(g).delay(c), G(d, f, g, "delay")); return h }, a.fn.delayLayerGroup = function (b, c) { var d, e, f, g, h, i = this; for (c = c || 0, e = 0; e < i.length; e += 1)if (d = a(i[e]), f = d.getLayerGroup(b)) for (h = 0; h < f.length; h += 1)g = f[h], d.delayLayer(g, c); return i }, a.fn.stopLayer = function (b, c) { var d, e, f, g, h = this; for (e = 0; e < h.length; e += 1)d = a(h[e]), f = s(h[e]), (g = d.getLayer(b)) && (a(g).stop(c), G(d, f, g, "stop")); return h }, a.fn.stopLayerGroup = function (b, c) { var d, e, f, g, h, i = this; for (e = 0; e < i.length; e += 1)if (d = a(i[e]), f = d.getLayerGroup(b)) for (h = 0; h < f.length; h += 1)g = f[h], d.stopLayer(g, c); return i }, function (b) { var c; for (c = 0; c < b.length; c += 1)a.fx.step[b[c]] = N }(["color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "fillStyle", "outlineColor", "strokeStyle", "shadowColor"]), Da.touchEvents = { mousedown: "touchstart", mouseup: "touchend", mousemove: "touchmove" }, Da.mouseEvents = { touchstart: "mousedown", touchend: "mouseup", touchmove: "mousemove" }, function (a) { var b; for (b = 0; b < a.length; b += 1)Q(a[b]) }(["click", "dblclick", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "touchstart", "touchmove", "touchend", "pointerdown", "pointermove", "pointerup", "contextmenu"]), a.event.fix = function (b) { var c, d, e; if (b = Ca.call(a.event, b), d = b.originalEvent) if (e = d.changedTouches, void 0 !== b.pageX && void 0 === b.offsetX) try { c = a(b.currentTarget).offset(), c && (b.offsetX = b.pageX - c.left, b.offsetY = b.pageY - c.top) } catch (a) { } else if (e) try { c = a(b.currentTarget).offset(), c && (b.offsetX = e[0].pageX - c.left, b.offsetY = e[0].pageY - c.top) } catch (a) { } return b }, Da.drawings = { arc: "drawArc", bezier: "drawBezier", ellipse: "drawEllipse", function: "draw", image: "drawImage", line: "drawLine", path: "drawPath", polygon: "drawPolygon", slice: "drawSlice", quadratic: "drawQuadratic", rectangle: "drawRect", text: "drawText", vector: "drawVector", save: "saveCanvas", restore: "restoreCanvas", rotate: "rotateCanvas", scale: "scaleCanvas", translate: "translateCanvas" }, a.fn.draw = function a(b) { var d, e, f = this, g = new c(b); if (Da.drawings[g.type] && "function" !== g.type) f[Da.drawings[g.type]](b); else for (d = 0; d < f.length; d += 1)(e = h(f[d])) && (g = new c(b), H(f[d], g, b, a), g.visible && g.fn && g.fn.call(f[d], e, g)); return f }, a.fn.clearCanvas = function a(b) { var d, e, f = this, g = new c(b); for (d = 0; d < f.length; d += 1)(e = h(f[d])) && (null === g.width || null === g.height ? (e.save(), e.setTransform(1, 0, 0, 1, 0, 0), e.clearRect(0, 0, f[d].width, f[d].height), e.restore()) : (H(f[d], g, b, a), r(f[d], e, g, g.width, g.height), e.clearRect(g.x - g.width / 2, g.y - g.height / 2, g.width, g.height), p(e, g))); return f }, a.fn.saveCanvas = function a(b) { var d, e, f, g, i, j = this; for (d = 0; d < j.length; d += 1)if (e = h(j[d])) for (g = s(j[d]), f = new c(b), H(j[d], f, b, a), i = 0; i < f.count; i += 1)k(e, g); return j }, a.fn.restoreCanvas = function a(b) { var d, e, f, g, i, j = this; for (d = 0; d < j.length; d += 1)if (e = h(j[d])) for (g = s(j[d]), f = new c(b), H(j[d], f, b, a), i = 0; i < f.count; i += 1)l(e, g); return j }, a.fn.rotateCanvas = function a(b) { var d, e, f, g, i = this; for (d = 0; d < i.length; d += 1)(e = h(i[d])) && (g = s(i[d]), f = new c(b), H(i[d], f, b, a), f.autosave && k(e, g), S(e, f, g.transforms)); return i }, a.fn.scaleCanvas = function a(b) { var d, e, f, g, i = this; for (d = 0; d < i.length; d += 1)(e = h(i[d])) && (g = s(i[d]), f = new c(b), H(i[d], f, b, a), f.autosave && k(e, g), T(e, f, g.transforms)); return i }, a.fn.translateCanvas = function a(b) { var d, e, f, g, i = this; for (d = 0; d < i.length; d += 1)(e = h(i[d])) && (g = s(i[d]), f = new c(b), H(i[d], f, b, a), f.autosave && k(e, g), U(e, f, g.transforms)); return i }, a.fn.drawRect = function a(b) { var d, e, f, g, i, j, k, l, m, o = this; for (d = 0; d < o.length; d += 1)(e = h(o[d])) && (f = new c(b), H(o[d], f, b, a), f.visible && (r(o[d], e, f, f.width, f.height), n(o[d], e, f), e.beginPath(), f.width && f.height && (g = f.x - f.width / 2, i = f.y - f.height / 2, l = xa(f.cornerRadius), l ? (j = f.x + f.width / 2, k = f.y + f.height / 2, f.width < 0 && (m = g, g = j, j = m), f.height < 0 && (m = i, i = k, k = m), j - g - 2 * l < 0 && (l = (j - g) / 2), k - i - 2 * l < 0 && (l = (k - i) / 2), e.moveTo(g + l, i), e.lineTo(j - l, i), e.arc(j - l, i + l, l, 3 * va / 2, 2 * va, !1), e.lineTo(j, k - l), e.arc(j - l, k - l, l, 0, va / 2, !1), e.lineTo(g + l, k), e.arc(g + l, k - l, l, va / 2, va, !1), e.lineTo(g, i + l), e.arc(g + l, i + l, l, va, 3 * va / 2, !1), f.closed = !0) : e.rect(g, i, f.width, f.height)), R(o[d], e, f), q(o[d], e, f))); return o }, a.fn.drawArc = function a(b) { var d, e, f, g = this; for (d = 0; d < g.length; d += 1)(e = h(g[d])) && (f = new c(b), H(g[d], f, b, a), f.visible && (r(g[d], e, f, 2 * f.radius), n(g[d], e, f), e.beginPath(), Y(g[d], e, f, f), R(g[d], e, f), q(g[d], e, f))); return g }, a.fn.drawEllipse = function a(b) { var d, e, f, g, i, j = this; for (d = 0; d < j.length; d += 1)(e = h(j[d])) && (f = new c(b), H(j[d], f, b, a), f.visible && (r(j[d], e, f, f.width, f.height), n(j[d], e, f), g = f.width * (4 / 3), i = f.height, e.beginPath(), e.moveTo(f.x, f.y - i / 2), e.bezierCurveTo(f.x - g / 2, f.y - i / 2, f.x - g / 2, f.y + i / 2, f.x, f.y + i / 2), e.bezierCurveTo(f.x + g / 2, f.y + i / 2, f.x + g / 2, f.y - i / 2, f.x, f.y - i / 2), R(j[d], e, f), f.closed = !0, q(j[d], e, f))); return j }, a.fn.drawPolygon = function a(b) { var d, e, f, g, i, j, k, l, m, o, p = this; for (d = 0; d < p.length; d += 1)if ((e = h(p[d])) && (f = new c(b), H(p[d], f, b, a), f.visible)) { for (r(p[d], e, f, 2 * f.radius), n(p[d], e, f), i = 2 * va / f.sides, j = i / 2, g = j + va / 2, k = f.radius * za(j), e.beginPath(), o = 0; o < f.sides; o += 1)l = f.x + f.radius * za(g), m = f.y + f.radius * ya(g), e.lineTo(l, m), f.concavity && (l = f.x + (k + -k * f.concavity) * za(g + j), m = f.y + (k + -k * f.concavity) * ya(g + j), e.lineTo(l, m)), g += i; R(p[d], e, f), f.closed = !0, q(p[d], e, f) } return p }, a.fn.drawSlice = function a(b) { var d, e, f, g, i, j, k = this; for (d = 0; d < k.length; d += 1)(e = h(k[d])) && (f = new c(b), H(k[d], f, b, a), f.visible && (r(k[d], e, f, 2 * f.radius), n(k[d], e, f), f.start *= f._toRad, f.end *= f._toRad, f.start -= va / 2, f.end -= va / 2, f.start = V(f.start), f.end = V(f.end), f.end < f.start && (f.end += 2 * va), g = (f.start + f.end) / 2, i = f.radius * f.spread * za(g), j = f.radius * f.spread * ya(g), f.x += i, f.y += j, e.beginPath(), e.arc(f.x, f.y, f.radius, f.start, f.end, f.ccw), e.lineTo(f.x, f.y), R(k[d], e, f), f.closed = !0, q(k[d], e, f))); return k }, a.fn.drawLine = function a(b) { var d, e, f, g = this; for (d = 0; d < g.length; d += 1)(e = h(g[d])) && (f = new c(b), H(g[d], f, b, a), f.visible && (r(g[d], e, f), n(g[d], e, f), e.beginPath(), aa(g[d], e, f, f), R(g[d], e, f), q(g[d], e, f))); return g }, a.fn.drawQuadratic = function a(b) { var d, e, f, g = this; for (d = 0; d < g.length; d += 1)(e = h(g[d])) && (f = new c(b), H(g[d], f, b, a), f.visible && (r(g[d], e, f), n(g[d], e, f), e.beginPath(), ba(g[d], e, f, f), R(g[d], e, f), q(g[d], e, f))); return g }, a.fn.drawBezier = function a(b) { var d, e, f, g = this; for (d = 0; d < g.length; d += 1)(e = h(g[d])) && (f = new c(b), H(g[d], f, b, a), f.visible && (r(g[d], e, f), n(g[d], e, f), e.beginPath(), ca(g[d], e, f, f), R(g[d], e, f), q(g[d], e, f))); return g }, a.fn.drawVector = function a(b) { var d, e, f, g = this; for (d = 0; d < g.length; d += 1)(e = h(g[d])) && (f = new c(b), H(g[d], f, b, a), f.visible && (r(g[d], e, f), n(g[d], e, f), e.beginPath(), fa(g[d], e, f, f), R(g[d], e, f), q(g[d], e, f))); return g }, a.fn.drawPath = function a(b) { var d, e, f, g, i, j = this; for (d = 0; d < j.length; d += 1)if ((e = h(j[d])) && (f = new c(b), H(j[d], f, b, a), f.visible)) { for (r(j[d], e, f), n(j[d], e, f), e.beginPath(), g = 1; ;) { if (void 0 === (i = f["p" + g])) break; i = new c(i), "line" === i.type ? aa(j[d], e, f, i) : "quadratic" === i.type ? ba(j[d], e, f, i) : "bezier" === i.type ? ca(j[d], e, f, i) : "vector" === i.type ? fa(j[d], e, f, i) : "arc" === i.type && Y(j[d], e, f, i), g += 1 } R(j[d], e, f), q(j[d], e, f) } return j }, a.fn.drawText = function a(b) { var d, e, f, g, i, j, k, l, m, o, q, s, t, u, v = this; for (d = 0; d < v.length; d += 1)if ((e = h(v[d])) && (f = new c(b), H(v[d], f, b, a), f.visible)) { if (e.textBaseline = f.baseline, e.textAlign = f.align, ga(v[d], e, f), i = null !== f.maxWidth ? ia(e, f) : f.text.toString().split("\n"), ha(v[d], e, f, i), g && (g.width = f.width, g.height = f.height), r(v[d], e, f, f.width, f.height), n(v[d], e, f), t = f.x, "left" === f.align ? f.respectAlign ? f.x += f.width / 2 : t -= f.width / 2 : "right" === f.align && (f.respectAlign ? f.x -= f.width / 2 : t += f.width / 2), f.radius) for (l = qa(f.fontSize), null === f.letterSpacing && (f.letterSpacing = l / 500), k = 0; k < i.length; k += 1) { for (e.save(), e.translate(f.x, f.y), j = i[k], f.flipArcText && (o = j.split(""), o.reverse(), j = o.join("")), m = j.length, e.rotate(-va * f.letterSpacing * (m - 1) / 2), s = 0; s < m; s += 1)q = j[s], 0 !== s && e.rotate(va * f.letterSpacing), e.save(), e.translate(0, -f.radius), f.flipArcText && e.scale(-1, -1), e.fillText(q, 0, 0), "transparent" !== f.fillStyle && (e.shadowColor = "transparent"), 0 !== f.strokeWidth && e.strokeText(q, 0, 0), e.restore(); f.radius -= l, f.letterSpacing += l / (1e3 * va), e.restore() } else for (k = 0; k < i.length; k += 1)j = i[k], u = f.y + k * f.height / i.length - (i.length - 1) * f.height / i.length / 2, e.shadowColor = f.shadowColor, e.fillText(j, t, u), "transparent" !== f.fillStyle && (e.shadowColor = "transparent"), 0 !== f.strokeWidth && e.strokeText(j, t, u); u = 0, "top" === f.baseline ? u += f.height / 2 : "bottom" === f.baseline && (u -= f.height / 2), f._event && (e.beginPath(), e.rect(f.x - f.width / 2, f.y - f.height / 2 + u, f.width, f.height), R(v[d], e, f), e.closePath()), p(e, f) } return Ea.propCache = f, v }, a.fn.measureText = function (a) { var b, d, e, f = this; return d = f.getLayer(a), (!d || d && !d._layer) && (d = new c(a)), b = h(f[0]), b && (ga(f[0], b, d), e = null !== d.maxWidth ? ia(b, d) : d.text.split("\n"), ha(f[0], b, d, e)), d }, a.fn.drawImage = function b(d) { function e(a, b, c, d, e) { null === d.width && null === d.sWidth && (d.width = d.sWidth = q.width), null === d.height && null === d.sHeight && (d.height = d.sHeight = q.height), e && (e.width = d.width, e.height = d.height), null !== d.sWidth && null !== d.sHeight && null !== d.sx && null !== d.sy ? (null === d.width && (d.width = d.sWidth), null === d.height && (d.height = d.sHeight), d.cropFromCenter && (d.sx += d.sWidth / 2, d.sy += d.sHeight / 2), d.sy - d.sHeight / 2 < 0 && (d.sy = d.sHeight / 2), d.sy + d.sHeight / 2 > q.height && (d.sy = q.height - d.sHeight / 2), d.sx - d.sWidth / 2 < 0 && (d.sx = d.sWidth / 2), d.sx + d.sWidth / 2 > q.width && (d.sx = q.width - d.sWidth / 2), r(a, b, d, d.width, d.height), n(a, b, d), b.drawImage(q, d.sx - d.sWidth / 2, d.sy - d.sHeight / 2, d.sWidth, d.sHeight, d.x - d.width / 2, d.y - d.height / 2, d.width, d.height)) : (r(a, b, d, d.width, d.height), n(a, b, d), b.drawImage(q, d.x - d.width / 2, d.y - d.height / 2, d.width, d.height)), b.beginPath(), b.rect(d.x - d.width / 2, d.y - d.height / 2, d.width, d.height), R(a, b, d), b.closePath(), p(b, d), o(b, c, d) } function f(b, c, d, f, g) { return function () { var h = a(b); if (e(b, c, d, f, g), f.layer ? G(h, d, g, "load") : f.load && f.load.call(h[0], g), f.layer && (g._masks = d.transforms.masks.slice(0), f._next)) { var i = d.drawLayersComplete; delete d.drawLayersComplete, h.drawLayers({ clear: !1, resetFire: !0, index: f._next, complete: i }) } } } var g, i, j, k, l, m, q, t, u, v = this, w = Ea.imageCache; for (i = 0; i < v.length; i += 1)g = v[i], (j = h(v[i])) && (k = s(v[i]), l = new c(d), m = H(v[i], l, d, b), l.visible && (u = l.source, t = u.getContext, u.src || t ? q = u : u && (w[u] && w[u].complete ? q = w[u] : (q = new la, u.match(/^data:/i) || (q.crossOrigin = l.crossOrigin), q.src = u, w[u] = q)), q && (q.complete || t ? f(g, j, k, l, m)() : (q.onload = f(g, j, k, l, m), q.src = q.src)))); return v },
     a.fn.createPattern = function (b) { function d() { k = e.createPattern(i, g.repeat), g.load && g.load.call(m[0], k) } var e, g, i, j, k, l, m = this; return e = h(m[0]), e ? (g = new c(b), l = g.source, f(l) ? (i = a("<canvas />")[0], i.width = g.width, i.height = g.height, j = h(i), l.call(i, j), d()) : (j = l.getContext, l.src || j ? i = l : (i = new la, l.match(/^data:/i) || (i.crossOrigin = g.crossOrigin), i.src = l), i.complete || j ? d() : (i.onload = d, i.src = i.src))) : k = null, k }, a.fn.createGradient = function (a) { var b, d, e, f, g, i, j, k, l, m, n = this, o = []; if (d = new c(a), b = h(n[0])) { for (d.x1 = d.x1 || 0, d.y1 = d.y1 || 0, d.x2 = d.x2 || 0, d.y2 = d.y2 || 0, e = null !== d.r1 && null !== d.r2 ? b.createRadialGradient(d.x1, d.y1, d.r1, d.x2, d.y2, d.r2) : b.createLinearGradient(d.x1, d.y1, d.x2, d.y2), j = 1; void 0 !== d["c" + j]; j += 1)void 0 !== d["s" + j] ? o.push(d["s" + j]) : o.push(null); for (f = o.length, null === o[0] && (o[0] = 0), null === o[f - 1] && (o[f - 1] = 1), j = 0; j < f; j += 1) { if (null !== o[j]) { for (l = 1, m = 0, g = o[j], k = j + 1; k < f; k += 1) { if (null !== o[k]) { i = o[k]; break } l += 1 } g > i && (o[k] = o[j]) } else null === o[j] && (m += 1, o[j] = g + m * ((i - g) / l)); e.addColorStop(o[j], d["c" + (j + 1)]) } } else e = null; return e }, a.fn.setPixels = function a(b) { var d, e, f, g, i, j, k, l, m, n, o = this; for (e = 0; e < o.length; e += 1)if (d = o[e], f = h(d), g = s(o[e]), f && (i = new c(b), H(d, i, b, a), r(o[e], f, i, i.width, i.height), null !== i.width && null !== i.height || (i.width = d.width, i.height = d.height, i.x = i.width / 2, i.y = i.height / 2), 0 !== i.width && 0 !== i.height)) { if (k = f.getImageData((i.x - i.width / 2) * g.pixelRatio, (i.y - i.height / 2) * g.pixelRatio, i.width * g.pixelRatio, i.height * g.pixelRatio), l = k.data, n = l.length, i.each) for (m = 0; m < n; m += 4)j = { r: l[m], g: l[m + 1], b: l[m + 2], a: l[m + 3] }, i.each.call(d, j, i), l[m] = j.r, l[m + 1] = j.g, l[m + 2] = j.b, l[m + 3] = j.a; f.putImageData(k, (i.x - i.width / 2) * g.pixelRatio, (i.y - i.height / 2) * g.pixelRatio), f.restore() } return o }, a.fn.getCanvasImage = function (a, b) { var c, d = this, e = null; return 0 !== d.length && (c = d[0], c.toDataURL && (void 0 === b && (b = 1), e = c.toDataURL("image/" + a, b))), e }, a.fn.detectPixelRatio = function (a) { var c, d, e, f, g, i, j, k, l, m = this; for (d = 0; d < m.length; d += 1)c = m[d], e = h(c), l = s(m[d]), l.scaled || (f = b.devicePixelRatio || 1, g = e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1, i = f / g, 1 !== i && (j = c.width, k = c.height, c.width = j * i, c.height = k * i, c.style.width = j + "px", c.style.height = k + "px", e.scale(i, i)), l.pixelRatio = i, l.scaled = !0, a && a.call(c, i)); return m }, Ia.clearCache = function () { var a; for (a in Ea) Object.prototype.hasOwnProperty.call(Ea, a) && (Ea[a] = {}) }, a.support.canvas = void 0 !== a("<canvas />")[0].getContext, ra(Ia, { defaults: ja, setGlobalProps: n, transformShape: r, detectEvents: R, closePath: q, setCanvasFont: ga, measureText: ha }), a.jCanvas = Ia, a.jCanvasObject = c
 });


















var svo_value = "individualism";

 //長谷川くんからの贈り物
 //svoサークル
 /// <reference path="createJS.js" />

/// <reference path="createJS.js" />


//
// var debug = false;

//ゲームのステージ
var game_stage;
//キャンバスの大きさ
var canvasWidth;
var canvasHeight;

//pixi_Test
const position = {
    boxWidth: 1000,
    // boxHeight: 700,
    boxHeight: 1000,
    // modelScale: 0.45,
    modelScale: 0.25,
    modelX: 0,
    // modelY: 500,
    modelY: 210,
  };

//座標
//グローバルに用いている
var svo_X = 0;
var svo_Y = 0;

//四捨五入する桁
var roound = 5;

//座標を更新
function updateZahyou(x,y){
    //グローバルに用いている。svo_Xは一時的な変数ではない。ここの関数でのみsvo_X,Yを
    //変更している。
    svo_X = roundDecimal(x,roound);
    svo_Y = roundDecimal(y,roound);

    //console.log("x : "+svo_X);
    //console.log("y : "+svo_Y);
}

// 四捨五入
function roundDecimal(value, n){
    return Math.round(value * Math.pow(10, n) ) / Math.pow(10, n);
}


//ロード時に、initを実行
window.addEventListener("load", init);
//VOICEVOXのサーバーアドレス 　サーバーはngrok等でhttps化しないとだめ　
const serverURL = "https://a48e-2400-2651-41c2-1500-4405-5e59-5c98-3b57.jp.ngrok.io";
// const serverURL = "";
const debug = false;
const modelPath = "https://cdn.jsdelivr.net/gh/edu-053/AgentInteractionResources@39f3aed18d17f3ff893b842a2c5bef6e19af406e/Resources/Hiyori_free_2/hiyori_free_t08_2.model3.json";
// const modelPath = "";


  //背景色
  //const jfe = document.querySelector(".JFE");
  //jfe.classList.add("bg-danger");
  //次ボタンを隠す
  const requiredResources = [
      "https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js",
      "https://cdn.jsdelivr.net/gh/dylanNew/live2d/webgl/Live2D/lib/live2d.min.js",
      "https://e-sato.net/hiyori_3d_pixi/js/IndexLibrary_pareto.js",

  ];

  const loadScript = (idx) => {
      console.log("Loading ", requiredResources[idx]);
      jQuery.getScript(requiredResources[idx], function () {
          if (idx + 1 < requiredResources.length) {
              loadScript(idx + 1);
          } 
          else {
              initExp();
          }
      });
  };

  const initExp = () => {
      //インスタンス作成＆DOMLoad操作
      console.log("ロード");
      indexLibrary = new IndexLibrary(debug, serverURL, modelPath, position);
      indexLibrary.onload();
      indexLibrary.set_limit(limit);
      
  };
  
  console.log("ロード");
  console.log("スクリプト読み込み");
  loadScript(0);

//初期化関数、init、最初に1回実行される
function init() {
    loadScript(0);
    // header("Access-Control-Allow-Origin: *");
    //キャンバス情報を取得、キャンバス扱いに
    const gameCanvas = /** @type {HTMLCanvasElement} */ (document.getElementById("myCanvasBottom"));
    //横、縦の大きさも取得
    canvasWidth = gameCanvas.width;
    canvasHeight = gameCanvas.height;
    //ステージを取得
    game_stage = new createjs.Stage("myCanvasBottom");
    //マウスオーバーを有効に
    game_stage.enableMouseOver();

    //円のプロパティを初期化
    initSvoValue();

    //svoの円
    var svo = new SVOcircle();
    svo.x = svo_position_x;
    svo.y = svo_position_y;
    
    //ウィンドウのタイミングに合わせる
    if(!debug)createjs.Ticker.timingMode = createjs.Ticker.RAF;

    // 自動的に画面更新させます。
    createjs.Ticker.addEventListener("tick", game_stage);

}

//SVOcircleのプロパティ
{
    //円の位置
    var svo_position_x;
    var svo_position_y;
    var svo_r_size;
    var svo_r_rec;
    var svo_circle_fillColor = "rgba(0,0,0,0.1)";
    //特定する場所
    var point_r_size = 10;
    var point_flag = false;

    //SVOアングルの名前リスト、0度から反時計回り
    // var svo_text_list = ["Individualism","Cooperation","Altruism","Martyrdom","Masochism","Sadomasochism","Sadism","Competition"];
    var svo_text_list = ["Individualistic","","Competitive","","Sadistic","","Sadomasochistic","","Masochistic","","Martyrdom","","Altruistic","","Cooperative",""];

}
var svo_text_list_small = ["individualism","ind_com","competition","com_sad","sadism","sad_sad","sadomasochism","sad_mas","masochism","mas_mar","martyrdom","mar_alt","altruism","alt_coo","cooperation","coo_ind"];

//円のプロパティの初期化
function initSvoValue(){
    svo_position_x = canvasWidth/2;
    svo_position_y = canvasHeight/2;
    // svo_r_size = canvasHeight * 0.3;
    svo_r_size = 100;
    svo_r_rec = svo_r_size-1;
}


var ten = [new createjs.Shape(),new createjs.Shape(),new createjs.Shape(),new createjs.Shape(),new createjs.Shape(),new createjs.Shape(),new createjs.Shape(),new createjs.Shape(),new createjs.Shape(),new createjs.Shape(),new createjs.Shape(),new createjs.Shape(),new createjs.Shape(),new createjs.Shape(),new createjs.Shape(),new createjs.Shape()];
var tenXY = [[100,0],[92,38],[70,70],[38,92],[0,100],[-38,92],[-70,70],[-92,38],[-100,0],[-92,-38],[-70,-70],[-38,-92],[0,-100],[38,-92],[70,-70],[92,-38]];
//円を描くclass
class SVOcircle extends createjs.Container{

    constructor(){
        super();

        game_stage.addChild(this);

        //見た目の円
        var circle = new createjs.Shape();
        this.addChild(circle);
        circle.graphics
            .setStrokeStyle(2)
            .beginStroke("black")
            .beginFill(svo_circle_fillColor)
            .drawCircle(0,0,svo_r_size);

        //横線
        var line_x = new createjs.Shape();
        this.addChild(line_x);
        line_x.graphics
            .setStrokeStyle(1)
            .beginStroke("black")
            .drawRect(-svo_r_size*1.05,0,svo_r_size*2.1,0);

        //縦線
        var line_y = new createjs.Shape();
        this.addChild(line_y);
        line_y.graphics
            .setStrokeStyle(1)
            .beginStroke("black")
            .drawRect(0,-svo_r_size*1.05,0,svo_r_size*2.1);
  
        //svoのてきすと
        for(var i=0;i<svo_text_list.length;i++){
            //console.log(svo_text_list[i]);
            //位置
            var x_e = Math.cos(Math.PI / 8 * i);
            var y_e = Math.sin(Math.PI / 8 * i);

            //座標点
            // var ten = new createjs.Shape();
            this.addChild(ten[i]);
            ten[i].graphics
                .setStrokeStyle(0)
                .beginFill("gray")
                .drawCircle(0,0,10);

            ten[i].x = x_e * svo_r_size;
            ten[i].y = y_e * svo_r_size;
            // ten.x = x_e * (svo_r_size+10);
            // ten.y = y_e * (svo_r_size+10);

            //名称
            var text = new createjs.Text("","","");
            this.addChild(text);
            // ["Indivisualism","Cooperation","Altruism","Martyrdom","Masochism","Sadomasochism","Sadism","Competition"];
            text.text = svo_text_list[i];
            text.font = "12px sans-serif";
            text.color = "black";
            text.textAlign = "center";
            text.textBaseline = "bottom";

            text.x = x_e * svo_r_size * 1.5;
            text.y = y_e * svo_r_size * 1.3;


            //円内部の時
            ten[i].addEventListener("mouseover",handleMouseOverCircle);
            function handleMouseOverCircle() {point_flag = true;}

            //円外部の時
            ten[i].addEventListener("mouseout",handleMouseOutCircle);
            function handleMouseOutCircle() {point_flag = false;}

        }

        function handleClickCirclex(ten_num){
            //ここで赤点の位置を決めている。
            var X = game_stage.mouseX-svo_position_x-100;
            var Y = game_stage.mouseY-svo_position_y;
            point.x = tenXY[ten_num][0]-100;
            point.y = tenXY[ten_num][1];
            X = X / svo_r_rec;
            Y = Y / svo_r_rec;
            updateZahyou(X,Y);
            svo_value = svo_text_list_small[ten_num];
        }
        //クリックされたとき
        var handleCilickArray = [handleClickCircle0,handleClickCircle1,handleClickCircle2,handleClickCircle3,handleClickCircle4,handleClickCircle5,handleClickCircle6,handleClickCircle7,handleClickCircle8,handleClickCircle9,handleClickCircle10,handleClickCircle11,handleClickCircle12,handleClickCircle13,handleClickCircle14,handleClickCircle15];
        for(var i=0;i<handleCilickArray.length;i++){
            ten[i].addEventListener("click",handleCilickArray[i]);
        }
        function handleClickCircle0() {handleClickCirclex(0);}
        function handleClickCircle1() {handleClickCirclex(1);}
        function handleClickCircle2() {handleClickCirclex(2);}
        function handleClickCircle3() {handleClickCirclex(3);}
        function handleClickCircle4() {handleClickCirclex(4);}
        function handleClickCircle5() {handleClickCirclex(5);}
        function handleClickCircle6() {handleClickCirclex(6);}
        function handleClickCircle7() {handleClickCirclex(7);}
        function handleClickCircle8() {handleClickCirclex(8);}
        function handleClickCircle9() {handleClickCirclex(9);}
        function handleClickCircle10() {handleClickCirclex(10);}
        function handleClickCircle11() {handleClickCirclex(11);}
        function handleClickCircle12() {handleClickCirclex(12);}
        function handleClickCircle13() {handleClickCirclex(13);}
        function handleClickCircle14() {handleClickCirclex(14);}
        function handleClickCircle15() {handleClickCirclex(15);}


        //座標の点
        var point = new createjs.Shape();
        this.addChild(point);
        point.graphics
            .setStrokeStyle(0)
            .beginStroke()
            .beginFill("red")
            .drawCircle(100,0,point_r_size);

    }

}




































//Sliderの値をセット
var valence1= 0;
var valence2= 0;
var valence3= 0;
var valence4= 0;
var valence5= 0;
var valence6= 0;
var valence7= 0;
var valence8= 0;
var valence1_text = valence1.toFixed();
var valence2_text = valence2.toFixed();
var valence3_text = valence3.toFixed();
var valence4_text = valence4.toFixed();
var valence5_text = valence5.toFixed();
var valence6_text = valence6.toFixed();
var valence7_text = valence7.toFixed();
var valence8_text = valence8.toFixed();
var total = 0;


// var valence1_point= 0;
// var valence2_point= 0;
// var valence3_point= 0;
// var valence4_point= 0;
// var valence1_text_point = valence1_point.toFixed();
// var valence2_text_point = valence2_point.toFixed();
// var valence3_text_point = valence3_point.toFixed();
// var valence4_text_point = valence4_point.toFixed();


//リミット
var limit = $('input:hidden[name="Limit"]').val();
var limit_slider_pre = limit;
console.log("limit",limit)
let svo = document.getElementById('svo');
console.log("svo",svo);
console.log("svo",svo_value);

//数
var item1_number = 7; //金
var item2_number = 5; //銀
var item3_number = 5; //バナナ
var item4_number = 5; //香辛料
var slider_item1_pre = item1_number;
var slider_item2_pre = item2_number;
var slider_item3_pre = item3_number;
var slider_item4_pre = item4_number;
//ポイント
// var op_item1_point = 4;
// var op_item2_point = 1;
// var op_item3_point = 0;
// var op_item4_point = 3;

// var my_item1_point = 4;
// var my_item2_point = 3;
// var my_item3_point = 2;
// var my_item4_point = 1;

// var op_item1_point = 2;
// var op_item2_point = 1;
// var op_item3_point = 0;
// var op_item4_point = -1;

// var my_item1_point = 2;
// var my_item2_point = -1;
// var my_item3_point = 1;
// var my_item4_point = 0;

var op_item1_point = 2;
var op_item2_point = 0;
var op_item3_point = -1;
var op_item4_point = 1;

var my_item1_point = 2;
var my_item2_point = 1;
var my_item3_point = 0;
var my_item4_point = -1;

var op_item1_point_slider = op_item1_point;
var op_item2_point_slider = op_item2_point;
var op_item3_point_slider = op_item3_point;
var op_item4_point_slider = op_item4_point;

var my_item1_point_slider = my_item1_point;
var my_item2_point_slider = my_item2_point;
var my_item3_point_slider = my_item3_point;
var my_item4_point_slider = my_item4_point;

var slider1_history="";
var slider2_history="";
var slider3_history="";
var slider4_history="";

var startTime = 0;
var endTime;
var passedTime;
// var op_max = op_item1_point*item1_number+op_item2_point*item2_number+op_item3_point*item3_number+op_item4_point*item4_number;
var op_max = 0;
var op_point_list = [op_item1_point,op_item2_point,op_item3_point,op_item4_point];
var num_list = [item1_number,item2_number,item3_number,item4_number];
for(var i=0; i<op_point_list.length; i++){ 
    if(op_point_list[i] > 0){
        op_max += op_point_list[i]*num_list[i]
    }
}
// var my_max = my_item1_point*item1_number+my_item2_point*item2_number+my_item3_point*item3_number+my_item4_point*item4_number;
var my_max = 0;
var my_point_list = [my_item1_point,my_item2_point,my_item3_point,my_item4_point];
for(var i=0; i<my_point_list.length; i++){ 
    if(my_point_list[i] > 0){
        my_max += my_point_list[i]*num_list[i]
    }
}
var slider_max_limit = op_max;
var total_max = my_max; //仮に
var total_min = my_max; //仮に

var total_op_max = op_max;
var total_my_max = my_max;
var total_op_min = op_max;//仮
var total_my_min = my_max;//仮

var total_op_max21 = op_max;
var total_my_max21 = my_max;
var total_op_min21 = op_max;//仮
var total_my_min21 = my_max;//仮
var total_max21 = 0;
var total_min21 = (my_max+op_max)*2;

var total_op_max12 = op_max;
var total_my_max12 = my_max;
var total_op_min12 = op_max;//仮
var total_my_min12 = my_max;//仮
var total_max12 = 0;
var total_min12 = (my_max+op_max)*2;

var scaling_val = 11;
var pre_scaling_val = scaling_val;


// var image_array =["https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_7WEdf4KdAXhNHvM", //金
//                   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_6yPB94NZ8SvefHw", //銀
//                   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_57ns61ne57Ej52K", //バナナ
//                   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_ehWB6YURK9N3WGq"];//香辛料

var image_array_1=["https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_5B8VMV1VMAczi4u", //時計
                  "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_9SOh9Ldez1E4NKu", //ブレスレット
                  "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_bg9PmVHM0w52Gxw", //イヤリング
                  "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_1zVIFfRJvY07Qfc"];//ネックレス

var image_array_2=["https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_3n22ZNLhenTu29M", //プリン
                  "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_8rnZ1V9E9rHS2to", //さくらもち
                  "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_eCMWPxqMUaraWJo", //エクレア
                  "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_cItTHZCjxIUtQGO"];//ショートケーキ

// var image_array_3=["https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_26rsI1c6IDu2SWO", //ハサミ
//                    "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_bwOXDEPdaX8XUEK", //鉛筆
//                    "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_bKpYSBWkhb3ZqD4", //三角定規
//                    "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_5onoJqutgJIvxEG"];//コンパス

//空白付き画像
var image_array_3=["https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_8oADkDORZM9f0Ka", //ハサミ
                  "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_eDtiE7LrgDB42xM", //鉛筆
                  "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_1FInAJNiipDK7eC", //三角定規
                  "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_6gU8lTa7fNEgdvM"];//コンパス

var image_array=[image_array_1, image_array_2, image_array_3];

var use_array = image_array[$('input:hidden[name="Array"]').val()];

var item1_image = $('input:hidden[name="item1"]').val();
var item2_image = $('input:hidden[name="item2"]').val();
var item3_image = $('input:hidden[name="item3"]').val();
var item4_image = $('input:hidden[name="item4"]').val();

console.log(item1_image);




function string_url(item) {
   if(item == "watch"){item =image_array_1[0]};
   if(item == "bracelet"){item =image_array_1[1]};
   if(item == "earrings"){item =image_array_1[2]};
   if(item == "necklace"){item =image_array_1[3]};

   if(item =="pudding"){item =image_array_2[0]};
   if(item =="mochi"){item =image_array_2[1]};
   if(item == "eclair"){item =image_array_2[2]};
   if(item == "shortcake"){item =image_array_2[3]};

   if(item == "scissors"){item =image_array_3[0]};
   if(item == "pencil"){item =image_array_3[1]};
   if(item == "ruler"){item =image_array_3[2]};
   if(item == "compass"){item =image_array_3[3]};
   
   return item;
}

item1_image = string_url(item1_image);
item2_image = string_url(item2_image);
item3_image = string_url(item3_image);
item4_image = string_url(item4_image);



//スライダーバーが右端か左端かを決める
for(var i=1; i<5; i++){ 
 if($('input:hidden[name="slider'+i+'_init"]').val()=="0"){
   eval("var pre_"+i+"value=0;");
 }
 else if($('input:hidden[name="slider'+i+'_init"]').val()=="1"){
   eval("var pre_"+i+"value = item"+i+"_number;");
 }
 console.log("pre"+i+"value="+eval("pre_"+i+"value"));
}


$('#item1_image_table').prepend('<img src="'+item1_image+'" width="20" height="20" ">');
$('#item2_image_table').prepend('<img src="'+item2_image+'" width="20" height="20" ">');
$('#item3_image_table').prepend('<img src="'+item3_image+'" width="20" height="20" ">');
$('#item4_image_table').prepend('<img src="'+item4_image+'" width="20" height="20" ">');

$('#myitem_point1').append('<img src="'+item1_image+'" width="20" height="20" id="myitem_point11">');
$('#opitem_point1').append('<img src="'+item1_image+'" width="20" height="20" id="opitem_point11">');

$('#myitem_point2').append('<img src="'+item2_image+'" width="20" height="20" id="myitem_point22">');
$('#opitem_point2').append('<img src="'+item2_image+'" width="20" height="20" id="opitem_point22">');

$('#myitem_point3').append('<img src="'+item3_image+'" width="20" height="20" id="myitem_point33">');
$('#opitem_point3').append('<img src="'+item3_image+'" width="20" height="20" id="opitem_point33">');

$('#myitem_point4').append('<img src="'+item4_image+'" width="20" height="20" id="myitem_point44">');
$('#opitem_point4').append('<img src="'+item4_image+'" width="20" height="20" id="opitem_point44">');
//(元々widthとheightは40)
function item_image_set(){
    for(var i=1; i<item1_number+1; i++){
        $('#myitem1').append('<img src="'+item1_image+'" width="20" height="20" id="myitem1_'+i+'">');
        $('#opitem1').append('<img src="'+item1_image+'" width="20" height="20" id="opitem1_'+i+'">');
        $('#myitem1_'+i).hide();
        $('#opitem1_'+i).hide();
    }

    for(var i=1; i<item2_number+1; i++){
        $('#myitem2').append('<img src="'+item2_image+'" width="20" height="20" id="myitem2_'+i+'">');
        $('#opitem2').append('<img src="'+item2_image+'" width="20" height="20" id="opitem2_'+i+'">');
        $('#myitem2_'+i).hide();
        $('#opitem2_'+i).hide();
    }

    for(var i=1; i<item3_number+1; i++){
        $('#myitem3').append('<img src="'+item3_image+'" width="20" height="20" id="myitem3_'+i+'">');
        $('#opitem3').append('<img src="'+item3_image+'" width="20" height="20" id="opitem3_'+i+'">');
        $('#myitem3_'+i).hide();
        $('#opitem3_'+i).hide();
    }

    for(var i=1; i<item4_number+1; i++){
        $('#myitem4').append('<img src="'+item4_image+'" width="20" height="20" id="myitem4_'+i+'">');
        $('#opitem4').append('<img src="'+item4_image+'" width="20" height="20" id="opitem4_'+i+'">');
        $('#myitem4_'+i).hide();
        $('#opitem4_'+i).hide();
    }
}
function item_image_reset(){
    for(var i=1; i<=10; i++){
        $('#myitem1_'+i).hide();
        $('#opitem1_'+i).hide();
    }
    for(var i=1; i<=10; i++){
        $('#myitem2_'+i).hide();
        $('#opitem2_'+i).hide();
    }
    for(var i=1; i<=10; i++){
        $('#myitem3_'+i).hide();
        $('#opitem3_'+i).hide();
    }
    for(var i=1; i<=10; i++){
        $('#myitem4_'+i).hide();
        $('#opitem4_'+i).hide();
    }
}
item_image_set();

//初期位置用画像表示
for(var i=1; i<5; i++){
 for(var j=1; j<eval("pre_"+i+"value+1"); j++){
   $('#opitem'+i+'_'+j).show();
 }
 for(var j=1; j<eval("item"+i+"_number-pre_"+i+"value+1"); j++){
   $('#myitem'+i+'_'+j).show();
 }
}

//スライダーの横にあるポイント表示
//初期point数計算
for(var i=1; i<5; i++){
    $("#item"+i+"_value").text(eval("pre_"+i+"value"));

    $("#my_item"+i+"_value").text(eval("item"+i+"_number-pre_"+i+"value"));
}
// my_item1_point_table
for(var i=1; i<5; i++){
    $("#op_item"+i+"_point_table").text(eval("op_item"+i+"_point")+"point");

    $("#my_item"+i+"_point_table").text(eval("my_item"+i+"_point")+"point");
}
$("#limit_point").text(eval("limit")+"point");
$("#scaling_value").text(eval("scaling_val")+"point");
var init_total = (item1_number-pre_1value)*my_item1_point+(item2_number-pre_2value)*my_item2_point+(item3_number-pre_3value)*my_item3_point+(item4_number-pre_4value)*my_item4_point;
console.log("init_total="+init_total);
$("#my_total_point").text(init_total);





//要因１　表情(0:False, 1:True)

var f_emo = $('input:hidden[name="F_EMO"]').val();
//要因２　瞬き(0:False, 1:True)
var f_bli = $('input:hidden[name="F_BLI"]').val();

console.log("FF: ", f_emo + "//" + f_bli);



//初期値を設定
$.jCanvas.defaults.fromCenter = false;
$.jCanvas.defaults.layer = true;
// var elem = document.getElementById("image01");


//   this.hideChoices (); //ここでqualtrics側のスライダーを消している。
// this.disableNextButton();

var current_my1 = item1_number;
var current_my2 = item2_number;
var current_my3 = item3_number;
var current_my4 = item4_number;
var current_op1 = 0;
var current_op2 = 0;
var current_op3 = 0;
var current_op4 = 0;

var already_slided = 0;

//スライダー変えたときにsvoに応じて表情を描画する関数
function svo_faceDraw(){
    if (svo_value == "individualism"){
        //totalは相手の得点の合計得点
        //mytotalは自分の得点の合計得点
        // if (total > limit){
        //     faceDraw(total,f_emo,f_bli,mytotal);
        // }else{
        //     faceDraw(0,f_emo,f_bli,0);
        // }
        indexLibrary.set_agentpoint(total);
        // console.log("index_total",indexLibrary.agent_point);
        indexLibrary.App_set_point();
    }
    else if (svo_value == "altruism"){
        //totalは相手の得点の合計得点
        //mytotalは自分の得点の合計得点
        if (mytotal > limit){
            faceDraw(mytotal,f_emo,f_bli,total);
        }else{
            faceDraw(0,f_emo,f_bli,0);
        }
    }
    else if (svo_value == "sadism"){
        //totalは相手の得点の合計得点
        //mytotalは自分の得点の合計得点
        if (mytotal < limit){
            faceDraw(mytotal,f_emo,f_bli,total);
        }else{
            faceDraw(mytotal,f_emo,f_bli,total);
        }
    }
    else if (svo_value == "masochism"){
        //totalは相手の得点の合計得点
        //mytotalは自分の得点の合計得点
        if (total < limit){
            faceDraw(total,f_emo,f_bli,mytotal);
        }else{
            faceDraw(total,f_emo,f_bli,mytotal);
        }
    }
    else if (svo_value == "cooperation"){
        //totalは相手の得点の合計得点
        //mytotalは自分の得点の合計得点
        if (total < limit){
            faceDraw(mytotal,f_emo,f_bli,total);
        }else{
            faceDraw(mytotal,f_emo,f_bli,total);
        }
    }
    else if (svo_value == "sadomasochism"){
        //totalは相手の得点の合計得点
        //mytotalは自分の得点の合計得点
        if (total < limit){
            faceDraw(mytotal,f_emo,f_bli,total);
        }else{
            faceDraw(mytotal,f_emo,f_bli,total);
        }
    }
    else if (svo_value == "competition"){
        //totalは相手の得点の合計得点
        //mytotalは自分の得点の合計得点
        if (total < limit){
            faceDraw(mytotal,f_emo,f_bli,total);
        }else{
            faceDraw(mytotal,f_emo,f_bli,total);
        }
    }
    else if (svo_value == "martyrdom"){
        //totalは相手の得点の合計得点
        //mytotalは自分の得点の合計得点
        if (total < limit){
            faceDraw(mytotal,f_emo,f_bli,total);
        }else{
            faceDraw(mytotal,f_emo,f_bli,total);
        }
    }
    else if (svo_value == "coo_ind"){
        //totalは相手の得点の合計得点
        //mytotalは自分の得点の合計得点
        if (total < limit){
            faceDraw(mytotal,f_emo,f_bli,total);
        }else{
            faceDraw(mytotal,f_emo,f_bli,total);
        }
    }
    else if (svo_value == "alt_coo"){
        //totalは相手の得点の合計得点
        //mytotalは自分の得点の合計得点
        if (total < limit){
            faceDraw(mytotal,f_emo,f_bli,total);
        }else{
            faceDraw(mytotal,f_emo,f_bli,total);
        }
    }
    else if (svo_value == "sad_sad"){
        //totalは相手の得点の合計得点
        //mytotalは自分の得点の合計得点
        if (total < limit){
            faceDraw(mytotal,f_emo,f_bli,total);
        }else{
            faceDraw(mytotal,f_emo,f_bli,total);
        }
    }
    else if (svo_value == "sad_mas"){
        //totalは相手の得点の合計得点
        //mytotalは自分の得点の合計得点
        if (total < limit){
            faceDraw(mytotal,f_emo,f_bli,total);
        }else{
            faceDraw(mytotal,f_emo,f_bli,total);
        }
    }
    else if (svo_value == "com_sad"){
        //totalは相手の得点の合計得点
        //mytotalは自分の得点の合計得点
        if (total < limit){
            faceDraw(mytotal,f_emo,f_bli,total);
        }else{
            faceDraw(mytotal,f_emo,f_bli,total);
        }
    }

    
}


// スライダーをセット  
function slider(){
    var item1_count = document.getElementById('item1_value');
    var item2_count = document.getElementById('item2_value');
    var item3_count = document.getElementById('item3_value');
    var item4_count = document.getElementById('item4_value');
 
    var my_item1 = document.getElementById('my_item1_value');
    var my_item2 = document.getElementById('my_item2_value');
    var my_item3 = document.getElementById('my_item3_value');
    var my_item4 = document.getElementById('my_item4_value');

    var scaling_val_html = document.getElementById('scaling_value');
 
    // var my_item1_point = document.getElementById('my_item1_point')
    // var my_item2_point = document.getElementById('my_item2_point')
    // var my_item3_point = document.getElementById('my_item3_point')
    // var my_item4_point = document.getElementById('my_item4_point')
 
    var my_total_point = document.getElementById('my_total_point');
    var op_total_point = document.getElementById('op_total_point');
 
    $("#slider1").slider({
        value: pre_1value,
        min: 0,
        max: slider_item1_pre,　// 金額の最大値
        step: 1,
        range: "min",
        //orientation: "vertical",
        
        change: function (event, ui) { //スライダー変更
            already_slided = 1;
            draw();
            for(var i=1; i<item1_number+1; i++){$('#myitem1_'+i).hide();}
            for(var i=1; i<item1_number+1; i++){$('#opitem1_'+i).hide();}
            
            total = get_total();
            mytotal = get_total_point();
            item1_count.innerHTML = ui.value;
            // item1_count.innerHTML = ui.value+"×？point";
            current_op1 = ui.value
            my_item1.innerHTML = item1_number-ui.value;
            current_my1 = item1_number-ui.value
            // my_item1_point.innerHTML = (item1-ui.value)*my_item1_point;
            my_total_point.innerHTML = mytotal;
            op_total_point.innerHTML = total;
            valence1 = ui.value;
            valence1_text = valence1.toFixed();
            valence5 = item1_number-ui.value;
            valence5_text = valence5.toFixed();
 
            slider1_history=add_history(slider1_history, pre_1value, ui.value);
            pre_1value=ui.value;
            console.log("history="+slider1_history);
            
            for(var i=1; i<item1_number-ui.value+1; i++){$('#myitem1_'+i).show();}
            for(var i=1; i<ui.value+1; i++){$('#opitem1_'+i).show();}
            
                
            //console.log("VAL: ",valence1);
            
            //console.log("TOTAL: ",get_total());
            svo_faceDraw();
            
            draw();
            drawEmotionChart();
        },
 
        slide: function (event, ui) {// 変更中
            already_slided = 1;
            draw();
            for(var i=1; i<item1_number+1; i++){$('#myitem1_'+i).hide();}
            for(var i=1; i<item1_number+1; i++){$('#opitem1_'+i).hide();}

            total = get_total();
            mytotal = get_total_point();
 
 
            item1_count.innerHTML = ui.value;
            // item1_count.innerHTML = ui.value+"×？point";
            current_op1 = ui.value
            my_item1.innerHTML = item1_number-ui.value;
            current_my1 = item1_number-ui.value
            // my_item1_point.innerHTML = (item1-ui.value)*my_item1_point;
            my_total_point.innerHTML = mytotal;
            op_total_point.innerHTML = total;
            valence1 = ui.value;
            valence1_text = valence1.toFixed();
            valence5 = item1_number-ui.value
            valence5_text = valence5.toFixed();
 
            for(var i=1; i<item1_number-ui.value+1; i++){$('#myitem1_'+i).show();}
            for(var i=1; i<ui.value+1; i++){$('#opitem1_'+i).show();}
 
            
            svo_faceDraw();
            draw();
        }
    });
 
 
    $("#slider2").slider({
         value: pre_2value,
         min: 0,
         max: slider_item2_pre,　// 金額の最大値
         step: 1,
         range: "min",
         //orientation: "vertical",
 
         change: function (event, ui) { //スライダー変更
             already_slided = 1;
             draw();
             for(var i=1; i<item2_number+1; i++){$('#myitem2_'+i).hide();}
             for(var i=1; i<item2_number+1; i++){$('#opitem2_'+i).hide();}
 
             total = get_total();
             mytotal = get_total_point();
             item2_count.innerHTML = ui.value;
             // item2_count.innerHTML = ui.value+"×？point";
             current_op2 = ui.value
             my_item2.innerHTML = item2_number-ui.value;
             current_my2 = item2_number-ui.value
             // my_item2_point.innerHTML = (item2-ui.value)*my_item2_point;
             my_total_point.innerHTML = mytotal;
             op_total_point.innerHTML = total;
             
             valence2 = ui.value;
             valence2_text = valence2.toFixed();
             valence6 = item2_number-ui.value
             valence6_text = valence6.toFixed();
 
             slider2_history=add_history(slider2_history, pre_2value, ui.value);
             pre_2value=ui.value;
 
             for(var i=1; i<item2_number-ui.value+1; i++){$('#myitem2_'+i).show();}
             for(var i=1; i<ui.value+1; i++){$('#opitem2_'+i).show();}
             
             svo_faceDraw();
             //console.log("VAL2: ",valence2);
             draw();
             drawEmotionChart();
         },
 
        slide: function (event, ui) {// 変更中
             already_slided = 1;
             draw();
             for(var i=1; i<item2_number+1; i++){$('#myitem2_'+i).hide();}
             for(var i=1; i<item2_number+1; i++){$('#opitem2_'+i).hide();}
 
             total = get_total();
             mytotal = get_total_point();
             item2_count.innerHTML = ui.value;
             // item2_count.innerHTML = ui.value+"×？point";
             current_op2 = ui.value
             my_item2.innerHTML = item2_number-ui.value;
             current_my2 = item2_number-ui.value
             // my_item2_point.innerHTML = (item2-ui.value)*my_item2_point;
             my_total_point.innerHTML = mytotal;
             op_total_point.innerHTML = total;
             valence2 = ui.value;
             valence2_text = valence2.toFixed();
             valence6 = item2_number-ui.value
             valence6_text = valence6.toFixed();
 
             for(var i=1; i<item2_number-ui.value+1; i++){$('#myitem2_'+i).show();}
             for(var i=1; i<ui.value+1; i++){$('#opitem2_'+i).show();}
             
             svo_faceDraw();
             draw();
        }
    });
 
 
    $("#slider3").slider({
        value: pre_3value,
        min: 0,
        max: slider_item3_pre,　// 金額の最大値
        step: 1,
        range: "min",
        //orientation: "vertical",
 
        change: function (event, ui) { //スライダー変更
             already_slided = 1;
             draw();
             for(var i=1; i<item3_number+1; i++){$('#myitem3_'+i).hide();}
             for(var i=1; i<item3_number+1; i++){$('#opitem3_'+i).hide();}
 
             total = get_total();
             mytotal = get_total_point();
             item3_count.innerHTML = ui.value;
             // item3_count.innerHTML = ui.value+"×？point";
             current_op3 = ui.value
             my_item3.innerHTML = item3_number-ui.value;
             current_my3 = item3_number-ui.value
             // my_item3_point.innerHTML = (item3-ui.value)*my_item3_point;
             my_total_point.innerHTML = mytotal;
             op_total_point.innerHTML = total;
             valence3 = ui.value;
             valence3_text = valence3.toFixed();
             valence7 = item3_number-ui.value
             valence7_text = valence7.toFixed();
 
             slider3_history=add_history(slider3_history, pre_3value, ui.value);
             pre_3value=ui.value;
 
             for(var i=1; i<item3_number-ui.value+1; i++){$('#myitem3_'+i).show();}
             for(var i=1; i<ui.value+1; i++){$('#opitem3_'+i).show();}
 
            
             svo_faceDraw();
            //console.log("VAL3: ",valence3);
            draw();
            drawEmotionChart();
         },
 
        slide: function (event, ui) {// 変更中
             already_slided = 1;
             draw();
             for(var i=1; i<item3_number+1; i++){$('#myitem3_'+i).hide();}
             for(var i=1; i<item3_number+1; i++){$('#opitem3_'+i).hide();}
 
             total = get_total();
             mytotal = get_total_point();
             item3_count.innerHTML = ui.value;
             // item3_count.innerHTML = ui.value+"×？point";
             current_op3 = ui.value
             my_item3.innerHTML = item3_number-ui.value;
             current_my3 = item3_number-ui.value
             // my_item3_point.innerHTML = (item3-ui.value)*my_item3_point;
             my_total_point.innerHTML = mytotal;
             op_total_point.innerHTML = total;
             valence3 = ui.value;
             valence3_text = valence3.toFixed();
             valence7 = item3_number-ui.value
             valence7_text = valence7.toFixed();
 
             for(var i=1; i<item3_number-ui.value+1; i++){$('#myitem3_'+i).show();}
             for(var i=1; i<ui.value+1; i++){$('#opitem3_'+i).show();}
             
             svo_faceDraw();
             draw();
         }
    });
 
 
    $("#slider4").slider({
        value: pre_4value,
        min: 0,
        max: item4_number,　// 金額の最大値
        step: 1,
        range: "min",
        //orientation: "vertical",
 
        change: function (event, ui) { //スライダー変更
             already_slided = 1;
             draw();
             for(var i=1; i<item4_number+1; i++){$('#myitem4_'+i).hide();}
             for(var i=1; i<item4_number+1; i++){$('#opitem4_'+i).hide();}
         
             total = get_total();
             mytotal = get_total_point();
             item4_count.innerHTML = ui.value;
             // item4_count.innerHTML = ui.value+"×？point";
             current_op4 = ui.value
             my_item4.innerHTML = item4_number-ui.value;
             current_my4 = item4_number-ui.value
             //  my_item4_point.innerHTML = (item4-ui.value)*my_item4_point;
             my_total_point.innerHTML = mytotal;
             op_total_point.innerHTML = total;
             valence4 = ui.value;
             valence4_text = valence4.toFixed();
             valence8 = item4_number-ui.value
             valence8_text = valence8.toFixed();
 
             slider4_history=add_history(slider4_history, pre_4value, ui.value);
             pre_4value=ui.value;
 
             for(var i=1; i<item4_number-ui.value+1; i++){$('#myitem4_'+i).show();}
             for(var i=1; i<ui.value+1; i++){$('#opitem4_'+i).show();}
        
             //console.log("VAL4: ",valence4);
             svo_faceDraw();
             draw();
             drawEmotionChart();
        },
 
        slide: function (event, ui) {// 変更中
             already_slided = 1;
             draw();
             for(var i=1; i<item4_number+1; i++){$('#myitem4_'+i).hide();}
             for(var i=1; i<item4_number+1; i++){$('#opitem4_'+i).hide();}
             total = get_total();
             mytotal = get_total_point();
             item4_count.innerHTML = ui.value;
             // item4_count.innerHTML = ui.value+"×？point";
             current_op4 = ui.value
             my_item4.innerHTML = item4_number-ui.value;
             current_my4 = item4_number-ui.value
             //  my_item4_point.innerHTML = (item4-ui.value)*my_item4_point;
             my_total_point.innerHTML = mytotal;
             op_total_point.innerHTML = total;
             valence4 = ui.value;
             valence4_text = valence4.toFixed();
             
             valence8 = item4_number-ui.value
             valence8_text = valence8.toFixed();
 
             for(var i=1; i<item4_number-ui.value+1; i++){$('#myitem4_'+i).show();}
             for(var i=1; i<ui.value+1; i++){$('#opitem4_'+i).show();}
             
             svo_faceDraw();
             draw();
         }
    });

    $("#scaling_slider").slider({
        value: pre_scaling_val,
        min: 0,
        max: 100,
        step: 1,
        range: "min",
        //orientation: "vertical",
 
        change: function (event, ui) { //スライダー変更
             already_slided = 1;
             draw();
             scaling_val = ui.value;
             scaling_val_html.innerHTML = ui.value;
             pre_scaling_val = ui.value;
             svo_faceDraw();
             draw();
             drawEmotionChart();
        },
 
        slide: function (event, ui) {// 変更中
             already_slided = 1;
             draw();
             scaling_val = ui.value;
             scaling_val_html.innerHTML = ui.value;
             pre_scaling_val = ui.value;
             svo_faceDraw();
             draw();
         }
    });
}

//ここからリミットのスライダー
// function slider_limit(){
//     $("#slider_limit").slider({
//         value: limit_slider_pre,
//         min: y_min_all,
//         max: op_item1_point*item1_number+op_item2_point*item2_number+op_item3_point*item3_number+op_item4_point*item4_number + y_min_all, // 金額の最大値
//         step: 1,
//         range: "min",
//         //orientation: "vertical",
        
//         change: function (event, ui) { //スライダー変更
//             draw_limit()
//             limit_slider_pre = ui.value;

//             limit_point.innerHTML = limit_slider_pre+"point";
//             // op_item4_point = op_item4_point_slider;
//             // item4_value.innerHTML = item4_number-pre_4value+"×"+op_item4_point_slider+"point";
//             draw_limit()
//             limit = limit_slider_pre;
//         },

//         slide: function (event, ui) {// 変更中
//             draw_limit()
//             limit_slider_pre = ui.value;

//             limit_point.innerHTML = limit_slider_pre+"point";
//             draw_limit()
//             limit = limit_slider_pre;
//         }
        
//     });
// }

$(document).ready(function () {
    slider();
    // slider_limit();
    slider_my_point();
    slider_op_point();
    drawEmotionChart();

});


//ここからあなたのポイントのスライダー
function slider_my_point(){
    $("#slider_mypoint1").slider({
        value: my_item1_point_slider,
        min: -4,
        max: 4, // 金額の最大値
        step: 1,
        range: "min",
        //orientation: "vertical",
        
        change: function (event, ui) { //スライダー変更
            my_item1_point_slider = ui.value;
            console.log("my_item1_point_slider",my_item1_point_slider);
            console.log("ui.value",ui.value);
            my_item1_point_table.innerHTML = my_item1_point_slider+"point";
            // my_item1_point = my_item1_point_slider;
            my_item1_value.innerHTML = item1_number-pre_1value;
            drawEmotionChart();
        },

        slide: function (event, ui) {// 変更中
            my_item1_point_slider = ui.value;
            console.log("op_item1_point_slider",my_item1_point_slider);
            console.log("ui.value",ui.value);
            my_item1_point_table.innerHTML = my_item1_point_slider+"point";
            // my_item1_point = my_item1_point_slider;
            my_item1_value.innerHTML = item1_number-pre_1value;
        }
        
    });

    $("#slider_mypoint2").slider({
        value: my_item2_point_slider,
        min: -4,
        max: 4, // 金額の最大値
        step: 1,
        range: "min",
        //orientation: "vertical",
        
        change: function (event, ui) { //スライダー変更
            my_item2_point_slider = ui.value;
            console.log("my_item2_point_slider",my_item2_point_slider);
            console.log("ui.value",ui.value);
            my_item2_point_table.innerHTML = my_item2_point_slider+"point";
            // my_item2_point = my_item2_point_slider;
            my_item2_value.innerHTML = item2_number-pre_2value;
            drawEmotionChart();
        },

        slide: function (event, ui) {// 変更中
            my_item2_point_slider = ui.value;
            console.log("op_item2_point_slider",my_item2_point_slider);
            console.log("ui.value",ui.value);
            my_item2_point_table.innerHTML = my_item2_point_slider+"point";
            // my_item2_point = my_item2_point_slider;
            my_item2_value.innerHTML = item2_number-pre_2value;
        }
        
    });

    $("#slider_mypoint3").slider({
        value: my_item3_point_slider,
        min: -4,
        max: 4, // 金額の最大値
        step: 1,
        range: "min",
        //orientation: "vertical",
        
        change: function (event, ui) { //スライダー変更
            my_item3_point_slider = ui.value;
            console.log("my_item3_point_slider",my_item3_point_slider);
            console.log("ui.value",ui.value);
            my_item3_point_table.innerHTML = my_item3_point_slider+"point";
            // my_item3_point = my_item3_point_slider;
            my_item3_value.innerHTML = item3_number-pre_3value;
            drawEmotionChart();
        },

        slide: function (event, ui) {// 変更中
            my_item3_point_slider = ui.value;
            console.log("op_item3_point_slider",my_item3_point_slider);
            console.log("ui.value",ui.value);
            my_item3_point_table.innerHTML = my_item3_point_slider+"point";
            // my_item3_point = my_item3_point_slider;
            my_item3_value.innerHTML = item3_number-pre_3value;
        }
        
    });

    $("#slider_mypoint4").slider({
        value: my_item4_point_slider,
        min: -4,
        max: 4, // 金額の最大値
        step: 1,
        range: "min",
        //orientation: "vertical",
        
        change: function (event, ui) { //スライダー変更
            my_item4_point_slider = ui.value;
            console.log("my_item4_point_slider",my_item4_point_slider);
            console.log("ui.value",ui.value);
            my_item4_point_table.innerHTML = my_item4_point_slider+"point";
            // my_item4_point = my_item4_point_slider;
            my_item4_value.innerHTML = item4_number-pre_4value;
            drawEmotionChart();
        },

        slide: function (event, ui) {// 変更中
            my_item4_point_slider = ui.value;
            console.log("op_item4_point_slider",my_item4_point_slider);
            console.log("ui.value",ui.value);
            my_item4_point_table.innerHTML = my_item4_point_slider+"point";
            // my_item4_point = my_item4_point_slider;
            my_item4_value.innerHTML = item4_number-pre_4value;
        }
        
    });
}



//ここから相手のポイントのスライダー
function slider_op_point(){
    $("#slider_oppoint1").slider({
        value: op_item1_point_slider,
        min: -4,
        max: 4, // 金額の最大値
        step: 1,
        range: "min",
        //orientation: "vertical",
        
        change: function (event, ui) { //スライダー変更
            op_item1_point_slider = ui.value;
            console.log("op_item1_point_slider",op_item1_point_slider);
            console.log("ui.value",ui.value);
            op_item1_point_table.innerHTML = op_item1_point_slider+"point";
            // op_item1_point = op_item1_point_slider;
            item1_value.innerHTML = pre_1value;

            // already_slided = 0;
            // op_item1_point = op_item1_point_slider;
            // draw();
            // slider(); 
            drawEmotionChart();
        },

        slide: function (event, ui) {// 変更中
            op_item1_point_slider = ui.value;
            console.log("op_item1_point_slider",op_item1_point_slider);
            console.log("ui.value",ui.value);
            op_item1_point_table.innerHTML = op_item1_point_slider+"point";
            // op_item1_point = op_item1_point_slider;
            item1_value.innerHTML = pre_1value;

            // already_slided = 0;
            // op_item1_point = op_item1_point_slider;
            // draw();
            // slider(); 
        }
        
    });

    $("#slider_oppoint2").slider({
        value: op_item2_point_slider,
        min: -4,
        max: 4, // 金額の最大値
        step: 1,
        range: "min",
        //orientation: "vertical",
        
        change: function (event, ui) { //スライダー変更
            op_item2_point_slider = ui.value;
            console.log("op_item2_point_slider",op_item2_point_slider);
            console.log("ui.value",ui.value);
            op_item2_point_table.innerHTML = op_item2_point_slider+"point";
            // op_item2_point = op_item2_point_slider;
            item2_value.innerHTML = pre_2value;

            // already_slided = 0;
            // op_item2_point = op_item2_point_slider;
            // draw();
            // slider(); 
            drawEmotionChart();
        },

        slide: function (event, ui) {// 変更中
            op_item2_point_slider = ui.value;
            console.log("op_item2_point_slider",op_item2_point_slider);
            console.log("ui.value",ui.value);
            op_item2_point_table.innerHTML = op_item2_point_slider+"point";
            // op_item2_point = op_item2_point_slider;
            item2_value.innerHTML = pre_2value;

            // already_slided = 0;
            // op_item2_point = op_item2_point_slider;
            // draw();
            // slider(); 
        }
        
    });

    $("#slider_oppoint3").slider({
        value: op_item3_point_slider,
        min: -4,
        max: 4, // 金額の最大値
        step: 1,
        range: "min",
        //orientation: "vertical",
        
        change: function (event, ui) { //スライダー変更
            op_item3_point_slider = ui.value;
            console.log("op_item3_point_slider",op_item3_point_slider);
            console.log("ui.value",ui.value);
            op_item3_point_table.innerHTML = op_item3_point_slider+"point";
            // op_item3_point = op_item3_point_slider;
            item3_value.innerHTML = pre_3value;

            // already_slided = 0;
            // op_item3_point = op_item3_point_slider;
            // draw();
            // slider(); 
            drawEmotionChart();
        },

        slide: function (event, ui) {// 変更中
            op_item3_point_slider = ui.value;
            console.log("op_item3_point_slider",op_item3_point_slider);
            console.log("ui.value",ui.value);
            op_item3_point_table.innerHTML = op_item3_point_slider+"point";
            // op_item3_point = op_item3_point_slider;
            item3_value.innerHTML = pre_3value;

            // already_slided = 0;
            // op_item3_point = op_item3_point_slider;
            // draw();
            // slider(); 
        }
        
    });

    $("#slider_oppoint4").slider({
        value: op_item4_point_slider,
        min: -4,
        max: 4, // 金額の最大値
        step: 1,
        range: "min",
        //orientation: "vertical",
        
        change: function (event, ui) { //スライダー変更
            op_item4_point_slider = ui.value;
            console.log("op_item4_point_slider",op_item4_point_slider);
            console.log("ui.value",ui.value);
            op_item4_point_table.innerHTML = op_item4_point_slider+"point";
            // op_item4_point = op_item4_point_slider;
            item4_value.innerHTML = pre_4value;

            // already_slided = 0;
            // op_item4_point = op_item4_point_slider;
            // draw();
            // slider(); 
            drawEmotionChart();
        },

        slide: function (event, ui) {// 変更中
            op_item4_point_slider = ui.value;
            console.log("op_item4_point_slider",op_item4_point_slider);
            console.log("ui.value",ui.value);
            op_item4_point_table.innerHTML = op_item4_point_slider+"point";
            // op_item4_point = op_item4_point_slider;
            item4_value.innerHTML = pre_4value;

            // already_slided = 0;
            // op_item4_point = op_item4_point_slider;
            // draw();
            // slider(); 
        }
        
    });
}


//ここからアイテムの数のスライダー
$("#slider_item1_number").slider({
    value: slider_item1_pre,
    min: 0,
    max: 10, // 金額の最大値
    step: 1,
    range: "min",
    //orientation: "vertical",
    
    change: function (event, ui) { //スライダー変更
        slider_item1_pre = ui.value;
        console.log("slider_item1_pre",slider_item1_pre);
        item1_image_table.innerHTML = slider_item1_pre+"";
        $('#item1_image_table').prepend('<img src="'+item1_image+'" width="20" height="20" ">');
        drawEmotionChart();
    },

    slide: function (event, ui) {// 変更中
        slider_item1_pre = ui.value;
        console.log("slider_item1_pre",slider_item1_pre);
        item1_image_table.innerHTML = slider_item1_pre+"";
        $('#item1_image_table').prepend('<img src="'+item1_image+'" width="20" height="20" ">');
    }
    
});

$("#slider_item2_number").slider({
    value: slider_item2_pre,
    min: 0,
    max: 10, // 金額の最大値
    step: 1,
    range: "min",
    //orientation: "vertical",
    
    change: function (event, ui) { //スライダー変更
        slider_item2_pre = ui.value;
        console.log("slider_item2_pre",slider_item2_pre);
        item2_image_table.innerHTML = slider_item2_pre+"";
        $('#item2_image_table').prepend('<img src="'+item2_image+'" width="20" height="20" ">');
        drawEmotionChart();
    },

    slide: function (event, ui) {// 変更中
        slider_item2_pre = ui.value;
        console.log("slider_item2_pre",slider_item2_pre);
        item2_image_table.innerHTML = slider_item2_pre+"";
        $('#item2_image_table').prepend('<img src="'+item2_image+'" width="20" height="20" ">');
    }
    
});

$("#slider_item3_number").slider({
    value: slider_item3_pre,
    min: 0,
    max: 10, // 金額の最大値
    step: 1,
    range: "min",
    //orientation: "vertical",
    
    change: function (event, ui) { //スライダー変更
        slider_item3_pre = ui.value;
        console.log("slider_item3_pre",slider_item3_pre);
        item3_image_table.innerHTML = slider_item3_pre+"";
        $('#item3_image_table').prepend('<img src="'+item3_image+'" width="20" height="20" ">');
        drawEmotionChart();
    },

    slide: function (event, ui) {// 変更中
        slider_item3_pre = ui.value;
        console.log("slider_item3_pre",slider_item3_pre);
        item3_image_table.innerHTML = slider_item3_pre+"";
        $('#item3_image_table').prepend('<img src="'+item3_image+'" width="20" height="20" ">');
    }
    
});

$("#slider_item4_number").slider({
    value: slider_item4_pre,
    min: 0,
    max: 10, // 金額の最大値
    step: 1,
    range: "min",
    //orientation: "vertical",
    
    change: function (event, ui) { //スライダー変更
        slider_item4_pre = ui.value;
        console.log("slider_item4_pre",slider_item4_pre);
        item4_image_table.innerHTML = slider_item4_pre+"";
        $('#item4_image_table').prepend('<img src="'+item4_image+'" width="20" height="20" ">');
        drawEmotionChart();
    },

    slide: function (event, ui) {// 変更中
        slider_item4_pre = ui.value;
        console.log("slider_item4_pre",slider_item4_pre);
        item4_image_table.innerHTML = slider_item4_pre+"";
        $('#item4_image_table').prepend('<img src="'+item4_image+'" width="20" height="20" ">');
    }
    
});



//timer 切り替え関数
var changeFace = function () {
   // var val = $("#slider1").slider("option", "value");
   total = get_total();
   mytotal = get_total_point();

    svo_faceDraw();

};


//timer set
var milsec = 3700;
function stopTimer() {
 clearInterval(timeSet);
}
function startTimer() {
 setInterval(changeFace, milsec);
}
var timeSet = setInterval(changeFace, milsec);

//表情をセット
var gen_x2 =640;
var gen_y2 = 400;
var i_array_0 = [
 "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_4OBBa5ZC1FuXhzw",　// ここがセンター

];   

var i_array_b_0 = [  // b pattern  
 "https://usc.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_7NFNWQMOBuwe3UF",// center
 "https://usc.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_bsy0r1ppcBbTMSF",

];

var i_array_c_0 = [
 "https://usc.ca1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_doIyALlO3BPjzeJ"

];

var i_array_1 = [ //blink pattern A
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_a2vIsw2RFOP8MbI", //angry

   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_ex36kge2fWJgT9I", // sad
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_ex36kge2fWJgT9I", // sad
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_9RhC7tuScqETNnE",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_8xdHMfBbbQXppky",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_8xdHMfBbbQXppky",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_6DzisdzgarXTeIe",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_01GBT8IWkKaijH0",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_01GBT8IWkKaijH0",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_2gxROKfITVwMfYy",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_2gxROKfITVwMfYy",

   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_08QVyU8BIV1SEM6",　// ここがセンター
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_08QVyU8BIV1SEM6",  // 22にするためにセンターを増やす 
   // "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_4OBBa5ZC1FuXhzw", 

   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_6JMWwNBs1khaJQW",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_6JMWwNBs1khaJQW",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_ahKsXAXNSwFJlY2",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_exuUzzZxXGUokZM",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_6hxvNYgjz91uDBQ",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_08ODZ3fIAmcYYku",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_78wU9LBhzifsneS",  //happy
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_6JXZpjbchfjif3g",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_8qymgh3vkw0Kz5Q",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_di13us2LRU2iRVk",

 ];

 var i_array_b_1 = [  // b pattern
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_bpvDzflb56f6VCK", //angry

   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_8iFW6ZBpWGslv2S", // sad
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_8iFW6ZBpWGslv2S", // sad
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_0AmMSK7Q3SStc5E",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_b3EmmlKHBR6Odka",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_b3EmmlKHBR6Odka",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_bk3sa8yXgTr8aQS",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_6zXW5r7irZp4c5g",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_6zXW5r7irZp4c5g",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_0DpqS6cGYB7gpCu",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_3PItLm4jUYfBuw6",

   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_5sVmldhWnhJ4A4K",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_5sVmldhWnhJ4A4K",

   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_3xZhrs9xhrxrRaK",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_3xZhrs9xhrxrRaK",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_8kXB86T2LmZ5LHU",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_7QXl9Ft7YUJNlsy",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_eXtV7t03H5QVI9g",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_25MMMSgu7ICMnY2",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_d0VcAhmbMBGzUQC",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_6LsuQSejxV0mD66",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_6yg9TKOv8nsj0Gi",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_di13us2LRU2iRVk",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_di13us2LRU2iRVk",

 ];

 var i_array_c_1 = [ // blibk no
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_86cAcFStvlr5IWy", //angry

   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_ex36kge2fWJgT9I", // sad
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_ex36kge2fWJgT9I", // sad
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_89bcwSRF1BZ2u6W",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_4Z41JTlWvbz3uNU",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_4Z41JTlWvbz3uNU",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_1zXutcPWaMjYtQG",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_1SIRolaixTjx3mu",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_1SIRolaixTjx3mu",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_3ecvOhKNIVGIyIS",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_8pNgJQAImuh1lZA",

   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_5sVmldhWnhJ4A4K",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_5sVmldhWnhJ4A4K",

   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_3xZhrs9xhrxrRaK",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_3xZhrs9xhrxrRaK",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_8kXB86T2LmZ5LHU",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_7QXl9Ft7YUJNlsy",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_eXtV7t03H5QVI9g",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_25MMMSgu7ICMnY2",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_d0VcAhmbMBGzUQC",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_6LsuQSejxV0mD66",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_6yg9TKOv8nsj0Gi",
   "https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_di13us2LRU2iRVk",
 ];

function rnd_ar() { //配列をランダムに入れ替える
 var rand = Math.floor(Math.random() * 9);
 var seed = rand % 3;
 return seed ;
};

function faceDraw(yy, fact01, fact02 ,xx) { //表情を描画する //yy=金額, fact01=表情, fact02=まばたき
    //yの変換  
    // num = 50; //変換係数 
    // //image_y = Math.floor(yy / num);
    // image_y = yy;
    // var rand = Math.floor( Math.random() * i_array_b_1.length)

    //yの変換  
    var sumitem = item1_number*op_item1_point + item2_number*op_item2_point + item3_number*op_item3_point + item4_number*op_item4_point;
    num = sumitem-limit; //変換係数 
    // num = yy-limit; //変換係数 

    //リミットを基準とした得点
    //yyにはtotalとかmytotalが入ってる。
    if(svo_value == "individualism"){
        // num = sumitem-limit; //変換係数 
        num = op_max-limit; //変換係数 
        if(yy <= limit){
            image_y = 0;
        }else{
            image_y = Math.ceil(((yy - limit) / num)*(i_array_1.length-1));
            if (image_y >= i_array_1.length){
                image_y = i_array_1.length - 1;
            }
        }
        console.log("individualism","image_y",image_y,"yy",yy,"limit",limit,"num",num,"i_array_1.length-1",i_array_1.length-1,"op_max",op_max);
    }
    else if(svo_value == "altruism"){
        num = my_max - limit;
        if(yy <= limit){
            image_y = 0;
        }else{
            image_y = Math.ceil(((yy - limit) / num)*(i_array_1.length-1));
            if (image_y >= i_array_1.length){
                image_y = i_array_1.length - 1;
            }
        }
    }
    else if(svo_value == "sadism"){
        num = limit;
        console.log("sadism",yy,limit);
        if(yy <= limit){
            image_y = Math.ceil(((limit - yy) / num)*(i_array_1.length-1));
            if (image_y >= i_array_1.length){
                image_y = i_array_1.length - 1;
            }
        }else{
            image_y = 0;
            console.log("sadism",image_y);
        }
    }
    else if(svo_value == "masochism"){
        num = limit;
        console.log("masochism",yy,limit);
        if(yy < limit){
            image_y = Math.ceil(((limit - yy) / num)*(i_array_1.length-1));
            if (image_y >= i_array_1.length){
                image_y = i_array_1.length - 1;
            }
        }else{
            image_y = 0;
            console.log("masochism",image_y);
        }
    }
    else if(svo_value == "cooperation"){
        distance = (xx+yy-limit)/ Math.pow(2,1/2);
        maxdistance = (total_my_max+total_op_max-limit)/ Math.pow(2,1/2);
        if (maxdistance == 0){
            image_y = 0;
        }
        else if(distance >= 0){
            image_y = Math.ceil( (distance/maxdistance) *(i_array_1.length-1));
            if (image_y >= i_array_1.length){
                image_y = i_array_1.length - 1;
            }
        }else{
            image_y = 0;
            console.log("cooperation",image_y);
        }
    }
    else if(svo_value == "sadomasochism"){
        distance = (xx+yy-limit)/ Math.pow(2,1/2)*(-1);
        maxdistance = (total_my_min+total_op_min-limit)/ Math.pow(2,1/2) *(-1);
        if (maxdistance == 0){
            image_y = 0;
        }
        else if(distance >= 0){
            image_y = Math.ceil( (distance/maxdistance) *(i_array_1.length-1));
            if (image_y >= i_array_1.length){
                image_y = i_array_1.length - 1;
            }
        }else{
            image_y = 0;
            console.log("sadomasochism",image_y);
        }
    }
    else if(svo_value == "competition"){
        //yy=mytotalが自分の得点→x軸
        distance = (-yy+xx+(my_max)-limit)/ Math.pow(2,1/2);
        console.log("op_max,my_max",op_max,my_max,limit);
        console.log("distance",distance);
        maxdistance = (0+op_max+(my_max)-limit)/ Math.pow(2,1/2);
        if (maxdistance == 0){
            image_y = 0;
        }
        else if(distance >= 0){
            image_y = Math.ceil( (distance/maxdistance) *(i_array_1.length-1));
            if (image_y >= i_array_1.length){
                image_y = i_array_1.length - 1;
            }
        }else{
            image_y = 0;
            console.log("competition",image_y);
        }
    }
    else if(svo_value == "martyrdom"){
        //yy=mytotalが自分の得点→x軸
        distance = (-yy+xx+(my_max)-limit)/ Math.pow(2,1/2);
        console.log("op_max,my_max",op_max,my_max,limit);
        console.log("distance",distance);
        maxdistance = (-my_max+0+(my_max)-limit)/ Math.pow(2,1/2);
        if (maxdistance == 0){
            image_y = 0;
        }
        else if(distance <= 0){
            image_y = Math.ceil( (distance/maxdistance) *(i_array_1.length-1));
            if (image_y >= i_array_1.length){
                image_y = i_array_1.length - 1;
            }
        }else{
            image_y = 0;
            console.log("martyrdom",image_y);
        }
    }
    else if(svo_value == "coo_ind"){
        //xx=mytotal,yy=total はただの座標
        distance = (xx+yy/2-limit/2)/ Math.pow(2,1/2);
        maxdistance = (total_my_max12/2+total_op_max12-limit/2)/ Math.pow(2,1/2);
        console.log("xx,yy,total_my_max12,total_op_max12,limit",xx,yy,total_my_max12,total_op_max12,limit,"answer",distance,maxdistance)
        // console.log()
        if (maxdistance == 0){
            image_y = 0;
        }
        else if(distance >= 0){
            image_y = Math.ceil( (distance/maxdistance) *(i_array_1.length-1));
            if (image_y >= i_array_1.length){
                image_y = i_array_1.length - 1;
            }
            
            console.log("image_ydadada",image_y,(distance/maxdistance) *(i_array_1.length-1),distance,maxdistance);
        }else{
            image_y = 0;
            console.log("cooperation",image_y);
        }
    }
    else if(svo_value == "alt_coo"){
        //xx=mytotal,yy=total はただの座標
        distance = (xx/2+yy-limit/2)/ Math.pow(2,1/2);
        maxdistance = (total_my_max21+total_op_max21/2-limit/2)/ Math.pow(2,1/2);
        // console.log("xx,yy,total_my_max12,total_op_max12,limit",xx,yy,total_my_max12,total_op_max12,limit,"answer",distance,maxdistance)
        // console.log()
        if (maxdistance == 0){
            image_y = 0;
        }
        else if(distance >= 0){
            image_y = Math.ceil( (distance/maxdistance) *(i_array_1.length-1));
            if (image_y >= i_array_1.length){
                image_y = i_array_1.length - 1;
            }
            
            console.log("image_ydadada",image_y,(distance/maxdistance) *(i_array_1.length-1),distance,maxdistance);
        }else{
            image_y = 0;
            console.log("cooperation",image_y);
        }
    }
    else if(svo_value == "sad_sad"){
        //xx=mytotal,yy=total はただの座標
        distance = (xx/2+yy-limit/2)/ Math.pow(2,1/2)*(-1);
        maxdistance = (total_my_min21+total_op_min21/2-limit/2)/ Math.pow(2,1/2)*(-1);
        // console.log("xx,yy,total_my_max12,total_op_max12,limit",xx,yy,total_my_max12,total_op_max12,limit,"answer",distance,maxdistance)
        // console.log()
        if (maxdistance == 0){
            image_y = 0;
        }
        else if(distance >= 0){
            image_y = Math.ceil( (distance/maxdistance) *(i_array_1.length-1));
            if (image_y >= i_array_1.length){
                image_y = i_array_1.length - 1;
            }
            
            console.log("image_ydadada",image_y,(distance/maxdistance) *(i_array_1.length-1),distance,maxdistance);
        }else{
            image_y = 0;
            console.log("cooperation",image_y);
        }
    }
    else if(svo_value == "com_sad"){
        //yy=mytotalが自分の得点→x軸
        distance = (-yy+xx/2+(my_max)-limit)/ Math.pow(2,1/2);
        console.log("op_max,my_max",op_max,my_max,limit);
        console.log("distance",distance);
        maxdistance = (0+op_max/2+(my_max)-limit)/ Math.pow(2,1/2);
        if (maxdistance == 0){
            image_y = 0;
        }
        else if(distance >= 0){
            image_y = Math.ceil( (distance/maxdistance) *(i_array_1.length-1));
            if (image_y >= i_array_1.length){
                image_y = i_array_1.length - 1;
            }
        }else{
            image_y = 0;
            console.log("competition",image_y);
        }
    }

}


function get_total(){
 var total = ($("#slider1").slider("option","value"))*op_item1_point+($("#slider2").slider("option","value"))*op_item2_point+($("#slider3").slider("option","value"))*op_item3_point+($("#slider4").slider("option","value"))*op_item4_point;
 return total;
}

function get_total_point(){
 var total_point = (item1_number-$("#slider1").slider("option","value"))*my_item1_point+(item2_number-$("#slider2").slider("option","value"))*my_item2_point+(item3_number-$("#slider3").slider("option","value"))*my_item3_point+(item4_number-$("#slider4").slider("option","value"))*my_item4_point;
 console.log("TOTAL_POINT: ",total);
 return total_point;
}

function add_history(history, pre_value, now_value){
 
 var history_value = pre_value - now_value;
 console.log("pre_value="+pre_value);
 console.log("now_value="+now_value);
 console.log("add_history="+history_value);
 if(history_value<0){
   for(var i=0;i<Math.abs(history_value);i++){
     history += "R";
   }
   history += "|";
   console.log("add_historyR="+history);        
 }
 else if(history_value>0){
   for(var i=0;i<history_value;i++){
     history += "L";
   }
   history += "|";
   console.log("add_historyL="+history);        
 }
 return history;
}

// function arrayShuffle(array) {
//   for(var i = (array.length - 1); 0 < i; i--){

//     // 0〜(i+1)の範囲で値を取得
//     var r = Math.floor(Math.random() * (i + 1));

//     // 要素の並び替えを実行
//     var tmp = array[i];
//     array[i] = array[r];
//     array[r] = tmp;
//   }
//   return array;
// }


//face draw 初期状態
faceDraw(valence1, f_emo, f_bli, valence1); 
stopTimer();
startTimer();
// this.setChoiceValue(1, valence1);
// this.setChoiceValue(2, valence2);
// this.setChoiceValue(3, valence3);
// this.setChoiceValue(4, valence4);
// this.setChoiceValue(5, valence5);
// this.setChoiceValue(6, valence6);
// this.setChoiceValue(7, valence7);
// this.setChoiceValue(8, valence8);


//ボタンの動作
$('#select').click(function() {
$('#slider1').css('visibility','hidden');
$('#slider2').css('visibility','hidden');
$('#slider3').css('visibility','hidden');
$('#slider4').css('visibility','hidden');

var mypoint = get_total_point();
var oppoint = get_total();

console.log("mypoint="+mypoint);
console.log("oppoint="+oppoint);

Qualtrics.SurveyEngine.addEmbeddedData("slider1_history", slider1_history);
Qualtrics.SurveyEngine.addEmbeddedData("slider2_history", slider2_history);
Qualtrics.SurveyEngine.setEmbeddedData("slider3_history", slider3_history);
Qualtrics.SurveyEngine.setEmbeddedData("slider4_history", slider4_history);

Qualtrics.SurveyEngine.setEmbeddedData("mypoint", mypoint);
Qualtrics.SurveyEngine.setEmbeddedData("oppoint", oppoint);

if(oppoint>limit){Qualtrics.SurveyEngine.setEmbeddedData("accept", "accept");console.log("accept");}
else{Qualtrics.SurveyEngine.setEmbeddedData("accept", "reject");console.log("reject");}



Qualtrics.SurveyEngine.setEmbeddedData("PassedTime", performance.now()/1000);
console.log("PassedTime="+performance.now()/1000);




// ----- end of function ---------------

});
































































var global_height = 0;
var global_width = 0;

var global_countop_to_point = 0;
var global_countmy_to_point = 0;

var main_area_flag = 0;
// var scaling_val = 8;


function draw() {
    if(already_slided == 0){
        // var item1 = document.getElementById("item1");
        // var item2 = document.getElementById("item2");
        // var item3 = document.getElementById("item3");
        // var item4 = document.getElementById("item4");
        // var agent1 = document.getElementById("agent1");
        // var agent2 = document.getElementById("agent2");
        // var agent3 = document.getElementById("agent3");
        // var agent4 = document.getElementById("agent4");
        // var human1 = document.getElementById("human1");
        // var human2 = document.getElementById("human2");
        // var human3 = document.getElementById("human3");
        // var human4 = document.getElementById("human4");

        // var items = [item1.value, item2.value, item3.value, item4.value];
        // var human = [agent1.value, agent2.value, agent3.value, agent4.value];
        // var agent = [human1.value, human2.value, human3.value, human4.value];

        var items = [item1_number, item2_number, item3_number, item4_number];
        var agent = [op_item1_point, op_item2_point, op_item3_point, op_item4_point];
        var human = [my_item1_point, my_item2_point, my_item3_point, my_item4_point];


        console.log("human",human);
        // console.log(agent[0]);
        


        for (let i = 0; i <= items[0]; i += 1) {
            for (let j = 0; j <= items[1]; j += 1) {
                for (let k = 0; k <= items[2]; k += 1) {
                    for (let l = 0; l <= items[3]; l += 1) {
                        let human_point = human[0]*i + human[1]*j + human[2]*k + human[3]*l;
                        let agent_point = agent[0]*(items[0] -i ) + agent[1]*(items[1] -j) + agent[2]*(items[2] - k) + agent[3]*(items[3] - l);
                        if (i == 0 && j == 0 && k == 0 && l == 0){
                            var pareto = [[human_point,agent_point]];
                        }
                        pareto.push([human_point,agent_point]);

                    }
                }
            }
        }
        console.log(pareto)

        ////pareto_all
        for (let i = 0; i <= items[0]; i += 1) {
            for (let j = 0; j <= items[1]; j += 1) {
                for (let k = 0; k <= items[2]; k += 1) {
                    for (let l = 0; l <= items[3]; l += 1) {
                        let human_point = human[0]*i + human[1]*j + human[2]*k + human[3]*l;

                        for (let m = 0; m <= items[0]-i; m += 1) {
                            for (let n = 0; n <= items[1]-j; n += 1) {
                                for (let o = 0; o <= items[2]-k; o += 1) {
                                    for (let p = 0; p <= items[3]-l; p += 1) {
                                        if(i == 0 || j == 0 || k == 0 || l == 0 || m == 0 || n == 0 || o == 0 || p == 0){

                                        let agent_point = agent[0]*(m) + agent[1]*(n) + agent[2]*(o) + agent[3]*(p);
                                        if (i == 0 && j == 0 && k == 0 && l == 0 && m == 0 && n == 0 && o == 0 && p == 0){
                                            var pareto_all_dup = [String(human_point)+"a"+String(agent_point)];
                                        }
                                        if (pareto_all_dup[pareto_all_dup.length-1] != String(human_point)+"a"+String(agent_point) ){
                                            pareto_all_dup.push(String(human_point)+"a"+String(agent_point));
                                        }
                                        }
                                    }
                                }
                            }
                        }

                    }
                }
            }
        }
        var pareto_encode = Array.from(new Set(pareto_all_dup));
        // var pareto_all = pareto_all_dup;
        var pareto_all = [];
        console.log("duplicate",pareto_all_dup);
        console.log("plot_encode",pareto_encode);
        console.log("length.pareto_encode",pareto_encode.length)
        for (let i = 0; i < pareto_encode.length; i += 1) {
        pareto_all.push(pareto_encode[i].split('a'));
        }
        for (let i = 0; i < pareto_all.length; i += 1) {
            pareto_all[i][0] = Number(pareto_all[i][0]);
            pareto_all[i][1] = Number(pareto_all[i][1]);
        }
        console.log("pareto_all",pareto_all);

        
        pareto_old = pareto;

        total_min = my_max;

        total_max21 = 0;
        total_min21 = (my_max+op_max)*2;

        total_max12 = 0;
        total_min12 = (my_max+op_max)*2;

        x_min_old = Number(100);
        y_min_old = Number(100);
        for (let i = 0; i < pareto_old.length; i += 1) {
            if(x_min_old > pareto_old[i][0]){
                x_min_old = pareto_old[i][0];
            }
            if(y_min_old > pareto_old[i][1]){
                y_min_old = pareto_old[i][1];
            }
        }
        console.log("x_min_old,y_min_old",x_min_old,y_min_old);
        for (let i = 0; i < pareto_old.length; i += 1) {
            pareto_old[i][0] -= x_min_old;
            pareto_old[i][1] -= y_min_old;
        }

        //svoが中途半端なやつ(傾き2や1/2)も含めて、最大最小
        for (let i = 0; i < pareto_old.length; i += 1) {
            if(total_min > pareto_old[i][0]+pareto_old[i][1]){
                total_min = pareto_old[i][0]+pareto_old[i][1];
                total_my_min = pareto_old[i][0];
                total_op_min = pareto_old[i][1];
                console.log("total_my_min,total_op_min",total_my_min,total_op_min);
            }
            //傾き二分の一つまり自分の点数の方を二倍
            if(total_max12 < pareto_old[i][0]+pareto_old[i][1]*2){
                total_max12 = pareto_old[i][0]+pareto_old[i][1]*2
                total_my_max12 = pareto_old[i][0];
                total_op_max12 = pareto_old[i][1];
                console.log("total_my_max12",total_my_max12)
                console.log("total_op_max12",total_op_max12)
            }
            if(total_min12 > pareto_old[i][0]+pareto_old[i][1]*2){
                total_min12 = pareto_old[i][0]+pareto_old[i][1]*2
                total_my_min12 = pareto_old[i][0];
                total_op_min12 = pareto_old[i][1];
            }
            //傾き2つまり相手の点数の方を2倍
            if(total_max21 < pareto_old[i][0]*2+pareto_old[i][1]){
                total_max21 = pareto_old[i][0]*2+pareto_old[i][1]
                total_my_max21 = pareto_old[i][0];
                total_op_max21 = pareto_old[i][1];
            }
            if(total_min21 > pareto_old[i][0]*2+pareto_old[i][1]){
                total_min21 = pareto_old[i][0]*2+pareto_old[i][1]
                total_my_min21 = pareto_old[i][0];
                total_op_min21 = pareto_old[i][1];
            }
        }

        x_min_all = 100;
        y_min_all = 100;
        for (let i = 0; i < pareto_all.length; i += 1) {
            if(x_min_all > pareto_all[i][0]){
                x_min_all = pareto_all[i][0];
            }
            if(y_min_all > pareto_all[i][1]){
                y_min_all = pareto_all[i][1];
            }
        }
        for (let i = 0; i < pareto_all.length; i += 1) {
            pareto_all[i][0] -= x_min_all;
            pareto_all[i][1] -= y_min_all;
        }
        console.log("x_min_all,y_min_all",x_min_all,y_min_all);
        limit_slider_pre -= y_min_all


        pareto = pareto.sort(function(a,b){return( - a[1] + b[1]);});
        // console.log("pareto",pareto)
        var tmp = [];
        var col_pareto = [];
        var rowmax = pareto[0][1]
        console.log("rowmax",rowmax)

        
        //列の中の最大の値を取ってくる。
        for (let i = 0; i < pareto.length; i += 1) {
            if (i > 0 ){
                if (pareto[i-1][1]  == rowmax){
                    col_pareto.push([pareto[i-1][0],pareto[i-1][1]])
                }
                else if (pareto[i-1][1]  == pareto[i][1]){
                    tmp.push(pareto[i-1][0]);
                    tmp.push(pareto[i][0]);
                }
                else{
                    console.log("[Math.max(...tmp),pareto[i-1][1]]",i,[Math.max(...tmp),pareto[i-1][1]]);
                    console.log("tmp",tmp,tmp.length);
                    if(tmp.length != 0){
                        col_pareto.push([Math.max(...tmp),pareto[i-1][1]]);
                        if ( col_pareto.length == 1 ){tmp.push(pareto[i][0]);}
                    }
                    else{
                        col_pareto.push([pareto[i-1][0],pareto[i-1][1]])
                    }
                }
                if ( i == pareto.length - 1 ){
                    col_pareto.push([pareto[pareto.length - 1][0],pareto[pareto.length - 1][1]]);
                }
                
            }
        }


        var tmp = [];
        var rowcol_pareto = [];
        var col_pareto_flag = 0;
        //行の中の最大の値を取ってくる。
        for (let i = 0; i < col_pareto.length; i += 1) {
            if (i > 0 ){
                if (col_pareto[i-1][0]  == col_pareto[i][0]){
                    tmp.push(col_pareto[i-1][1]);
                    tmp.push(col_pareto[i][1]);
                }
                else{
                    tmp.push(col_pareto[i-1][1]);
                    rowcol_pareto.push([col_pareto[i-1][0],Math.max(...tmp)]);
                    var tmp = [];
                }
                if ( i == col_pareto.length - 1 ){
                    rowcol_pareto.push([col_pareto[col_pareto.length - 1][0],col_pareto[col_pareto.length - 1][1]]);
                }
                //傾き0にも対応するため
                else if(col_pareto_flag == 0 && col_pareto[i][0] == col_pareto[col_pareto.length - 1][0]){
                    rowcol_pareto.push([col_pareto[i][0],col_pareto[i][1]]);
                    col_pareto_flag = 1
                }
            }
        }
        console.log("col_pareto",col_pareto)


        //ガタガタしないため
        // var del_cnt = 0;
        var rowcol_ignore = [];
        var slope_old = 1;
        var check_ignore = 0;
        var check_slope = [];
        for (let i = 0; i < rowcol_pareto.length - 1; i += 1) {
            var already_pushed = 0;
            if (i > 0){
                if (i > 1){ var slope_old = slope_new ;}
                var slope_new = (rowcol_pareto[i][1] - rowcol_pareto[i-1][1])/(rowcol_pareto[i][0] - rowcol_pareto[i-1][0]);
                // if (slope_new != slope_old){
                console.log("slopenew",slope_new,i)
                if (slope_new > 0){
                    rowcol_ignore.push(i);
                    already_pushed = 1;
                }
                else if (slope_new < slope_old){
                    var slope_future = (rowcol_pareto[i][1] - rowcol_pareto[i+1][1])/(rowcol_pareto[i][0] - rowcol_pareto[i+1][0]);
                    console.log("slopefuture",slope_future,i)
                    if (slope_new < slope_future){
                        // // i番目から1つ削除
                        // rowcol_pareto.splice(i-del_cnt, 1);
                        // del_cnt += 1;
                        // // rowcol_pareto.splice(i, 1);
                        rowcol_ignore.push(i);
                        already_pushed = 1;
                        // console.log("aaaa",rowcol_ignore);

                    }
                }

                if(check_slope.length > 0){
                    var plus_or_minus = (check_slope[check_slope.length-1][1] - rowcol_pareto[i][1])/ (check_slope[check_slope.length-1][0] - rowcol_pareto[i][0])
                    if(plus_or_minus <= 0){
                        check_slope.push([rowcol_pareto[i][0],rowcol_pareto[i][1]]);
                    }
                    else{
                        // ignore_plus_a.push(i);
                        if (already_pushed == 0){
                            rowcol_ignore.push(i);
                        }
                    }
                }
                else{
                    check_slope.push([rowcol_pareto[i][0],rowcol_pareto[i][1]]);
                }

                
            }
        }





        const canvas = document.getElementById('MyCanvas1');
        const context = canvas.getContext('2d');
        // var canvasline = document.getElementById('MyCanvas1');
        // var ctxline = canvasline.getContext('2d');
        // var height = 400;
        // var height = rowcol_pareto[0][1]*6+30;
        var height = (rowcol_pareto[0][1])*scaling_val + 50 - (y_min_all)*scaling_val;
        global_height = height;
        // var width = rowcol_pareto[rowcol_pareto.length - 1][0]*scaling_val + 150 - (x_min_all)*scaling_val;
        var x_max_width = 0;
        for (let i = 0; i < rowcol_pareto.length; i += 1) {
            if (rowcol_pareto[i][0] > x_max_width){
                x_max_width = rowcol_pareto[i][0];
            }
        }

        var width = x_max_width*scaling_val + 150 - (x_min_all)*scaling_val;

        global_width = width;
        // https://www.kabanoki.net/1673/
        context.clearRect(10, 1, canvas.width, canvas.height);
        document.getElementById('MyCanvas1').width=0;
        document.getElementById('MyCanvas1').width=width+10;
        // document.getElementById('MyCanvas1').width=width+10 - (x_min_all)*scaling_val;
        document.getElementById('MyCanvas1').height=0;
        document.getElementById('MyCanvas1').height=height+10;
        // document.getElementById('MyCanvas1').height=height+10 - (y_min_all)*scaling_val;
        context.strokeRect(10, 1, width, height);
        // context.strokeRect(10, 1, width - (x_min_all)*scaling_val, height - (y_min_all)*scaling_val);


        context.stroke();
        context.beginPath();
        context.lineWidth=2;
        context.moveTo(1, 101);


        

        //pointをプロットしていく。(配分の黒い点)
        for (let i = 0; i < pareto_old.length; i += 1) {
        // if(i != rowcol_ignore[del_ignore]){
            context.beginPath();

            context.moveTo(pareto_old[i][0]*scaling_val+10, height - pareto_old[i][1]*scaling_val);
            context.arc(pareto_old[i][0]*scaling_val+10, height - pareto_old[i][1]*scaling_val, 1, 0, Math.PI * 2, true); 

            context.stroke();

        }
        console.log(rowcol_ignore);



        // 全てのpointをプロットしていく。(pareto_all)
        // context.fillStyle = "rgba(255,0,0,0.8)" ;
        context.strokeStyle = "rgb(0, 255, 120, 0.5)";

        for (let i = 0; i < pareto_all.length; i += 1) {
            context.beginPath();

            context.moveTo(pareto_all[i][0]*scaling_val+10, height - pareto_all[i][1]*scaling_val);
            context.arc(pareto_all[i][0]*scaling_val+10, height - pareto_all[i][1]*scaling_val, 1, 0, Math.PI * 2, true); 
            context.stroke();

        }
        console.log("pareto_all.length",pareto_all.length);
        context.strokeStyle = "rgb(255, 255, 255, 1)";


        //rowcol_perfectに値を入れるループ
        var del_ignore = 0;
        var rowcol_perfect = [];
        for (let i = 0; i < rowcol_pareto.length; i += 1) {
            if(i != rowcol_ignore[del_ignore]){
                rowcol_perfect.push([rowcol_pareto[i][0],rowcol_pareto[i][1]]);
            }
            else{
                del_ignore += 1;
            }
        }
        console.log(rowcol_ignore);
        console.log("rowcol_pareto",rowcol_pareto)


        // //傾きが同じところを同じ色の線でプロットをなぞる 同じ傾き
        // del_ignore = 0;
        // var change_color = 0;
        // var change_str = 0;
        // var colors_str = ["SeaGreen","PaleVioletRed","lime","Cyan","aqua","yellow"];
        // total_max = 0;
        // for (let i = 0; i < rowcol_perfect.length-1 ; i += 1) {
        //     if (i >= 1){
        //         if(i > 1){var slope_old_line = slope_new ;}
        //         var slope_new = (rowcol_perfect[i][1] - rowcol_perfect[i+1][1])/(rowcol_perfect[i][0] - rowcol_perfect[i+1][0]);
        //         if(i == 1){var slope_old_line = slope_new ;}
        //         if (slope_new < slope_old_line){
        //             change_color += 50;
        //             change_str += 1;
        //             console.log(slope_new,slope_old_line);
                    
        //             console.log("ch",change_color,i,rowcol_perfect[i][0]);
        //             console.log(slope_new,slope_old_line);
        //         }
        //         else if(rowcol_perfect[i][1] - rowcol_perfect[i+1][1] > 0 && rowcol_perfect[i][0] - rowcol_perfect[i+1][0] == 0){
        //             change_color += 50;
        //             change_str += 1;
        //         }
        //     }
        //     context.beginPath();
        //     // context.strokeStyle = "rgb(0, 120, 255, 0.5)";
        //     // context.strokeStyle = "rgb("+((240-change_color*5)%255)+", "+((150+change_color*7)%255)+", "+((120-change_color*12)%255)+", 0.5)";
        //     context.strokeStyle = colors_str[change_str%(colors_str.length)];

        //     context.moveTo(rowcol_perfect[i][0]*scaling_val+10, height - rowcol_perfect[i][1]*scaling_val);
        //     context.lineTo(rowcol_perfect[i+1][0]*scaling_val+10, height - rowcol_perfect[i+1][1]*scaling_val);        
            
        //     context.stroke();

        //     if(total_max < rowcol_perfect[i][0]+rowcol_perfect[i][1]){
        //         total_max = rowcol_perfect[i][0]+rowcol_perfect[i][1];
        //         total_my_max = rowcol_perfect[i][0];
        //         total_op_max = rowcol_perfect[i][1];
        //         console.log("total_my_max,total_op_max",total_my_max,total_op_max);
        //     }

        
        // }
        // console.log("rowcol_perfect",rowcol_perfect);
        // //
        // //
        // //
        // //ここまで
        // //
        // //
        // //
        // //

        //パレートフロンティアの黒い点を違う色に変更する(赤い点...??)
        del_ignore = 0;
        var change_color = 0;
        var change_str = 0;
        var colors_str = ["#FF22FF","#00FFFF","#00FF00","#FF367F","#0000FF"];
        total_max = 0;
        for (let i = 0; i < rowcol_perfect.length-1 ; i += 1) {
            if (i >= 1){
                if(i > 1){var slope_old_line = slope_new ;}
                var slope_new = (rowcol_perfect[i][1] - rowcol_perfect[i+1][1])/(rowcol_perfect[i][0] - rowcol_perfect[i+1][0]);
                if(i == 1){var slope_old_line = slope_new ;}
                if (slope_new < slope_old_line){
                    change_color += 50;
                    change_str += 1;
                    console.log(slope_new,slope_old_line);
                    
                    console.log("ch",change_color,i,rowcol_perfect[i][0]);
                    console.log(slope_new,slope_old_line);
                }
                else if(rowcol_perfect[i][1] - rowcol_perfect[i+1][1] > 0 && rowcol_perfect[i][0] - rowcol_perfect[i+1][0] == 0){
                    change_color += 50;
                    change_str += 1;
                }
            }
            context.beginPath();
            // context.strokeStyle = "rgb(0, 120, 255, 0.5)";
            // context.strokeStyle = "rgb("+((240-change_color*5)%255)+", "+((150+change_color*7)%255)+", "+((120-change_color*12)%255)+", 0.5)";
            context.strokeStyle = colors_str[change_str%(colors_str.length)];

            // context.moveTo(rowcol_perfect[i][0]*scaling_val+10, height - rowcol_perfect[i][1]*scaling_val);
            // context.lineTo(rowcol_perfect[i+1][0]*scaling_val+10, height - rowcol_perfect[i+1][1]*scaling_val);
            
            context.arc(rowcol_perfect[i][0]*scaling_val+10, height - rowcol_perfect[i][1]*scaling_val, 2, 0, Math.PI * 2, true); 
            
            context.stroke();

            if(total_max < rowcol_perfect[i][0]+rowcol_perfect[i][1]){
                total_max = rowcol_perfect[i][0]+rowcol_perfect[i][1];
                total_my_max = rowcol_perfect[i][0];
                total_op_max = rowcol_perfect[i][1];
                console.log("total_my_max,total_op_max",total_my_max,total_op_max);
            }

        
        }
        console.log("rowcol_perfect",rowcol_perfect);
        //
        //
        //
        //ここまで
        //
        //
        //
        //



        //マス目の縦線を引いていく。
        for (let i = 0; i*scaling_val+40 < width; i += 1) {
            if(i==0){
                context.font = "15px serif";
                context.fillText("Other", 10, 20);
                context.font = "10px serif";

            }
            // console.log("i + x_min_all",i + x_min_all)
            if ((i + x_min_all) == 0){
                context.beginPath();
                context.strokeStyle = "rgb(0, 0, 0, 0.6)";
                context.moveTo(i*scaling_val+10, 20);
                context.lineTo(i*scaling_val+10, height);
                context.stroke();
            }
            if ((i + x_min_all)%5 == 0){
                context.beginPath();

                context.strokeStyle = "rgb(0, 120, 255, 0.5)";
                context.moveTo(i*scaling_val+10, 20);
                
                context.lineTo(i*scaling_val+10, height);

                context.fillText( i + x_min_all, i*scaling_val+10, height+10);
                context.stroke();
            }
            else{
                context.beginPath();

                context.strokeStyle = "rgb(0, 120, 255, 0.1)";
                
                context.moveTo(i*scaling_val+10, 20);
                context.lineTo(i*scaling_val+10, height);

                context.stroke();
            }
        }

        //マス目の横線を引いていく。
        for (let i = 0; i*scaling_val+10 < height; i += 1) {
            if(i==0){
                context.fillStyle = "rgba(0,0,0,1)" ;
                context.font = "15px serif";
                context.fillText("Self", width-60, height);
                context.font = "10px serif";

            }
            if((i + y_min_all) ==1){
                context.beginPath();
                context.strokeStyle = "rgb(0, 0, 0, 0.6)";
                context.moveTo(10,height - i*scaling_val+scaling_val);
                context.lineTo(width-40,height - i*scaling_val+scaling_val);
                context.fillText( i-1 + y_min_all, 10, height - ((i)*scaling_val)+scaling_val-2);
                context.stroke();
            }
            // console.log("(i + y_min_all - 1)%5",(i + y_min_all - 1)%5,i-1 + y_min_all,y_min_all)
            if((i + y_min_all - 1)%5==0){
                context.beginPath();
                context.strokeStyle = "rgb(0, 120, 255, 0.5)";

                context.moveTo(10,height - i*scaling_val+scaling_val);
                context.lineTo(width-40,height - i*scaling_val+scaling_val);


                context.fillText( i-1 + y_min_all, 10, height - (i*scaling_val)+scaling_val-2);
                context.stroke();
            }
            else{
                context.beginPath();
                // context.strokeStyle = "rgb(0, 0, 0, 1)";
                context.strokeStyle = "rgb(0, 120, 255, 0.1)";
                context.moveTo(10,height - i*scaling_val+scaling_val);
                context.lineTo(width-40,height - i*scaling_val+scaling_val);
                context.stroke();
            }
        
        }
        context.stroke();


        // console.log("main_area_flag_mae",main_area_flag)
        // if(main_area_flag == 1){main_area_flag=0}
        // else{main_area_flag=1};
        // $('#main_area'+main_area_flag).prepend('<div class = "pareto_hiyori" id = "main_area'+main_area_flag+'" style="height:'+canvas.height+20+'px">');
        
        // console.log("main_area_flag",main_area_flag)
        // if(main_area_flag == 1){main_area_flag=0}
        // else{main_area_flag=1};
        // $('#main_area'+main_area_flag).hide();
        // if(main_area_flag == 1){main_area_flag=0}
        // else{main_area_flag=1};
        // console.log("val",val);
        // val = "height:800px";
        document.getElementById('main_area0').style.height = global_height+10+'px';

        const canvaslabel = document.getElementById('MyCanvasLabel');
        const contextlabel = canvaslabel.getContext('2d');
        contextlabel.clearRect(0, 0, global_width+2000, global_height+2000);
        canvaslabel.height=global_height+10;
        canvaslabel.width=global_width+10;
        const emotionlabel = new Image();
        emotionlabel.src="https://rc1userv5pwvgnvtxbwj.au1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_5hxQJl8iNN6R2ho";
        emotionlabel.onload = ()=>{
            contextlabel.drawImage(emotionlabel, global_width-90, 0, 100, 160);  // ★ここを変更★
        };


    }
    const canvas2 = document.getElementById('MyCanvas2');
    const context2 = canvas2.getContext('2d');
    // var canvas2line = document.getElementById('MyCanvas1');
    // var ctxline = canvas2line.getContext('2d');
    // var height = 400;
    // var height = rowcol_pareto[0][1]*6+30;
    // var height = rowcol_pareto[0][1]*scaling_val + 50;
    // var width = rowcol_pareto[rowcol_pareto.length - 1][0]*scaling_val + 100;

    // https://www.kabanoki.net/1673/
    // context2.clearRect(0, 0, canvas2.width+20, canvas2.height+20);
    context2.clearRect(0, 0, global_width+20, global_height+20);
    document.getElementById('MyCanvas2').width=0;
    document.getElementById('MyCanvas2').width=global_width+10;
    document.getElementById('MyCanvas2').height=0;
    document.getElementById('MyCanvas2').height=global_height+10;
    // context2.strokeRect(10, 1, width, height);

    // if(already_slided == 1){
    //     context2.beginPath();
    //     // context2.strokeStyle = "rgb(0, 0, 0, 1)";
    //     // context2.moveTo(global_countmy_to_point*scaling_val+10, global_height - global_countop_to_point*scaling_val);
    //     // context2.arc(global_countmy_to_point*scaling_val+10, global_height - global_countop_to_point*scaling_val, 10, 0, Math.PI * 2, true); 
    //     // context2.stroke();
    //     console.log("kore");
    //     console.log("coutop_blue",global_countop_to_point);
    // }
    console.log("countop",current_op1,current_op2,current_op3,current_op4);
    console.log("countmy",current_my1,current_my2,current_my3,current_my4);

    var countop_to_point = op_item1_point*current_op1 + op_item2_point*current_op2 + op_item3_point*current_op3 + op_item4_point*current_op4;
    var countmy_to_point = my_item1_point*current_my1 + my_item2_point*current_my2 + my_item3_point*current_my3 + my_item4_point*current_my4;
    console.log("countop_to_point",countop_to_point,global_height);

    global_countop_to_point = countop_to_point;
    global_countmy_to_point = countmy_to_point;

    context2.beginPath();
    context2.strokeStyle = "rgb(255, 0, 0, 1)";
    // context2.moveTo(countmy_to_point*scaling_val+10, global_height - countop_to_point*scaling_val);
    context2.arc(countmy_to_point*scaling_val+10 - x_min_all*scaling_val, global_height - countop_to_point*scaling_val + y_min_all*scaling_val, 2, 0, Math.PI * 2, true); 
    context2.stroke();
    context2.beginPath();
    context2.arc(countmy_to_point*scaling_val+10 - x_min_all*scaling_val, global_height - countop_to_point*scaling_val + y_min_all*scaling_val, 5, 0, Math.PI * 2, true); 

    context2.stroke();



    const canvas3 = document.getElementById('MyCanvas3');
    const context3 = canvas3.getContext('2d');
    context3.clearRect(0, 0, global_width+20, global_height+20);
    document.getElementById('MyCanvas3').width=0;
    document.getElementById('MyCanvas3').width=global_width+10;
    document.getElementById('MyCanvas3').height=0;
    document.getElementById('MyCanvas3').height=global_height+10;

    context3.beginPath();
    context3.strokeStyle = "rgb(60, 60, 255, 1)";

    // if(svo_value=="individualism"){
    //     //なぜかlimitが部分的に文字列になっているせいで (limit+1)*scaling_val とすると 36*scaling_valではなく 351*scaling_valとなってしまう。
    //     context3.moveTo(10,global_height - limit_slider_pre*scaling_val);
    //     // console.log("global_height - (limit+1)*scaling_val+8",global_height - limit*scaling_val);
    //     // console.log("global_height",global_height);
    //     // console.log("(limit+1)*scaling_val+8",global_height);
    //     context3.lineTo(global_width-40,global_height - limit_slider_pre*scaling_val);
    //     context3.moveTo(10,global_height - limit_slider_pre*scaling_val);
    //     context3.lineTo(global_width-40,global_height - limit_slider_pre*scaling_val);

    //     context3.fillText( "     Limit", 10, global_height - (limit_slider_pre*scaling_val));
    //     slider_max_limit = op_item1_point*item1_number+op_item2_point*item2_number+op_item3_point*item3_number+op_item4_point*item4_number;
    // }
    // else if(svo_value=="altruism"){
    //     //なぜかlimitが部分的に文字列になっているせいで (limit+1)*scaling_val とすると 36*scaling_valではなく 351*scaling_valとなってしまう。
    //     context3.moveTo(global_width - limit_slider_pre*scaling_val,10);
    //     // console.log("global_height - (limit+1)*scaling_val+8",global_height - limit*scaling_val);
    //     // console.log("global_height",global_height);
    //     // console.log("(limit+1)*scaling_val+8",global_height);
    //     context3.lineTo(global_width - limit_slider_pre*scaling_val,global_height - 40);
    //     context3.moveTo(global_width - limit_slider_pre*scaling_val,10);
    //     context3.lineTo(global_width - limit_slider_pre*scaling_val,global_height - 40);

    //     context3.fillText( "Limit", global_width - (limit_slider_pre*scaling_val),10);
    //     slider_max_limit = my_item1_point*item1_number+my_item2_point*item2_number+my_item3_point*item3_number+my_item4_point*item4_number;
    // }
    draw_limit();


    context3.stroke();
    //ここからリミットのスライダー
    $("#slider_limit").slider({
        value: limit_slider_pre,
        min: slider_min_limit,
        max: slider_max_limit, // 金額の最大値
        step: 1,
        range: "min",
        //orientation: "vertical",
        
        change: function (event, ui) { //スライダー変更
            draw_limit();
            limit_slider_pre = ui.value;
            limit_point.innerHTML = eval(limit_slider_pre + y_min_all)+"point";
            // limit_point.innerHTML = eval(limit_slider_pre)+"point";
            draw_limit();
            limit = limit_slider_pre + y_min_all;
            svo_faceDraw();
            indexLibrary.set_limit(limit);
        },

        slide: function (event, ui) {// 変更中
            draw_limit();
            limit_slider_pre = ui.value;
            limit_point.innerHTML = eval(limit_slider_pre + y_min_all)+"point";
            // limit_point.innerHTML = eval(limit_slider_pre)+"point";
            draw_limit();
            limit = limit_slider_pre + y_min_all;
            svo_faceDraw();
            console.log("limit_slider_pre",limit_slider_pre);
            indexLibrary.set_limit(limit);
        }
    });

}

function draw_limit(){
    const canvas3 = document.getElementById('MyCanvas3');
    const context3 = canvas3.getContext('2d');
    context3.clearRect(0, 0, global_width+20, global_height+20);
    document.getElementById('MyCanvas3').width=0;
    document.getElementById('MyCanvas3').width=global_width+10;
    document.getElementById('MyCanvas3').height=0;
    document.getElementById('MyCanvas3').height=global_height+10;

    context3.beginPath();
    context3.strokeStyle = "rgb(60, 60, 255, 1)";
    //グラデーション ヒートマップ
    // var colors_str = ["rgb(255, 200, 0, 0.5)","rgb(255, 230, 0, 0.45)","rgb(255, 255, 0, 0.4)",
    //     "rgb(170, 255, 0, 0.35)","rgb(150, 255, 0, 0.3)","rgb(120, 255, 0, 0.4)",
    //     "rgb(100, 255, 0, 0.3)","rgb(0, 255, 0, 0.25)","rgb(0, 180, 60, 0.2)",
    //     "rgb(0, 120, 120, 0.2)","rgb(0, 120, 255, 0.2)","rgb(50, 0, 200, 0.2)",
    //     "rgb(80, 0, 130, 0.3)","rgb(70, 0, 100, 0.4)","rgb(50, 0, 60, 0.5)",
    //     "rgb(25, 0, 40, 0.5)"];
    var colors_str = ["rgb(255, 105, 0, 0.55)","rgb(255, 120, 0, 0.55)","rgb(255, 135, 0, 0.5)",
    "rgb(255, 150, 0, 0.55)","rgb(255, 165, 0, 0.55)","rgb(255, 180, 0, 0.5)",
    "rgb(255, 195, 0, 0.5)","rgb(255, 210, 0, 0.5)",
    "rgb(255, 225, 0, 0.5)","rgb(255, 240, 0, 0.45)","rgb(255, 255, 0, 0.5)","rgb(240, 255, 0, 0.5)","rgb(225, 255, 0, 0.5)",
        "rgb(210, 255, 0, 0.5)","rgb(195, 255, 0, 0.5)","rgb(180, 255, 0, 0.5)"];

    if(svo_value=="individualism"){
        //なぜかlimitが部分的に文字列になっているせいで (limit+1)*scaling_val とすると 36*scaling_valではなく 351*scaling_valとなってしまう。
        var ver_limit = global_height - limit_slider_pre*scaling_val;
        context3.moveTo(10,ver_limit);
        context3.lineTo(global_width-40,ver_limit);
        context3.moveTo(10,ver_limit);
        context3.lineTo(global_width-40,ver_limit);
        context3.fillText( "     Limit", 10, global_height - (limit_slider_pre*scaling_val));

        slider_max_limit = op_item1_point*item1_number+op_item2_point*item2_number+op_item3_point*item3_number+op_item4_point*item4_number - y_min_all*2;
        console.log("slider_max_limit",slider_max_limit,op_item1_point*item1_number+op_item2_point*item2_number+op_item3_point*item3_number+op_item4_point*item4_number)
        slider_min_limit = 0;



        //limit以下は赤で覆う。
        context3.fillStyle = "rgb(255, 0, 0, 0.3)";
        context3.moveTo(0,ver_limit);  // 始点の移動
        context3.lineTo(global_width+10,ver_limit);   // 始点から指定した点までの直線をパスに登録
        context3.lineTo(global_width+10,global_height+10);
        context3.lineTo(0,global_height+10);
        context3.fill();
        context3.stroke();
        context3.closePath();

        //hiyoriの表情は16段階
        //一番上は
        var ver_limit_max = global_height - slider_max_limit*scaling_val;
        

        for(let i = 1; i < 17; i++){
            context3.beginPath();
            
            context3.fillStyle = colors_str[(i-1)%16];
            // context3.moveTo(0,ver_limit-10);  // 始点の移動
            var vertical_i = (ver_limit-ver_limit_max)*(i/16)+ver_limit_max;
            var vertical_i_1 = (ver_limit-ver_limit_max)*((i-1)/16)+ver_limit_max;
            // var vertical_i_1 = ver_limit;

            context3.moveTo(0,vertical_i);  // 始点の移動
            context3.lineWidth = 0.1;
            context3.lineTo(global_width+10,vertical_i);   // 始点から指定した点までの直線をパスに登録
            context3.lineTo(global_width+10,vertical_i_1);
            context3.lineTo(0,vertical_i_1);
            context3.fill();
            context3.closePath();
        }
        
    }
    else if(svo_value=="altruism"){
        //なぜかlimitが部分的に文字列になっているせいで (limit+1)*scaling_val とすると 36*scaling_valではなく 351*scaling_valとなってしまう。
        var ho_limit = limit_slider_pre*scaling_val+9
        context3.moveTo(ho_limit,0);
        // console.log("global_height - (limit+1)*scaling_val+8",global_height - limit*scaling_val);
        // console.log("global_height",global_height);
        // console.log("(limit+1)*scaling_val+8",global_height);
        context3.lineTo(ho_limit,global_height - 0);
        context3.moveTo(ho_limit,0);
        context3.lineTo(ho_limit,global_height - 0);

        context3.fillText( "Limit", (limit_slider_pre*scaling_val),global_height - 10);
        slider_max_limit = my_item1_point*item1_number+my_item2_point*item2_number+my_item3_point*item3_number+my_item4_point*item4_number;
        slider_min_limit = 0;



        //limit以下は赤で覆う。
        context3.fillStyle = "rgb(255, 0, 0, 0.3)";
        context3.moveTo(ho_limit,0);  // 始点の移動
        context3.lineTo(ho_limit,global_height);   // 始点から指定した点までの直線をパスに登録
        context3.lineTo(0,global_height);
        context3.lineTo(0,0);
        context3.fill();
        context3.stroke();
        context3.closePath();

        //hiyoriの表情は16段階
        //一番上は
        var ho_limit_max = slider_max_limit*scaling_val+9;
        

        for(let i = 1; i < 17; i++){
            context3.beginPath();
            
            context3.fillStyle = colors_str[(15-(i-1))%16];
            // context3.moveTo(0,ver_limit-10);  // 始点の移動
            var horizontal_i = -(ho_limit-ho_limit_max)*(i/16)+ho_limit;
            var horizontal_i_1 = -(ho_limit-ho_limit_max)*((i-1)/16)+ho_limit;
            // var vertical_i_1 = ver_limit;

            context3.moveTo(horizontal_i,0);  // 始点の移動
            context3.lineWidth = 0.1;
            context3.lineTo(horizontal_i,global_height);   // 始点から指定した点までの直線をパスに登録
            context3.lineTo(horizontal_i_1,global_height);
            context3.lineTo(horizontal_i_1,0);
            context3.fill();
            context3.closePath();
        }
    }
    else if(svo_value=="sadism"){
        var ho_limit = limit_slider_pre*scaling_val+9
        //なぜかlimitが部分的に文字列になっているせいで (limit+1)*scaling_val とすると 36*scaling_valではなく 351*scaling_valとなってしまう。
        context3.moveTo(limit_slider_pre*scaling_val+9,0);
        // console.log("global_height - (limit+1)*scaling_val+8",global_height - limit*scaling_val);
        // console.log("global_height",global_height);
        // console.log("(limit+1)*scaling_val+8",global_height);
        context3.lineTo(limit_slider_pre*scaling_val+9,global_height - 0);
        context3.moveTo(limit_slider_pre*scaling_val+9,0);
        context3.lineTo(limit_slider_pre*scaling_val+9,global_height - 0);

        context3.fillText( "Limit", (limit_slider_pre*scaling_val),global_height - 10);
        slider_max_limit = my_item1_point*item1_number+my_item2_point*item2_number+my_item3_point*item3_number+my_item4_point*item4_number;
        slider_min_limit = 0;


        //limit以下は赤で覆う。
        context3.fillStyle = "rgb(255, 0, 0, 0.3)";
        context3.moveTo(ho_limit,0);  // 始点の移動
        context3.lineTo(ho_limit,global_height);   // 始点から指定した点までの直線をパスに登録
        context3.lineTo(global_width+10,global_height);
        context3.lineTo(global_width+10,0);
        context3.fill();
        context3.stroke();
        context3.closePath();

        //hiyoriの表情は16段階
        //一番上は
        var ho_limit_max = 10;
        

        for(let i = 1; i < 17; i++){
            context3.beginPath();
            
            context3.fillStyle = colors_str[(15-(i-1))%16];
            // context3.moveTo(0,ver_limit-10);  // 始点の移動
            var horizontal_i = -(ho_limit-ho_limit_max)*(i/16)+ho_limit;
            var horizontal_i_1 = -(ho_limit-ho_limit_max)*((i-1)/16)+ho_limit;
            // var vertical_i_1 = ver_limit;

            context3.moveTo(horizontal_i,0);  // 始点の移動
            context3.lineWidth = 0.1;
            context3.lineTo(horizontal_i,global_height);   // 始点から指定した点までの直線をパスに登録
            context3.lineTo(horizontal_i_1,global_height);
            context3.lineTo(horizontal_i_1,0);
            context3.fill();
            context3.closePath();
        }
    }
    else if(svo_value=="masochism"){
        var ver_limit = global_height - limit_slider_pre*scaling_val;
        //なぜかlimitが部分的に文字列になっているせいで (limit+1)*scaling_val とすると 36*scaling_valではなく 351*scaling_valとなってしまう。
        context3.moveTo(10,ver_limit);
        console.log("global_height - (limit+1)*scaling_val+8",ver_limit);
        console.log("global_height",global_height);
        console.log("(limit+1)*scaling_val+8",global_height);
        context3.lineTo(global_width-40,ver_limit);
        context3.moveTo(10,ver_limit);
        context3.lineTo(global_width-40,ver_limit);
        context3.fillText( "     Limit", 10, global_height - (limit_slider_pre*scaling_val));

        
        slider_max_limit = op_item1_point*item1_number+op_item2_point*item2_number+op_item3_point*item3_number+op_item4_point*item4_number;
        slider_min_limit = 0;


        //limit以上は赤で覆う。
        context3.fillStyle = "rgb(255, 0, 0, 0.3)";
        context3.moveTo(0,ver_limit);  // 始点の移動
        context3.lineTo(global_width+10,ver_limit);   // 始点から指定した点までの直線をパスに登録
        context3.lineTo(global_width+10,0);
        context3.lineTo(0,0);
        context3.fill();
        context3.stroke();
        context3.closePath();

        //hiyoriの表情は16段階
        //一番上は
        var ver_limit_max = global_height - slider_max_limit*scaling_val;
        

        for(let i = 1; i < 17; i++){
            context3.beginPath();
            
            context3.fillStyle = colors_str[(15-(i-1))%16];
            // context3.moveTo(0,ver_limit-10);  // 始点の移動
            var vertical_i = (global_height-ver_limit)*(i/16)+ver_limit;
            var vertical_i_1 = (global_height-ver_limit)*((i-1)/16)+ver_limit;
            // var vertical_i_1 = ver_limit;

            context3.moveTo(0,vertical_i);  // 始点の移動
            context3.lineWidth = 0.1;
            context3.lineTo(global_width+10,vertical_i);   // 始点から指定した点までの直線をパスに登録
            context3.lineTo(global_width+10,vertical_i_1);
            context3.lineTo(0,vertical_i_1);
            context3.fill();
            context3.closePath();
        }
    }
    else if(svo_value=="cooperation"){
        //なぜかlimitが部分的に文字列になっているせいで (limit+1)*scaling_val とすると 36*scaling_valではなく 351*scaling_valとなってしまう。
        var ver_limit = global_height - limit_slider_pre*scaling_val;
        var ho_limit = limit_slider_pre*scaling_val+9;
        context3.moveTo(10,ver_limit);
        context3.lineTo(ho_limit,global_height);
        context3.moveTo(10,ver_limit);
        context3.lineTo(ho_limit,global_height);
        context3.fillText( "     Limit", 10, global_height - (limit_slider_pre*scaling_val));
        // slider_max_limit = Math.max(total_my_max,total_op_max);
        slider_max_limit = total_my_max+total_op_max;
        slider_min_limit = total_my_min+total_op_min;

        console.log("total_my_max,total_op_max",total_my_max,total_op_max,total_max);


        //limit以下は赤で覆う。
        context3.fillStyle = "rgb(255, 0, 0, 0.3)";
        context3.moveTo(10,ver_limit);  // 始点の移動
        context3.lineTo(ho_limit,global_height);   // 始点から指定した点までの直線をパスに登録
        // context3.lineTo(global_width+10,0);
        context3.lineTo(10,global_height);
        context3.fill();
        context3.stroke();
        context3.closePath();

        //hiyoriの表情は16段階
        //一番上は
        var ver_limit_max = global_height - slider_max_limit*scaling_val;
        var ho_limit_max = slider_max_limit*scaling_val+9;
        

        for(let i = 1; i < 17; i++){
            context3.beginPath();
            
            context3.fillStyle = colors_str[(15-(i-1))%16];
            // context3.moveTo(0,ver_limit-10);  // 始点の移動
            var vertical_i = (ver_limit_max-ver_limit)*(i/16)+ver_limit;
            var vertical_i_1 = (ver_limit_max-ver_limit)*((i-1)/16)+ver_limit;
            var horizontal_i = (ho_limit_max-ho_limit)*(i/16)+ho_limit;
            var horizontal_i_1 = (ho_limit_max-ho_limit)*((i-1)/16)+ho_limit;
            // var vertical_i_1 = ver_limit;

            context3.moveTo(10,vertical_i);  // 始点の移動
            context3.lineWidth = 0.1;
            context3.lineTo(horizontal_i,global_height);   // 始点から指定した点までの直線をパスに登録
            context3.lineTo(horizontal_i_1,global_height);
            context3.lineTo(10,vertical_i_1);
            context3.fill();
            context3.closePath();
        }
    }
    else if(svo_value=="sadomasochism"){
        var ver_limit = global_height - limit_slider_pre*scaling_val;
        var ho_limit = limit_slider_pre*scaling_val+9;
        //なぜかlimitが部分的に文字列になっているせいで (limit+1)*scaling_val とすると 36*scaling_valではなく 351*scaling_valとなってしまう。
        context3.moveTo(10,global_height - limit_slider_pre*scaling_val);
        context3.lineTo(limit_slider_pre*scaling_val+9,global_height);
        context3.moveTo(10,global_height - limit_slider_pre*scaling_val);
        context3.lineTo(limit_slider_pre*scaling_val+9,global_height);
        context3.fillText( "     Limit", 10, global_height - (limit_slider_pre*scaling_val));
        // slider_max_limit = Math.max(total_my_max,total_op_max);
        slider_max_limit = total_my_max+total_op_max;
        slider_min_limit = total_my_min+total_op_min;

        console.log("total_my_max,total_op_max",total_my_max,total_op_max,total_max);

        //limit以下は赤で覆う。
        context3.fillStyle = "rgb(255, 0, 0, 0.3)";
        context3.moveTo(10,0);  // 始点の移動
        context3.lineTo(10,ver_limit);
        context3.lineTo(ho_limit,global_height);   // 始点から指定した点までの直線をパスに登録
        // context3.lineTo(global_width+10,0);
        context3.lineTo(global_width+10,global_height);
        context3.lineTo(global_width+10,0);
        context3.fill();
        context3.stroke();
        context3.closePath();

        //hiyoriの表情は16段階
        //一番上は
        var ver_limit_max = global_height - slider_min_limit*scaling_val;
        var ho_limit_max = slider_min_limit*scaling_val+9;
        

        for(let i = 1; i < 17; i++){
            context3.beginPath();
            
            context3.fillStyle = colors_str[(15-(i-1))%16];
            // context3.moveTo(0,ver_limit-10);  // 始点の移動
            var vertical_i = (ver_limit_max-ver_limit)*(i/16)+ver_limit;
            var vertical_i_1 = (ver_limit_max-ver_limit)*((i-1)/16)+ver_limit;
            var horizontal_i = (ho_limit_max-ho_limit)*(i/16)+ho_limit;
            var horizontal_i_1 = (ho_limit_max-ho_limit)*((i-1)/16)+ho_limit;
            // var vertical_i_1 = ver_limit;

            context3.moveTo(10,vertical_i);  // 始点の移動
            context3.lineWidth = 0.1;
            context3.lineTo(horizontal_i,global_height);   // 始点から指定した点までの直線をパスに登録
            context3.lineTo(horizontal_i_1,global_height);
            context3.lineTo(10,vertical_i_1);
            context3.fill();
            context3.closePath();
        }
    }
    else if(svo_value=="competition"){
        var ver_limit_small = global_height+(global_width-93)- (limit_slider_pre+1)*scaling_val;
        var ver_limit_large = global_height+(global_width-93) - (limit_slider_pre+1)*scaling_val*101;
        var ho_limit_large = 10+(limit_slider_pre+1)*scaling_val*100
        //なぜかlimitが部分的に文字列になっているせいで (limit+1)*scaling_val とすると 36*scaling_valではなく 351*scaling_valとなってしまう。
        context3.moveTo(10,ver_limit_small);
        console.log("global_height - (limit+1)*scaling_val+8",global_height - (total_op_max*scaling_val - (limit_slider_pre+1)*scaling_val));
        console.log("global_height",total_op_max*scaling_val);
        console.log("(limit+1)*scaling_val+8",total_op_max*scaling_val);
        context3.lineTo(ho_limit_large,ver_limit_large);
        context3.moveTo(10,ver_limit_small);
        context3.lineTo(ho_limit_large,ver_limit_large);
        context3.fillText( "     Limit", 10, ver_limit_small);
        // slider_max_limit = Math.max(total_my_max,total_op_max);
        slider_max_limit = my_max+op_max;
        slider_min_limit = 0;

        console.log("limit_slider_pre",limit_slider_pre);


        //limit以下は赤で覆う。
        context3.fillStyle = "rgb(255, 0, 0, 0.3)";
        context3.moveTo(global_width+100,global_height+100);  // 始点の移動
        context3.lineTo(10,global_height+100); //ここで四角形にする
        context3.lineTo(10,ver_limit_small);
        context3.lineTo(ho_limit_large,ver_limit_large);   

        context3.fill();
        context3.stroke();
        context3.closePath();

        //hiyoriの表情は16段階
        //一番上は
        var ver_limit_max = slider_max_limit*scaling_val+10;
        var ho_limit_max = 0;
        
        for(let i = 1; i < 17; i++){
            context3.beginPath();
            
            context3.fillStyle = colors_str[(15-(i-1))%16];

            var vertical_small_i = global_height+(global_width-93)- (((slider_max_limit - limit_slider_pre)/16)*i + limit_slider_pre+1)*scaling_val;
            var vertical_small_i_1 = global_height+(global_width-93)- (((slider_max_limit - limit_slider_pre)/16)*(i-1) + limit_slider_pre+1)*scaling_val;
            var vertical_large_i =   global_height+(global_width-93)- (((slider_max_limit - limit_slider_pre)/16)*i + limit_slider_pre+1)*400;
            var vertical_large_i_1 =   global_height+(global_width-93)- (((slider_max_limit - limit_slider_pre)/16)*(i-1) + limit_slider_pre+1)*400;

            var horizontal_large_i = 10+(((slider_max_limit - limit_slider_pre)/16)*(i) + limit_slider_pre+1)*scaling_val*49.2;
            var horizontal_large_i_1 = 10+(((slider_max_limit - limit_slider_pre)/16)*(i-1) + limit_slider_pre+1)*scaling_val*49.2;
            
            context3.moveTo(10,vertical_small_i);  // 始点の移動
            context3.lineWidth = 0.1;
            
            context3.lineTo(horizontal_large_i,vertical_large_i);   // 始点から指定した点までの直線をパスに登録
            context3.lineTo(horizontal_large_i_1,vertical_large_i_1);
            context3.lineTo(10,vertical_small_i_1);
            context3.fill();
            context3.closePath();
        }
    }
    else if(svo_value=="martyrdom"){
        var ver_limit_small = global_height+(global_width-93)- (limit_slider_pre+1)*scaling_val;
        var ver_limit_large = global_height+(global_width-93) - (limit_slider_pre+1)*scaling_val*101;
        var ho_limit_large = 10+(limit_slider_pre+1)*scaling_val*100
        //なぜかlimitが部分的に文字列になっているせいで (limit+1)*scaling_val とすると 36*scaling_valではなく 351*scaling_valとなってしまう。
        context3.moveTo(10,global_height+(global_width-93)- (limit_slider_pre+1)*scaling_val);
        console.log("global_height - (limit+1)*scaling_val+8",global_height - (total_op_max*scaling_val - (limit_slider_pre+1)*scaling_val));
        console.log("global_height",total_op_max*scaling_val);
        console.log("(limit+1)*scaling_val+8",total_op_max*scaling_val);
        context3.lineTo(10+(limit_slider_pre+1)*scaling_val*100,global_height+(global_width-93) - (limit_slider_pre+1)*scaling_val*101);
        context3.moveTo(10,global_height+(global_width-93)- (limit_slider_pre+1)*scaling_val);
        context3.lineTo(10+(limit_slider_pre+1)*scaling_val*100,global_height+(global_width-93) - (limit_slider_pre+1)*scaling_val*101);
        context3.fillText( "     Limit", 10, global_height+(global_width-93)- (limit_slider_pre+1)*scaling_val);
        // slider_max_limit = Math.max(total_my_max,total_op_max);
        slider_max_limit = my_max+op_max;
        slider_min_limit = 0;

        console.log("total_my_max,total_op_max",total_my_max,total_op_max,total_max);

        

        //limit以下は赤で覆う。
        context3.fillStyle = "rgb(255, 0, 0, 0.3)";
        context3.moveTo(10,0);  // 始点の移動
        // context3.lineTo(10,global_height+100); //ここで四角形にする
        context3.lineTo(10,ver_limit_small);
        context3.lineTo(ho_limit_large,ver_limit_large);
        context3.lineTo(global_width+100,0);
        // context3.lineTo(global_width+10,0);
        // context3.lineTo(global_width+10,global_height);
        // context3.lineTo(global_width+10,0);
        context3.fill();
        context3.stroke();
        context3.closePath();

        //hiyoriの表情は16段階
        //一番上は
        var ver_limit_max = slider_max_limit*scaling_val+10;
        var ho_limit_max = 0;
        
        // var ver_limit_small = global_height+(global_width-93)- (limit_slider_pre+1)*scaling_val;
        // var ver_limit_large = global_height+(global_width-93) - (limit_slider_pre+1)*scaling_val*101;
        // var ho_limit_large = 10+(limit_slider_pre+1)*scaling_val*100

        for(let i = 1; i < 17; i++){
            context3.beginPath();
            
            context3.fillStyle = colors_str[(15-(i-1))%16];
            
            var vertical_small_i = global_height+(global_width-93)- (((slider_min_limit - limit_slider_pre)/16)*i + limit_slider_pre+1)*scaling_val;
            var vertical_small_i_1 = global_height+(global_width-93)- (((slider_min_limit - limit_slider_pre)/16)*(i-1) + limit_slider_pre+1)*scaling_val;
            var vertical_large_i =   global_height+(global_width-93)- (((slider_min_limit - limit_slider_pre)/16)*i + limit_slider_pre+1)*400;
            var vertical_large_i_1 =   global_height+(global_width-93)- (((slider_min_limit - limit_slider_pre)/16)*(i-1) + limit_slider_pre+1)*400;

            var horizontal_large_i = 10+(((slider_min_limit - limit_slider_pre)/16)*(i) + limit_slider_pre+1)*scaling_val*49.1;
            var horizontal_large_i_1 = 10+(((slider_min_limit - limit_slider_pre)/16)*(i-1) + limit_slider_pre+1)*scaling_val*49.1;

            context3.moveTo(10,vertical_small_i);  // 始点の移動
            context3.lineWidth = 0.1;
            
            context3.lineTo(horizontal_large_i,vertical_large_i);   // 始点から指定した点までの直線をパスに登録
            context3.lineTo(horizontal_large_i_1,vertical_large_i_1);
            context3.lineTo(10,vertical_small_i_1);
            context3.fill();
            context3.closePath();
        }
    }
    // ["individualism","ind_com","competition","com_sad","sadism","sad_sad","sadomasochism","sad_mas","masochism","mas_mar","martyrdom","mar_alt","altruism","alt_coo","cooperation","coo_ind"];
    else if(svo_value == "coo_ind"){
        //なぜかlimitが部分的に文字列になっているせいで (limit+1)*scaling_val とすると 36*scaling_valではなく 351*scaling_valとなってしまう。
        var ver_limit = global_height - limit_slider_pre*scaling_val/2;
        var ho_limit = limit_slider_pre*scaling_val+9;
        context3.moveTo(10,ver_limit);
        context3.lineTo(ho_limit,global_height);
        context3.moveTo(10,ver_limit);
        context3.lineTo(ho_limit,global_height);
        context3.fillText( "     Limit", 10, global_height - (limit_slider_pre*scaling_val));
        // slider_max_limit = Math.max(total_my_max,total_op_max);
        slider_max_limit = total_max12;
        slider_min_limit = total_min12;

        console.log("total_my_max,total_op_max",total_my_max,total_op_max,total_max);


        //limit以下は赤で覆う。
        context3.fillStyle = "rgb(255, 0, 0, 0.3)";
        context3.moveTo(10,ver_limit);  // 始点の移動
        context3.lineTo(ho_limit,global_height);   // 始点から指定した点までの直線をパスに登録
        // context3.lineTo(global_width+10,0);
        context3.lineTo(10,global_height);
        context3.fill();
        context3.stroke();
        context3.closePath();

        //hiyoriの表情は16段階
        //一番上は
        var ver_limit_max = global_height - slider_max_limit*scaling_val/2;
        var ho_limit_max = slider_max_limit*scaling_val+9;
        

        for(let i = 1; i < 17; i++){
            context3.beginPath();
            
            context3.fillStyle = colors_str[(15-(i-1))%16];
            // context3.moveTo(0,ver_limit-10);  // 始点の移動
            var vertical_i = (ver_limit_max-ver_limit)*(i/16)+ver_limit;
            var vertical_i_1 = (ver_limit_max-ver_limit)*((i-1)/16)+ver_limit;
            var horizontal_i = (ho_limit_max-ho_limit)*(i/16)+ho_limit;
            var horizontal_i_1 = (ho_limit_max-ho_limit)*((i-1)/16)+ho_limit;
            // var vertical_i_1 = ver_limit;

            context3.moveTo(10,vertical_i);  // 始点の移動
            context3.lineWidth = 0.1;
            context3.lineTo(horizontal_i,global_height);   // 始点から指定した点までの直線をパスに登録
            context3.lineTo(horizontal_i_1,global_height);
            context3.lineTo(10,vertical_i_1);
            context3.fill();
            context3.closePath();
        }
    }
    else if(svo_value == "alt_coo"){
        //なぜかlimitが部分的に文字列になっているせいで (limit+1)*scaling_val とすると 36*scaling_valではなく 351*scaling_valとなってしまう。
        var ver_limit = global_height - limit_slider_pre*scaling_val;
        var ho_limit = limit_slider_pre*scaling_val/2+9;
        context3.moveTo(10,ver_limit);
        context3.lineTo(ho_limit,global_height);
        context3.moveTo(10,ver_limit);
        context3.lineTo(ho_limit,global_height);
        context3.fillText( "     Limit", 10, global_height - (limit_slider_pre*scaling_val));
        // slider_max_limit = Math.max(total_my_max,total_op_max);
        slider_max_limit = total_max21;
        slider_min_limit = total_min21;
        console.log("total_my_max,total_op_max",total_my_max,total_op_max,total_max);


        //limit以下は赤で覆う。
        context3.fillStyle = "rgb(255, 0, 0, 0.3)";
        context3.moveTo(10,ver_limit);  // 始点の移動
        context3.lineTo(ho_limit,global_height);   // 始点から指定した点までの直線をパスに登録
        // context3.lineTo(global_width+10,0);
        context3.lineTo(10,global_height);
        context3.fill();
        context3.stroke();
        context3.closePath();

        //hiyoriの表情は16段階
        //一番上は
        var ver_limit_max = global_height - slider_max_limit*scaling_val;
        var ho_limit_max = slider_max_limit*scaling_val/2+9;
        

        for(let i = 1; i < 17; i++){
            context3.beginPath();
            
            context3.fillStyle = colors_str[(15-(i-1))%16];
            // context3.moveTo(0,ver_limit-10);  // 始点の移動
            var vertical_i = (ver_limit_max-ver_limit)*(i/16)+ver_limit;
            var vertical_i_1 = (ver_limit_max-ver_limit)*((i-1)/16)+ver_limit;
            var horizontal_i = (ho_limit_max-ho_limit)*(i/16)+ho_limit;
            var horizontal_i_1 = (ho_limit_max-ho_limit)*((i-1)/16)+ho_limit;
            // var vertical_i_1 = ver_limit;

            context3.moveTo(10,vertical_i);  // 始点の移動
            context3.lineWidth = 0.1;
            context3.lineTo(horizontal_i,global_height);   // 始点から指定した点までの直線をパスに登録
            context3.lineTo(horizontal_i_1,global_height);
            context3.lineTo(10,vertical_i_1);
            context3.fill();
            context3.closePath();
        }
    }
    else if(svo_value == "sad_sad"){
        //なぜかlimitが部分的に文字列になっているせいで (limit+1)*scaling_val とすると 36*scaling_valではなく 351*scaling_valとなってしまう。
        var ver_limit = global_height - limit_slider_pre*scaling_val;
        var ho_limit = limit_slider_pre*scaling_val/2+9;
        context3.moveTo(10,ver_limit);
        context3.lineTo(ho_limit,global_height);
        context3.moveTo(10,ver_limit);
        context3.lineTo(ho_limit,global_height);
        context3.fillText( "     Limit", 10, global_height - (limit_slider_pre*scaling_val));
        // slider_max_limit = Math.max(total_my_max,total_op_max);
        slider_max_limit = total_max21;
        slider_min_limit = total_min21;
        console.log("total_my_max,total_op_max",total_my_max,total_op_max,total_max);


        //limit以下は赤で覆う。
        context3.fillStyle = "rgb(255, 0, 0, 0.3)";
        context3.moveTo(10,0);  // 始点の移動
        context3.lineTo(10,ver_limit);
        context3.lineTo(ho_limit,global_height);   // 始点から指定した点までの直線をパスに登録
        // context3.lineTo(global_width+10,0);
        context3.lineTo(global_width+10,global_height);
        context3.lineTo(global_width+10,0);
        context3.fill();
        context3.stroke();
        context3.closePath();

        //hiyoriの表情は16段階
        //一番上は
        var ver_limit_max = global_height - slider_min_limit*scaling_val;
        var ho_limit_max = (slider_min_limit*scaling_val/2)+9;
        

        for(let i = 1; i < 17; i++){
            context3.beginPath();
            
            context3.fillStyle = colors_str[(15-(i-1))%16];
            // context3.moveTo(0,ver_limit-10);  // 始点の移動
            var vertical_i = (ver_limit_max-ver_limit)*(i/16)+ver_limit;
            var vertical_i_1 = (ver_limit_max-ver_limit)*((i-1)/16)+ver_limit;
            var horizontal_i = (ho_limit_max-ho_limit)*(i/16)+ho_limit;
            var horizontal_i_1 = (ho_limit_max-ho_limit)*((i-1)/16)+ho_limit;
            // var vertical_i_1 = ver_limit;

            context3.moveTo(10,vertical_i);  // 始点の移動
            context3.lineWidth = 0.1;
            context3.lineTo(horizontal_i,global_height);   // 始点から指定した点までの直線をパスに登録
            context3.lineTo(horizontal_i_1,global_height);
            context3.lineTo(10,vertical_i_1);
            context3.fill();
            context3.closePath();
        }
    }
    else if(svo_value == "sad_mas"){
        //なぜかlimitが部分的に文字列になっているせいで (limit+1)*scaling_val とすると 36*scaling_valではなく 351*scaling_valとなってしまう。
        var ver_limit = global_height - limit_slider_pre*scaling_val/2;
        var ho_limit = limit_slider_pre*scaling_val+9;
        context3.moveTo(10,ver_limit);
        context3.lineTo(ho_limit,global_height);
        context3.moveTo(10,ver_limit);
        context3.lineTo(ho_limit,global_height);
        context3.fillText( "     Limit", 10, global_height - (limit_slider_pre*scaling_val));
        // slider_max_limit = Math.max(total_my_max,total_op_max);
        slider_max_limit = total_max12;
        slider_min_limit = total_min12;

        console.log("total_my_max,total_op_max",total_my_max,total_op_max,total_max);


        //limit以下は赤で覆う。
        context3.fillStyle = "rgb(255, 0, 0, 0.3)";
        context3.moveTo(10,0);  // 始点の移動
        context3.lineTo(10,ver_limit);
        context3.lineTo(ho_limit,global_height);   // 始点から指定した点までの直線をパスに登録
        // context3.lineTo(global_width+10,0);
        context3.lineTo(global_width+10,global_height);
        context3.lineTo(global_width+10,0);
        context3.fill();
        context3.stroke();
        context3.closePath();

        //hiyoriの表情は16段階
        //一番上は
        var ver_limit_max = global_height - slider_min_limit*scaling_val/2;
        var ho_limit_max = slider_min_limit*scaling_val+9;
        

        for(let i = 1; i < 17; i++){
            context3.beginPath();
            
            context3.fillStyle = colors_str[(15-(i-1))%16];
            // context3.moveTo(0,ver_limit-10);  // 始点の移動
            var vertical_i = (ver_limit_max-ver_limit)*(i/16)+ver_limit;
            var vertical_i_1 = (ver_limit_max-ver_limit)*((i-1)/16)+ver_limit;
            var horizontal_i = (ho_limit_max-ho_limit)*(i/16)+ho_limit;
            var horizontal_i_1 = (ho_limit_max-ho_limit)*((i-1)/16)+ho_limit;
            // var vertical_i_1 = ver_limit;

            context3.moveTo(10,vertical_i);  // 始点の移動
            context3.lineWidth = 0.1;
            context3.lineTo(horizontal_i,global_height);   // 始点から指定した点までの直線をパスに登録
            context3.lineTo(horizontal_i_1,global_height);
            context3.lineTo(10,vertical_i_1);
            context3.fill();
            context3.closePath();
        }
    }
    else if(svo_value=="com_sad"){
        var ver_limit_small = global_height+(global_width-93)- (limit_slider_pre+1)*scaling_val*(2/4) - (my_max+op_max+1)*scaling_val*(2/4);
        var ver_limit_large = global_height+(global_width-93) - (limit_slider_pre+1)*scaling_val*101*(2/4) - (my_max+op_max+1)*scaling_val*(2/4);
        var ho_limit_large = 10+(limit_slider_pre+1)*scaling_val*100
        //なぜかlimitが部分的に文字列になっているせいで (limit+1)*scaling_val とすると 36*scaling_valではなく 351*scaling_valとなってしまう。
        context3.moveTo(10,ver_limit_small);
        context3.lineTo(ho_limit_large,ver_limit_large);
        context3.moveTo(10,ver_limit_small);
        context3.lineTo(ho_limit_large,ver_limit_large);
        context3.fillText( "     Limit", 10, ver_limit_small);
        // slider_max_limit = Math.max(total_my_max,total_op_max);
        slider_max_limit = my_max+op_max;
        slider_min_limit = 0;

        console.log("limit_slider_pre",limit_slider_pre);


        //limit以下は赤で覆う。
        context3.fillStyle = "rgb(255, 0, 0, 0.3)";
        context3.moveTo(global_width+100,global_height+100);  // 始点の移動
        context3.lineTo(10,global_height+100); //ここで四角形にする
        context3.lineTo(10,ver_limit_small);
        context3.lineTo(ho_limit_large,ver_limit_large);   

        context3.fill();
        context3.stroke();
        context3.closePath();

        //hiyoriの表情は16段階
        //一番上は
        var ver_limit_max = slider_max_limit*scaling_val+10;
        var ho_limit_max = 0;
        
        for(let i = 1; i < 17; i++){
            context3.beginPath();
            
            context3.fillStyle = colors_str[(15-(i-1))%16];

            var vertical_small_i = global_height+(global_width-93)- (((slider_max_limit - limit_slider_pre)/16)*i + limit_slider_pre+1)*scaling_val;
            var vertical_small_i_1 = global_height+(global_width-93)- (((slider_max_limit - limit_slider_pre)/16)*(i-1) + limit_slider_pre+1)*scaling_val;
            var vertical_large_i =   global_height+(global_width-93)- (((slider_max_limit - limit_slider_pre)/16)*i + limit_slider_pre+1)*400;
            var vertical_large_i_1 =   global_height+(global_width-93)- (((slider_max_limit - limit_slider_pre)/16)*(i-1) + limit_slider_pre+1)*400;

            var horizontal_large_i = 10+(((slider_max_limit - limit_slider_pre)/16)*(i) + limit_slider_pre+1)*scaling_val*49.2;
            var horizontal_large_i_1 = 10+(((slider_max_limit - limit_slider_pre)/16)*(i-1) + limit_slider_pre+1)*scaling_val*49.2;
            
            context3.moveTo(10,vertical_small_i);  // 始点の移動
            context3.lineWidth = 0.1;
            
            context3.lineTo(horizontal_large_i,vertical_large_i);   // 始点から指定した点までの直線をパスに登録
            context3.lineTo(horizontal_large_i_1,vertical_large_i_1);
            context3.lineTo(10,vertical_small_i_1);
            context3.fill();
            context3.closePath();
        }
    }


    context3.stroke();
}

function updateBtn(){
    var op_max = 0;
    var op_point_list = [op_item1_point,op_item2_point,op_item3_point,op_item4_point];
    var op_num_list = [item1_number,item2_number,item3_number,item4_number];
    for(var i=0; i<op_point_list.length; i++){ 
        if(op_point_list[i] > 0){
            op_max += op_point_list[i]*op_num_list[i]
        }
    }
    var my_max = 0;
    var my_point_list = [my_item1_point,my_item2_point,my_item3_point,my_item4_point];
    var my_num_list = [item1_number,item2_number,item3_number,item4_number];
    for(var i=0; i<my_point_list.length; i++){ 
        if(my_point_list[i] > 0){
            my_max += my_point_list[i]*my_num_list[i]
        }
    }

    my_item1_point = my_item1_point_slider;
    my_item2_point = my_item2_point_slider;
    my_item3_point = my_item3_point_slider;
    my_item4_point = my_item4_point_slider;
    op_item1_point = op_item1_point_slider;
    op_item2_point = op_item2_point_slider;
    op_item3_point = op_item3_point_slider;
    op_item4_point = op_item4_point_slider;
    item1_number =  slider_item1_pre;
    item2_number =  slider_item2_pre;
    item3_number =  slider_item3_pre;
    item4_number =  slider_item4_pre;
    already_slided = 0;
}

//表示ボタン
var btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    //   alert(document.myform.mytext.value);
    updateBtn();
    draw();
    draw();
    //submit()でフォームの内容を送信
    //   document.myform.submit();
    slider();    
    // item_image_reset();
    // item_image_set();
    svo_faceDraw();
    updateBtn();
    slider();

    drawEmotionChart();

    indexLibrary.set_agentpoint(total);

    indexLibrary.set_limit(limit);

    indexLibrary.set_item1_number(item1_number);
    indexLibrary.set_item2_number(item2_number);
    indexLibrary.set_item3_number(item3_number);
    indexLibrary.set_item4_number(item4_number);
    indexLibrary.set_op_item1_point(op_item1_point);
    indexLibrary.set_op_item2_point(op_item2_point);
    indexLibrary.set_op_item3_point(op_item3_point);
    indexLibrary.set_op_item4_point(op_item4_point);
    console.log("btn","pushed")
})

var btn2 = document.getElementById('btn2');

btn2.addEventListener('click', function() {
    //   alert(document.myform.mytext.value);
    updateBtn();
    draw();
    //submit()でフォームの内容を送信
    //   document.myform.submit();
    slider();
    // item_image_reset();
    // item_image_set();
    svo_faceDraw();
    updateBtn();
    slider();

    drawEmotionChart();


    indexLibrary.set_agentpoint(total);

    indexLibrary.set_limit(limit);
    
    indexLibrary.set_item1_number(item1_number);
    indexLibrary.set_item2_number(item2_number);
    indexLibrary.set_item3_number(item3_number);
    indexLibrary.set_item4_number(item4_number);
    indexLibrary.set_op_item1_point(op_item1_point);
    indexLibrary.set_op_item2_point(op_item2_point);
    indexLibrary.set_op_item3_point(op_item3_point);
    indexLibrary.set_op_item4_point(op_item4_point);
    console.log("btn","pushed")
})

var btn3 = document.getElementById('btn3');

btn3.addEventListener('click', function() {
    //   alert(document.myform.mytext.value);
    updateBtn();
    draw();
    //submit()でフォームの内容を送信
    //   document.myform.submit();
    slider();
    // item_image_reset();
    // item_image_set();
    svo_faceDraw();
    updateBtn();
    slider();

    drawEmotionChart();

    indexLibrary.set_agentpoint(total);

    indexLibrary.set_limit(limit);
    
    indexLibrary.set_item1_number(item1_number);
    indexLibrary.set_item2_number(item2_number);
    indexLibrary.set_item3_number(item3_number);
    indexLibrary.set_item4_number(item4_number);
    indexLibrary.set_op_item1_point(op_item1_point);
    indexLibrary.set_op_item2_point(op_item2_point);
    indexLibrary.set_op_item3_point(op_item3_point);
    indexLibrary.set_op_item4_point(op_item4_point);
    console.log("btn","pushed")
})

var btn4 = document.getElementById('btn4');

btn4.addEventListener('click', function() {
    //   alert(document.myform.mytext.value);
    updateBtn();
    draw();
    //submit()でフォームの内容を送信
    //   document.myform.submit();
    slider();
    // item_image_reset();
    // item_image_set();
    svo_faceDraw();
    updateBtn();
    slider();

    drawEmotionChart();


    indexLibrary.set_agentpoint(total);

    indexLibrary.set_limit(limit);
    
    indexLibrary.set_item1_number(item1_number);
    indexLibrary.set_item2_number(item2_number);
    indexLibrary.set_item3_number(item3_number);
    indexLibrary.set_item4_number(item4_number);
    indexLibrary.set_op_item1_point(op_item1_point);
    indexLibrary.set_op_item2_point(op_item2_point);
    indexLibrary.set_op_item3_point(op_item3_point);
    indexLibrary.set_op_item4_point(op_item4_point);
    console.log("btn","pushed")
})

// const showMessage = () => {
//   const textbox = document.getElementById("input-message");
//   const inputValue = textbox.value;

//   //テキストボックスの値を使って、出力するメッセージを生成する
//   const output = "入力された内容は「" + inputValue + "」です。";
//   //出力用のp要素にメッセージを表示
//   document.getElementById("output-message").innerHTML = output;
// }





//入力フォーム
//https://web-tsuku.life/input-only-number-digit/#5typetel
function inputCheck () {
    var form = document.getElementById("form");

    var item1 = document.getElementById("item1");
    var item2 = document.getElementById("item2");
    var item3 = document.getElementById("item3");
    var item4 = document.getElementById("item4");
    var agent1 = document.getElementById("agent1");
    var agent2 = document.getElementById("agent2");
    var agent3 = document.getElementById("agent3");
    var agent4 = document.getElementById("agent4");
    var human1 = document.getElementById("human1");
    var human2 = document.getElementById("human2");
    var human3 = document.getElementById("human3");
    var human4 = document.getElementById("human4");

    var inputs = [item1,item2,item3,item4,agent1,agent2,agent3,agent4,human1,human2,human3,human4];

    for (let i = 0; i < inputs.length; i += 1) {
        var form_value = inputs[i].input.value;

        if (form_value.match(/[0-9]{1,4}/g) != form_value ) {
            form.value = '';
        }
    }
}



//ここから尤度関数グラフ
/**
 * 度をラジアンに変換する
 */
function deg2rad(d) {
  return (Math.PI / 180) * d;
}

/**
 * 配列の内積を計算する (dot product)
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number}
 */
function dot(a, b) {
  let s = 0;
  for (let i = 0; i < a.length; i++) {
    s += a[i] * b[i];
  }
  return s;
}

/**
 * 配列同士の足し算・引き算
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */
function sub(a, b) {
  return a.map((ai, i) => ai - b[i]);
}

//効用の計算
function Utility(theta, x_other, q, w_self, w_other){
    //var x_other = [pre_1value, pre_2value, pre_3value, pre_4value];
    var x_self = sub(q, x_other);
    var u_total = dot(x_other, w_other) * Math.cos(deg2rad(theta)) + dot(x_self, w_self) * Math.sin(deg2rad(theta));;
    return u_total;
}

//すべての配分を探索する
function enumerate_x(){
    var x_list = [];
    for(let item1=0; item1<=item1_number; item1++){
        for(let item2=0; item2<=item2_number; item2++){
            for(let item3=0; item3<=item3_number; item3++){
                for(let item4=0; item4<=item4_number; item4++){
                    x_list.push([item1,item2,item3,item4]);
                }
            }
        }
    }
    return x_list;
}

 
function Utility_to_emotion(){
    const w_self = [my_item1_point,my_item2_point,my_item3_point,my_item4_point];
    const w_other = [op_item1_point,op_item2_point,op_item3_point,op_item4_point];
    const q = [item1_number, item2_number, item3_number, item4_number]
    let temp_u = []; //最大効用を計算するための一時的な配列
    let emotion = {}; //感情を格納するオブジェクト
    let max_u = 0; //最大効用
    const x_list = enumerate_x();
    let limit = 0;
    const x_other = [pre_1value, pre_2value, pre_3value, pre_4value];
    let real_u = 0; //実際の効用
    const linedata = []; //グラフ描画用データ、シータごとの感情の尤度を格納
    for(theta_deg=-90; theta_deg<=90; theta_deg+=5){
        for(i=0; i<x_list.length; i++){
            temp_u[i] = Utility(theta_deg, x_list[i], q, w_self, w_other);
        }
        max_u = Math.max(...temp_u);
        limit = max_u - 7; 
        const epsilon = 0.001;
        real_u = Utility(theta_deg, x_other, q, w_self, w_other);
        if (real_u < limit - epsilon) {
            emotion = { anger: 1, neutral: 0, joy1: 0, joy2: 0, joy3: 0, joy4: 0, joy5: 0, joy6: 0, joy7: 0 };
        }
        else if (Math.abs(real_u - limit) <= epsilon) {
            emotion = { anger: 0, neutral: 1, joy1: 0, joy2: 0, joy3: 0, joy4: 0, joy5: 0, joy6: 0, joy7: 0 };
        }
        else if (real_u < (limit + 1)) {
            emotion = { anger: 0, neutral: 0, joy1: 1, joy2: 0, joy3: 0, joy4: 0, joy5: 0, joy6: 0, joy7: 0 };
        }
        else if (real_u < (limit + 2)) {
            emotion = { anger: 0, neutral: 0, joy1: 0, joy2: 1, joy3: 0, joy4: 0, joy5: 0, joy6: 0, joy7: 0 };
        }
        else if (real_u < (limit + 3)) {
            emotion = { anger: 0, neutral: 0, joy1: 0, joy2: 0, joy3: 1, joy4: 0, joy5: 0, joy6: 0, joy7: 0 };
        }
        else if (real_u < (limit + 4)) {
            emotion = { anger: 0, neutral: 0, joy1: 0, joy2: 0, joy3: 0, joy4: 1, joy5: 0, joy6: 0, joy7: 0 };
        }
        else if (real_u < (limit + 5)) {
            emotion = { anger: 0, neutral: 0, joy1: 0, joy2: 0, joy3: 0, joy4: 0, joy5: 1, joy6: 0, joy7: 0 };
        }
        else if (real_u < (limit + 6)) {
            emotion = { anger: 0, neutral: 0, joy1: 0, joy2: 0, joy3: 0, joy4: 0, joy5: 0, joy6: 1, joy7: 0 };
        }
        else {
            emotion = { anger: 0, neutral: 0, joy1: 0, joy2: 0, joy3: 0, joy4: 0, joy5: 0, joy6: 0, joy7: 1 };
        }
        linedata.push({theta: theta_deg, emotion: emotion});
    }
    
    return linedata;
}

// Chart.jsのグラフインスタンスを保持する変数
let emotionChartInstance = null;

// グラフを描画または更新する関数
function drawEmotionChart(){
    const linedata = Utility_to_emotion();
    const labels = linedata.map(data => data.theta);
    const angerData = linedata.map(data => data.emotion.anger);
    const neutralData = linedata.map(data => data.emotion.neutral);
    const joy1Data = linedata.map(data => data.emotion.joy1);
    const joy2Data = linedata.map(data => data.emotion.joy2);
    const joy3Data = linedata.map(data => data.emotion.joy3);
    const joy4Data = linedata.map(data => data.emotion.joy4);
    const joy5Data = linedata.map(data => data.emotion.joy5);
    const joy6Data = linedata.map(data => data.emotion.joy6);
    const joy7Data = linedata.map(data => data.emotion.joy7);

    const ctx = document.getElementById('emotionChartCanvas').getContext('2d');

    // 既存のグラフがあれば破棄
    if (emotionChartInstance) {
        emotionChartInstance.destroy();
    }

    emotionChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Anger',
                    data: angerData,
                    borderColor: "#f28e8e",
                    fill: false
                },
                {
                    label: 'Neutral',
                    data: neutralData,
                    borderColor: "#bfecc5",
                    fill: false
                },
                {
                    label: 'Joy1',
                    data: joy1Data, 
                    borderColor: "#f9e79f",
                    fill: false
                },
                {
                    label: 'Joy2',
                    data: joy2Data,
                    borderColor: "#f7dc6f",
                    fill: false
                },
                {
                    label: 'Joy3',
                    data: joy3Data,
                    borderColor: "#f4d03f",
                    fill: false
                },
                {
                    label: 'Joy4',
                    data: joy4Data,
                    borderColor: "#f1c40f",
                    fill: false
                },
                {
                    label: 'Joy5',
                    data: joy5Data,
                    borderColor: "#d4ac0d",
                    fill: false
                },
                {
                    label: 'Joy6',
                    data: joy6Data,
                    borderColor: "#b7950b",
                    fill: false
                },
                {
                    label: 'Joy7',
                    data: joy7Data,
                    borderColor: "#9a7d0a",
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Emotion Likelihood by Theta'
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'θ (deg)' // ★X軸のラベル
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Likelihood' // ★Y軸のラベル
                    },
                    
                }
            }
        }
    });
            
}


























//pulldown_menu
(function ( $ ) {
    var elActive = '';
      $.fn.selectCF = function( options ) {
   
          // option
          var settings = $.extend({
              color: "#FFF", // color
              backgroundColor: "#0066FF", // background
        change: function( ){ }, // event change
          }, options );
   
          return this.each(function(){
        
        var selectParent = $(this);
          list = [],
          html = '';
          
        //parameter CSS
        var width = $(selectParent).width();
        
        $(selectParent).hide();
        if( $(selectParent).children('option').length == 0 ){ return; }
        $(selectParent).children('option').each(function(){
          if( $(this).is(':selected') ){ s = 1; title = $(this).text(); }else{ s = 0; }
          list.push({ 
            value: $(this).attr('value'),
            text: $(this).text(),
            selected: s,
          })
        })
        
        // style
        var style = " background: "+settings.backgroundColor+"; color: "+settings.color+" ";
        
        html += "<ul class='selectCF'>";
        html +=   "<li>";
        html +=     "<span class='arrowCF ion-chevron-right' style='"+style+"'></span>";
        html +=     "<span class='titleCF' style='"+style+"; width:"+width+"px'>"+title+"</span>";
        html +=     "<span class='searchCF' style='"+style+"; width:"+width+"px'><input style='color:"+settings.color+"' /></span>";
        html +=     "<ul>";
        $.each(list, function(k, v){ s = (v.selected == 1)? "selected":"";
        html +=       "<li value="+v.value+" class='"+s+"'>"+v.text+"</li>";})    
        html +=     "</ul>";
        html +=   "</li>";
        html += "</ul>";
        $(selectParent).after(html);
        var customSelect = $(this).next('ul.selectCF'); // add Html
        var seachEl = $(this).next('ul.selectCF').children('li').children('.searchCF');
        var seachElOption = $(this).next('ul.selectCF').children('li').children('ul').children('li');
        var seachElInput = $(this).next('ul.selectCF').children('li').children('.searchCF').children('input');
        
        // handle active select
        $(customSelect).unbind('click').bind('click',function(e){
          e.stopPropagation();
          if($(this).hasClass('onCF')){ 
            elActive = ''; 
            $(this).removeClass('onCF');
            $(this).removeClass('searchActive'); $(seachElInput).val(''); 
            $(seachElOption).show();
          }else{
            if(elActive != ''){ 
              $(elActive).removeClass('onCF'); 
              $(elActive).removeClass('searchActive'); $(seachElInput).val('');
              $(seachElOption).show();
            }
            elActive = $(this);
            $(this).addClass('onCF');
            $(seachEl).children('input').focus();
          }
        })
        
        // handle choose option
        var optionSelect = $(customSelect).children('li').children('ul').children('li');
        $(optionSelect).bind('click', function(e){
          var value = $(this).attr('value');
          if( $(this).hasClass('selected') ){
            //
          }else{
            $(optionSelect).removeClass('selected');
            $(this).addClass('selected');
            $(customSelect).children('li').children('.titleCF').html($(this).html());
            $(selectParent).val(value);
            settings.change.call(selectParent); // call event change
          }
        })
          
        // handle search 
        $(seachEl).children('input').bind('keyup', function(e){
          var value = $(this).val();
          if( value ){
            $(customSelect).addClass('searchActive');
            $(seachElOption).each(function(){
              if( $(this).text().search(new RegExp(value, "i")) < 0 ) {
                // not item
                $(this).fadeOut();
              }else{
                // have item
                $(this).fadeIn();
              }
            })
          }else{
            $(customSelect).removeClass('searchActive');
            $(seachElOption).fadeIn();
          }
        })
        
      });
      };
    $(document).click(function(){
      if(elActive != ''){
        $(elActive).removeClass('onCF');
        $(elActive).removeClass('searchActive');
      }
    })
  }( jQuery ));
  
  $(function(){
    var event_change = $('#event-change');
    $( ".select" ).selectCF({
      change: function(){
        var value = $(this).val();
        var text = $(this).children('option:selected').html();
        console.log('SVO : '+text);
        event_change.html('SVO : '+text);
      }
    });
  })