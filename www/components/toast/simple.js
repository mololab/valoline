parcelRequire = (function (e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    epB2: [
      function (require, module, exports) {
        "use strict";
        var t;
        function e(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e &&
              (r = r.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function n(t) {
          for (var n = 1; n < arguments.length; n++) {
            var o = null != arguments[n] ? arguments[n] : {};
            n % 2
              ? e(Object(o), !0).forEach(function (e) {
                  r(t, e, o[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
              : e(Object(o)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(o, e)
                  );
                });
          }
          return t;
        }
        function r(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var o = function (t, e) {
            Object.keys(e).forEach(function (n) {
              t.style[n] = e[n];
            });
          },
          i = function (t, e) {
            Object.keys(e).forEach(function (n) {
              t.setAttribute(n, e[n]);
            });
          },
          c = function (t, e) {
            return t.getAttribute(e);
          },
          a = {
            defaultOptions: Symbol("defaultOptions"),
            render: Symbol("render"),
            show: Symbol("show"),
            hide: Symbol("hide"),
            removeDOM: Symbol("removeDOM"),
          },
          s =
            (r((t = {}), a.defaultOptions, {
              container: "body",
              class: "siiimpleToast",
              position: "top|center",
              margin: 15,
              delay: 0,
              duration: 3e3,
              style: {},
            }),
            r(t, "setOptions", function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return n(
                {},
                s,
                r({}, a.defaultOptions, n({}, this[a.defaultOptions], {}, t))
              );
            }),
            r(t, a.render, function (t, e) {
              var r = this,
                c =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                s = n({}, this[a.defaultOptions], {}, c),
                u = s.class,
                f = s.position,
                l = s.delay,
                d = s.duration,
                p = s.style,
                h = document.createElement("div");
              (h.className = u),
                (h.innerHTML = e),
                i(h, { "data-position": f, "data-state": t }),
                o(h, p);
              var O = 0;
              return (
                setTimeout(function () {
                  r[a.show](h, s);
                }, (O += l)),
                setTimeout(function () {
                  r[a.hide](h, s);
                }, (O += d)),
                this
              );
            }),
            r(t, a.show, function (t, e) {
              var n,
                i = e.container,
                a = e.class,
                s = e.margin,
                u = function (t, e) {
                  return c(t, "data-position").indexOf(e) > -1;
                },
                f = document.querySelector(i);
              f.insertBefore(t, f.firstChild),
                o(
                  t,
                  (r(
                    (n = { position: "body" === i ? "fixed" : "absolute" }),
                    u(t, "top") ? "top" : "bottom",
                    "-100px"
                  ),
                  r(n, u(t, "left") && "left", "15px"),
                  r(
                    n,
                    u(t, "center") && "left",
                    "".concat(f.clientWidth / 2 - t.clientWidth / 2, "px")
                  ),
                  r(n, u(t, "right") && "right", "15px"),
                  n)
                ),
                o(t, { transform: "scale(1)", opacity: 1 });
              var l = s;
              Array.from(
                document.querySelectorAll(
                  "."
                    .concat(a, '[data-position="')
                    .concat(c(t, "data-position"), '"]')
                )
              )
                .filter(function (e) {
                  return e.parentElement === t.parentElement;
                })
                .forEach(function (t) {
                  o(
                    t,
                    r({}, u(t, "top") ? "top" : "bottom", "".concat(l, "px"))
                  ),
                    (l += t.offsetHeight + s);
                });
            }),
            r(t, a.hide, function (t) {
              var e,
                n = this,
                i = function (t, e) {
                  return c(t, "data-position").indexOf(e) > -1;
                },
                s = t.getBoundingClientRect(),
                u = s.left,
                f = s.width;
              o(
                t,
                (r((e = {}), i(t, "left") && "left", "".concat(f, "px")),
                r(e, i(t, "center") && "left", "".concat(u + f, "px")),
                r(e, i(t, "right") && "right", "-".concat(f, "px")),
                r(e, "opacity", 0),
                e)
              );
              t.addEventListener("transitionend", function e() {
                n[a.removeDOM](t), t.removeEventListener("transitionend", e);
              });
            }),
            r(t, a.removeDOM, function (t) {
              t.parentElement.removeChild(t);
            }),
            r(t, "message", function (t, e) {
              return this[a.render]("default", t, e);
            }),
            r(t, "success", function (t, e) {
              return this[a.render]("success", t, e);
            }),
            r(t, "alert", function (t, e) {
              return this[a.render]("alert", t, e);
            }),
            t),
          u = s;
        exports.default = u;
      },
      {},
    ],
    nwU6: [
      function (require, module, exports) {
        "use strict";
        var e = i(require("./main"));
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        window.siiimpleToast = e.default;
      },
      { "./main": "epB2" },
    ],
  },
  {},
  ["nwU6"],
  null
);
