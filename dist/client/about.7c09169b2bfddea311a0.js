!(function(i) {
  function e(e) {
    for (
      var t, r, n = e[0], o = e[1], u = e[2], a = 0, c = [];
      a < n.length;
      a++
    )
      (r = n[a]),
        Object.prototype.hasOwnProperty.call(f, r) && f[r] && c.push(f[r][0]),
        (f[r] = 0)
    for (t in o) Object.prototype.hasOwnProperty.call(o, t) && (i[t] = o[t])
    for (s && s(e); c.length; ) c.shift()()
    return p.push.apply(p, u || []), l()
  }
  function l() {
    for (var e, t = 0; t < p.length; t++) {
      for (var r = p[t], n = !0, o = 1; o < r.length; o++) {
        var u = r[o]
        0 !== f[u] && (n = !1)
      }
      n && (p.splice(t--, 1), (e = a((a.s = r[0]))))
    }
    return e
  }
  var r = {},
    f = { 2: 0 },
    p = []
  function a(e) {
    if (r[e]) return r[e].exports
    var t = (r[e] = { i: e, l: !1, exports: {} })
    return i[e].call(t.exports, t, t.exports, a), (t.l = !0), t.exports
  }
  ;(a.m = i),
    (a.c = r),
    (a.d = function(e, t, r) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
    }),
    (a.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 })
    }),
    (a.t = function(t, e) {
      if ((1 & e && (t = a(t)), 8 & e)) return t
      if (4 & e && "object" == typeof t && t && t.__esModule) return t
      var r = Object.create(null)
      if (
        (a.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          a.d(
            r,
            n,
            function(e) {
              return t[e]
            }.bind(null, n)
          )
      return r
    }),
    (a.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default
            }
          : function() {
              return e
            }
      return a.d(t, "a", t), t
    }),
    (a.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (a.p = "client/")
  var t = (window.webpackJsonp = window.webpackJsonp || []),
    n = t.push.bind(t)
  ;(t.push = e), (t = t.slice())
  for (var o = 0; o < t.length; o++) e(t[o])
  var s = n
  p.push([38, 1, 0]), l()
})({
  35: function(e, t, r) {},
  38: function(e, t, r) {
    "use strict"
    r.r(t)
    var n = r(13),
      o = r(0),
      u = r.n(o),
      a =
        (r(35),
        [
          {
            exact: !0,
            path: "/about",
            component: function() {
              return u.a.createElement(
                "div",
                { className: "About" },
                "i am about page"
              )
            },
            name: "about"
          }
        ])
    Object(n.a)({ routes: a })
  }
})