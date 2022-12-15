/* eslint-disable */
// @ts-nocheck
window.TMAP_AUTHKEY = "7f013d0186775b063d6a046977bbefc6";
window.T = window.T || {};
(function () {
  function each(t, i) {
    for (var n in t) t.hasOwnProperty(n) && i(t[n], n, t);
  }
  function find(t, i) {
    if (t.length) {
      for (var n = 0; n < t.length; n++) if (i(t[n])) return t[n];
    } else for (var e in t) if (t.hasOwnProperty(e) && i(t[e])) return t[e];
  }
  function first(t) {
    for (var i in t) if (t.hasOwnProperty(i)) return t[i];
  }
  function length(t) {
    var i = 0;
    for (var n in t) t.hasOwnProperty(n) && i++;
    return i;
  }
  function prepend(t, i) {
    t.children.length ? t.insertBefore(i, t.children[0]) : t.appendChild(i);
  }
  (T.Version = "4.1.5"),
    (T.q = {
      W: function (t, i) {
        switch (arguments.length) {
          case 1:
            return parseInt(Math.random() * t + 1);
          case 2:
            return parseInt(Math.random() * (i - t + 1) + t);
          default:
            return 0;
        }
      }
    }),
    (T.Protocol = {
      value: null,
      protocol: function () {
        var t = "http",
          i = document.location.protocol;
        "https:" == i && (t = "https"), (T.Protocol.value = t + "://");
      }
    }),
    T.Protocol.protocol(),
    (T.tk = "tk=" + window.TMAP_AUTHKEY + "&"),
    (T.Domain = "com"),
    (T.DomainType = 1),
    (T.DomainFun = function () {
      1 == T.DomainType ? (T.Domain = "gov.cn") : 2 == T.DomainType && (T.Domain = "com");
    }),
    T.DomainFun(),
    (T.w = {
      TMAP_AUTHKEY: window.TMAP_AUTHKEY,
      E: T.Protocol.value + "api.tianditu." + T.Domain,
      e: T.Protocol.value + "api.tianditu." + T.Domain + "/v4.0/image",
      IPSERVER: T.Protocol.value + "map.tianditu.gov.cn/data/getCityName",
      R: T.Protocol.value + "api.tianditu." + T.Domain + "/apiserver/ajaxproxy?proxyReqUrl=",
      r: function () {
        return (
          T.Protocol.value +
          "t" +
          T.q.W(0, 7) +
          ".tianditu." +
          T.Domain +
          "/vec_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles&" +
          T.tk
        );
      },
      T: function () {
        return (
          T.Protocol.value +
          "t" +
          T.q.W(0, 7) +
          ".tianditu." +
          T.Domain +
          "/cva_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles&" +
          T.tk
        );
      },
      t: function () {
        return (
          T.Protocol.value +
          "t" +
          T.q.W(0, 7) +
          ".tianditu." +
          T.Domain +
          "/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&" +
          T.tk
        );
      },
      Y: function () {
        return (
          T.Protocol.value +
          "t" +
          T.q.W(0, 7) +
          ".tianditu." +
          T.Domain +
          "/cva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&" +
          T.tk
        );
      },
      U: function () {
        return (
          T.Protocol.value +
          "t" +
          T.q.W(0, 7) +
          ".tianditu." +
          T.Domain +
          "/img_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles&" +
          T.tk
        );
      },
      u: function () {
        return (
          T.Protocol.value +
          "t" +
          T.q.W(0, 7) +
          ".tianditu." +
          T.Domain +
          "/cia_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles&" +
          T.tk
        );
      },
      I: function () {
        return (
          T.Protocol.value +
          "t" +
          T.q.W(0, 7) +
          ".tianditu." +
          T.Domain +
          "/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&" +
          T.tk
        );
      },
      i: function () {
        return (
          T.Protocol.value +
          "t" +
          T.q.W(0, 7) +
          ".tianditu." +
          T.Domain +
          "/cia_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&" +
          T.tk
        );
      },
      O: function () {
        return (
          T.Protocol.value +
          "t" +
          T.q.W(0, 7) +
          ".tianditu." +
          T.Domain +
          "/ter_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=ter&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles&" +
          T.tk
        );
      },
      o: function () {
        return (
          T.Protocol.value +
          "t" +
          T.q.W(0, 7) +
          ".tianditu." +
          T.Domain +
          "/cta_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cta&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles&" +
          T.tk
        );
      },
      P: function () {
        return (
          T.Protocol.value +
          "t" +
          T.q.W(0, 7) +
          ".tianditu." +
          T.Domain +
          "/ter_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=ter&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&" +
          T.tk
        );
      },
      p: function () {
        return (
          T.Protocol.value +
          "t" +
          T.q.W(0, 7) +
          ".tianditu." +
          T.Domain +
          "/cta_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cta&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&" +
          T.tk
        );
      },
      A: ["/v4.0/components.js", "/v4.0/service.js", "/v4.0/military.js"],
      a: ["/v4.0/css/tianditu4.0.css"],
      TMAP_DEFAULT_MAPTYPES: []
    }),
    (window.T_ANCHOR_TOP_LEFT = "topleft"),
    (window.T_ANCHOR_TOP_RIGHT = "topright"),
    (window.T_ANCHOR_BOTTOM_LEFT = "bottomleft"),
    (window.T_ANCHOR_BOTTOM_RIGHT = "bottomright"),
    (window.TMAP_NORMAL_MAP = null),
    (window.TMAP_SATELLITE_MAP = null),
    (window.TMAP_HYBRID_MAP = null),
    (window.TMAP_TERRAIN_MAP = null),
    (window.TMAP_TERRAIN_HYBRID_MAP = null),
    (T.S = {
      extend: function (t) {
        var i, n, e, o;
        for (n = 1, e = arguments.length; n < e; n++) {
          o = arguments[n];
          for (i in o) t[i] = o[i];
        }
        return t;
      },
      s:
        Object.create ||
        (function () {
          function t() {}
          return function (i) {
            return (t.prototype = i), new t();
          };
        })(),
      D: function (t, i) {
        var n = Array.prototype.slice;
        if (t.D) return t.D.apply(t, n.call(arguments, 1));
        var e = n.call(arguments, 2);
        return function () {
          return t.apply(i, e.length ? e.concat(n.call(arguments)) : arguments);
        };
      },
      d: function (t) {
        return (t.F = t.F || ++T.S.f), t.F;
      },
      f: 0,
      G: function (t, i, n) {
        var e, o, s, r;
        return (
          (r = function () {
            (e = !1), o && (s.apply(n, o), (o = !1));
          }),
          (s = function () {
            e ? (o = arguments) : (t.apply(n, arguments), setTimeout(r, i), (e = !0));
          })
        );
      },
      g: function (t, i, n) {
        var e = i[1],
          o = i[0],
          s = e - o;
        return t === e && n ? t : ((((t - o) % s) + s) % s) + o;
      },
      H: function () {
        return !1;
      },
      h: function (t, i) {
        var n = Math.pow(10, i || 5);
        return Math.round(t * n) / n;
      },
      J: function (t) {
        return t.J ? t.J() : t.replace(/^\s+|\s+$/g, "");
      },
      j: function (t) {
        return T.S.J(t).split(/\s+/);
      },
      setOptions: function (t, i) {
        t.hasOwnProperty("options") || (t.options = t.options ? T.S.s(t.options) : {});
        for (var n in i) t.options[n] = i[n];
        return t.options;
      },
      K: function (t, i, n) {
        var e = [];
        for (var o in t) e.push(encodeURIComponent(n ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
        return (i && i.indexOf("?") !== -1 ? "&" : "?") + e.join("&");
      },
      k: function (t, i) {
        return t.replace(T.S.L, function (t, n) {
          var e = i[n];
          return void 0 === e || ("function" == typeof e && (e = e(i))), e;
        });
      },
      L: /\{ *([\w_\-]+) *\}/g,
      l:
        Array.l ||
        function (t) {
          return "[object Array]" === Object.prototype.toString.call(t);
        },
      indexOf: function (t, i) {
        for (var n = 0; n < t.length; n++) if (t[n] === i) return n;
        return -1;
      },
      Z: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
    }),
    (function () {
      function t(t) {
        return window["webkit" + t] || window["moz" + t] || window["ms" + t];
      }
      function i(t) {
        var i = +new Date(),
          e = Math.max(0, 16 - (i - n));
        return (n = i + e), window.setTimeout(t, e);
      }
      var n = 0,
        e = window.requestAnimationFrame || t("RequestAnimationFrame") || i,
        o =
          window.cancelAnimationFrame ||
          t("CancelAnimationFrame") ||
          t("CancelRequestAnimationFrame") ||
          function (t) {
            window.clearTimeout(t);
          };
      (T.S.C = function (t, n, o) {
        return o && e === i ? void t.call(n) : e.call(window, T.D(t, n));
      }),
        (T.S.V = function (t) {
          t && o.call(window, t);
        });
    })(),
    (T.extend = T.S.extend),
    (T.D = T.S.D),
    (T.d = T.S.d),
    (T.setOptions = T.S.setOptions),
    (T.c = function () {}),
    (T.c.extend = function (t) {
      var i = function () {
          this.initialize && this.initialize.apply(this, arguments), this.B();
        },
        n = (i.__super__ = this.prototype),
        e = T.S.s(n);
      (e.constructor = i), (i.prototype = e);
      for (var o in this) this.hasOwnProperty(o) && "prototype" !== o && (i[o] = this[o]);
      return (
        t.v && (T.extend(i, t.v), delete t.v),
        t.includes && (T.S.extend.apply(null, [e].concat(t.includes)), delete t.includes),
        e.options && (t.options = T.S.extend(T.S.s(e.options), t.options)),
        T.extend(e, t),
        (e.N = []),
        (e.B = function () {
          if (!this.b) {
            n.B && n.B.call(this), (this.b = !0);
            for (var t = 0, i = e.N.length; t < i; t++) e.N[t].call(this);
          }
        }),
        i
      );
    }),
    (T.c.M = function (t) {
      return T.extend(this.prototype, t), this;
    }),
    (T.c.n = function (t) {
      return T.extend(this.prototype.options, t), this;
    }),
    (T.c._ = function (t) {
      var i = Array.prototype.slice.call(arguments, 1),
        n =
          "function" == typeof t
            ? t
            : function () {
                this[t].apply(this, i);
              };
      return (this.prototype.N = this.prototype.N || []), this.prototype.N.push(n), this;
    }),
    (T.m = T.c.extend({
      on: function (t, i, n) {
        if ("object" == typeof t) for (var e in t) this.QQ(e, t[e], i);
        else {
          t = T.S.j(t);
          for (var o = 0, s = t.length; o < s; o++) this.QQ(t[o], i, n);
        }
        return this;
      },
      off: function (t, i, n) {
        if (t)
          if ("object" == typeof t) for (var e in t) this.WQ(e, t[e], i);
          else {
            t = T.S.j(t);
            for (var o = 0, s = t.length; o < s; o++) this.WQ(t[o], i, n);
          }
        else delete this.qQ;
        return this;
      },
      QQ: function (t, i, n) {
        var e = (this.qQ = this.qQ || {}),
          o = n && n !== this && T.d(n);
        if (o) {
          var s = t + "_idx",
            r = t + "_len",
            h = (e[s] = e[s] || {}),
            a = T.d(i) + "_" + o;
          h[a] ||
            ((h[a] = {
              fn: i,
              ctx: n
            }),
            (e[r] = (e[r] || 0) + 1));
        } else
          (e[t] = e[t] || []),
            e[t].push({
              fn: i
            });
      },
      WQ: function (t, i, n) {
        var e,
          o,
          s,
          r,
          h = this.qQ,
          a = t + "_idx",
          u = t + "_len";
        if (h) {
          if (!i) {
            o = h[a];
            for (s in o) o[s].fn = T.S.H;
            for (o = h[t] || [], s = 0, r = o.length; s < r; s++) o[s].fn = T.S.H;
            return delete h[t], delete h[a], void delete h[u];
          }
          var c,
            l = n && n !== this && T.d(n);
          if (l) (c = T.d(i) + "_" + l), (o = h[a]), o && o[c] && ((e = o[c]), delete o[c], h[u]--);
          else if ((o = h[t])) {
            for (s = 0, r = o.length; s < r; s++)
              if (o[s].fn === i) {
                (e = o[s]), o.splice(s, 1);
                break;
              }
            0 === o.length && delete h[t];
          }
          e && (e.fn = T.S.H);
        }
      },
      wQ: function (t, i, n) {
        if (!this.EQ(t, n)) return this;
        var e = T.S.extend({}, i, {
            type: t,
            target: this
          }),
          o = this.qQ;
        if (o) {
          var s,
            r,
            h,
            a,
            u = o[t + "_idx"];
          if (o[t]) for (h = o[t].slice(), s = 0, r = h.length; s < r; s++) h[s].fn.call(this, e);
          for (a in u) u[a].fn.call(u[a].ctx, e);
        }
        return n && this.eQ(e), this;
      },
      trigger: function (t, i, n) {
        return this.wQ(t, i, n), this;
      },
      EQ: function (t, i) {
        var n = this.qQ;
        if (n && (n[t] || n[t + "_len"])) return !0;
        if (i) for (var e in this.RQ) if (this.RQ[e].EQ(t, i)) return !0;
        return !1;
      },
      rQ: function (t, i, n) {
        if ("object" == typeof t) {
          for (var e in t) this.rQ(e, t[e], i);
          return this;
        }
        var o = T.D(function () {
          this.off(t, i, n).off(t, o, n);
        }, this);
        return this.on(t, i, n).on(t, o, n);
      },
      TQ: function (t) {
        return (this.RQ = this.RQ || {}), (this.RQ[T.d(t)] = t), this;
      },
      tQ: function (t) {
        return this.RQ && delete this.RQ[T.d(t)], this;
      },
      eQ: function (t) {
        for (var i in this.RQ)
          this.RQ[i].wQ(
            t.type,
            T.extend(
              {
                layer: t.target
              },
              t
            ),
            !0
          );
      }
    }));
  var pro = T.m.prototype;
  (pro.addEventListener = pro.on),
    (pro.removeEventListener = pro.YQ = pro.off),
    (pro.UQ = pro.rQ),
    (pro.uQ = pro.trigger),
    (pro.IQ = pro.EQ),
    (T.iQ = {
      OQ: pro
    }),
    (function () {
      var t = navigator.userAgent.toLowerCase(),
        i = document.documentElement,
        n = "ActiveXObject" in window,
        e =
          "Microsoft Internet Explorer" == navigator.appName &&
          "MSIE8.0" == navigator.appVersion.split(";")[1].replace(new RegExp("[ ]", "g"), ""),
        o =
          "Microsoft Internet Explorer" == navigator.appName &&
          "MSIE7.0" == navigator.appVersion.split(";")[1].replace(new RegExp("[ ]", "g"), ""),
        s =
          "Microsoft Internet Explorer" == navigator.appName &&
          "MSIE6.0" == navigator.appVersion.split(";")[1].replace(new RegExp("[ ]", "g"), ""),
        r = t.indexOf("webkit") !== -1,
        h = t.indexOf("phantom") !== -1,
        a = t.search("android [23]") !== -1,
        u = t.indexOf("chrome") !== -1,
        c = t.indexOf("gecko") !== -1 && !r && !window.opera && !n,
        l = 0 === navigator.platform.indexOf("Win"),
        f = "undefined" != typeof orientation || t.indexOf("mobile") !== -1,
        d = !window.PointerEvent && window.MSPointerEvent,
        p = window.PointerEvent || d,
        m = n && "transition" in i.style,
        v = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !a,
        w = "MozPerspective" in i.style,
        y = "OTransition" in i.style,
        g =
          !window.L_NO_TOUCH &&
          (p || "ontouchstart" in window || (window.DocumentTouch && document instanceof window.DocumentTouch));
      T.oQ = {
        ie: n,
        ie8: e,
        ie7: o,
        ie6: s,
        ielt9: n && !document.addEventListener,
        edge: "msLaunchUri" in navigator && !("documentMode" in document),
        webkit: r,
        gecko: c,
        android: t.indexOf("android") !== -1,
        android23: a,
        chrome: u,
        safari: !u && t.indexOf("safari") !== -1,
        win: l,
        ie3d: m,
        webkit3d: v,
        gecko3d: w,
        opera12: y,
        any3d: !window.L_DISABLE_3D && (m || v || w) && !y && !h,
        mobile: f,
        mobileWebkit: f && r,
        mobileWebkit3d: f && v,
        mobileOpera: f && window.opera,
        mobileGecko: f && c,
        touch: !!g,
        msPointer: !!d,
        pointer: !!p,
        retina: (window.PQ || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1
      };
    })(),
    (T.Point = function (t, i, n) {
      (this.x = n ? Math.round(t) : t), (this.y = n ? Math.round(i) : i);
    }),
    (T.Point.prototype = {
      pQ: function () {
        return new T.Point(this.x, this.y);
      },
      AQ: function (t) {
        return this.pQ().aQ(T.SQ(t));
      },
      aQ: function (t) {
        return (this.x += t.x), (this.y += t.y), this;
      },
      sQ: function (t) {
        return this.pQ().DQ(T.SQ(t));
      },
      DQ: function (t) {
        return (this.x -= t.x), (this.y -= t.y), this;
      },
      dQ: function (t) {
        return this.pQ().FQ(t);
      },
      FQ: function (t) {
        return (this.x /= t), (this.y /= t), this;
      },
      fQ: function (t) {
        return this.pQ().GQ(t);
      },
      GQ: function (t) {
        return (this.x *= t), (this.y *= t), this;
      },
      gQ: function (t) {
        return new T.Point(this.x * t.x, this.y * t.y);
      },
      HQ: function (t) {
        return new T.Point(this.x / t.x, this.y / t.y);
      },
      hQ: function () {
        return this.pQ().JQ();
      },
      JQ: function () {
        return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
      },
      jQ: function () {
        return this.pQ().KQ();
      },
      KQ: function () {
        return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
      },
      kQ: function () {
        return this.pQ().LQ();
      },
      LQ: function () {
        return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
      },
      distanceTo: function (t) {
        t = T.SQ(t);
        var i = t.x - this.x,
          n = t.y - this.y;
        return Math.sqrt(i * i + n * n);
      },
      equals: function (t) {
        return (t = T.SQ(t)), t.x === this.x && t.y === this.y;
      },
      contains: function (t) {
        return (t = T.SQ(t)), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
      },
      lQ: function () {
        return "Point(" + T.S.h(this.x) + ", " + T.S.h(this.y) + ")";
      }
    }),
    (T.SQ = function (t, i, n) {
      return t instanceof T.Point
        ? t
        : T.S.l(t)
        ? new T.Point(t[0], t[1])
        : void 0 === t || null === t
        ? t
        : "object" == typeof t && "x" in t && "y" in t
        ? new T.Point(t.x, t.y)
        : new T.Point(t, i, n);
    }),
    (T.ZQ = function (t, i) {
      if (t) for (var n = i ? [t, i] : t, e = 0, o = n.length; e < o; e++) this.extend(n[e]);
    }),
    (T.ZQ.prototype = {
      extend: function (t) {
        return (
          (t = T.SQ(t)),
          this.min || this.max
            ? ((this.min.x = Math.min(t.x, this.min.x)),
              (this.max.x = Math.max(t.x, this.max.x)),
              (this.min.y = Math.min(t.y, this.min.y)),
              (this.max.y = Math.max(t.y, this.max.y)))
            : ((this.min = t.pQ()), (this.max = t.pQ())),
          this
        );
      },
      getCenter: function (t) {
        return new T.Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t);
      },
      CQ: function () {
        return new T.Point(this.min.x, this.max.y);
      },
      VQ: function () {
        return new T.Point(this.max.x, this.min.y);
      },
      getSize: function () {
        return this.max.sQ(this.min);
      },
      contains: function (t) {
        var i, n;
        return (
          (t = "number" == typeof t[0] || t instanceof T.Point ? T.SQ(t) : T.cQ(t)),
          t instanceof T.ZQ ? ((i = t.min), (n = t.max)) : (i = n = t),
          i.x >= this.min.x && n.x <= this.max.x && i.y >= this.min.y && n.y <= this.max.y
        );
      },
      intersects: function (t) {
        t = T.cQ(t);
        var i = this.min,
          n = this.max,
          e = t.min,
          o = t.max,
          s = o.x >= i.x && e.x <= n.x,
          r = o.y >= i.y && e.y <= n.y;
        return s && r;
      },
      BQ: function (t) {
        t = T.cQ(t);
        var i = this.min,
          n = this.max,
          e = t.min,
          o = t.max,
          s = o.x > i.x && e.x < n.x,
          r = o.y > i.y && e.y < n.y;
        return s && r;
      },
      vQ: function () {
        return !(!this.min || !this.max);
      }
    }),
    (T.cQ = function (t, i) {
      return !t || t instanceof T.ZQ ? t : new T.ZQ(t, i);
    }),
    (T.NQ = function (t, i, n, e) {
      (this._a = t), (this._b = i), (this._c = n), (this._d = e);
    }),
    (T.NQ.prototype = {
      bQ: function (t, i) {
        return this.MQ(t.pQ(), i);
      },
      MQ: function (t, i) {
        return (i = i || 1), (t.x = i * (this._a * t.x + this._b)), (t.y = i * (this._c * t.y + this._d)), t;
      },
      nQ: function (t, i) {
        return (i = i || 1), new T.Point((t.x / i - this._b) / this._a, (t.y / i - this._d) / this._c);
      }
    }),
    (T._Q = {
      mQ: function (t) {
        return "string" == typeof t ? document.getElementById(t) : t;
      },
      getStyle: function (t, i) {
        var n = t.style[i] || (t.currentStyle && t.currentStyle[i]);
        if ((!n || "auto" === n) && document.defaultView) {
          var e = document.defaultView.getComputedStyle(t, null);
          n = e ? e[i] : null;
        }
        return "auto" === n ? null : n;
      },
      s: function (t, i, n) {
        var e = document.createElement(t);
        return (e.className = i || ""), n && n.appendChild(e), e;
      },
      Qq: function (t) {
        var i = t.parentNode;
        i && i.removeChild(t);
      },
      qq: function (t) {
        for (; t.firstChild; ) t.removeChild(t.firstChild);
      },
      Wq: function (t) {
        t.parentNode.appendChild(t);
      },
      wq: function (t) {
        var i = t.parentNode;
        i.insertBefore(t, i.firstChild);
      },
      Eq: function (t, i) {
        if (void 0 !== t.classList) return t.classList.contains(i);
        var n = T._Q.eq(t);
        return n.length > 0 && new RegExp("(^|\\s)" + i + "(\\s|$)").test(n);
      },
      Rq: function (t, i) {
        if (void 0 !== t.classList) for (var n = T.S.j(i), e = 0, o = n.length; e < o; e++) t.classList.add(n[e]);
        else if (!T._Q.Eq(t, i)) {
          var s = T._Q.eq(t);
          T._Q.rq(t, (s ? s + " " : "") + i);
        }
      },
      Tq: function (t, i) {
        void 0 !== t.classList
          ? t.classList.remove(i)
          : T._Q.rq(t, T.S.J((" " + T._Q.eq(t) + " ").replace(" " + i + " ", " ")));
      },
      rq: function (t, i) {
        void 0 === t.className.baseVal ? (t.className = i) : (t.className.baseVal = i);
      },
      eq: function (t) {
        return void 0 === t.className.baseVal ? t.className : t.className.baseVal;
      },
      setOpacity: function (t, i) {
        "opacity" in t.style ? (t.style.opacity = i) : "filter" in t.style && T._Q.tq(t, i);
      },
      tq: function (t, i) {
        var n = !1,
          e = "DXImageTransform.Microsoft.Alpha";
        try {
          n = t.filters.item(e);
        } catch (AO) {
          if (1 === i) return;
        }
        (i = Math.round(100 * i)),
          n ? ((n.Enabled = 100 !== i), (n.Opacity = i)) : (t.style.filter += " progid:" + e + "(opacity=" + i + ")");
      },
      Yq: function (t) {
        for (var i = document.documentElement.style, n = 0; n < t.length; n++) if (t[n] in i) return t[n];
        return !1;
      },
      Uq: function (t, i, n) {
        var e = i || new T.Point(0, 0);
        t.style[T._Q.uq] =
          (T.oQ.ie3d ? "translate(" + e.x + "px," + e.y + "px)" : "translate3d(" + e.x + "px," + e.y + "px,0)") +
          (n ? " scale(" + n + ")" : "");
      },
      setPosition: function (t, i) {
        (t._tdt_pos = i), T.oQ.any3d ? T._Q.Uq(t, i) : ((t.style.left = i.x + "px"), (t.style.top = i.y + "px"));
      },
      getPosition: function (t) {
        return t._tdt_pos || new T.Point(0, 0);
      }
    }),
    (function () {
      T._Q.uq = T._Q.Yq(["bQ", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]);
      var t = (T._Q.Iq = T._Q.Yq(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]));
      if (
        ((T._Q.iq = "webkitTransition" === t || "OTransition" === t ? t + "End" : "transitionend"),
        "onselectstart" in document)
      )
        (T._Q.Oq = function () {
          T.oq.on(window, "selectstart", T.oq.preventDefault);
        }),
          (T._Q.Pq = function () {
            T.oq.off(window, "selectstart", T.oq.preventDefault);
          });
      else {
        var i = T._Q.Yq(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
        (T._Q.Oq = function () {
          if (i) {
            var t = document.documentElement.style;
            (this.pq = t[i]), (t[i] = "none");
          }
        }),
          (T._Q.Pq = function () {
            i && ((document.documentElement.style[i] = this.pq), delete this.pq);
          });
      }
      (T._Q.Aq = function () {
        T.oq.on(window, "dragstart", T.oq.preventDefault);
      }),
        (T._Q.aq = function () {
          T.oq.off(window, "dragstart", T.oq.preventDefault);
        }),
        (T._Q.Sq = function (t) {
          for (; t.tabIndex === -1; ) t = t.parentNode;
          t &&
            t.style &&
            (T._Q.sq(),
            (this.Dq = t),
            (this._outlineStyle = t.style.outline),
            (t.style.outline = "none"),
            T.oq.on(window, "keydown", T._Q.sq, this));
        }),
        (T._Q.sq = function () {
          this.Dq &&
            ((this.Dq.style.outline = this._outlineStyle),
            delete this.Dq,
            delete this._outlineStyle,
            T.oq.off(window, "keydown", T._Q.sq, this));
        });
    })(),
    (T.dq = function (t, i, n) {
      isNaN(t) || isNaN(i),
        (this.lat = +parseFloat(t).toFixed(5)),
        (this.lng = +parseFloat(i).toFixed(5)),
        void 0 !== n && (this.Fq = +n);
    }),
    (T.dq.prototype = {
      equals: function (t, i) {
        if (!t) return !1;
        t = T.fq(t);
        var n = Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng));
        return n <= (void 0 === i ? 1e-9 : i);
      },
      lQ: function (t) {
        return "LngLat(" + T.S.h(this.lng, t) + ", " + T.S.h(this.lat, t) + ")";
      },
      distanceTo: function (t) {
        return T.gq.Gq.distance(this, T.fq(t));
      },
      Hq: function () {
        return T.gq.Gq.hq(this);
      },
      Jq: function (t) {
        var i = (180 * t) / 40075017,
          n = i / Math.cos((Math.PI / 180) * this.lat);
        return T.jq([this.lat - i, this.lng - n], [this.lat + i, this.lng + n]);
      },
      pQ: function () {
        return new T.dq(this.lat, this.lng, this.Fq);
      },
      getLng: function () {
        return this.lng;
      },
      getLat: function () {
        return this.lat;
      }
    }),
    (T.fq = function (t, i, n) {
      return t instanceof T.dq
        ? t
        : T.S.l(t) && "object" != typeof t[0]
        ? 3 === t.length
          ? new T.dq(t[0], t[1], t[2])
          : 2 === t.length
          ? new T.dq(t[0], t[1])
          : null
        : void 0 === t || null === t
        ? t
        : "object" == typeof t && "lat" in t
        ? new T.dq(t.lat, "lng" in t ? t.lng : t.lon, t.Fq)
        : void 0 === i
        ? null
        : new T.dq(t, i, n);
    }),
    (T.LngLat = function (t, i, n) {
      return new T.dq(i, t, n);
    }),
    (T.Kq = function (t, i) {
      if (t) for (var n = i ? [t, i] : t, e = 0, o = n.length; e < o; e++) this.extend(n[e]);
    }),
    (T.Kq.prototype = {
      extend: function (t) {
        var i,
          n,
          e = this.kq,
          o = this.Lq;
        if (t instanceof T.dq) (i = t), (n = t);
        else {
          if (!(t instanceof T.Kq)) return t ? this.extend(T.fq(t) || T.jq(t)) : this;
          if (((i = t.kq), (n = t.Lq), !i || !n)) return this;
        }
        return (
          e || o
            ? ((e.lat = Math.min(i.lat, e.lat)),
              (e.lng = Math.min(i.lng, e.lng)),
              (o.lat = Math.max(n.lat, o.lat)),
              (o.lng = Math.max(n.lng, o.lng)))
            : ((this.kq = new T.dq(i.lat, i.lng)), (this.Lq = new T.dq(n.lat, n.lng))),
          this
        );
      },
      lq: function (t) {
        var i = this.kq,
          n = this.Lq,
          e = Math.abs(i.lat - n.lat) * t,
          o = Math.abs(i.lng - n.lng) * t;
        return new T.Kq(new T.dq(i.lat - e, i.lng - o), new T.dq(n.lat + e, n.lng + o));
      },
      getCenter: function () {
        return new T.dq((this.kq.lat + this.Lq.lat) / 2, (this.kq.lng + this.Lq.lng) / 2);
      },
      getSouthWest: function () {
        return this.kq;
      },
      getNorthEast: function () {
        return this.Lq;
      },
      Zq: function () {
        return new T.dq(this.Cq(), this.Vq());
      },
      cq: function () {
        return new T.dq(this.Bq(), this.vq());
      },
      Vq: function () {
        return this.kq.lng;
      },
      Bq: function () {
        return this.kq.lat;
      },
      vq: function () {
        return this.Lq.lng;
      },
      Cq: function () {
        return this.Lq.lat;
      },
      contains: function (t) {
        t = "number" == typeof t[0] || t instanceof T.dq ? T.fq(t) : T.jq(t);
        var i,
          n,
          e = this.kq,
          o = this.Lq;
        return (
          t instanceof T.Kq ? ((i = t.getSouthWest()), (n = t.getNorthEast())) : (i = n = t),
          i.lat >= e.lat && n.lat <= o.lat && i.lng >= e.lng && n.lng <= o.lng
        );
      },
      intersects: function (t) {
        t = T.jq(t);
        var i = this.kq,
          n = this.Lq,
          e = t.getSouthWest(),
          o = t.getNorthEast(),
          s = o.lat >= i.lat && e.lat <= n.lat,
          r = o.lng >= i.lng && e.lng <= n.lng;
        return s && r;
      },
      BQ: function (t) {
        t = T.jq(t);
        var i = this.kq,
          n = this.Lq,
          e = t.getSouthWest(),
          o = t.getNorthEast(),
          s = o.lat > i.lat && e.lat < n.lat,
          r = o.lng > i.lng && e.lng < n.lng;
        return s && r;
      },
      Nq: function () {
        return [this.Vq(), this.Bq(), this.vq(), this.Cq()].join(",");
      },
      equals: function (t) {
        return !!t && ((t = T.jq(t)), this.kq.equals(t.getSouthWest()) && this.Lq.equals(t.getNorthEast()));
      },
      vQ: function () {
        return !(!this.kq || !this.Lq);
      }
    }),
    (T.jq = function (t, i) {
      return t instanceof T.Kq ? t : new T.Kq(t, i);
    }),
    (T.LngLatBounds = function (t, i) {
      return t instanceof T.Kq ? t : new T.Kq(t, i);
    }),
    (T.bq = {}),
    (T.bq.Mq = {
      nq: function (t) {
        return new T.Point(t.lng, t.lat);
      },
      _q: function (t) {
        return new T.dq(t.y, t.x);
      },
      bounds: T.cQ([-180, -90], [180, 90])
    }),
    (T.bq.mq = {
      R: 6378137,
      QW: 85.0511287798,
      nq: function (t) {
        var i = Math.PI / 180,
          n = this.QW,
          e = Math.max(Math.min(n, t.lat), -n),
          o = Math.sin(e * i);
        return new T.Point(this.R * t.lng * i, (this.R * Math.log((1 + o) / (1 - o))) / 2);
      },
      _q: function (t) {
        var i = 180 / Math.PI;
        return new T.dq((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * i, (t.x * i) / this.R);
      },
      bounds: (function () {
        var t = 6378137 * Math.PI;
        return T.cQ([-t, -t], [t, t]);
      })()
    }),
    (T.gq = {
      qW: function (t, i) {
        var n = this.projection.nq(t),
          e = this.scale(i);
        return this.WW.MQ(n, e);
      },
      wW: function (t, i) {
        var n = this.scale(i),
          e = this.WW.nQ(t, n);
        return this.projection._q(e);
      },
      nq: function (t) {
        return this.projection.nq(t);
      },
      _q: function (t) {
        return this.projection._q(t);
      },
      scale: function (t) {
        return 256 * Math.pow(2, t - T.gq.EW);
      },
      EW: 0,
      zoom: function (t) {
        return Math.log(t / 256) / Math.LN2;
      },
      eW: function (t) {
        if (this.RW) return null;
        var i = this.projection.bounds,
          n = this.scale(t),
          e = this.WW.bQ(i.min, n),
          o = this.WW.bQ(i.max, n);
        return T.cQ(e, o);
      },
      RW: !1,
      hq: function (t) {
        var i = this.rW ? T.S.g(t.lng, this.rW, !0) : t.lng,
          n = this.wrapLat ? T.S.g(t.lat, this.wrapLat, !0) : t.lat,
          e = t.Fq;
        return T.fq(n, i, e);
      }
    }),
    (T.gq.TW = T.extend({}, T.gq, {
      projection: T.bq.Mq,
      WW: new T.NQ(1, 0, -1, 0),
      scale: function (t) {
        return Math.pow(2, t);
      },
      zoom: function (t) {
        return Math.log(t) / Math.LN2;
      },
      distance: function (t, i) {
        var n = i.lng - t.lng,
          e = i.lat - t.lat;
        return Math.sqrt(n * n + e * e);
      },
      RW: !0
    })),
    (T.gq.Gq = T.extend({}, T.gq, {
      rW: [-180, 180],
      R: 6371e3,
      distance: function (t, i) {
        var n = Math.PI / 180,
          e = t.lat * n,
          o = i.lat * n,
          s = Math.sin(e) * Math.sin(o) + Math.cos(e) * Math.cos(o) * Math.cos((i.lng - t.lng) * n);
        return this.R * Math.acos(Math.min(s, 1));
      }
    })),
    (T.gq.tW = T.extend({}, T.gq.Gq, {
      code: "YW",
      projection: T.bq.mq,
      WW: (function () {
        var t = 0.5 / (Math.PI * T.bq.mq.R);
        return new T.NQ(t, 0.5, -t, 0.5);
      })()
    })),
    (T.gq.UW = T.extend({}, T.gq.tW, {
      code: "EPSG:900913"
    })),
    (T.gq.uW = T.extend({}, T.gq.Gq, {
      code: "EPSG:4326",
      projection: T.bq.Mq,
      WW: new T.NQ(1 / 180, 1, -1 / 180, 0.5)
    })),
    (T.Map = T.m.extend({
      options: {
        IW: T.gq.UW,
        center: void 0,
        zoom: void 0,
        minZoom: void 0,
        maxZoom: void 0,
        layers: [],
        maxBounds: void 0,
        iW: void 0,
        OW: !0,
        oW: !0,
        PW: !0,
        pW: 8388608,
        AW: 1,
        aW: 1,
        datasourcesControl: !1
      },
      initialize: function (t, i) {
        (i = T.setOptions(this, i)),
          (this.SW = "EPSG:900913"),
          i.projection
            ? "EPSG:4326" == i.projection
              ? ((i.IW = T.gq.uW), (this.SW = "EPSG:4326"), (T.gq.EW = 1))
              : ((i.IW = T.gq.UW), (this.SW = "EPSG:900913"), (i.projection = this.SW), (T.gq.EW = 0))
            : (i.projection = this.SW),
          this.sW(t),
          this.DW(),
          (this.dW = T.D(this.dW, this)),
          this.FW(),
          i.maxBounds && this.setMaxBounds(i.maxBounds),
          void 0 !== i.zoom && (this.fW = this.GW(i.zoom)),
          i.center &&
            void 0 !== i.zoom &&
            this.gW(T.fq(i.center), i.zoom, {
              reset: !0
            }),
          (this.HW = []),
          (this.hW = {}),
          (this.JW = []),
          (this.jW = []),
          (this.KW = {}),
          (this.kW = !0),
          (this.initLayers = []),
          this.B(),
          (this.defaultMapType = null),
          this.LW(this),
          this.lW(this.options.layers);
      },
      getCode: function () {
        return this.SW;
      },
      gW: function (t, i) {
        return (i = void 0 === i ? this.getZoom() : i), this.ZW(T.fq(t), i), this;
      },
      setZoom: function (t, i) {
        return this.CW
          ? this.gW(this.getCenter(), t, {
              zoom: i
            })
          : ((this.fW = t), this);
      },
      zoomIn: function (t, i) {
        return (t = t || (T.oQ.any3d ? this.options.aW : 1)), this.setZoom(this.fW + t, i);
      },
      zoomOut: function (t, i) {
        return (t = t || (T.oQ.any3d ? this.options.aW : 1)), this.setZoom(this.fW - t, i);
      },
      VW: function (t, i, n) {
        var e = this.cW(i),
          o = this.getSize().dQ(2),
          s = t instanceof T.Point ? t : this.BW(t),
          r = s.sQ(o).fQ(1 - 1 / e),
          h = this.vW(o.AQ(r));
        return this.gW(h, i, {
          zoom: n
        });
      },
      NW: function (t, i) {
        (i = i || {}), (t = t.getBounds ? t.getBounds() : T.jq(t));
        var n = T.SQ(i.bW || i.MW || [0, 0]),
          e = T.SQ(i.paddingBottomRight || i.MW || [0, 0]),
          o = this.nW(t, !1, n.AQ(e));
        o = "number" == typeof i.maxZoom ? Math.min(i.maxZoom, o) : o;
        var s = e.sQ(n).dQ(2),
          r = this.nq(t.getSouthWest(), o),
          h = this.nq(t.getNorthEast(), o),
          a = this._q(r.AQ(h).dQ(2).AQ(s), o);
        return {
          center: a,
          zoom: o
        };
      },
      _W: function (t, i) {
        if (((t = T.jq(t)), !t.vQ())) throw new Error("Bounds are not valid.");
        var n = this.NW(t, i);
        return this.gW(n.center, n.zoom, i);
      },
      mW: function (t) {
        return this._W(
          [
            [-90, -180],
            [90, 180]
          ],
          t
        );
      },
      getViewport: function (t) {
        if (T.S.l(t) && 0 != t.length) {
          var i = this.Qw(t);
          return {
            center: i.getCenter(),
            zoom: this.nW(i, !1)
          };
        }
      },
      setViewport: function (t) {
        if (T.S.l(t) && 0 != t.length) {
          var i = this.Qw(t);
          this.panTo(i.getCenter(), this.nW(i, !1));
        }
      },
      Qw: function (t) {
        for (var i = new T.LngLatBounds(new T.LngLat(0, 0)), n = 0, e = t.length; n < e; n++) {
          var o = T.fq(t[n]);
          i.extend(o);
        }
        return i;
      },
      panTo: function (t, i, n) {
        return (
          i && (this.fW = i),
          this.centerAndZoom(t, this.fW, {
            qw: n
          })
        );
      },
      panBy: function (t) {
        return this.wQ("movestart"), this.Ww(T.SQ(t)), this.wQ("move"), this.wQ("moveend");
      },
      setMaxBounds: function (t) {
        return (
          (t = T.jq(t)),
          t.vQ()
            ? (this.options.maxBounds && this.off("moveend", this.ww),
              (this.options.maxBounds = t),
              this.CW && this.ww(),
              this.on("moveend", this.ww))
            : ((this.options.maxBounds = null), this.off("moveend", this.ww))
        );
      },
      setMinZoom: function (t) {
        return (
          (this.options.minZoom = t),
          this.CW && this.getZoom() < this.options.minZoom
            ? this.setZoom(t)
            : (this.wQ("minzoom", {
                minZoom: this.options.minZoom,
                maxZoom: this.options.maxZoom
              }),
              this)
        );
      },
      setMaxZoom: function (t) {
        return (
          (this.options.maxZoom = t),
          this.CW && this.getZoom() > this.options.maxZoom
            ? this.setZoom(t)
            : (this.wQ("maxzoom", {
                minZoom: this.options.minZoom,
                maxZoom: this.options.maxZoom
              }),
              this)
        );
      },
      Ew: function (t, i) {
        this.ew = !0;
        var n = this.getCenter(),
          e = this.Rw(n, this.fW, T.jq(t));
        return n.equals(e) || this.panTo(e, i), (this.ew = !1), this;
      },
      rw: function (t) {
        if (!this.CW) return this;
        t = T.extend(
          {
            Tw: !1,
            qw: !0
          },
          t === !0
            ? {
                Tw: !0
              }
            : t
        );
        var i = this.getSize();
        (this.kW = !0), (this.tw = null);
        var n = this.getSize(),
          e = i.dQ(2).hQ(),
          o = n.dQ(2).hQ(),
          s = e.sQ(o);
        return s.x || s.y
          ? (t.Tw && t.qw
              ? this.panBy(s)
              : (t.qw && this.Ww(s),
                this.wQ("move"),
                t.Yw
                  ? (clearTimeout(this.Uw), (this.Uw = setTimeout(T.D(this.wQ, this, "moveend"), 200)))
                  : this.wQ("moveend")),
            this.wQ("resize", {
              oldSize: i,
              newSize: n
            }))
          : this;
      },
      checkResize: function () {
        this.rw();
      },
      uw: function () {
        return this.setZoom(this.GW(this.fW)), this.options.AW || this.wQ("viewreset"), this.Iw();
      },
      iw: function (t, i) {
        if (!i) return this;
        var n = (this[t] = new i(this));
        return this.HW.push(n), this.options[t] && n.enable(), this;
      },
      Qq: function () {
        this.FW(!0);
        try {
          delete this.Ow._tdt;
        } catch (AO) {
          this.Ow._tdt = void 0;
        }
        T._Q.Qq(this.ow), this.Pw && this.Pw(), this.pw(), this.CW && this.wQ("unload");
        for (var t in this.hW) this.hW[t].Qq();
        return this;
      },
      Aw: function (t, i) {
        var n = "tdt-pane" + (t ? " tdt-" + t.replace("Pane", "") + "-pane" : ""),
          e = T._Q.s("div", n, i || this.ow);
        return t && (this.aw[t] = e), e;
      },
      getCenter: function () {
        return this.Sw(), this.tw && !this.sw() ? this.tw : this.Dw(this.dw());
      },
      getZoom: function () {
        return this.fW;
      },
      getBounds: function () {
        var t = this.Fw(),
          i = this._q(t.CQ()),
          n = this._q(t.VQ());
        return new T.Kq(i, n);
      },
      getMinZoom: function () {
        return void 0 === this.options.minZoom ? this.fw || 0 : this.options.minZoom;
      },
      getMaxZoom: function () {
        return void 0 === this.options.maxZoom ? (void 0 === this.Gw ? 1 / 0 : this.Gw) : this.options.maxZoom;
      },
      nW: function (t, i, n) {
        (t = T.jq(t)), (n = T.SQ(n || [0, 0]));
        var e = this.getZoom() || 0,
          o = this.getMinZoom(),
          s = this.getMaxZoom(),
          r = t.Zq(),
          h = t.cq(),
          a = this.getSize().sQ(n),
          u = this.nq(h, e).sQ(this.nq(r, e)),
          c = T.oQ.any3d ? this.options.AW : 1,
          l = Math.min(a.x / u.x, a.y / u.y);
        return (
          (e = this.gw(l, e)),
          c && ((e = Math.round(e / (c / 100)) * (c / 100)), (e = i ? Math.ceil(e / c) * c : Math.floor(e / c) * c)),
          Math.max(o, Math.min(s, e))
        );
      },
      getSize: function () {
        return (
          (this.Hw && !this.kW) || ((this.Hw = new T.Point(this.Ow.clientWidth, this.Ow.clientHeight)), (this.kW = !1)),
          this.Hw.pQ()
        );
      },
      Fw: function (t, i) {
        var n = this.hw(t, i);
        return new T.ZQ(n, n.AQ(this.getSize()));
      },
      Jw: function () {
        return this.Sw(), this.jw;
      },
      Kw: function (t) {
        return this.options.IW.eW(void 0 === t ? this.getZoom() : t);
      },
      getPane: function (t) {
        return "string" == typeof t ? this.aw[t] : t;
      },
      getPanes: function () {
        return this.aw;
      },
      getContainer: function () {
        return this.Ow;
      },
      cW: function (t, i) {
        var n = this.options.IW;
        return (i = void 0 === i ? this.fW : i), n.scale(t) / n.scale(i);
      },
      gw: function (t, i) {
        var n = this.options.IW;
        return (i = void 0 === i ? this.fW : i), n.zoom(t * n.scale(i + T.gq.EW));
      },
      setCrs: function (t) {
        if (t == this.getCode()) return !1;
        var i = this.getCenter();
        "EPSG:900913" == t
          ? ((this.options.IW = T.gq.UW), (this.SW = t), (T.gq.EW = 0))
          : ((this.options.IW = T.gq.uW), (this.SW = t), (T.gq.EW = 1)),
          this.setMapType(this.getMapType()),
          this.ZW(i, this.getZoom());
      },
      switchingMaps: function (t) {
        this.setCrs(t);
      },
      nq: function (t, i) {
        return (i = void 0 === i ? this.fW : i), this.options.IW.qW(T.fq(t), i);
      },
      _q: function (t, i) {
        return (i = void 0 === i ? this.fW : i), this.options.IW.wW(T.SQ(t), i);
      },
      Dw: function (t) {
        var i = T.SQ(t).AQ(this.Jw());
        return this._q(i);
      },
      kw: function (t) {
        var i = this.nq(T.fq(t)).JQ();
        return i.DQ(this.Jw());
      },
      layerPointToLngLat: function (t) {
        return this.Dw(t);
      },
      lngLatToLayerPoint: function (t) {
        return this.kw(t);
      },
      hq: function (t) {
        return this.options.IW.hq(T.fq(t));
      },
      distance: function (t, i) {
        return this.options.IW.distance(T.fq(t), T.fq(i));
      },
      getDistance: function (t, i) {
        return this.distance(t, i);
      },
      Lw: function (t) {
        return T.SQ(t).sQ(this.lw());
      },
      Zw: function (t) {
        return T.SQ(t).AQ(this.lw());
      },
      vW: function (t) {
        var i = this.Lw(T.SQ(t));
        return this.Dw(i);
      },
      BW: function (t) {
        return this.Zw(this.kw(T.fq(t)));
      },
      containerPointToLngLat: function (t) {
        return this.vW(t);
      },
      lngLatToContainerPoint: function (t) {
        return this.BW(t);
      },
      Cw: function (t) {
        return T.oq.Vw(t, this.Ow);
      },
      cw: function (t) {
        return this.Lw(this.Cw(t));
      },
      Bw: function (t) {
        return this.Dw(this.cw(t));
      },
      sW: function (t) {
        var i = (this.Ow = T._Q.mQ(t));
        i && i._tdt, T.oq.addListener(i, "scroll", this.vw, this), (i._tdt = !0);
      },
      DW: function () {
        var t = this.Ow;
        (this.Nw = this.options.OW && T.oQ.any3d),
          T._Q.Rq(
            t,
            "tdt-container" +
              (T.oQ.touch ? " tdt-touch" : "") +
              (T.oQ.retina ? " tdt-retina" : "") +
              (T.oQ.ielt9 ? " tdt-oldie" : "") +
              (T.oQ.safari ? " tdt-safari" : "") +
              (this.Nw ? " tdt-fade-anim" : "")
          );
        var i = T._Q.getStyle(t, "position");
        "absolute" !== i && "relative" !== i && "fixed" !== i && (t.style.position = "relative"),
          this.bw(),
          this.Mw && this.Mw();
      },
      bw: function () {
        var t = (this.aw = {});
        (this.nw = {}),
          (this.ow = this.Aw("mapPane", this.Ow)),
          T._Q.setPosition(this.ow, new T.Point(0, 0)),
          this.Aw("tilePane"),
          this.Aw("_w"),
          this.Aw("overlayPane"),
          this.Aw("markerPane"),
          this.Aw("infoWindowPane"),
          this.options.PW || (T._Q.Rq(t.markerPane, "tdt-zoom-hide"), T._Q.Rq(t._w, "tdt-zoom-hide"));
      },
      ZW: function (t, i) {
        T._Q.setPosition(this.ow, new T.Point(0, 0));
        var n = !this.CW;
        (this.CW = !0), (i = this.GW(i)), this.wQ("viewprereset");
        var e = this.fW !== i;
        this.qE(e).QE(t, i).mw(e), this.wQ("viewreset"), n && this.wQ("load");
      },
      qE: function (t) {
        return t && this.wQ("zoomstart"), this.wQ("movestart");
      },
      QE: function (t, i, n) {
        void 0 === i && (i = this.fW);
        var e = this.fW !== i;
        return (
          (this.fW = i),
          (this.tw = t),
          (this.jw = this.WE(t)),
          (e || (n && n.pinch)) && this.wQ("zoom", n),
          this.wQ("move", n)
        );
      },
      mw: function (t) {
        return t && this.wQ("zoomend"), this.wQ("moveend");
      },
      Iw: function () {
        return T.S.V(this.wE), this.EE && this.EE.uw(), this;
      },
      Ww: function (t) {
        T._Q.setPosition(this.ow, this.lw().sQ(t));
      },
      eE: function () {
        return this.getMaxZoom() - this.getMinZoom();
      },
      ww: function () {
        this.ew || this.Ew(this.options.maxBounds);
      },
      Sw: function () {
        !this.CW;
      },
      FW: function (t) {
        if (T.oq) {
          (this.RE = {}), (this.RE[T.d(this.Ow)] = this);
          var i = t ? "off" : "on";
          T.oq[i](
            this.Ow,
            "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress",
            this.rE,
            this
          ),
            this.options.oW && T.oq[i](window, "resize", this.dW, this),
            T.oQ.any3d && this.options.pW && this[i]("moveend", this.TE);
        }
      },
      dW: function () {
        T.S.V(this.tE),
          (this.tE = T.S.C(function () {
            this.rw({
              Yw: !0
            });
          }, this));
      },
      vw: function () {
        (this.Ow.scrollTop = 0), (this.Ow.scrollLeft = 0);
      },
      TE: function () {
        var t = this.lw();
        Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.pW && this.ZW(this.getCenter(), this.getZoom());
      },
      YE: function (t, i) {
        for (var n, e = [], o = "mouseout" === i || "mouseover" === i, s = t.target || t.srcElement, r = !1; s; ) {
          if (((n = this.RE[T.d(s)]), n && ("click" === i || "UE" === i) && !t.uE && this.IE(n))) {
            r = !0;
            break;
          }
          if (n && n.EQ(i, !0)) {
            if (o && !T.oq.iE(s, t)) break;
            if ((e.push(n), o)) break;
          }
          if (s === this.Ow) break;
          s = s.parentNode;
        }
        return e.length || r || o || !T.oq.iE(s, t) || (e = [this]), e;
      },
      rE: function (t) {
        if (this.CW && !T.oq.OE(t)) {
          var i = "keypress" === t.type && 13 === t.keyCode ? "click" : t.type;
          "mousedown" === i && T._Q.Sq(t.target || t.srcElement), this.oE(t, i);
        }
      },
      oE: function (t, i, n) {
        if ("click" === t.type) {
          var e = T.S.extend({}, t);
          (e.type = "UE"), this.oE(e, e.type, n);
        }
        if (!t._stopped && ((n = (n || []).concat(this.YE(t, i))), n.length)) {
          var o = n[0];
          "contextmenu" === i && o.EQ(i, !0) && T.oq.preventDefault(t);
          var s = {
            originalEvent: t
          };
          if ("keypress" !== t.type) {
            var r = o instanceof T.Marker;
            (s.containerPoint = r ? this.BW(o.PE()) : this.Cw(t)),
              (s.layerPoint = this.Lw(s.containerPoint)),
              (s.lnglat = r ? o.PE() : this.Dw(s.layerPoint));
          }
          for (var h = 0; h < n.length; h++)
            if (
              (n[h].wQ(i, s, !0),
              s.originalEvent._stopped || (n[h].options.pE && T.S.indexOf(n[h].options.pE, i) !== -1))
            )
              return;
        }
      },
      IE: function (t) {
        return (t = t.AE && t.AE.aE() ? t : this), (t.AE && t.AE.moved()) || (this.SE && this.SE.moved());
      },
      pw: function () {
        for (var t = 0, i = this.HW.length; t < i; t++) this.HW[t].disable();
      },
      sE: function (t, i) {
        return (
          this.CW
            ? t.call(i || this, {
                target: this
              })
            : this.on("load", t, i),
          this
        );
      },
      lw: function () {
        return T._Q.getPosition(this.ow) || new T.Point(0, 0);
      },
      sw: function () {
        var t = this.lw();
        return t && !t.equals([0, 0]);
      },
      hw: function (t, i) {
        var n = t && void 0 !== i ? this.WE(t, i) : this.Jw();
        return n.sQ(this.lw());
      },
      WE: function (t, i) {
        var n = this.getSize().FQ(2);
        return this.nq(t, i).DQ(n).aQ(this.lw()).JQ();
      },
      DE: function (t, i, n) {
        var e = this.WE(n, i);
        return this.nq(t, i).DQ(e);
      },
      dw: function () {
        return this.Lw(this.getSize().FQ(2));
      },
      dE: function (t) {
        return this.kw(t).sQ(this.dw());
      },
      Rw: function (t, i, n) {
        if (!n) return t;
        var e = this.nq(t, i),
          o = this.getSize().dQ(2),
          s = new T.ZQ(e.sQ(o), e.AQ(o)),
          r = this.FE(s, n, i);
        return r.hQ().equals([0, 0]) ? t : this._q(e.AQ(r), i);
      },
      fE: function (t, i) {
        if (!i) return t;
        var n = this.Fw(),
          e = new T.ZQ(n.min.AQ(t), n.max.AQ(t));
        return t.AQ(this.FE(e, i));
      },
      FE: function (t, i, n) {
        var e = T.cQ(this.nq(i.getNorthEast(), n), this.nq(i.getSouthWest(), n)),
          o = e.min.sQ(t.min),
          s = e.max.sQ(t.max),
          r = this.GE(o.x, -s.x),
          h = this.GE(o.y, -s.y);
        return new T.Point(r, h);
      },
      GE: function (t, i) {
        return t + i > 0 ? Math.round(t - i) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(i));
      },
      GW: function (t) {
        var i = this.getMinZoom(),
          n = this.getMaxZoom(),
          e = T.oQ.any3d ? this.options.AW : 1;
        return e && (t = Math.round(t / e) * e), Math.max(i, Math.min(n, t));
      },
      enableAutoResize: function () {
        (this.options.oW = !0), T.oq.on(window, "resize", this.dW, this);
      },
      disableAutoResize: function () {
        (this.options.oW = !1), T.oq.off(window, "resize", this.dW, this);
      },
      getOverlays: function () {
        var t = [];
        for (var i in this.hW) "undefined" != typeof this.hW[i].options.type && t.push(this.hW[i]);
        return t;
      },
      setStyle: function (t) {
        (t = t || "black"),
          "black" == t ? (this.Ow.style.backgroundColor = "#000000") : (this.Ow.style.backgroundColor = "#466399"),
          this.defaultMapType.getLayers()[0].on("tileload", function (t) {
            T._Q.Rq(t.tile, "tdtTileImage");
          }),
          this.defaultMapType.getLayers()[1].on("tileload", function (t) {
            T._Q.Rq(t.tile, "tdtTileImage");
          }),
          this.ZW(this.getCenter(), this.getZoom());
      },
      removeStyle: function () {
        (this.Ow.style.backgroundColor = ""),
          this.defaultMapType.getLayers()[0].off("tileload"),
          this.defaultMapType.getLayers()[1].off("tileload"),
          this.ZW(this.getCenter(), this.getZoom());
      }
    })),
    (T.gE = function (t, i) {
      return new T.Map(t, i);
    }),
    (T.HE = T.m.extend({
      options: {
        hE: "overlayPane",
        pE: []
      },
      addTo: function (t) {
        return t.addLayer(this), this;
      },
      Qq: function () {
        return this.JE(this.jE || this.KE);
      },
      JE: function (t) {
        return t && t.removeLayer(this), this;
      },
      getPane: function (t) {
        return this.jE.getPane(t ? this.options[t] || t : this.options.hE);
      },
      kE: function (t) {
        return (this.jE.RE[T.d(t)] = this), this;
      },
      LE: function (t) {
        return delete this.jE.RE[T.d(t)], this;
      },
      lE: function (t) {
        var i = t.target;
        if (i.hasLayer(this)) {
          if (((this.jE = i), (this.ZE = i.ZE), this.CE)) {
            var n = this.CE();
            i.on(n, this),
              this.rQ(
                "remove",
                function () {
                  i.off(n, this);
                },
                this
              );
          }
          this.onAdd(i),
            this.VE && this.jE.cE && this.jE.cE.BE(this.VE()),
            this.wQ("AQ"),
            i.wQ("layeradd", {
              layer: this
            });
        }
      }
    })),
    T.Map.M({
      addLayer: function (t) {
        var i = T.d(t);
        return this.hW[i]
          ? this
          : ((this.hW[i] = t),
            "undefined" != typeof this.hW[i].options.type && this.JW.push(this.hW[i]),
            (t.KE = this),
            t.vE && t.vE(this),
            this.sE(t.lE, t),
            this);
      },
      removeLayer: function (t) {
        var i = T.d(t);
        return this.hW[i]
          ? (this.CW && t.onRemove(this),
            t.VE && this.cE && this.cE.NE(t.VE()),
            delete this.hW[i],
            this.CW &&
              (this.wQ("layerremove", {
                layer: t
              }),
              t.wQ("remove")),
            (t.jE = t.KE = null),
            this)
          : this;
      },
      getLayers: function () {
        var t = [];
        for (layer in this.hW)
          "function" == typeof this.hW[layer].getTileUrl &&
            "tilePane" == this.hW[layer].options.hE &&
            t.push(this.hW[layer]);
        return t;
      },
      clearLayers: function () {
        for (var t = 0; t < this.jW.length; t++) this.removeOverLay(this.jW[t]);
        for (var t = this.jW.length - 1; t >= 0; t--) this.jW.splice(t, 1);
        return this;
      },
      addOverLay: function (t) {
        this.addLayer(t),
          this.wQ("addoverlay", {
            addoverlay: t
          });
      },
      removeOverLay: function (t) {
        this.removeLayer(t),
          this.wQ("removeoverlay", {
            removeoverlay: t
          });
      },
      clearOverLays: function () {
        for (var t = 0; t < this.JW.length; t++) this.removeOverLay(this.JW[t]);
        return this.wQ("clearoverlays"), this;
      },
      setMapType: function (t) {
        t &&
          (this.defaultMapType && this.clearMapType(this.defaultMapType), this.addLayer(t), (this.defaultMapType = t)),
          this.wQ("maptypechange", {
            mapType: t
          });
      },
      clearMapType: function (t) {
        t && (this.removeLayer(t), (this.defaultMapType = null));
      },
      addMapType: function (t) {},
      removeMapType: function (t) {},
      getMapType: function () {
        return this.defaultMapType;
      },
      hasLayer: function (t) {
        return !!t && T.d(t) in this.hW;
      },
      bE: function (t, i) {
        for (var n in this.hW) t.call(i, this.hW[n]);
        return this;
      },
      lW: function (t) {
        if (((t = t ? (T.S.l(t) ? t : [t]) : []), 0 == t.length))
          (this.defaultMapType = TMAP_NORMAL_MAP), (t = [TMAP_NORMAL_MAP]);
        else
          for (var i = 0, n = t.length; i < n; i++)
            if (t[i] instanceof T.MapType) {
              this.defaultMapType = t[i];
              break;
            }
        for (var i = 0, n = t.length; i < n; i++) this.addLayer(t[i]);
      },
      ME: function (t) {
        (!isNaN(t.options.maxZoom) && isNaN(t.options.minZoom)) || ((this.KW[T.d(t)] = t), this.nE());
      },
      _E: function (t) {
        var i = T.d(t);
        this.KW[i] && (delete this.KW[i], this.nE());
      },
      nE: function () {
        var t = 1 / 0,
          i = -(1 / 0),
          n = this.eE();
        for (var e in this.KW) {
          var o = this.KW[e].options;
          (t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom)),
            (i = void 0 === o.maxZoom ? i : Math.max(i, o.maxZoom));
        }
        (this.Gw = i === -(1 / 0) ? void 0 : i),
          (this.fw = t === 1 / 0 ? void 0 : t),
          n !== this.eE() && this.wQ("zoomlevelschange");
      }
    }),
    (T.Overlay = T.HE.extend({
      options: {
        type: 0
      },
      show: function () {
        this.getElement().style.display = "block";
      },
      hide: function () {
        this.getElement().style.display = "none";
      },
      isHidden: function () {
        return "none" == this.getElement().style.display;
      },
      CE: function () {
        var t = {
          zoom: this.update,
          viewreset: this.update
        };
        return t;
      },
      update: function () {},
      getPane: function (t) {
        return this.jE.getPane(t ? this.options[t] || t : this.options.hE);
      },
      setOptions: function (t) {
        T.S.extend(this.options, t);
      }
    })),
    (T.ScriptLoader = function () {}),
    (T.ScriptLoader.prototype = {
      load: function (t, i, n, e) {
        if (
          ((this.objName = "tdt_loadResult"),
          (this.win = window),
          (this.charset = i ? i : "utf-8"),
          (this.src = t ? t : null),
          null != this.src)
        ) {
          this.callback = e ? T.ScriptLoader.mE(n, e) : null;
          var o = this.win;
          (o[this.objName] = null),
            (this.oScript = document.createElement("script")),
            (this.oScript.type = "text/javascript"),
            (this.oScript.async = !0),
            (this.oScript.charset = this.charset),
            (this.oScript.src = this.src),
            (this.running = !0);
          var n = this;
          (this.oScript.onload = this.oScript.onreadystatechange =
            function () {
              (this.readyState && "loaded" != this.readyState && "complete" !== this.readyState) ||
                ((n.oScript.onload = n.oScript.onreadystatechange = null), n.Qe());
            }),
            o.document.body.insertBefore(this.oScript, o.document.body.firstChild);
        }
      },
      Qe: function (t) {
        var i = this.win;
        if (i[this.objName]) {
          var n = i[this.objName];
          (i[this.objName] = null), this.callback && this.callback(n);
        } else this.callback && this.callback("");
        !document.all &&
          this.oScript &&
          this.oScript.parentNode == i.document.body &&
          (this.oScript.removeAttribute("src"), i.document.body.removeChild(this.oScript), delete this.oScript),
          (this.running = !1);
      }
    }),
    (T.ScriptLoader.getObject = function () {
      var t,
        i = i ? i : window;
      i.scriptLoader_obj || (i.scriptLoader_obj = []);
      for (var n = 0; n < i.scriptLoader_obj.length; n++)
        if (0 == i.scriptLoader_obj[n].running) {
          // (t = i.scriptLoader_obj[n]), delete t;
          break;
        }
      return t ? ((t.running = !0), t) : (t = new T.ScriptLoader());
    }),
    (T.ScriptLoader.qe = function (t) {
      return t && t.ownerDocument && t.ownerDocument.parentWindow ? t.ownerDocument.parentWindow : window;
    }),
    (T.ScriptLoader.We = function (t) {
      return (
        t || (t = []),
        t[0] || (t[0] = T.ScriptLoader.qe().event),
        t[0] && !t[0].target && t[0].srcElement && (t[0].target = t[0].srcElement),
        t
      );
    }),
    (T.ScriptLoader.mE = function (t, i) {
      return function () {
        i.apply(t, T.ScriptLoader.We(arguments));
      };
    }),
    (T.bq.we = {
      R: 6378137,
      Ee: 6356752.314245179,
      bounds: T.cQ([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
      nq: function (t) {
        var i = Math.PI / 180,
          n = this.R,
          e = t.lat * i,
          o = this.Ee / n,
          s = Math.sqrt(1 - o * o),
          r = s * Math.sin(e),
          h = Math.tan(Math.PI / 4 - e / 2) / Math.pow((1 - r) / (1 + r), s / 2);
        return (e = -n * Math.log(Math.max(h, 1e-10))), new T.Point(t.lng * i * n, e);
      },
      _q: function (t) {
        for (
          var i,
            n = 180 / Math.PI,
            e = this.R,
            o = this.Ee / e,
            s = Math.sqrt(1 - o * o),
            r = Math.exp(-t.y / e),
            h = Math.PI / 2 - 2 * Math.atan(r),
            a = 0,
            u = 0.1;
          a < 15 && Math.abs(u) > 1e-7;
          a++
        )
          (i = s * Math.sin(h)),
            (i = Math.pow((1 - i) / (1 + i), s / 2)),
            (u = Math.PI / 2 - 2 * Math.atan(r * i) - h),
            (h += u);
        return new T.dq(h * n, (t.x * n) / e);
      }
    }),
    (T.gq.ee = T.extend({}, T.gq.Gq, {
      code: "Re",
      projection: T.bq.we,
      WW: (function () {
        var t = 0.5 / (Math.PI * T.bq.we.R);
        return new T.NQ(t, 0.5, -t, 0.5);
      })()
    })),
    (T.re = T.HE.extend({
      options: {
        hE: "tilePane",
        Te: 256,
        opacity: 1,
        zIndex: 1,
        te: T.oQ.mobile,
        updateWhenZooming: !0,
        Ye: 200,
        Ue: null,
        bounds: null,
        minZoom: 0,
        maxZoom: void 0,
        ue: !1,
        className: "",
        keepBuffer: 2
      },
      initialize: function (t) {
        t = T.setOptions(this, t);
      },
      onAdd: function () {
        this.sW(), (this.Ie = {}), (this.ie = {}), this.ZW(), this.Oe();
      },
      vE: function (t) {
        t.ME(this);
      },
      onRemove: function (t) {
        this.oe(), T._Q.Qq(this.Ow), t._E(this), (this.Ow = null), (this.Pe = null);
      },
      pe: function () {
        return this.jE && (T._Q.Wq(this.Ow), this.Ae(Math.max)), this;
      },
      ae: function () {
        return this.jE && (T._Q.wq(this.Ow), this.Ae(Math.min)), this;
      },
      VE: function () {
        return this.options.Ue;
      },
      getContainer: function () {
        return this.Ow;
      },
      setOpacity: function (t) {
        return (this.options.opacity = t), this.Se(), this;
      },
      setZIndex: function (t) {
        return (this.options.zIndex = t), this.se(), this;
      },
      De: function () {
        return this.de;
      },
      redraw: function () {
        return this.jE && (this.oe(), this.Oe()), this;
      },
      refresh: function () {
        this.redraw();
      },
      CE: function () {
        var t = {
          viewprereset: this.Fe,
          viewreset: this.ZW,
          zoom: this.ZW,
          moveend: this.TE
        };
        return (
          this.options.te || (this.fe || (this.fe = T.S.G(this.TE, this.options.Ye, this)), (t.move = this.fe)),
          this.ZE && (t.Ge = this.ge),
          t
        );
      },
      He: function () {
        return document.createElement("div");
      },
      he: function () {
        var t = this.options.Te;
        return t instanceof T.Point ? t : new T.Point(t, t);
      },
      se: function () {
        this.Ow &&
          void 0 !== this.options.zIndex &&
          null !== this.options.zIndex &&
          (this.Ow.style.zIndex = this.options.zIndex);
      },
      Ae: function (t) {
        for (var i, n = this.getPane().children, e = -t(-(1 / 0), 1 / 0), o = 0, s = n.length; o < s; o++)
          (i = n[o].style.zIndex), n[o] !== this.Ow && i && (e = t(e, +i));
        isFinite(e) && ((this.options.zIndex = e + t(-1, 1)), this.se());
      },
      Se: function () {
        if (this.jE && !T.oQ.ielt9) {
          T._Q.setOpacity(this.Ow, this.options.opacity);
          var t = +new Date(),
            i = !1,
            n = !1;
          for (var e in this.ie) {
            var o = this.ie[e];
            if (o.Je && o.loaded) {
              var s = Math.min(1, (t - o.loaded) / 200);
              T._Q.setOpacity(o.el, s), s < 1 ? (i = !0) : (o.active && (n = !0), (o.active = !0));
            }
          }
          n && !this.je && this.Ke(), i && (T.S.V(this.ke), (this.ke = T.S.C(this.Se, this)));
        }
      },
      sW: function () {
        this.Ow ||
          ((this.Ow = T._Q.s("div", "tdt-layer " + (this.options.className || ""))),
          this.se(),
          this.options.opacity < 1 && this.Se(),
          this.getPane().appendChild(this.Ow));
      },
      Le: function () {
        var t = this.Pe,
          i = this.options.maxZoom;
        if (void 0 !== t) {
          for (var n in this.Ie)
            this.Ie[n].el.children.length || n === t
              ? (this.Ie[n].el.style.zIndex = i - Math.abs(t - n))
              : (T._Q.Qq(this.Ie[n].el), this.le(n), delete this.Ie[n]);
          var e = this.Ie[t],
            o = this.jE;
          return (
            e ||
              ((e = this.Ie[t] = {}),
              (e.el = T._Q.s("div", "tdt-tile-container tdt-zoom-animated", this.Ow)),
              (e.el.style.zIndex = i),
              (e.origin = o.nq(o._q(o.Jw()), t).hQ()),
              (e.zoom = t),
              this.Ze(e, o.getCenter(), o.getZoom()),
              T.S.H(e.el.offsetWidth)),
            (this.Ce = e),
            e
          );
        }
      },
      Ke: function () {
        if (this.jE) {
          var t,
            i,
            n = this.jE.getZoom();
          if (n > this.options.maxZoom || n < this.options.minZoom) return void this.oe();
          for (t in this.ie) (i = this.ie[t]), (i.retain = i.Je);
          for (t in this.ie)
            if (((i = this.ie[t]), i.Je && !i.active)) {
              var e = i.coords;
              this.Ve(e.x, e.y, e.z, e.z - 5) || this.ce(e.x, e.y, e.z, e.z + 2);
            }
          for (t in this.ie) this.ie[t].retain || this.Be(t);
        }
      },
      le: function (t) {
        for (var i in this.ie) this.ie[i].coords.z === t && this.Be(i);
      },
      oe: function () {
        for (var t in this.ie) this.Be(t);
      },
      Fe: function () {
        for (var t in this.Ie) T._Q.Qq(this.Ie[t].el), delete this.Ie[t];
        this.oe(), (this.Pe = null);
      },
      Ve: function (t, i, n, e) {
        var o = Math.floor(t / 2),
          s = Math.floor(i / 2),
          r = n - 1,
          h = new T.Point(+o, +s);
        h.z = +r;
        var a = this.ve(h),
          u = this.ie[a];
        return u && u.active ? ((u.retain = !0), !0) : (u && u.loaded && (u.retain = !0), r > e && this.Ve(o, s, r, e));
      },
      ce: function (t, i, n, e) {
        for (var o = 2 * t; o < 2 * t + 2; o++)
          for (var s = 2 * i; s < 2 * i + 2; s++) {
            var r = new T.Point(o, s);
            r.z = n + 1;
            var h = this.ve(r),
              a = this.ie[h];
            a && a.active ? (a.retain = !0) : (a && a.loaded && (a.retain = !0), n + 1 < e && this.ce(o, s, n + 1, e));
          }
      },
      ZW: function (t) {
        var i = t && (t.pinch || t.Ne);
        this.be(this.jE.getCenter(), this.jE.getZoom(), i, i);
      },
      ge: function (t) {
        this.be(t.center, t.zoom, !0, t.noUpdate);
      },
      be: function (t, i, n, e) {
        var o = Math.round(i);
        ((void 0 !== this.options.maxZoom && o > this.options.maxZoom) ||
          (void 0 !== this.options.minZoom && o < this.options.minZoom)) &&
          (o = void 0);
        var s = this.options.updateWhenZooming && o !== this.Pe;
        (e && !s) ||
          ((this.Pe = o),
          this.Me && this.Me(),
          this.Le(),
          this.ne(),
          void 0 !== o && this.Oe(t),
          n || this.Ke(),
          (this.je = !!n)),
          this._e(t, i);
      },
      _e: function (t, i) {
        for (var n in this.Ie) this.Ze(this.Ie[n], t, i);
      },
      Ze: function (t, i, n) {
        var e = this.jE.cW(n, t.zoom),
          o = t.origin.fQ(e).sQ(this.jE.WE(i, n)).hQ();
        T.oQ.any3d ? T._Q.Uq(t.el, o, e) : T._Q.setPosition(t.el, o);
      },
      ne: function () {
        var t = this.jE,
          i = t.options.IW,
          n = (this.me = this.he()),
          e = this.Pe,
          o = this.jE.Kw(this.Pe);
        o && (this.QR = this.qR(o)),
          (this.WR = i.rW &&
            !this.options.ue && [Math.floor(t.nq([0, i.rW[0]], e).x / n.x), Math.ceil(t.nq([0, i.rW[1]], e).x / n.y)]),
          (this.wR = i.wrapLat &&
            !this.options.ue && [
              Math.floor(t.nq([i.wrapLat[0], 0], e).y / n.x),
              Math.ceil(t.nq([i.wrapLat[1], 0], e).y / n.y)
            ]);
      },
      TE: function () {
        this.jE && !this.jE.ER && this.Oe();
      },
      eR: function (t) {
        var i = this.jE,
          n = i.ER ? Math.max(i.RR, i.getZoom()) : i.getZoom(),
          e = i.cW(n, this.Pe),
          o = i.nq(t, this.Pe).jQ(),
          s = i.getSize().dQ(2 * e);
        return new T.ZQ(o.sQ(s), o.AQ(s));
      },
      Oe: function (t) {
        var i = this.jE;
        if (i) {
          var n = i.getZoom();
          if ((void 0 === t && (t = i.getCenter()), void 0 !== this.Pe)) {
            var e = this.eR(t),
              o = this.qR(e),
              s = o.getCenter(),
              r = [],
              h = this.options.keepBuffer,
              a = new T.ZQ(o.CQ().sQ([h, -h]), o.VQ().AQ([h, -h]));
            for (var u in this.ie) {
              var c = this.ie[u].coords;
              (c.z === this.Pe && a.contains(T.SQ(c.x, c.y))) || (this.ie[u].Je = !1);
            }
            if (Math.abs(n - this.Pe) > 1) return void this.be(t, n);
            for (var l = o.min.y; l <= o.max.y; l++)
              for (var f = o.min.x; f <= o.max.x; f++) {
                var d = new T.Point(f, l);
                if (((d.z = this.Pe), this.rR(d))) {
                  var p = this.ie[this.ve(d)];
                  p ? (p.Je = !0) : r.push(d);
                }
              }
            if (
              (r.sort(function (t, i) {
                return t.distanceTo(s) - i.distanceTo(s);
              }),
              0 !== r.length)
            ) {
              this.de || ((this.de = !0), this.wQ("loading"));
              var m = document.createDocumentFragment();
              for (f = 0; f < r.length; f++) this.TR(r[f], m);
              this.Ce.el.appendChild(m);
            }
          }
        }
      },
      rR: function (t) {
        var i = this.jE.options.IW;
        if (!i.RW) {
          var n = this.QR;
          if ((!i.rW && (t.x < n.min.x || t.x > n.max.x)) || (!i.wrapLat && (t.y < n.min.y || t.y > n.max.y)))
            return !1;
        }
        if (!this.options.bounds) return !0;
        var e = this.tR(t);
        return T.jq(this.options.bounds).BQ(e);
      },
      YR: function (t) {
        return this.tR(this.UR(t));
      },
      tR: function (t) {
        var i = this.jE,
          n = this.he(),
          e = t.gQ(n),
          o = e.AQ(n),
          s = i.hq(i._q(e, t.z)),
          r = i.hq(i._q(o, t.z));
        return new T.Kq(s, r);
      },
      ve: function (t) {
        return t.x + ":" + t.y + ":" + t.z;
      },
      UR: function (t) {
        var i = t.split(":"),
          n = new T.Point(+i[0], +i[1]);
        return (n.z = +i[2]), n;
      },
      Be: function (t) {
        var i = this.ie[t];
        i &&
          (T._Q.Qq(i.el),
          delete this.ie[t],
          this.wQ("tileunload", {
            tile: i.el,
            coords: this.UR(t)
          }));
      },
      uR: function (t) {
        T._Q.Rq(t, "tdt-tile");
        var i = this.he();
        (t.style.width = i.x + "px"),
          (t.style.height = i.y + "px"),
          (t.onselectstart = T.S.H),
          (t.onmousemove = T.S.H),
          T.oQ.ielt9 && this.options.opacity < 1 && T._Q.setOpacity(t, this.options.opacity),
          T.oQ.android && !T.oQ.android23 && (t.style.WebkitBackfaceVisibility = "hidden");
      },
      TR: function (t, i) {
        var n = this.IR(t),
          e = this.ve(t),
          o = this.He(this.iR(t), T.D(this.OR, this, t));
        this.uR(o),
          this.He.length < 2 && T.S.C(T.D(this.OR, this, t, null, o)),
          T._Q.setPosition(o, n),
          (this.ie[e] = {
            el: o,
            coords: t,
            Je: !0
          }),
          i.appendChild(o),
          this.wQ("tileloadstart", {
            tile: o,
            coords: t
          });
      },
      OR: function (t, i, n) {
        if (this.jE) {
          i &&
            this.wQ("tileerror", {
              error: i,
              tile: n,
              coords: t
            });
          var e = this.ve(t);
          (n = this.ie[e]),
            n &&
              ((n.loaded = +new Date()),
              this.jE.Nw
                ? (T._Q.setOpacity(n.el, 0), T.S.V(this.ke), (this.ke = T.S.C(this.Se, this)))
                : ((n.active = !0), this.Ke()),
              T._Q.Rq(n.el, "tdt-tile-loaded"),
              this.wQ("tileload", {
                tile: n.el,
                coords: t
              }),
              this.oR() &&
                ((this.de = !1),
                this.wQ("load"),
                T.oQ.ielt9 || !this.jE.Nw ? T.S.C(this.Ke, this) : setTimeout(T.D(this.Ke, this), 250)));
        }
      },
      IR: function (t) {
        return t.gQ(this.he()).sQ(this.Ce.origin);
      },
      iR: function (t) {
        var i = new T.Point(this.WR ? T.S.g(t.x, this.WR) : t.x, this.wR ? T.S.g(t.y, this.wR) : t.y);
        return (i.z = t.z), i;
      },
      qR: function (t) {
        var i = this.he();
        return new T.ZQ(t.min.HQ(i).jQ(), t.max.HQ(i).kQ().sQ([1, 1]));
      },
      oR: function () {
        for (var t in this.ie) if (!this.ie[t].loaded) return !1;
        return !0;
      }
    })),
    (T.PR = function (t) {
      return new T.re(t);
    }),
    (T.TileLayer = T.re.extend({
      options: {
        minZoom: 0,
        maxZoom: 18,
        pR: "abc",
        errorTileUrl: "",
        AR: 0,
        aR: null,
        SR: !1,
        sR: !1,
        DR: !1,
        dR: !1
      },
      initialize: function (t, i) {
        (this.FR = ""),
          t && (this.FR = t),
          (i = T.setOptions(this, i)),
          i.DR &&
            T.oQ.retina &&
            i.maxZoom > 0 &&
            ((i.Te = Math.floor(i.Te / 2)),
            i.sR ? (i.AR--, i.minZoom++) : (i.AR++, i.maxZoom--),
            (i.minZoom = Math.max(0, i.minZoom))),
          "string" == typeof i.pR && (i.pR = i.pR.split("")),
          T.oQ.android || this.on("tileunload", this.fR);
      },
      setUrl: function (t, i) {
        return (this.FR = t), i || this.redraw(), this;
      },
      He: function (t, i) {
        var n = document.createElement("img");
        return (
          T.oq.on(n, "load", T.D(this.GR, this, i, n)),
          T.oq.on(n, "error", T.D(this.gR, this, i, n)),
          this.options.dR && (n.dR = ""),
          (n.Fq = ""),
          (n.src = this.getTileUrl(t)),
          n
        );
      },
      getTileUrl: function (t) {
        var i = {
          r: T.oQ.retina ? "@2x" : "",
          s: this.HR(t),
          x: t.x,
          y: t.y,
          z: this.hR()
        };
        if (this.jE && !this.jE.options.IW.RW) {
          var n = this.QR.max.y - t.y;
          this.options.SR && (i.y = n), (i["-y"] = n);
        }
        return (this._url_temp = this.FR), T.S.k(this._url_temp, T.extend(i, this.options));
      },
      GR: function (t, i) {
        T.oQ.ielt9 ? setTimeout(T.D(t, this, null, i), 0) : t(null, i);
      },
      gR: function (t, i, n) {
        var e = this.options.errorTileUrl;
        e && (i.src = e), t(n, i);
      },
      he: function () {
        var t = this.jE,
          i = T.re.prototype.he.call(this),
          n = this.Pe + this.options.AR,
          e = this.options.aR;
        return null !== e && n > e ? i.dQ(t.cW(e, n)).hQ() : i;
      },
      fR: function (t) {
        t.tile.onload = null;
      },
      hR: function () {
        var t = this.options,
          i = this.Pe;
        return t.sR && (i = t.maxZoom - i), (i += t.AR), null !== t.aR ? Math.min(i, t.aR) : i;
      },
      HR: function (t) {
        var i = Math.abs(t.x + t.y) % this.options.pR.length;
        return this.options.pR[i];
      },
      Me: function () {
        var t, i;
        for (t in this.ie)
          this.ie[t].coords.z !== this.Pe &&
            ((i = this.ie[t].el), (i.onload = T.S.H), (i.onerror = T.S.H), i.complete || ((i.src = T.S.Z), T._Q.Qq(i)));
      }
    })),
    (T.JR = function (t, i) {
      return new T.TileLayer(t, i);
    }),
    (T.TileLayer.WMS = T.TileLayer.extend({
      defaultWmsParams: {
        service: "WMS",
        request: "GetMap",
        version: "1.1.1",
        layers: "",
        styles: "",
        format: "image/jpeg",
        transparent: !1
      },
      options: {
        IW: null,
        srs: null,
        jR: !1
      },
      initialize: function (t, i) {
        this.FR = t;
        var n = T.extend({}, this.defaultWmsParams);
        for (var e in i) e in this.options || (n[e] = i[e]);
        (i = T.setOptions(this, i)),
          (this.wmsSrs = "EPSG:900913"),
          i.srs
            ? "EPSG:4326" == i.srs
              ? ((i.IW = T.gq.uW), (this.wmsSrs = "EPSG:4326"))
              : ((i.IW = T.gq.UW), (i.srs = "EPSG:900913"), (this.wmsSrs = "EPSG:900913"))
            : (i.srs = this.wmsSrs),
          (n.width = n.height = i.Te * (i.DR && T.oQ.retina ? 2 : 1)),
          (this.KR = n);
      },
      onAdd: function (t) {
        (this.kR = this.options.IW || t.options.IW), (this.LR = parseFloat(this.KR.version));
        var i = this.LR >= 1.3 ? "IW" : "srs";
        (this.KR[i] = this.kR.code), T.TileLayer.prototype.onAdd.call(this, t);
      },
      getTileUrl: function (t) {
        var i = this.tR(t),
          n = this.kR.nq(i.Zq()),
          e = this.kR.nq(i.cq()),
          o = (this.LR >= 1.3 && this.kR === T.gq.uW ? [e.y, n.x, n.y, e.x] : [n.x, e.y, e.x, n.y]).join(","),
          s = T.TileLayer.prototype.getTileUrl.call(this, t);
        return s + T.S.K(this.KR, s, this.options.jR) + (this.options.jR ? "&BBOX=" : "&bbox=") + o;
      },
      setParams: function (t, i) {
        return T.extend(this.KR, t), i || this.redraw(), this;
      }
    })),
    (T.JR.wms = function (t, i) {
      return new T.TileLayer.WMS(t, i);
    }),
    (T.TileLayer.TDT = T.TileLayer.extend({})),
    (T.JR.tdt = function (t, i) {
      return new T.TileLayer.tdt(t, i);
    }),
    (T.lR = {
      ZR: "202210251524",
      CR: function (t, i, n) {
        if (window.localStorage) {
          var e,
            o = localStorage.getItem(t);
          null == o || 0 == o.length || this.ZR != localStorage.getItem("TDT_version")
            ? (document.write('<script type="text/javascript" src="' + i + '"></script>'),
              window.ActiveXObject
                ? (e = new ActiveXObject("Microsoft.XMLHTTP"))
                : window.XMLHttpRequest && (e = new XMLHttpRequest()),
              null != e &&
                (e.open("GET", i),
                e.send(null),
                (e.onreadystatechange = function () {
                  4 == e.readyState &&
                    200 == e.status &&
                    ((o = e.responseText),
                    localStorage.setItem(t, o),
                    localStorage.setItem("TDT_version", T.lR.ZR),
                    null != n && n());
                })))
            : (T.lR.VR(o), null != n && n());
        } else T.lR.cR(i);
      },
      BR: function (t, i) {
        if (T.oQ.ie8) return T.lR.vR(i), !1;
        if (window.localStorage) {
          var n,
            e = localStorage.getItem(t);
          null == e || 0 == e.length || this.ZR != localStorage.getItem("TDT_version")
            ? (window.ActiveXObject
                ? (n = new ActiveXObject("Microsoft.XMLHTTP"))
                : window.XMLHttpRequest && (n = new XMLHttpRequest()),
              null != n &&
                (n.open("GET", i),
                n.send(null),
                (n.onreadystatechange = function () {
                  4 == n.readyState &&
                    200 == n.status &&
                    ((e = n.responseText),
                    localStorage.setItem(t, e),
                    localStorage.setItem("TDT_version", T.lR.ZR),
                    (e = null == e ? "" : e),
                    T.lR.NR(e));
                })))
            : T.lR.NR(e);
        } else T.lR.vR(i);
      },
      VR: function (t) {
        var i = document.getElementsByTagName("HEAD").item(0),
          n = document.createElement("script");
        (n.type = "text/javascript"), (n.text = t), i.appendChild(n);
      },
      NR: function (t) {
        var i = document.getElementsByTagName("HEAD").item(0),
          n = document.createElement("style");
        (n.type = "text/css"), n.styleSheet ? (n.styleSheet.cssText = t) : (n.innerHTML = t), i.appendChild(n);
      },
      cR: function (t) {
        var i = document.getElementsByTagName("HEAD").item(0),
          n = document.createElement("script");
        (n.type = "text/javascript"), (n.src = t), i.appendChild(n);
      },
      vR: function (t) {
        var i = document.getElementsByTagName("HEAD").item(0),
          n = document.createElement("link");
        (n.type = "text/css"), (n.rel = "stylesheet"), (n.href = t), i.appendChild(n);
      },
      bR: function (t, i) {
        var n = document.createElement("script");
        i &&
          (n.onload = n.onreadystatechange =
            function () {
              (this.readyState && "loaded" != this.readyState && "complete" !== this.readyState) ||
                ((n.onload = n.onreadystatechange = null), i());
            });
        var e = document.getElementsByTagName("head")[0];
        (n.type = "text/javascript"), (n.src = t), e.appendChild(n);
      },
      onLoadJsCallBack: function (t) {
        var i = T.ScriptLoader.getObject();
        i.load(t, "UTF-8", this, function () {
          // (i = null), delete i;
        });
      },
      MR: function (t, i) {
        if (T.oQ.ie8) return T.lR.vR(i), !1;
        if (window.localStorage) {
          var n = localStorage.getItem(t);
          null == n || 0 == n.length || this.ZR != localStorage.getItem("TDT_version")
            ? (T.lR.vR(i),
              i.indexOf("tianditu4.0") != -1 && (i = T.w.E + "/api?v=4.0&name=tianditu4.0"),
              T.lR.bR(i, function () {
                T.ObjectData && (n = T.ObjectData),
                  localStorage.setItem(t, n),
                  localStorage.setItem("TDT_version", T.lR.ZR),
                  (T.ObjectData = null);
              }))
            : T.lR.NR(n);
        }
      },
      nR: function (t, i) {
        if (T.oQ.ie8) return document.write('<script type="text/javascript" src="' + i + '"></script>'), !1;
        if (window.localStorage) {
          var n = localStorage.getItem(t);
          null == n || 0 == n.length || this.ZR != localStorage.getItem("TDT_version")
            ? (T.lR.cR(i),
              i.indexOf("components") != -1 && (i = T.w.E + "/api?v=4.0&name=components&tk=" + T.w.TMAP_AUTHKEY),
              i.indexOf("service") != -1 && (i = T.w.E + "/api?v=4.0&name=service&tk=" + T.w.TMAP_AUTHKEY),
              i.indexOf("military") != -1 && (i = T.w.E + "/api?v=4.0&name=military&tk=" + T.w.TMAP_AUTHKEY),
              T.lR.bR(i, function () {
                T.ObjectData && (n = T.ObjectData),
                  localStorage.setItem(t, n),
                  localStorage.setItem("TDT_version", T.lR.ZR),
                  (T.ObjectData = null);
              }))
            : T.lR.VR(n);
        }
      }
    }),
    (T.qv = function (t) {
      if (t && 0 !== t.code) {
        T = {};
        var i =
          "天地图密钥错误，可能是因为您提供的Key不是有效的天地图开放平台Key，或此Key未对本应用授予JavaScriptAPI权限。您可以访问如下网址了解如何获得有效的Key：http://console.tianditu.com/api/key";
        alert(i);
      }
    }),
    (T._R = T.HE.extend({
      options: {
        opacity: 1,
        Fq: "",
        mR: !1,
        Ue: null,
        dR: !1
      },
      initialize: function (t, i, n) {
        (this.FR = t), (this.Qr = T.jq(i)), T.setOptions(this, n);
      },
      onAdd: function () {
        this.qr || (this.Wr(), this.options.opacity < 1 && this.Se()),
          this.options.mR && (T._Q.Rq(this.qr, "tdt-interactive"), this.kE(this.qr)),
          this.getPane().appendChild(this.qr),
          this.wr();
      },
      onRemove: function () {
        T._Q.Qq(this.qr), this.options.mR && this.LE(this.qr);
      },
      setOpacity: function (t) {
        return (this.options.opacity = t), this.qr && this.Se(), this;
      },
      setStyle: function (t) {
        return t.opacity && this.setOpacity(t.opacity), this;
      },
      pe: function () {
        return this.jE && T._Q.Wq(this.qr), this;
      },
      ae: function () {
        return this.jE && T._Q.wq(this.qr), this;
      },
      setUrl: function (t) {
        return (this.FR = t), this.qr && (this.qr.src = t), this;
      },
      setBounds: function (t) {
        return (this.Qr = t), this.jE && this.wr(), this;
      },
      VE: function () {
        return this.options.Ue;
      },
      CE: function () {
        var t = {
          zoom: this.wr,
          viewreset: this.wr
        };
        return this.ZE && (t.Ge = this.ge), t;
      },
      getBounds: function () {
        return this.Qr;
      },
      getElement: function () {
        return this.qr;
      },
      Wr: function () {
        var t = (this.qr = T._Q.s("img", "tdt-image-layer " + (this.ZE ? "tdt-zoom-animated" : "")));
        (t.onselectstart = T.S.H),
          (t.onmousemove = T.S.H),
          (t.onload = T.D(this.wQ, this, "load")),
          this.options.dR && (t.dR = ""),
          (t.src = this.FR),
          (t.Fq = this.options.Fq);
      },
      ge: function (t) {
        var i = this.jE.cW(t.zoom),
          n = this.jE.DE(this.Qr.Zq(), t.zoom, t.center);
        T._Q.Uq(this.qr, n, i);
      },
      wr: function () {
        var t = this.qr,
          i = new T.ZQ(this.jE.kw(this.Qr.Zq()), this.jE.kw(this.Qr.cq())),
          n = i.getSize();
        T._Q.setPosition(t, i.min), (t.style.width = n.x + "px"), (t.style.height = n.y + "px");
      },
      Se: function () {
        T._Q.setOpacity(this.qr, this.options.opacity);
      }
    })),
    (T.Er = function (t, i, n) {
      return new T._R(t, i, n);
    }),
    (T.Icon = T.c.extend({
      initialize: function (t) {
        T.setOptions(this, t);
      },
      setIconUrl: function (t) {
        (this.options.iconUrl = t), this.img && (this.img.src = t);
      },
      getIconUrl: function (t) {
        if (this.img) return this.img.src;
      },
      setIconSize: function (t) {
        (this.options.iconSize = t),
          this.img && ((this.img.style.width = t.x + "px"), (this.img.style.height = t.y + "px"));
      },
      getIconSize: function () {
        return this.options.iconSize;
      },
      setIconAnchor: function (t) {
        (this.options.iconAnchor = t), this.er(this.img, "icon");
      },
      getIconAnchor: function (t) {
        return this.options.iconAnchor;
      },
      Rr: function (t) {
        return this.rr("icon", t);
      },
      Tr: function (t) {
        return this.rr("shadow", t);
      },
      rr: function (t, i) {
        var n = this.tr(t);
        return n
          ? ((this.img = this.Yr(n, i && "IMG" === i.tagName ? i : null)), this.er(this.img, t), this.img)
          : null;
      },
      er: function (t, i) {
        var n = this.options,
          e = n[i + "Size"];
        T.S.l(e) || e instanceof T.Point || (e = [e, e]);
        var o = T.SQ(e),
          s = T.SQ(("shadow" === i && n.Ur) || n.iconAnchor || (o && o.dQ(2, !0)));
        (t.className = "tdt-marker-" + i + " " + (n.className || "")),
          s && ((t.style.marginLeft = -s.x + "px"), (t.style.marginTop = -s.y + "px")),
          o && ((t.style.width = o.x + "px"), (t.style.height = o.y + "px"));
      },
      Yr: function (t, i) {
        return (i = i || document.createElement("img")), (i.src = t), i;
      },
      tr: function (t) {
        return (T.oQ.retina && this.options[t + "RetinaUrl"]) || this.options[t + "Url"];
      }
    })),
    (T.ur = function (t) {
      return new T.Icon(t);
    }),
    (T.Icon.Default = T.Icon.extend({
      options: {
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -41],
        shadowSize: [41, 41]
      },
      tr: function (t) {
        var i = t + "Url";
        if (this.options[i]) return this.options[i];
        var n = T.Icon.Default.imagePath;
        return n + "/marker-" + t + (T.oQ.retina && "icon" === t ? "-2x" : "") + ".png";
      }
    })),
    (T.Icon.Default.imagePath = (function () {
      var t,
        i,
        n,
        e,
        o = document.getElementsByTagName("script"),
        s = /[\/^]tdt[\-\._]?([\w\-\._]*)\.js\??/;
      for (t = 0, i = o.length; t < i; t++)
        if (((n = o[t].src || ""), n.match(s))) return (e = n.split(s)[0]), (e ? e + "/" : "") + "image";
    })()),
    (T.Icon.Default.imagePath = T.w.e),
    (T.Marker = T.Overlay.extend({
      options: {
        icon: new T.Icon.Default(),
        mR: !0,
        draggable: !1,
        Ir: !0,
        title: "",
        zIndexOffset: 0,
        opacity: 1,
        ir: !0,
        Or: 250,
        type: 2,
        hE: "markerPane",
        pE: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"]
      },
      initialize: function (t, i) {
        T.setOptions(this, i), (this.or = T.fq(t)), (this.Pr = null);
      },
      onAdd: function (t) {
        (this.ZE = this.ZE && t.options.PW), this.ZE && t.on("Ge", this.ge, this), this.pr(), this.update();
      },
      onRemove: function (t) {
        this.AE && this.AE.aE() && ((this.options.draggable = !0), this.AE.Ar()),
          this.ZE && t.off("Ge", this.ge, this),
          this.ar(),
          this.Sr(),
          (this.Pr = null);
      },
      CE: function () {
        return {
          zoom: this.update,
          viewreset: this.update
        };
      },
      getType: function () {
        return this.options.type;
      },
      getMap: function () {
        return this.jE;
      },
      getLngLat: function () {
        return this.PE();
      },
      PE: function () {
        return this.or;
      },
      setLngLat: function (t) {
        this.sr(t);
      },
      sr: function (t) {
        var i = this.or;
        return (
          (this.or = T.fq(t)),
          this.update(),
          this.wQ("move", {
            oldLngLat: i,
            lnglat: this.or
          })
        );
      },
      setZIndexOffset: function (t) {
        return (this.options.zIndexOffset = t), this.update();
      },
      setIcon: function (t) {
        return (
          (this.options.icon = t),
          this.jE && (this.pr(), this.update()),
          this.Dr && this.dr(this.Dr, this.Dr.options),
          this
        );
      },
      getIcon: function () {
        return this.options.icon;
      },
      enableDragging: function () {
        this.AE.enable();
      },
      disableDragging: function () {
        this.AE.disable();
      },
      getElement: function () {
        return this.Fr;
      },
      update: function () {
        if (this.Fr) {
          var t = this.jE.kw(this.or).hQ();
          this.fr(t);
        }
        return this;
      },
      pr: function () {
        var t = this.options,
          i = "tdt-zoom-" + (this.ZE ? "animated" : "hide"),
          n = t.icon.Rr(this.Fr),
          e = !1;
        n !== this.Fr && (this.Fr && this.ar(), (e = !0), t.title && (n.title = t.title), t.Fq && (n.Fq = t.Fq)),
          T._Q.Rq(n, i),
          t.Ir && (n.tabIndex = "0"),
          (this.Fr = n),
          t.ir &&
            this.on({
              mouseover: this.Gr,
              mouseout: this.gr
            });
        var o = t.icon.Tr(this.Hr),
          s = !1;
        o !== this.Hr && (this.Sr(), (s = !0)),
          o && T._Q.Rq(o, i),
          (this.Hr = o),
          t.opacity < 1 && this.Se(),
          e && this.getPane().appendChild(this.Fr),
          this.hr(),
          o && s && this.getPane("_w").appendChild(this.Hr);
      },
      ar: function () {
        this.options.ir &&
          this.off({
            mouseover: this.Gr,
            mouseout: this.gr
          }),
          T._Q.Qq(this.Fr),
          this.LE(this.Fr),
          (this.Fr = null);
      },
      Sr: function () {
        this.Hr && T._Q.Qq(this.Hr), (this.Hr = null);
      },
      fr: function (t) {
        T._Q.setPosition(this.Fr, t),
          this.Hr && T._Q.setPosition(this.Hr, t),
          (this.Jr = t.y + this.options.zIndexOffset),
          this.gr();
      },
      se: function (t) {
        this.Fr.style.zIndex = this.Jr + t;
      },
      ge: function (t) {
        var i = this.jE.DE(this.or, t.zoom, t.center).hQ();
        this.fr(i);
      },
      hr: function () {
        if (this.options.mR && (T._Q.Rq(this.Fr, "tdt-interactive"), this.kE(this.Fr), T.Kr.jr)) {
          var t = this.options.draggable;
          this.AE && ((t = this.AE.aE()), this.AE.disable()), (this.AE = new T.Kr.jr(this)), t && this.AE.enable();
        }
      },
      setOpacity: function (t) {
        return (this.options.opacity = t), this.jE && this.Se(), this;
      },
      Se: function () {
        var t = this.options.opacity;
        T._Q.setOpacity(this.Fr, t), this.Hr && T._Q.setOpacity(this.Hr, t);
      },
      Gr: function () {
        this.se(this.options.Or);
      },
      gr: function () {
        this.se(0);
      }
    })),
    (T.kr = function (t, i) {
      return new T.Marker(t, i);
    }),
    (T.DivIcon = T.Icon.extend({
      options: {
        iconSize: [12, 12],
        html: !1,
        bgPos: null,
        className: "tdt-div-icon"
      },
      Rr: function (t) {
        var i = t && "DIV" === t.tagName ? t : document.createElement("div"),
          n = this.options;
        if (((i.innerHTML = n.html !== !1 ? n.html : ""), n.bgPos)) {
          var e = T.SQ(n.bgPos);
          i.style.backgroundPosition = -e.x + "px " + -e.y + "px";
        }
        return this.er(i, "icon"), i;
      },
      Tr: function () {
        return null;
      }
    })),
    (T.Lr = function (t) {
      return new T.DivIcon(t);
    }),
    T.Map.n({
      lr: !1
    }),
    (T.Zr = T.HE.extend({
      options: {
        hE: "infoWindowPane",
        minWidth: 50,
        Cr: 300,
        maxHeight: null,
        offset: [0, 7],
        autoPan: !1,
        autoPanPadding: [5, 5],
        Vr: null,
        cr: null,
        closeButton: !0,
        Br: !0,
        vr: !1,
        Nr: !0
      },
      initialize: function (t, i) {
        T.setOptions(this, t), (this.br = i);
      },
      onAdd: function (t) {
        (this.ZE = this.ZE && this.options.Nr),
          this.Ow || this.DW(),
          t.Nw && T._Q.setOpacity(this.Ow, 0),
          clearTimeout(this.Mr),
          this.getPane().appendChild(this.Ow),
          this.update(),
          t.Nw && T._Q.setOpacity(this.Ow, 1),
          t.wQ("nr", {
            _r: this
          }),
          this.wQ("open", {
            lnglat: this.or
          }),
          this.br &&
            (this.br.wQ(
              "nr",
              {
                _r: this
              },
              !0
            ),
            this.br.on("UE", T.oq.stopPropagation));
      },
      mr: function (t) {
        return t.QT(this), this;
      },
      onRemove: function (t) {
        t.Nw
          ? (T._Q.setOpacity(this.Ow, 0), (this.Mr = setTimeout(T.D(T._Q.Qq, T._Q, this.Ow), 200)))
          : T._Q.Qq(this.Ow),
          t.wQ("qT", {
            _r: this
          }),
          this.wQ("close", {
            lnglat: this.or,
            infowindow: this
          }),
          this.br &&
            (this.br.wQ(
              "qT",
              {
                _r: this
              },
              !0
            ),
            this.br.off("UE", T.oq.stopPropagation));
      },
      PE: function () {
        return this.or;
      },
      sr: function (t) {
        return (this.or = T.fq(t)), this.jE && (this.WT(), this.wT()), this;
      },
      getContent: function () {
        return this.ET;
      },
      setContent: function (t) {
        return (this.ET = t), this.update(), this;
      },
      getElement: function () {
        return this.Ow;
      },
      update: function () {
        this.jE &&
          ((this.Ow.style.visibility = "hidden"),
          this.eT(),
          this.RT(),
          this.WT(),
          (this.Ow.style.visibility = ""),
          this.wT());
      },
      CE: function () {
        var t = {
          zoom: this.WT,
          viewreset: this.WT
        };
        return (
          this.ZE && (t.Ge = this.ge),
          ("closeOnClick" in this.options ? this.options.closeOnClick : this.jE.options.lr) && (t.UE = this.rT),
          this.options.vr && (t.moveend = this.wT),
          t
        );
      },
      isOpen: function () {
        return !!this.jE && this.jE.hasLayer(this);
      },
      pe: function () {
        return this.jE && T._Q.Wq(this.Ow), this;
      },
      ae: function () {
        return this.jE && T._Q.wq(this.Ow), this;
      },
      rT: function () {
        this.jE && (this.wQ("clickclose", {}), this.jE.TT(this));
      },
      DW: function () {
        var t = "tdt-infowindow",
          i = (this.Ow = T._Q.s(
            "div",
            t + " " + (this.options.className || "") + " tdt-zoom-" + (this.ZE ? "animated" : "hide")
          ));
        if (this.options.closeButton) {
          var n = (this.tT = T._Q.s("a", t + "-close-button", i));
          (n.href = "#close"), (n.innerHTML = "&#215;"), T.oq.on(n, "click", this.YT, this);
        }
        var e = (this.UT = T._Q.s("div", t + "-content-wrapper", i));
        (this.uT = T._Q.s("div", t + "-content", e)),
          T.oq.iT(e).IT(this.uT).on(e, "contextmenu", T.oq.stopPropagation),
          (this.OT = T._Q.s("div", t + "-tip-container", i)),
          (this.oT = T._Q.s("div", t + "-tip", this.OT));
      },
      eT: function () {
        if (this.ET) {
          var t = this.uT,
            i = "function" == typeof this.ET ? this.ET(this.br || this) : this.ET;
          if ("string" == typeof i) t.innerHTML = i;
          else {
            for (; t.hasChildNodes(); ) t.removeChild(t.firstChild);
            t.appendChild(i);
          }
          this.wQ("contentupdate");
        }
      },
      RT: function () {
        var t = this.uT,
          i = t.style;
        (i.width = ""), (i.whiteSpace = "nowrap");
        var n = t.offsetWidth;
        (n = Math.min(n, this.options.Cr)),
          (n = Math.max(n, this.options.minWidth)),
          (i.width = n + 1 + "px"),
          (i.whiteSpace = ""),
          (i.height = "");
        var e = t.offsetHeight,
          o = this.options.maxHeight,
          s = "tdt-infowindow-scrolled";
        o && e > o ? ((i.height = o + "px"), T._Q.Rq(t, s)) : T._Q.Tq(t, s), (this.PT = this.Ow.offsetWidth);
      },
      WT: function () {
        if (this.jE) {
          var t = this.jE.kw(this.or),
            i = T.SQ(this.options.offset),
            n = this._getAnchor();
          this.ZE ? T._Q.setPosition(this.Ow, t.AQ(n)) : (i = i.AQ(t).AQ(n));
          var e = (this.pT = -i.y),
            o = (this.AT = -Math.round(this.PT / 2) + i.x);
          (this.Ow.style.bottom = e + "px"), (this.Ow.style.left = o + "px");
        }
      },
      ge: function (t) {
        var i = this.jE.DE(this.or, t.zoom, t.center),
          n = this._getAnchor();
        T._Q.setPosition(this.Ow, i.AQ(n));
      },
      wT: function () {
        if (!(!this.options.autoPan || (this.jE.EE && this.jE.EE.aT))) {
          var t = this.jE,
            i = this.Ow.offsetHeight,
            n = this.PT,
            e = new T.Point(this.AT, -i - this.pT);
          this.ZE && e.aQ(T._Q.getPosition(this.Ow));
          var o = t.Zw(e),
            s = T.SQ(this.options.autoPanPadding),
            r = T.SQ(this.options.Vr || s),
            h = T.SQ(this.options.cr || s),
            a = t.getSize(),
            u = 0,
            c = 0;
          o.x + n + h.x > a.x && (u = o.x + n - a.x + h.x),
            o.x - u - r.x < 0 && (u = o.x - r.x),
            o.y + i + h.y > a.y && (c = o.y + i - a.y + h.y),
            o.y - c - r.y < 0 && (c = o.y - r.y),
            (u || c) && t.wQ("ST").panBy([u, c]);
        }
      },
      YT: function (t) {
        this.rT(), T.oq.uw(t);
      },
      _getAnchor: function () {
        return T.SQ(this.br && this.br.sT ? this.br.sT() : [0, 0]);
      }
    })),
    (T._r = function (t, i) {
      return new T.Zr(t, i);
    }),
    T.Map.M({
      QT: function (t, i, n) {
        return (
          t instanceof T.Zr || (t = new T.Zr(n).setContent(t)),
          i && t.sr(i),
          this.hasLayer(t) ? this : (this.Dr && this.Dr.options.Br && this.TT(), (this.Dr = t), this.addLayer(t))
        );
      },
      openInfoWindow: function (t, i, n) {
        this.QT(t, i, n);
      },
      closeInfoWindow: function (t) {
        this.TT(t);
      },
      TT: function (t) {
        return (t && t !== this.Dr) || ((t = this.Dr), (this.Dr = null)), t && this.removeLayer(t), this;
      },
      closeInfoWindow: function (t) {
        this.TT(t);
      }
    }),
    T.HE.M({
      dr: function (t, i) {
        return (
          t instanceof T.Zr
            ? (T.setOptions(t, i), (this.Dr = t), (t.br = this))
            : ((this.Dr && !i) || (this.Dr = new T.Zr(i, this)), this.Dr.setContent(t)),
          this.DT ||
            (this.on({
              Qq: this.TT,
              move: this.dT
            }),
            (this.DT = !0)),
          this
        );
      },
      FT: function () {
        return (
          this.Dr &&
            (this.off({
              Qq: this.TT,
              move: this.dT
            }),
            (this.DT = !1),
            (this.Dr = null)),
          this
        );
      },
      openInfoWindow: function (t, i) {
        this.QT(), this.Pr || ((this.Pr = this.dr(t, i)), this.QT());
      },
      closeInfoWindow: function () {
        this.TT();
      },
      QT: function (t, i) {
        if ((t instanceof T.HE || ((i = t), (t = this)), t instanceof T.fT))
          for (var n in this.hW) {
            t = this.hW[n];
            break;
          }
        return (
          i || (i = t.getCenter ? t.getCenter() : t.PE()),
          this.Dr && this.jE && ((this.Dr.br = t), this.Dr.update(), this.jE.QT(this.Dr, i)),
          this
        );
      },
      TT: function () {
        return this.Dr && this.Dr.rT(), this;
      },
      GT: function (t) {
        return this.Dr && (this.Dr.jE ? this.TT() : this.QT(t)), this;
      },
      gT: function () {
        return this.Dr.isOpen();
      },
      isOpen: function () {
        this.gT();
      },
      HT: function (t) {
        return this.Dr && this.Dr.setContent(t), this;
      },
      hT: function () {
        return this.Dr;
      },
      JT: function (t) {
        var i = t.layer || t.target;
        if (this.Dr && this.jE)
          return (
            T.oq.uw(t),
            i instanceof T.jT
              ? void this.QT(t.layer || t.target, t.KT)
              : void (this.jE.hasLayer(this.Dr) && this.Dr.br === i ? this.TT() : this.QT(i, t.KT))
          );
      },
      dT: function (t) {
        this.Dr.sr(t.KT);
      }
    }),
    T.Marker.M({
      sT: function () {
        return (
          this.options.icon.options.popupAnchor ||
            (this.options.icon.options.iconAnchor
              ? T.S.l(this.options.icon.options.iconAnchor)
                ? (this.options.icon.options.popupAnchor = [0, -this.options.icon.options.iconAnchor[1]])
                : (this.options.icon.options.popupAnchor = [0, -this.options.icon.options.iconAnchor.y])
              : (this.options.icon.options.popupAnchor = [0, 0])),
          this.options.icon.options.popupAnchor
        );
      }
    }),
    (T.InfoWindow = T.Zr.extend({
      options: {
        type: 3
      },
      initialize: function (t, i, n) {
        (this.ET = t), T.setOptions(this, i), (this.br = n);
      },
      getType: function () {
        return this.options.type;
      },
      setMinWidth: function (t) {
        (this.options.minWidth = t), this.update();
      },
      setMaxWidth: function (t) {
        (this.options.Cr = t), this.update();
      },
      setMaxHeight: function (t) {
        (this.options.maxHeight = t), this.update();
      },
      setLngLat: function (t) {
        this.sr(t);
      },
      setOffset: function (t) {
        (this.options.offset = t), this.update();
      },
      getOffset: function () {
        return this.options.offset;
      },
      closeInfoWindow: function () {
        this.rT();
      }
    })),
    (T.LayerGroup = T.HE.extend({
      initialize: function (t) {
        this.hW = {};
        var i, n;
        if (t) for (i = 0, n = t.length; i < n; i++) this.addLayer(t[i]);
      },
      addLayer: function (t) {
        var i = this.getLayerId(t);
        return (this.hW[i] = t), this.jE && this.jE.addLayer(t), this;
      },
      removeLayer: function (t) {
        var i = t in this.hW ? t : this.getLayerId(t);
        return this.jE && this.hW[i] && this.jE.removeLayer(this.hW[i]), delete this.hW[i], this;
      },
      hasLayer: function (t) {
        return !!t && (t in this.hW || this.getLayerId(t) in this.hW);
      },
      clearLayers: function () {
        for (var t in this.hW) this.removeLayer(this.hW[t]);
        return this;
      },
      kT: function (t) {
        var i,
          n,
          e = Array.prototype.slice.call(arguments, 1);
        for (i in this.hW) (n = this.hW[i]), n[t] && n[t].apply(n, e);
        return this;
      },
      onAdd: function (t) {
        for (var i in this.hW) t.addLayer(this.hW[i]);
      },
      onRemove: function (t) {
        for (var i in this.hW) t.removeLayer(this.hW[i]);
      },
      bE: function (t, i) {
        for (var n in this.hW) t.call(i, this.hW[n]);
        return this;
      },
      getLayer: function (t) {
        return this.hW[t];
      },
      getLayers: function () {
        var t = [];
        for (var i in this.hW) t.push(this.hW[i]);
        return t;
      },
      setZIndex: function (t) {
        return this.kT("setZIndex", t);
      },
      getLayerId: function (t) {
        return T.d(t);
      }
    })),
    (T.LT = function (t) {
      return new T.LayerGroup(t);
    }),
    (T.fT = T.LayerGroup.extend({
      addLayer: function (t) {
        return this.hasLayer(t)
          ? this
          : (t.TQ(this),
            T.LayerGroup.prototype.addLayer.call(this, t),
            this.wQ("layeradd", {
              layer: t
            }));
      },
      removeLayer: function (t) {
        return this.hasLayer(t)
          ? (t in this.hW && (t = this.hW[t]),
            t.tQ(this),
            T.LayerGroup.prototype.removeLayer.call(this, t),
            this.wQ("layerremove", {
              layer: t
            }))
          : this;
      },
      setStyle: function (t) {
        return this.kT("setStyle", t);
      },
      pe: function () {
        return this.kT("pe");
      },
      ae: function () {
        return this.kT("ae");
      },
      getBounds: function () {
        var t = new T.Kq();
        for (var i in this.hW) {
          var n = this.hW[i];
          t.extend(n.getBounds ? n.getBounds() : n.PE());
        }
        return t;
      }
    })),
    (T.lT = function (t) {
      return new T.fT(t);
    }),
    (T.MapType = T.LayerGroup.extend({
      initialize: function (t, i, n) {
        (this.name = i), (this.hW = {});
        var e, o;
        if (t) for (e = 0, o = t.length; e < o; e++) this.addLayer(t[e]);
      },
      getName: function () {
        return this.name;
      }
    })),
    T.Map.M({
      LW: function (t) {
        var i = new T.TileLayer("", {
          minZoom: 1,
          maxZoom: 18
        });
        i.getTileUrl = function (t) {
          return 0 == T.gq.EW
            ? T.w.t() + "TILECOL=" + t.x + "&TILEROW=" + t.y + "&TILEMATRIX=" + t.z
            : T.w.r() + "TILECOL=" + t.x + "&TILEROW=" + t.y + "&TILEMATRIX=" + t.z;
        };
        var n = new T.TileLayer("", {
          minZoom: 1,
          maxZoom: 18
        });
        (n.getTileUrl = function (t) {
          return 0 == T.gq.EW
            ? T.w.Y() + "TILECOL=" + t.x + "&TILEROW=" + t.y + "&TILEMATRIX=" + t.z
            : T.w.T() + "TILECOL=" + t.x + "&TILEROW=" + t.y + "&TILEMATRIX=" + t.z;
        }),
          (TMAP_NORMAL_MAP = new T.MapType([i, n], "TMAP_NORMAL_MAP", {
            a: 1
          }));
        var e = new T.TileLayer("", {
          minZoom: 1,
          maxZoom: 18
        });
        e.getTileUrl = function (t) {
          return 0 == T.gq.EW
            ? T.w.I() + "TILECOL=" + t.x + "&TILEROW=" + t.y + "&TILEMATRIX=" + t.z
            : T.w.U() + "TILECOL=" + t.x + "&TILEROW=" + t.y + "&TILEMATRIX=" + t.z;
        };
        var o = new T.TileLayer("", {
          minZoom: 1,
          maxZoom: 18
        });
        (o.getTileUrl = function (t) {
          return 0 == T.gq.EW
            ? T.w.i() + "TILECOL=" + t.x + "&TILEROW=" + t.y + "&TILEMATRIX=" + t.z
            : T.w.u() + "TILECOL=" + t.x + "&TILEROW=" + t.y + "&TILEMATRIX=" + t.z;
        }),
          (TMAP_SATELLITE_MAP = new T.MapType([e], "TMAP_SATELLITE_MAP")),
          (TMAP_HYBRID_MAP = new T.MapType([e, o], "TMAP_HYBRID_MAP"));
        var s = new T.TileLayer("", {
          minZoom: 1,
          maxZoom: 18
        });
        s.getTileUrl = function (t) {
          return 0 == T.gq.EW
            ? T.w.P() + "TILECOL=" + t.x + "&TILEROW=" + t.y + "&TILEMATRIX=" + t.z
            : T.w.O() + "TILECOL=" + t.x + "&TILEROW=" + t.y + "&TILEMATRIX=" + t.z;
        };
        var r = new T.TileLayer("", {
          minZoom: 1,
          maxZoom: 18
        });
        (r.getTileUrl = function (t) {
          return 0 == T.gq.EW
            ? T.w.p() + "TILECOL=" + t.x + "&TILEROW=" + t.y + "&TILEMATRIX=" + t.z
            : T.w.o() + "TILECOL=" + t.x + "&TILEROW=" + t.y + "&TILEMATRIX=" + t.z;
        }),
          (TMAP_TERRAIN_MAP = new T.MapType([s], "TMAP_TERRAIN_MAP")),
          (TMAP_TERRAIN_HYBRID_MAP = new T.MapType([s, r], "TMAP_TERRAIN_HYBRID_MAP"));
      }
    }),
    (T.ZT = T.HE.extend({
      options: {
        MW: 0.1
      },
      initialize: function (t) {
        T.setOptions(this, t), T.d(this);
      },
      onAdd: function () {
        this.Ow || (this.sW(), this.ZE && T._Q.Rq(this.Ow, "tdt-zoom-animated")),
          this.getPane().appendChild(this.Ow),
          this.Oe();
      },
      onRemove: function () {
        T._Q.Qq(this.Ow);
      },
      CE: function () {
        var t = {
          viewreset: this.wr,
          zoom: this.CT,
          moveend: this.Oe
        };
        return this.ZE && (t.Ge = this.VT), t;
      },
      VT: function (t) {
        this.cT(t.center, t.zoom);
      },
      CT: function () {
        this.cT(this.jE.getCenter(), this.jE.getZoom());
      },
      cT: function (t, i) {
        var n = this.jE.cW(i, this.fW),
          e = T._Q.getPosition(this.Ow),
          o = this.jE.getSize().fQ(0.5 + this.options.MW),
          s = this.jE.nq(this.BT, i),
          r = this.jE.nq(t, i),
          h = r.sQ(s),
          a = o.fQ(-n).AQ(e).AQ(o).sQ(h);
        T.oQ.any3d ? T._Q.Uq(this.Ow, a, n) : T._Q.setPosition(this.Ow, a);
      },
      wr: function () {
        this.Oe(), this.cT(this.BT, this.fW);
      },
      Oe: function () {
        var t = this.options.MW,
          i = this.jE.getSize(),
          n = this.jE.Lw(i.fQ(-t)).hQ();
        (this.Qr = new T.ZQ(n, n.AQ(i.fQ(1 + 2 * t)).hQ())),
          (this.BT = this.jE.getCenter()),
          (this.fW = this.jE.getZoom());
      }
    })),
    T.Map.M({
      vT: function (t) {
        var i = t.options.iW || this.NT(t.options.hE) || this.options.iW || this.bT;
        return i || (i = this.bT = (this.options._T && T.nT()) || T.MT()), this.hasLayer(i) || this.addLayer(i), i;
      },
      NT: function (t) {
        if ("overlayPane" === t || void 0 === t) return !1;
        var i = this.nw[t];
        return (
          void 0 === i &&
            ((i =
              (T.SVG &&
                T.MT({
                  hE: t
                })) ||
              (T.mT &&
                T.nT({
                  hE: t
                }))),
            (this.nw[t] = i)),
          i
        );
      }
    }),
    (T.jT = T.Overlay.extend({
      options: {
        stroke: !0,
        color: "#0000FF",
        weight: 3,
        opacity: 0.5,
        Qt: "round",
        qt: "round",
        dashArray: null,
        dashOffset: null,
        fill: !1,
        fillColor: null,
        fillOpacity: 0.2,
        Wt: "evenodd",
        mR: !0
      },
      vE: function (t) {
        this.bT = t.vT(this);
      },
      onAdd: function () {
        this.bT.wt(this), this.wr(), this.bT.Et(this);
      },
      onRemove: function () {
        this.bT.et(this);
      },
      CE: function () {
        return {
          zoomend: this.Rt,
          moveend: this.Oe,
          viewreset: this.wr
        };
      },
      redraw: function () {
        return this.jE && this.bT.rt(this), this;
      },
      setStyle: function (t) {
        return T.setOptions(this, t), this.bT && this.bT.Tt(this), this;
      },
      pe: function () {
        return this.bT && this.bT.Gr(this), this;
      },
      ae: function () {
        return this.bT && this.bT.tt(this), this;
      },
      getElement: function () {
        return this.Yt;
      },
      wr: function () {
        this.Rt(), this.Oe();
      },
      Ut: function () {
        return (this.options.stroke ? this.options.weight / 2 : 0) + (T.oQ.touch ? 10 : 0);
      }
    })),
    (T.ut = {
      It: function (t, i) {
        if (!i || !t.length) return t.slice();
        var n = i * i;
        return (t = this.it(t, n)), (t = this.Ot(t, n));
      },
      ot: function (t, i, n) {
        return Math.sqrt(this.Pt(t, i, n, !0));
      },
      pt: function (t, i, n) {
        return this.Pt(t, i, n);
      },
      Ot: function (t, i) {
        var n = t.length,
          e = typeof Uint8Array != void 0 + "" ? Uint8Array : Array,
          o = new e(n);
        (o[0] = o[n - 1] = 1), this.At(t, o, i, 0, n - 1);
        var s,
          r = [];
        for (s = 0; s < n; s++) o[s] && r.push(t[s]);
        return r;
      },
      At: function (t, i, n, e, o) {
        var s,
          r,
          h,
          a = 0;
        for (r = e + 1; r <= o - 1; r++) (h = this.Pt(t[r], t[e], t[o], !0)), h > a && ((s = r), (a = h));
        a > n && ((i[s] = 1), this.At(t, i, n, e, s), this.At(t, i, n, s, o));
      },
      it: function (t, i) {
        for (var n = [t[0]], e = 1, o = 0, s = t.length; e < s; e++) this.at(t[e], t[o]) > i && (n.push(t[e]), (o = e));
        return o < s - 1 && n.push(t[s - 1]), n;
      },
      St: function (t, i, n, e, o) {
        var s,
          r,
          h,
          a = e ? this.st : this.Dt(t, n),
          u = this.Dt(i, n);
        for (this.st = u; ; ) {
          if (!(a | u)) return [t, i];
          if (a & u) return !1;
          (s = a || u),
            (r = this.dt(t, i, s, n, o)),
            (h = this.Dt(r, n)),
            s === a ? ((t = r), (a = h)) : ((i = r), (u = h));
        }
      },
      dt: function (t, i, n, e, o) {
        var s,
          r,
          h = i.x - t.x,
          a = i.y - t.y,
          u = e.min,
          c = e.max;
        return (
          8 & n
            ? ((s = t.x + (h * (c.y - t.y)) / a), (r = c.y))
            : 4 & n
            ? ((s = t.x + (h * (u.y - t.y)) / a), (r = u.y))
            : 2 & n
            ? ((s = c.x), (r = t.y + (a * (c.x - t.x)) / h))
            : 1 & n && ((s = u.x), (r = t.y + (a * (u.x - t.x)) / h)),
          new T.Point(s, r, o)
        );
      },
      Dt: function (t, i) {
        var n = 0;
        return (
          t.x < i.min.x ? (n |= 1) : t.x > i.max.x && (n |= 2), t.y < i.min.y ? (n |= 4) : t.y > i.max.y && (n |= 8), n
        );
      },
      at: function (t, i) {
        var n = i.x - t.x,
          e = i.y - t.y;
        return n * n + e * e;
      },
      Pt: function (t, i, n, e) {
        var o,
          s = i.x,
          r = i.y,
          h = n.x - s,
          a = n.y - r,
          u = h * h + a * a;
        return (
          u > 0 &&
            ((o = ((t.x - s) * h + (t.y - r) * a) / u),
            o > 1 ? ((s = n.x), (r = n.y)) : o > 0 && ((s += h * o), (r += a * o))),
          (h = t.x - s),
          (a = t.y - r),
          e ? h * h + a * a : new T.Point(s, r)
        );
      }
    }),
    (T.Polyline = T.jT.extend({
      options: {
        Ft: 1,
        type: 4,
        ft: !1
      },
      initialize: function (t, i) {
        T.setOptions(this, i),
          this.Gt(t),
          (this.gt = "solid"),
          this.options.lineStyle && this.setLineStyle(this.options.lineStyle);
      },
      getType: function () {
        return this.options.type;
      },
      Ht: function () {
        return this.ht;
      },
      getLngLats: function () {
        return this.Ht();
      },
      Jt: function (t) {
        return this.Gt(t), this.redraw();
      },
      setLngLats: function (t) {
        this.Jt(t);
      },
      setColor: function (t) {
        this.setStyle({
          color: t
        });
      },
      getColor: function () {
        return this.options.color;
      },
      setWeight: function (t) {
        this.setStyle({
          weight: t
        });
      },
      getWeight: function () {
        return this.options.weight;
      },
      setOpacity: function (t) {
        this.setStyle({
          opacity: t
        });
      },
      getOpacity: function () {
        return this.options.opacity;
      },
      setLineStyle: function (t) {
        "dashed" == t
          ? ((this.gt = "dashed"),
            T.oQ.ie8 || T.oQ.ie7
              ? this.setStyle({
                  dashArray: "2,2"
                })
              : this.setStyle({
                  dashArray: "4"
                }))
          : ((this.gt = "solid"),
            this.setStyle({
              dashArray: ""
            }));
      },
      getLineStyle: function () {
        return this.gt;
      },
      getMap: function () {
        return this.jE;
      },
      enableEdit: function () {
        this.jt && this.jt.enable();
      },
      disableEdit: function () {
        this.jt && this.jt.disable();
      },
      isEditable: function () {
        return this.jt.aE();
      },
      Kt: function () {
        return !this.ht.length;
      },
      kt: function (t) {
        for (var i, n, e = 1 / 0, o = null, s = T.ut.Pt, r = 0, h = this.Lt.length; r < h; r++)
          for (var a = this.Lt[r], u = 1, c = a.length; u < c; u++) {
            (i = a[u - 1]), (n = a[u]);
            var l = s(t, i, n, !0);
            l < e && ((e = l), (o = s(t, i, n)));
          }
        return o && (o.distance = Math.sqrt(e)), o;
      },
      getCenter: function () {
        var t,
          i,
          n,
          e,
          o,
          s,
          r,
          h = this.lt[0],
          a = h.length;
        if (!a) return null;
        for (t = 0, i = 0; t < a - 1; t++) i += h[t].distanceTo(h[t + 1]) / 2;
        if (0 === i) return this.jE.Dw(h[0]);
        for (t = 0, e = 0; t < a - 1; t++)
          if (((o = h[t]), (s = h[t + 1]), (n = o.distanceTo(s)), (e += n), e > i))
            return (r = (e - i) / n), this.jE.Dw([s.x - r * (s.x - o.x), s.y - r * (s.y - o.y)]);
      },
      getBounds: function () {
        return this.Qr;
      },
      Zt: function (t, i) {
        return (i = i || this.Ct()), (t = T.fq(t)), i.push(t), this.Qr.extend(t), this.redraw();
      },
      Gt: function (t) {
        (this.Qr = new T.Kq()), (this.ht = this.Vt(t));
      },
      Ct: function () {
        return T.Polyline.ct(this.ht) ? this.ht : this.ht[0];
      },
      Vt: function (t) {
        for (var i = [], n = T.Polyline.ct(t), e = 0, o = t.length; e < o; e++)
          n ? ((i[e] = T.fq(t[e])), this.Qr.extend(i[e])) : (i[e] = this.Vt(t[e]));
        return i;
      },
      Rt: function () {
        var t = new T.ZQ();
        (this.lt = []), this.Bt(this.ht, this.lt, t);
        var i = this.Ut(),
          n = new T.Point(i, i);
        this.Qr.vQ() && t.vQ() && (t.min.DQ(n), t.max.aQ(n), (this.vt = t));
      },
      Bt: function (t, i, n) {
        var e,
          o,
          s = t[0] instanceof T.dq,
          r = t.length;
        if (s) {
          for (o = [], e = 0; e < r; e++) (o[e] = this.jE.kw(t[e])), n.extend(o[e]);
          i.push(o);
        } else for (e = 0; e < r; e++) this.Bt(t[e], i, n);
      },
      Nt: function () {
        var t = this.bT.Qr;
        if (((this.Lt = []), this.vt && this.vt.intersects(t))) {
          if (this.options.ft) return void (this.Lt = this.lt);
          var i,
            n,
            e,
            o,
            s,
            r,
            h,
            a = this.Lt;
          for (i = 0, e = 0, o = this.lt.length; i < o; i++)
            for (h = this.lt[i], n = 0, s = h.length; n < s - 1; n++)
              (r = T.ut.St(h[n], h[n + 1], t, n, !0)),
                r &&
                  ((a[e] = a[e] || []), a[e].push(r[0]), (r[1] === h[n + 1] && n !== s - 2) || (a[e].push(r[1]), e++));
        }
      },
      bt: function () {
        for (var t = this.Lt, i = this.options.Ft, n = 0, e = t.length; n < e; n++) t[n] = T.ut.It(t[n], i);
      },
      Oe: function () {
        this.jE && (this.Nt(), this.bt(), this.rt());
      },
      rt: function () {
        this.bT.Mt(this);
      },
      show: function () {
        this.getElement().style.display = "block";
      },
      hide: function () {
        this.getElement().style.display = "none";
      },
      isHidden: function () {
        return "none" == this.getElement().style.display;
      }
    })),
    (T.nt = function (t, i) {
      return new T.Polyline(t, i);
    }),
    (T.Polyline.ct = function (t) {
      return !T.S.l(t[0]) || ("object" != typeof t[0][0] && "undefined" != typeof t[0][0]);
    }),
    (T._t = {}),
    (T._t.mt = function (t, i, n) {
      var e,
        o,
        s,
        r,
        h,
        a,
        u,
        c,
        l,
        f = [1, 4, 2, 8],
        d = T.ut;
      for (o = 0, u = t.length; o < u; o++) t[o]._code = d.Dt(t[o], i);
      for (r = 0; r < 4; r++) {
        for (c = f[r], e = [], o = 0, u = t.length, s = u - 1; o < u; s = o++)
          (h = t[o]),
            (a = t[s]),
            h._code & c
              ? a._code & c || ((l = d.dt(a, h, c, i, n)), (l._code = d.Dt(l, i)), e.push(l))
              : (a._code & c && ((l = d.dt(a, h, c, i, n)), (l._code = d.Dt(l, i)), e.push(l)), e.push(h));
        t = e;
      }
      return t;
    }),
    (T.Polygon = T.Polyline.extend({
      options: {
        fill: !0,
        type: 5
      },
      setFillColor: function (t) {
        this.setStyle({
          fillColor: t
        });
      },
      getFillColor: function () {
        return this.options.fillColor;
      },
      setFillOpacity: function (t) {
        this.setStyle({
          fillOpacity: t
        });
      },
      getFillOpacity: function () {
        return this.options.fillOpacity;
      },
      Kt: function () {
        return !this.ht.length || !this.ht[0].length;
      },
      getCenter: function () {
        var t,
          i,
          n,
          e,
          o,
          s,
          r,
          h,
          a,
          u = this.lt[0],
          c = u.length;
        if (!c) return null;
        for (s = r = h = 0, t = 0, i = c - 1; t < c; i = t++)
          (n = u[t]),
            (e = u[i]),
            (o = n.y * e.x - e.y * n.x),
            (r += (n.x + e.x) * o),
            (h += (n.y + e.y) * o),
            (s += 3 * o);
        return (a = 0 === s ? u[0] : [r / s, h / s]), this.jE.Dw(a);
      },
      Vt: function (t) {
        var i = T.Polyline.prototype.Vt.call(this, t),
          n = i.length;
        return n >= 2 && i[0] instanceof T.dq && i[0].equals(i[n - 1]) && i.pop(), i;
      },
      Gt: function (t) {
        T.Polyline.prototype.Gt.call(this, t), T.Polyline.ct(this.ht) && (this.ht = [this.ht]);
      },
      Ct: function () {
        return T.Polyline.ct(this.ht[0]) ? this.ht[0] : this.ht[0][0];
      },
      Nt: function () {
        var t = this.bT.Qr,
          i = this.options.weight,
          n = new T.Point(i, i);
        if (((t = new T.ZQ(t.min.sQ(n), t.max.AQ(n))), (this.Lt = []), this.vt && this.vt.intersects(t))) {
          if (this.options.ft) return void (this.Lt = this.lt);
          for (var e, o = 0, s = this.lt.length; o < s; o++)
            (e = T._t.mt(this.lt[o], t, !0)), e.length && this.Lt.push(e);
        }
      },
      rt: function () {
        this.bT.Mt(this, !0);
      }
    })),
    (T.QY = function (t, i) {
      return new T.Polygon(t, i);
    }),
    (T.Rectangle = T.Polygon.extend({
      options: {
        type: 6
      },
      initialize: function (t, i) {
        T.Polygon.prototype.initialize.call(this, this.qY(t), i);
      },
      setBounds: function (t) {
        return this.Jt(this.qY(t));
      },
      qY: function (t) {
        return (t = T.jq(t)), [t.getSouthWest(), t.Zq(), t.getNorthEast(), t.cq()];
      }
    })),
    (T.WY = function (t, i) {
      return new T.Rectangle(t, i);
    }),
    (T.wY = T.jT.extend({
      options: {
        fill: !0,
        radius: 10,
        type: 8
      },
      initialize: function (t, i) {
        T.setOptions(this, i), (this.or = T.fq(t)), (this.EY = this.options.radius);
      },
      sr: function (t) {
        return (
          (this.or = T.fq(t)),
          this.redraw(),
          this.wQ("move", {
            KT: this.or
          })
        );
      },
      PE: function () {
        return this.or;
      },
      setRadius: function (t) {
        return (this.options.radius = this.EY = t), this.redraw();
      },
      getRadius: function () {
        return this.EY;
      },
      setStyle: function (t) {
        var i = (t && t.radius) || this.EY;
        return T.jT.prototype.setStyle.call(this, t), this.setRadius(i), this;
      },
      Rt: function () {
        (this.eY = this.jE.kw(this.or)), this.RY();
      },
      RY: function () {
        var t = this.EY,
          i = this.rY || t,
          n = this.Ut(),
          e = [t + n, i + n];
        this.vt = new T.ZQ(this.eY.sQ(e), this.eY.AQ(e));
      },
      Oe: function () {
        this.jE && this.rt();
      },
      rt: function () {
        this.bT.TY(this);
      },
      tY: function () {
        return this.EY && !this.bT.Qr.intersects(this.vt);
      }
    })),
    (T.YY = function (t, i) {
      return new T.wY(t, i);
    }),
    (T.Circle = T.wY.extend({
      initialize: function (t, i, n) {
        "number" == typeof i &&
          (i = T.extend({}, n, {
            radius: i
          })),
          T.setOptions(this, i),
          (this.or = T.fq(t)),
          isNaN(this.options.radius),
          (this.UY = this.options.radius),
          (this.gt = "solid"),
          this.options.lineStyle && this.setLineStyle(this.options.lineStyle);
      },
      getType: function () {
        return this.options.type;
      },
      setCenter: function (t) {
        this.sr(t);
      },
      getCenter: function () {
        return this.PE();
      },
      setColor: function (t) {
        this.setStyle({
          color: t
        });
      },
      getColor: function () {
        return this.options.color;
      },
      setWeight: function (t) {
        this.setStyle({
          weight: t
        });
      },
      getWeight: function () {
        return this.options.weight;
      },
      setOpacity: function (t) {
        this.setStyle({
          opacity: t
        });
      },
      getOpacity: function () {
        return this.options.opacity;
      },
      setFillColor: function (t) {
        this.setStyle({
          fillColor: t
        });
      },
      getFillColor: function () {
        return this.options.fillColor;
      },
      setFillOpacity: function (t) {
        this.setStyle({
          fillOpacity: t
        });
      },
      getFillOpacity: function () {
        return this.options.fillOpacity;
      },
      setLineStyle: function (t) {
        "dashed" == t
          ? ((this.gt = "dashed"),
            T.oQ.ie8 || T.oQ.ie7
              ? this.setStyle({
                  dashArray: "2,2"
                })
              : this.setStyle({
                  dashArray: "4"
                }))
          : ((this.gt = "solid"),
            this.setStyle({
              dashArray: ""
            }));
      },
      getLineStyle: function () {
        return this.gt;
      },
      enableEdit: function () {
        this.jt && this.jt.enable();
      },
      isEditable: function () {
        return this.jt.aE();
      },
      disableEdit: function () {
        this.jt && this.jt.disable();
      },
      getMap: function () {
        return this.jE;
      },
      setRadius: function (t) {
        return (this.UY = t), this.redraw();
      },
      getRadius: function () {
        return this.UY;
      },
      getBounds: function () {
        var t = [this.EY, this.rY || this.EY];
        return new T.Kq(this.jE.Dw(this.eY.sQ(t)), this.jE.Dw(this.eY.AQ(t)));
      },
      setStyle: T.jT.prototype.setStyle,
      Rt: function () {
        var t = this.or.lng,
          i = this.or.lat,
          n = this.jE,
          e = n.options.IW;
        if (e.distance === T.gq.Gq.distance) {
          var o = Math.PI / 180,
            s = this.UY / T.gq.Gq.R / o,
            r = n.nq([i + s, t]),
            h = n.nq([i - s, t]),
            a = r.AQ(h).dQ(2),
            u = n._q(a).lat,
            c =
              Math.acos((Math.cos(s * o) - Math.sin(i * o) * Math.sin(u * o)) / (Math.cos(i * o) * Math.cos(u * o))) /
              o;
          (isNaN(c) || 0 === c) && (c = s / Math.cos((Math.PI / 180) * i)),
            (this.eY = a.sQ(n.Jw())),
            (this.EY = isNaN(c) ? 0 : Math.max(Math.round(a.x - n.nq([u, t - c]).x), 1)),
            (this.rY = Math.max(Math.round(a.y - r.y), 1));
        } else {
          var l = e._q(e.nq(this.or).sQ([this.UY, 0]));
          (this.eY = n.kw(this.or)), (this.EY = this.eY.x - n.kw(l).x);
        }
        this.RY();
      }
    })),
    (T.uY = function (t, i, n) {
      return new T.Circle(t, i, n);
    }),
    (T.SVG = T.ZT.extend({
      CE: function () {
        var t = T.ZT.prototype.CE.call(this);
        return (t.zoomstart = this.IY), t;
      },
      sW: function () {
        (this.Ow = T.SVG.s("svg")),
          this.Ow.setAttribute("pointer-events", "none"),
          (this._rootGroup = T.SVG.s("g")),
          this.Ow.appendChild(this._rootGroup);
      },
      IY: function () {
        this.Oe();
      },
      Oe: function () {
        if (!this.jE.ER || !this.Qr) {
          T.ZT.prototype.Oe.call(this);
          var t = this.Qr,
            i = t.getSize(),
            n = this.Ow;
          (this._svgSize && this._svgSize.equals(i)) ||
            ((this._svgSize = i), n.setAttribute("width", i.x), n.setAttribute("height", i.y)),
            T._Q.setPosition(n, t.min),
            n.setAttribute("viewBox", [t.min.x, t.min.y, i.x, i.y].join(" "));
        }
      },
      wt: function (t) {
        var i = (t.Yt = T.SVG.s("path"));
        t.options.className && T._Q.Rq(i, t.options.className),
          t.options.mR && T._Q.Rq(i, "tdt-interactive"),
          this.Tt(t);
      },
      Et: function (t) {
        this._rootGroup.appendChild(t.Yt), t.kE(t.Yt);
      },
      et: function (t) {
        T._Q.Qq(t.Yt), t.LE(t.Yt);
      },
      rt: function (t) {
        t.Rt(), t.Oe();
      },
      Tt: function (t) {
        var i = t.Yt,
          n = t.options;
        i &&
          (n.stroke
            ? (i.setAttribute("stroke", n.color),
              i.setAttribute("stroke-opacity", n.opacity),
              i.setAttribute("stroke-width", n.weight),
              i.setAttribute("stroke-linecap", n.Qt),
              i.setAttribute("stroke-linejoin", n.qt),
              n.dashArray ? i.setAttribute("stroke-dasharray", n.dashArray) : i.removeAttribute("stroke-dasharray"),
              n.dashOffset ? i.setAttribute("stroke-dashoffset", n.dashOffset) : i.removeAttribute("stroke-dashoffset"))
            : i.setAttribute("stroke", "none"),
          n.fill
            ? (i.setAttribute("fill", n.fillColor || n.color),
              i.setAttribute("fill-opacity", n.fillOpacity),
              i.setAttribute("fill-rule", n.Wt || "evenodd"))
            : i.setAttribute("fill", "none"));
      },
      Mt: function (t, i) {
        this.iY(t, T.SVG.OY(t.Lt, i));
      },
      TY: function (t) {
        var i = t.eY,
          n = t.EY,
          e = t.rY || n,
          o = "a" + n + "," + e + " 0 1,0 ",
          s = t.tY() ? "M0 0" : "M" + (i.x - n) + "," + i.y + o + 2 * n + ",0 " + o + 2 * -n + ",0 ";
        this.iY(t, s);
      },
      iY: function (t, i) {
        t.Yt.setAttribute("d", i);
      },
      Gr: function (t) {
        T._Q.Wq(t.Yt);
      },
      tt: function (t) {
        T._Q.wq(t.Yt);
      }
    })),
    T.extend(T.SVG, {
      s: function (t) {
        return document.createElementNS("http://www.w3.org/2000/svg", t);
      },
      OY: function (t, i) {
        var n,
          e,
          o,
          s,
          r,
          h,
          a = "";
        for (n = 0, o = t.length; n < o; n++) {
          for (r = t[n], e = 0, s = r.length; e < s; e++) (h = r[e]), (a += (e ? "L" : "M") + h.x + " " + h.y);
          a += i ? (T.oQ.MT ? "z" : "x") : "";
        }
        return a || "M0 0";
      }
    }),
    (T.oQ.MT = !(!document.createElementNS || !T.SVG.s("svg").createSVGRect)),
    (T.MT = function (t) {
      return T.oQ.MT || T.oQ.vml ? new T.SVG(t) : null;
    }),
    (T.oQ.vml =
      !T.oQ.MT &&
      (function () {
        try {
          var t = document.createElement("div");
          t.innerHTML = '<v:shape adj="1"/>';
          var i = t.firstChild;
          return (i.style.behavior = "url(#default#VML)"), i && "object" == typeof i.adj;
        } catch (AO) {
          return !1;
        }
      })()),
    T.SVG.M(
      T.oQ.vml
        ? {
            sW: function () {
              this.Ow = T._Q.s("div", "tdt-vml-container");
            },
            Oe: function () {
              this.jE.ER || T.ZT.prototype.Oe.call(this);
            },
            wt: function (t) {
              var i = (t.Ow = T.SVG.s("shape"));
              T._Q.Rq(i, "tdt-vml-shape " + (this.options.className || "")),
                (i.coordsize = "1 1"),
                (t.Yt = T.SVG.s("path")),
                i.appendChild(t.Yt),
                this.Tt(t);
            },
            Et: function (t) {
              var i = t.Ow;
              this.Ow.appendChild(i), t.options.mR && t.kE(i);
            },
            et: function (t) {
              var i = t.Ow;
              T._Q.Qq(i), t.LE(i);
            },
            Tt: function (t) {
              var i = t._stroke,
                n = t._fill,
                e = t.options,
                o = t.Ow;
              (o.stroked = !!e.stroke),
                (o.filled = !!e.fill),
                e.stroke
                  ? (i || (i = t._stroke = T.SVG.s("stroke")),
                    o.appendChild(i),
                    (i.weight = e.weight + "px"),
                    (i.color = e.color),
                    (i.opacity = e.opacity),
                    e.dashArray
                      ? (i.dashStyle = T.S.l(e.dashArray)
                          ? e.dashArray.join(" ")
                          : e.dashArray.replace(/( *, *)/g, " "))
                      : (i.dashStyle = ""),
                    (i.endcap = e.Qt.replace("butt", "flat")),
                    (i.joinstyle = e.qt))
                  : i && (o.removeChild(i), (t._stroke = null)),
                e.fill
                  ? (n || (n = t._fill = T.SVG.s("fill")),
                    o.appendChild(n),
                    (n.color = e.fillColor || e.color),
                    (n.opacity = e.fillOpacity))
                  : n && (o.removeChild(n), (t._fill = null));
            },
            TY: function (t) {
              var i = t.eY.hQ(),
                n = Math.round(t.EY),
                e = Math.round(t.rY || n);
              this.iY(t, t.tY() ? "M0 0" : "AL " + i.x + "," + i.y + " " + n + "," + e + " 0,23592600");
            },
            iY: function (t, i) {
              t.Yt.v = i;
            },
            Gr: function (t) {
              T._Q.Wq(t.Ow);
            },
            tt: function (t) {
              T._Q.wq(t.Ow);
            }
          }
        : {}
    ),
    T.oQ.vml &&
      (T.SVG.s = (function () {
        try {
          return (
            document.namespaces.AQ("lvml", "urn:schemas-microsoft-com:vml"),
            function (t) {
              return document.createElement("<lvml:" + t + ' class="lvml">');
            }
          );
        } catch (AO) {
          return function (t) {
            return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
          };
        }
      })()),
    (T.mT = T.ZT.extend({
      onAdd: function () {
        T.ZT.prototype.onAdd.call(this), (this.hW = this.hW || {}), this.oY();
      },
      sW: function () {
        var t = (this.Ow = document.createElement("canvas"));
        T.oq
          .on(t, "mousemove", T.S.G(this.PY, 32, this), this)
          .on(t, "click dblclick mousedown mouseup contextmenu", this.pY, this)
          .on(t, "mouseout", this.AY, this),
          (this.aY = t.getContext("2d"));
      },
      Oe: function () {
        if (!this.jE.ER || !this.Qr) {
          (this.SY = {}), T.ZT.prototype.Oe.call(this);
          var t = this.Qr,
            i = this.Ow,
            n = t.getSize(),
            e = T.oQ.retina ? 2 : 1;
          T._Q.setPosition(i, t.min),
            (i.width = e * n.x),
            (i.height = e * n.y),
            (i.style.width = n.x + "px"),
            (i.style.height = n.y + "px"),
            T.oQ.retina && this.aY.scale(2, 2),
            this.aY.translate(-t.min.x, -t.min.y);
        }
      },
      wt: function (t) {
        this._updateDashArray(t), (this.hW[T.d(t)] = t);
      },
      Et: T.S.H,
      et: function (t) {
        (t.sY = !0), this.DY(t);
      },
      rt: function (t) {
        (this.dY = t.vt), this.oY(!0), t.Rt(), t.Oe(), this.oY(), (this.dY = null);
      },
      Tt: function (t) {
        this._updateDashArray(t), this.DY(t);
      },
      _updateDashArray: function (t) {
        if (t.options.dashArray) {
          var i,
            n = t.options.dashArray.split(","),
            e = [];
          for (i = 0; i < n.length; i++) e.push(Number(n[i]));
          t.options._dashArray = e;
        }
      },
      DY: function (t) {
        if (this.jE) {
          var i = (t.options.weight || 0) + 1;
          (this.dY = this.dY || new T.ZQ()),
            this.dY.extend(t.vt.min.sQ([i, i])),
            this.dY.extend(t.vt.max.AQ([i, i])),
            (this.FY = this.FY || T.S.C(this.fY, this));
        }
      },
      fY: function () {
        (this.FY = null), this.oY(!0), this.oY(), (this.dY = null);
      },
      oY: function (t) {
        this.GY = t;
        var i,
          n = this.dY;
        this.aY.save(),
          n &&
            (this.aY.beginPath(), this.aY.rect(n.min.x, n.min.y, n.max.x - n.min.x, n.max.y - n.min.y), this.aY.clip());
        for (var e in this.hW)
          (i = this.hW[e]),
            (!n || (i.vt && i.vt.intersects(n))) && i.rt(),
            t && i.sY && (delete i.sY, delete this.hW[e]);
        this.aY.restore();
      },
      Mt: function (t, i) {
        var n,
          e,
          o,
          s,
          r = t.Lt,
          h = r.length,
          a = this.aY;
        if (h) {
          for (
            this.SY[t.F] = t,
              a.beginPath(),
              a.setLineDash && a.setLineDash((t.options && t.options._dashArray) || []),
              n = 0;
            n < h;
            n++
          ) {
            for (e = 0, o = r[n].length; e < o; e++) (s = r[n][e]), a[e ? "lineTo" : "moveTo"](s.x, s.y);
            i && a.closePath();
          }
          this.gY(a, t);
        }
      },
      TY: function (t) {
        if (!t.tY()) {
          var i = t.eY,
            n = this.aY,
            e = t.EY,
            o = (t.rY || e) / e;
          (this.SY[t.F] = t),
            1 !== o && (n.save(), n.scale(1, o)),
            n.beginPath(),
            n.arc(i.x, i.y / o, e, 0, 2 * Math.PI, !1),
            1 !== o && n.restore(),
            this.gY(n, t);
        }
      },
      gY: function (t, i) {
        var n = this.GY,
          e = i.options;
        (t.globalCompositeOperation = n ? "destination-out" : "source-over"),
          e.fill &&
            ((t.globalAlpha = n ? 1 : e.fillOpacity),
            (t.fillStyle = e.fillColor || e.color),
            t.fill(e.Wt || "evenodd")),
          e.stroke &&
            0 !== e.weight &&
            ((t.globalAlpha = n ? 1 : e.opacity),
            (i._prevWeight = t.lineWidth = n ? i._prevWeight + 1 : e.weight),
            (t.strokeStyle = e.color),
            (t.Qt = e.Qt),
            (t.qt = e.qt),
            t.stroke());
      },
      pY: function (t) {
        var i,
          n = this.jE.cw(t),
          e = [];
        for (var o in this.hW) (i = this.hW[o]), i.options.mR && i.HY(n) && !this.jE.IE(i) && (T.oq.hY(t), e.push(i));
        e.length && this.JY(e, t);
      },
      PY: function (t) {
        if (this.jE && !this.jE.AE.moving() && !this.jE.ER) {
          var i = this.jE.cw(t);
          this.AY(t, i), this.jY(t, i);
        }
      },
      AY: function (t, i) {
        var n = this.KY;
        !n ||
          ("mouseout" !== t.type && n.HY(i)) ||
          (T._Q.Tq(this.Ow, "tdt-interactive"), this.JY([n], t, "mouseout"), (this.KY = null));
      },
      jY: function (t, i) {
        var n, e;
        for (n in this.SY)
          (e = this.SY[n]),
            e.options.mR &&
              e.HY(i) &&
              (T._Q.Rq(this.Ow, "tdt-interactive"), this.JY([e], t, "mouseover"), (this.KY = e));
        this.KY && this.JY([this.KY], t);
      },
      JY: function (t, i, n) {
        this.jE.oE(i, n || i.type, t);
      },
      Gr: T.S.H,
      tt: T.S.H
    })),
    (T.oQ.nT = (function () {
      return !!document.createElement("canvas").getContext;
    })()),
    (T.nT = function (t) {
      return T.oQ.nT ? new T.mT(t) : null;
    }),
    (T.Polyline.prototype.HY = function (t, i) {
      var n,
        e,
        o,
        s,
        r,
        h,
        a = this.Ut();
      if (!this.vt.contains(t)) return !1;
      for (n = 0, s = this.Lt.length; n < s; n++)
        for (h = this.Lt[n], e = 0, r = h.length, o = r - 1; e < r; o = e++)
          if ((i || 0 !== e) && T.ut.ot(t, h[o], h[e]) <= a) return !0;
      return !1;
    }),
    (T.Polygon.prototype.HY = function (t) {
      var i,
        n,
        e,
        o,
        s,
        r,
        h,
        a,
        u = !1;
      if (!this.vt.contains(t)) return !1;
      for (o = 0, h = this.Lt.length; o < h; o++)
        for (i = this.Lt[o], s = 0, a = i.length, r = a - 1; s < a; r = s++)
          (n = i[s]),
            (e = i[r]),
            n.y > t.y != e.y > t.y && t.x < ((e.x - n.x) * (t.y - n.y)) / (e.y - n.y) + n.x && (u = !u);
      return u || T.Polyline.prototype.HY.call(this, t, !0);
    }),
    (T.wY.prototype.HY = function (t) {
      return t.distanceTo(this.eY) <= this.EY + this.Ut();
    }),
    (T.GeoJSON = T.fT.extend({
      initialize: function (t, i) {
        T.setOptions(this, i), (this.hW = {}), t && this.addData(t);
      },
      addData: function (t) {
        var i,
          n,
          e,
          o = T.S.l(t) ? t : t.features;
        if (o) {
          for (i = 0, n = o.length; i < n; i++)
            (e = o[i]), (e.geometries || e.geometry || e.features || e.coordinates) && this.addData(e);
          return this;
        }
        var s = this.options;
        if (s.filter && !s.filter(t)) return this;
        var r = T.GeoJSON.geometryToLayer(t, s);
        return r
          ? ((r.feature = T.GeoJSON.kY(t)),
            (r.defaultOptions = r.options),
            this.resetStyle(r),
            s.onEachFeature && s.onEachFeature(t, r),
            this.addLayer(r))
          : this;
      },
      resetStyle: function (t) {
        return (t.options = T.S.extend({}, t.defaultOptions)), this.LY(t, this.options.style), this;
      },
      setStyle: function (t) {
        return this.bE(function (i) {
          this.LY(i, t);
        }, this);
      },
      LY: function (t, i) {
        "function" == typeof i && (i = i(t.feature)), t.setStyle && t.setStyle(i);
      }
    })),
    T.extend(T.GeoJSON, {
      geometryToLayer: function (t, i) {
        var n,
          e,
          o,
          s,
          r = "Feature" === t.type ? t.geometry : t,
          h = r ? r.coordinates : null,
          a = [],
          u = i && i.pointToLayer,
          c = (i && i.coordsToLatLng) || this.coordsToLatLng;
        if (!h && !r) return null;
        switch (r.type) {
          case "Point":
            return (n = c(h)), u ? u(t, n) : new T.Marker(n);
          case "MultiPoint":
            for (o = 0, s = h.length; o < s; o++) (n = c(h[o])), a.push(u ? u(t, n) : new T.Marker(n));
            return new T.fT(a);
          case "LineString":
          case "MultiLineString":
            return (e = this.coordsToLatLngs(h, "LineString" === r.type ? 0 : 1, c)), new T.Polyline(e, i);
          case "Polygon":
          case "MultiPolygon":
            return (e = this.coordsToLatLngs(h, "Polygon" === r.type ? 1 : 2, c)), new T.Polygon(e, i);
          case "GeometryCollection":
            for (o = 0, s = r.geometries.length; o < s; o++) {
              var l = this.geometryToLayer(
                {
                  geometry: r.geometries[o],
                  type: "Feature",
                  properties: t.properties
                },
                i
              );
              l && a.push(l);
            }
            return new T.fT(a);
        }
      },
      coordsToLatLng: function (t) {
        return new T.dq(t[1], t[0], t[2]);
      },
      coordsToLatLngs: function (t, i, n) {
        for (var e, o = [], s = 0, r = t.length; s < r; s++)
          (e = i ? this.coordsToLatLngs(t[s], i - 1, n) : (n || this.coordsToLatLng)(t[s])), o.push(e);
        return o;
      },
      lY: function (t) {
        return void 0 !== t.Fq ? [t.lng, t.lat, t.Fq] : [t.lng, t.lat];
      },
      ZY: function (t, i, n) {
        for (var e = [], o = 0, s = t.length; o < s; o++) e.push(i ? T.GeoJSON.ZY(t[o], i - 1, n) : T.GeoJSON.lY(t[o]));
        return !i && n && e.push(e[0]), e;
      },
      CY: function (t, i) {
        return t.feature
          ? T.extend({}, t.feature, {
              geometry: i
            })
          : T.GeoJSON.kY(i);
      },
      kY: function (t) {
        return "Feature" === t.type
          ? t
          : {
              type: "Feature",
              properties: {},
              geometry: t
            };
      }
    });
  var PointToGeoJSON = {
    toGeoJSON: function () {
      return T.GeoJSON.CY(this, {
        type: "Point",
        coordinates: T.GeoJSON.lY(this.PE())
      });
    }
  };
  T.Marker.M(PointToGeoJSON),
    T.Circle.M(PointToGeoJSON),
    T.wY.M(PointToGeoJSON),
    (T.Polyline.prototype.toGeoJSON = function () {
      var t = !T.Polyline.ct(this.ht),
        i = T.GeoJSON.ZY(this.ht, t ? 1 : 0);
      return T.GeoJSON.CY(this, {
        type: (t ? "Multi" : "") + "LineString",
        coordinates: i
      });
    }),
    (T.Polygon.prototype.toGeoJSON = function () {
      var t = !T.Polyline.ct(this.ht),
        i = t && !T.Polyline.ct(this.ht[0]),
        n = T.GeoJSON.ZY(this.ht, i ? 2 : t ? 1 : 0, !0);
      return (
        t || (n = [n]),
        T.GeoJSON.CY(this, {
          type: (i ? "Multi" : "") + "Polygon",
          coordinates: n
        })
      );
    }),
    T.LayerGroup.M({
      VY: function () {
        var t = [];
        return (
          this.bE(function (i) {
            t.push(i.toGeoJSON().geometry.coordinates);
          }),
          T.GeoJSON.CY(this, {
            type: "MultiPoint",
            coordinates: t
          })
        );
      },
      toGeoJSON: function () {
        var t = this.feature && this.feature.geometry && this.feature.geometry.type;
        if ("MultiPoint" === t) return this.VY();
        var i = "GeometryCollection" === t,
          n = [];
        return (
          this.bE(function (t) {
            if (t.toGeoJSON) {
              var e = t.toGeoJSON();
              n.push(i ? e.geometry : T.GeoJSON.kY(e));
            }
          }),
          i
            ? T.GeoJSON.CY(this, {
                geometries: n,
                type: "GeometryCollection"
              })
            : {
                type: "FeatureCollection",
                features: n
              }
        );
      }
    }),
    (T.cY = function (t, i) {
      return new T.GeoJSON(t, i);
    }),
    (T.BY = T.cY);
  var eventsKey = "_tdt_events";
  (T.oq = {
    on: function (t, i, n, e) {
      if ("object" == typeof i) for (var o in i) this.QQ(t, o, i[o], n);
      else {
        i = T.S.j(i);
        for (var s = 0, r = i.length; s < r; s++) this.QQ(t, i[s], n, e);
      }
      return this;
    },
    off: function (t, i, n, e) {
      if ("object" == typeof i) for (var o in i) this.WQ(t, o, i[o], n);
      else {
        i = T.S.j(i);
        for (var s = 0, r = i.length; s < r; s++) this.WQ(t, i[s], n, e);
      }
      return this;
    },
    QQ: function (t, i, n, e) {
      var o = i + T.d(n) + (e ? "_" + T.d(e) : "");
      if (t[eventsKey] && t[eventsKey][o]) return this;
      var s = function (i) {
          return n.call(e || t, i || window.event);
        },
        r = s;
      return (
        T.oQ.pointer && 0 === i.indexOf("touch")
          ? this.vY(t, i, s, o)
          : T.oQ.touch && "dblclick" === i && this.NY
          ? this.NY(t, s, o)
          : "addEventListener" in t
          ? "mousewheel" === i
            ? t.addEventListener("onwheel" in t ? "wheel" : "mousewheel", s, !1)
            : "mouseenter" === i || "mouseleave" === i
            ? ((s = function (i) {
                (i = i || window.event), T.oq.iE(t, i) && r(i);
              }),
              t.addEventListener("mouseenter" === i ? "mouseover" : "mouseout", s, !1))
            : ("click" === i &&
                T.oQ.android &&
                (s = function (t) {
                  return T.oq.bY(t, r);
                }),
              t.addEventListener(i, s, !1))
          : "attachEvent" in t && t.attachEvent("on" + i, s),
        (t[eventsKey] = t[eventsKey] || {}),
        (t[eventsKey][o] = s),
        this
      );
    },
    WQ: function (t, i, n, e) {
      var o = i + T.d(n) + (e ? "_" + T.d(e) : ""),
        s = t[eventsKey] && t[eventsKey][o];
      return s
        ? (T.oQ.pointer && 0 === i.indexOf("touch")
            ? this.removePointerListener(t, i, o)
            : T.oQ.touch && "dblclick" === i && this.MY
            ? this.MY(t, o)
            : "removeEventListener" in t
            ? "mousewheel" === i
              ? t.removeEventListener("onwheel" in t ? "wheel" : "mousewheel", s, !1)
              : t.removeEventListener("mouseenter" === i ? "mouseover" : "mouseleave" === i ? "mouseout" : i, s, !1)
            : "detachEvent" in t && t.detachEvent("on" + i, s),
          (t[eventsKey][o] = null),
          this)
        : this;
    },
    stopPropagation: function (t) {
      return (
        t.stopPropagation
          ? t.stopPropagation()
          : t.originalEvent
          ? (t.originalEvent._stopped = !0)
          : (t.cancelBubble = !0),
        T.oq.OE(t),
        this
      );
    },
    IT: function (t) {
      return T.oq.on(t, "mousewheel", T.oq.stopPropagation);
    },
    iT: function (t) {
      var i = T.oq.stopPropagation;
      return (
        T.oq.on(t, T.nY.START.join(" "), i),
        T.oq.on(t, {
          click: T.oq.hY,
          dblclick: i
        })
      );
    },
    preventDefault: function (t) {
      return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), this;
    },
    uw: function (t) {
      return T.oq.preventDefault(t).stopPropagation(t);
    },
    Vw: function (t, i) {
      if (!i) return new T.Point(t.clientX, t.clientY);
      var n = i.getBoundingClientRect();
      return new T.Point(t.clientX - n.left - i.clientLeft, t.clientY - n.top - i.clientTop);
    },
    _wheelPxFactor: T.oQ.win && T.oQ.chrome ? 2 : T.oQ.gecko ? window.PQ : 1,
    _Y: function (t) {
      return T.oQ.edge
        ? t.wheelDeltaY / 2
        : t.deltaY && 0 === t.deltaMode
        ? -t.deltaY / T.oq._wheelPxFactor
        : t.deltaY && 1 === t.deltaMode
        ? 20 * -t.deltaY
        : t.deltaY && 2 === t.deltaMode
        ? 60 * -t.deltaY
        : t.deltaX || t.deltaZ
        ? 0
        : t.wheelDelta
        ? (t.wheelDeltaY || t.wheelDelta) / 2
        : t.detail && Math.abs(t.detail) < 32765
        ? 20 * -t.detail
        : t.detail
        ? (t.detail / -32765) * 60
        : 0;
    },
    mY: {},
    hY: function (t) {
      T.oq.mY[t.type] = !0;
    },
    OE: function (t) {
      var i = this.mY[t.type];
      return (this.mY[t.type] = !1), i;
    },
    iE: function (t, i) {
      var n = i.relatedTarget;
      if (!n) return !0;
      try {
        for (; n && n !== t; ) n = n.parentNode;
      } catch (AO) {
        return !1;
      }
      return n !== t;
    },
    bY: function (t, i) {
      var n = t.timeStamp || (t.originalEvent && t.originalEvent.timeStamp),
        e = T.oq.QU && n - T.oq.QU;
      return (e && e > 100 && e < 500) || (t.target.qU && !t.uE) ? void T.oq.uw(t) : ((T.oq.QU = n), void i(t));
    }
  }),
    (T.oq.addListener = T.oq.on),
    (T.oq.removeListener = T.oq.off),
    (T.nY = T.m.extend({
      options: {
        clickTolerance: 3
      },
      v: {
        START: T.oQ.touch ? ["touchstart", "mousedown"] : ["mousedown"],
        END: {
          mousedown: "mouseup",
          touchstart: "touchend",
          pointerdown: "touchend",
          MSPointerDown: "touchend"
        },
        MOVE: {
          mousedown: "mousemove",
          touchstart: "touchmove",
          pointerdown: "touchmove",
          MSPointerDown: "touchmove"
        }
      },
      initialize: function (t, i, n) {
        (this.WU = t), (this.wU = i || t), (this.EU = n);
      },
      enable: function () {
        this.eU || (T.oq.on(this.wU, T.nY.START.join(" "), this.RU, this), (this.eU = !0));
      },
      disable: function () {
        this.eU && (T.oq.off(this.wU, T.nY.START.join(" "), this.RU, this), (this.eU = !1), (this.sw = !1));
      },
      RU: function (t) {
        if (
          !t.uE &&
          this.eU &&
          ((this.sw = !1),
          !T._Q.Eq(this.WU, "tdt-zoom-anim") &&
            !(T.nY._dragging || t.shiftKey || (1 !== t.which && 1 !== t.button && !t.touches)) &&
            this.eU &&
            ((T.nY._dragging = !0), this.EU && T._Q.Sq(this.WU), T._Q.Aq(), T._Q.Oq(), !this.rU))
        ) {
          this.wQ("down");
          var i = t.touches ? t.touches[0] : t;
          (this.TU = new T.Point(i.clientX, i.clientY)),
            T.oq.on(document, T.nY.MOVE[t.type], this.fe, this).on(document, T.nY.END[t.type], this.tU, this);
        }
      },
      fe: function (t) {
        if (!t.uE && this.eU) {
          if (t.touches && t.touches.length > 1) return void (this.sw = !0);
          var i = t.touches && 1 === t.touches.length ? t.touches[0] : t,
            n = new T.Point(i.clientX, i.clientY),
            e = n.sQ(this.TU);
          (e.x || e.y) &&
            (Math.abs(e.x) + Math.abs(e.y) < this.options.clickTolerance ||
              (T.oq.preventDefault(t),
              this.sw ||
                (this.wQ("dragstart"),
                (this.sw = !0),
                (this.YU = T._Q.getPosition(this.WU).sQ(e)),
                T._Q.Rq(document.body, "tdt-dragging"),
                (this.UU = t.target || t.srcElement),
                window.SVGElementInstance &&
                  this.UU instanceof SVGElementInstance &&
                  (this.UU = this.UU.correspondingUseElement),
                T._Q.Rq(this.UU, "tdt-drag-target")),
              (this.uU = this.YU.AQ(e)),
              (this.rU = !0),
              T.S.V(this.IU),
              (this.iU = t),
              (this.IU = T.S.C(this.WT, this, !0))));
        }
      },
      WT: function () {
        var t = {
          originalEvent: this.iU
        };
        this.wQ("OU", t), T._Q.setPosition(this.WU, this.uU), this.wQ("drag", t);
      },
      tU: function (t) {
        if (!t.uE && this.eU) {
          T._Q.Tq(document.body, "tdt-dragging"), this.UU && (T._Q.Tq(this.UU, "tdt-drag-target"), (this.UU = null));
          for (var i in T.nY.MOVE)
            T.oq.off(document, T.nY.MOVE[i], this.fe, this).off(document, T.nY.END[i], this.tU, this);
          T._Q.aq(),
            T._Q.Pq(),
            this.sw && this.rU && (T.S.V(this.IU), this.wQ("dragend", {})),
            (this.rU = !1),
            (T.nY._dragging = !1);
        }
      }
    })),
    (T.Kr = T.c.extend({
      initialize: function (t) {
        this.jE = t;
      },
      enable: function () {
        return this.eU ? this : ((this.eU = !0), this.oU(), this);
      },
      disable: function () {
        return this.eU ? ((this.eU = !1), this.Ar(), this) : this;
      },
      aE: function () {
        return !!this.eU;
      }
    })),
    T.Map.n({
      AE: !0,
      PU: !T.oQ.android23,
      pU: 3400,
      AU: 1 / 0,
      aU: 0.2,
      SU: !0,
      sU: 0
    }),
    (T.Map.DU = T.Kr.extend({
      oU: function () {
        if (!this.dU) {
          var t = this.jE;
          (this.dU = new T.nY(t.ow, t.Ow)),
            this.dU.on(
              {
                down: this.RU,
                dragstart: this.FU,
                drag: this.fU,
                dragend: this.GU
              },
              this
            ),
            this.dU.on("OU", this.gU, this),
            t.options.SU && (this.dU.on("OU", this.HU, this), t.on("zoomend", this.hU, this), t.sE(this.hU, this));
        }
        T._Q.Rq(this.jE.Ow, "tdt-grab tdt-touch-drag"), this.dU.enable(), (this.JU = []), (this.jU = []);
      },
      Ar: function () {
        T._Q.Tq(this.jE.Ow, "tdt-grab"), T._Q.Tq(this.jE.Ow, "tdt-touch-drag"), this.dU.disable();
      },
      moved: function () {
        return this.dU && this.dU.sw;
      },
      moving: function () {
        return this.dU && this.dU.rU;
      },
      RU: function () {
        this.jE.Iw();
      },
      FU: function () {
        var t = this.jE;
        if (this.jE.options.maxBounds && this.jE.options.sU) {
          var i = T.jq(this.jE.options.maxBounds);
          (this.KU = T.cQ(this.jE.BW(i.Zq()).fQ(-1), this.jE.BW(i.cq()).fQ(-1).AQ(this.jE.getSize()))),
            (this.kU = Math.min(1, Math.max(0, this.jE.options.sU)));
        } else this.KU = null;
        t.wQ("movestart").wQ("dragstart"), t.options.PU && ((this.JU = []), (this.jU = []));
      },
      fU: function (t) {
        if (this.jE.options.PU) {
          var i = (this.LU = +new Date()),
            n = (this.lU = this.dU.ZU || this.dU.uU);
          this.JU.push(n), this.jU.push(i), i - this.jU[0] > 50 && (this.JU.shift(), this.jU.shift());
        }
        this.jE.wQ("move", t).wQ("drag", t);
      },
      hU: function () {
        var t = this.jE.getSize().dQ(2),
          i = this.jE.kw([0, 0]);
        (this.CU = i.sQ(t).x), (this.VU = this.jE.Kw().getSize().x);
      },
      cU: function (t, i) {
        return t - (t - i) * this.kU;
      },
      gU: function () {
        if (this.kU && this.KU) {
          var t = this.dU.uU.sQ(this.dU.YU),
            i = this.KU;
          t.x < i.min.x && (t.x = this.cU(t.x, i.min.x)),
            t.y < i.min.y && (t.y = this.cU(t.y, i.min.y)),
            t.x > i.max.x && (t.x = this.cU(t.x, i.max.x)),
            t.y > i.max.y && (t.y = this.cU(t.y, i.max.y)),
            (this.dU.uU = this.dU.YU.AQ(t));
        }
      },
      HU: function () {
        var t = this.VU,
          i = Math.round(t / 2),
          n = this.CU,
          e = this.dU.uU.x,
          o = ((e - i + n) % t) + i - n,
          s = ((e + i + n) % t) - i - n,
          r = Math.abs(o + n) < Math.abs(s + n) ? o : s;
        (this.dU.ZU = this.dU.uU.pQ()), (this.dU.uU.x = r);
      },
      GU: function (t) {
        var i = this.jE,
          n = i.options,
          e = !n.PU || this.jU.length < 2;
        if ((i.wQ("dragend", t), e)) i.wQ("moveend");
        else {
          var o = this.lU.sQ(this.JU[0]),
            s = (this.LU - this.jU[0]) / 1e3,
            r = n.aU,
            h = o.fQ(r / s),
            a = h.distanceTo([0, 0]),
            u = Math.min(n.AU, a),
            c = h.fQ(u / a),
            l = u / (n.pU * r),
            f = c.fQ(-l / 2).hQ();
          f.x || f.y
            ? ((f = i.fE(f, i.options.maxBounds)),
              T.S.C(function () {
                i.panBy(f, {
                  duration: l,
                  aU: r,
                  BU: !0,
                  Tw: !0
                });
              }))
            : i.wQ("moveend");
        }
      }
    })),
    T.Map.M({
      enableDrag: function () {
        this.AE.enable();
      },
      disableDrag: function () {
        this.AE.disable();
      },
      isDrag: function () {
        return this.AE.eU;
      },
      enableInertia: function () {
        this.options.PU = !0;
      },
      disableInertia: function () {
        this.options.PU = !1;
      },
      isInertia: function () {
        return this.options.PU;
      }
    }),
    T.Map._("iw", "AE", T.Map.DU),
    T.Map.n({
      vU: !0
    }),
    (T.Map.NU = T.Kr.extend({
      initialize: function (t) {
        (this.jE = t),
          (this.Ow = t.Ow),
          (this.overlayPane = t.aw.overlayPane),
          (this._w = t.aw._w),
          (this.markerPane = t.aw.markerPane),
          (this.infoWindowPane = t.aw.infoWindowPane);
      },
      oU: function () {
        T.oq.on(this.jE, "zoomstart", this.IY, this), T.oq.on(this.jE, "zoomend", this.hU, this);
      },
      Ar: function () {
        T.oq.off(this.jE, "zoomstart", this.IY), T.oq.off(this.jE, "zoomend", this.hU);
      },
      IY: function (t) {
        this.jE.CW &&
          ((this.overlayPane.style.visibility = "hidden"),
          (this._w.style.visibility = "hidden"),
          (this.markerPane.style.visibility = "hidden"),
          (this.infoWindowPane.style.visibility = "hidden"));
      },
      hU: function (t) {
        this.jE.CW &&
          ((this.overlayPane.style.visibility = "inherit"),
          (this._w.style.visibility = "inherit"),
          (this.markerPane.style.visibility = "inherit"),
          (this.infoWindowPane.style.visibility = "inherit"));
      }
    })),
    T.Map._("iw", "vU", T.Map.NU),
    T.Map.n({
      bU: !0
    }),
    (T.Map.MU = T.Kr.extend({
      oU: function () {
        this.jE.on("dblclick", this.nU, this);
      },
      Ar: function () {
        this.jE.off("dblclick", this.nU, this);
      },
      nU: function (t) {
        var i = this.jE,
          n = i.getZoom(),
          e = i.options.aW,
          o = t.originalEvent.shiftKey ? n - e : n + e;
        return !(o > i.getMaxZoom()) && void ("center" === i.options.bU ? i.setZoom(o) : i.VW(t.containerPoint, o));
      }
    })),
    T.Map.M({
      enableDoubleClickZoom: function () {
        this.bU.enable();
      },
      disableDoubleClickZoom: function () {
        this.bU.disable();
      },
      isDoubleClickZoom: function () {
        return this.bU.eU;
      }
    }),
    T.Map._("iw", "bU", T.Map.MU),
    T.Map.n({
      _U: !0,
      mU: 40,
      Qu: 70
    }),
    (T.Map.qu = T.Kr.extend({
      oU: function () {
        T.oq.on(this.jE.Ow, "mousewheel", this.Wu, this), (this.wu = 0);
      },
      Ar: function () {
        T.oq.off(this.jE.Ow, "mousewheel", this.Wu, this);
      },
      Wu: function (t) {
        var i = T.oq._Y(t),
          n = this.jE.options.mU;
        (this.wu += i), (this.Eu = this.jE.Cw(t)), this.eu || (this.eu = +new Date());
        var e = Math.max(n - (+new Date() - this.eu), 0);
        clearTimeout(this.Ru), (this.Ru = setTimeout(T.D(this.ru, this), e)), T.oq.uw(t);
      },
      ru: function () {
        var t = this.jE,
          i = t.getZoom(),
          n = this.jE.options.AW || 0;
        t.Iw();
        var e = this.wu / (4 * this.jE.options.Qu),
          o = (4 * Math.log(2 / (1 + Math.exp(-Math.abs(e))))) / Math.LN2,
          s = n ? Math.ceil(o / n) * n : o,
          r = t.GW(i + (this.wu > 0 ? s : -s)) - i;
        (this.wu = 0), (this.eu = null), r && ("center" === t.options._U ? t.setZoom(i + r) : t.VW(this.Eu, i + r));
      }
    })),
    T.Map.M({
      enableScrollWheelZoom: function () {
        this._U.enable();
      },
      disableScrollWheelZoom: function () {
        this._U.disable();
      },
      isScrollWheelZoom: function () {
        return this._U.eU;
      }
    }),
    T.Map._("iw", "_U", T.Map.qu),
    T.extend(T.oq, {
      Tu: T.oQ.msPointer ? "MSPointerDown" : T.oQ.pointer ? "pointerdown" : "touchstart",
      tu: T.oQ.msPointer ? "MSPointerUp" : T.oQ.pointer ? "pointerup" : "touchend",
      NY: function (t, i, n) {
        function e(t) {
          var i;
          if (((i = T.oQ.pointer ? T.oq.Yu : t.touches.length), !(i > 1))) {
            var n = Date.now(),
              e = n - (s || n);
            (r = t.touches ? t.touches[0] : t), (h = e > 0 && e <= a), (s = n);
          }
        }
        function o() {
          if (h && !r.cancelBubble) {
            if (T.oQ.pointer) {
              var t,
                n,
                e = {};
              for (n in r) (t = r[n]), (e[n] = t && t.D ? t.D(r) : t);
              r = e;
            }
            (r.type = "dblclick"), i(r), (s = null);
          }
        }
        var s,
          r,
          h = !1,
          a = 250,
          u = "_tdt_",
          c = this.Tu,
          l = this.tu;
        return (
          (t[u + c + n] = e),
          (t[u + l + n] = o),
          (t[u + "dblclick" + n] = i),
          t.addEventListener(c, e, !1),
          t.addEventListener(l, o, !1),
          T.oQ.edge || t.addEventListener("dblclick", i, !1),
          this
        );
      },
      MY: function (t, i) {
        var n = "_tdt_",
          e = t[n + this.Tu + i],
          o = t[n + this.tu + i],
          s = t[n + "dblclick" + i];
        return (
          t.removeEventListener(this.Tu, e, !1),
          t.removeEventListener(this.tu, o, !1),
          T.oQ.edge || t.removeEventListener("dblclick", s, !1),
          this
        );
      }
    }),
    T.extend(T.oq, {
      Uu: T.oQ.msPointer ? "MSPointerDown" : "pointerdown",
      uu: T.oQ.msPointer ? "MSPointerMove" : "pointermove",
      Iu: T.oQ.msPointer ? "MSPointerUp" : "pointerup",
      iu: T.oQ.msPointer ? "MSPointerCancel" : "pointercancel",
      TAG_WHITE_LIST: ["INPUT", "SELECT", "OPTION"],
      Ou: {},
      Yu: 0,
      vY: function (t, i, n, e) {
        return (
          "touchstart" === i
            ? this.ou(t, n, e)
            : "touchmove" === i
            ? this.Pu(t, n, e)
            : "touchend" === i && this.pu(t, n, e),
          this
        );
      },
      removePointerListener: function (t, i, n) {
        var e = t["_tdt_" + i + n];
        return (
          "touchstart" === i
            ? t.removeEventListener(this.Uu, e, !1)
            : "touchmove" === i
            ? t.removeEventListener(this.uu, e, !1)
            : "touchend" === i && (t.removeEventListener(this.Iu, e, !1), t.removeEventListener(this.iu, e, !1)),
          this
        );
      },
      ou: function (t, i, n) {
        var e = T.D(function (t) {
          if ("mouse" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_MOUSE) {
            if (!(this.TAG_WHITE_LIST.indexOf(t.target.tagName) < 0)) return;
            T.oq.preventDefault(t);
          }
          this.Au(t, i);
        }, this);
        if (((t["_tdt_touchstart" + n] = e), t.addEventListener(this.Uu, e, !1), !this.au)) {
          var o = T.D(this.Su, this);
          document.documentElement.addEventListener(this.Uu, T.D(this.su, this), !0),
            document.documentElement.addEventListener(this.uu, T.D(this.Du, this), !0),
            document.documentElement.addEventListener(this.Iu, o, !0),
            document.documentElement.addEventListener(this.iu, o, !0),
            (this.au = !0);
        }
      },
      su: function (t) {
        (this.Ou[t.pointerId] = t), this.Yu++;
      },
      Du: function (t) {
        this.Ou[t.pointerId] && (this.Ou[t.pointerId] = t);
      },
      Su: function (t) {
        delete this.Ou[t.pointerId], this.Yu--;
      },
      Au: function (t, i) {
        t.touches = [];
        for (var n in this.Ou) t.touches.push(this.Ou[n]);
        (t.changedTouches = [t]), i(t);
      },
      Pu: function (t, i, n) {
        var e = T.D(function (t) {
          ((t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType) || 0 !== t.buttons) && this.Au(t, i);
        }, this);
        (t["_tdt_touchmove" + n] = e), t.addEventListener(this.uu, e, !1);
      },
      pu: function (t, i, n) {
        var e = T.D(function (t) {
          this.Au(t, i);
        }, this);
        (t["_tdt_touchend" + n] = e), t.addEventListener(this.Iu, e, !1), t.addEventListener(this.iu, e, !1);
      }
    }),
    T.Map.n({
      du: !0
    }),
    (T.Map.Fu = T.Kr.extend({
      initialize: function (t) {
        (this.jE = t), (this.Ow = t.Ow), (this.fu = t.aw.overlayPane);
      },
      oU: function () {
        T.oq.on(this.Ow, "touchstart", this.Gu, this),
          T.oq.on(this.Ow, "touchmove", this.gu, this),
          T.oq.on(this.Ow, "touchend", this.Hu, this);
      },
      Ar: function () {
        T.oq.off(this.Ow, "touchstart", this.Gu),
          T.oq.off(this.Ow, "touchmove", this.gu),
          T.oq.off(this.Ow, "touchend", this.Hu);
      },
      Gu: function (t) {
        if (this.jE.CW) {
          var i = "touchstart";
          this.jE.wQ(i, this.hu(t));
          var n = this;
          return (
            (this.timer = setTimeout(function () {
              n.jE.wQ("longpress", n.hu(t));
            }, 600)),
            !1
          );
        }
      },
      gu: function (t) {
        if (this.jE.CW) {
          var i = "touchmove";
          this.jE.wQ(i, this.hu(t));
        }
      },
      Hu: function (t) {
        if (this.jE.CW) {
          var i = "touchend";
          return this.jE.wQ(i, this.hu(t)), clearTimeout(this.timer), !1;
        }
      },
      hu: function (t) {
        if (t.touches && 0 != t.changedTouches.length) {
          var i = this.jE.Cw(t.changedTouches[0]),
            n = this.jE.Lw(i),
            e = this.jE.Dw(n),
            o = {
              lnglat: e,
              layerPoint: n,
              containerPoint: i,
              originalEvent: t
            };
          return o;
        }
      }
    })),
    T.Map._("iw", "du", T.Map.Fu),
    T.Map.n({
      Ju: T.oQ.touch && !T.oQ.android23,
      ju: !1
    }),
    (T.Map.Ku = T.Kr.extend({
      oU: function () {
        T._Q.Rq(this.jE.Ow, "tdt-touch-zoom"), T.oq.on(this.jE.Ow, "touchstart", this.Gu, this);
      },
      Ar: function () {
        T._Q.Tq(this.jE.Ow, "tdt-touch-zoom"), T.oq.off(this.jE.Ow, "touchstart", this.Gu, this);
      },
      Gu: function (t) {
        var i = this.jE;
        if (t.touches && 2 === t.touches.length && !i.ER && !this.ku) {
          var n = i.Cw(t.touches[0]),
            e = i.Cw(t.touches[1]);
          (this.Lu = i.getSize().FQ(2)),
            (this.lu = i.vW(this.Lu)),
            "center" !== i.options.Ju && (this._pinchStartLatLng = i.vW(n.AQ(e).FQ(2))),
            (this._startDist = n.distanceTo(e)),
            (this.Zu = i.getZoom()),
            (this.sw = !1),
            (this.ku = !0),
            i.Iw(),
            T.oq.on(document, "touchmove", this.gu, this).on(document, "touchend", this.Hu, this),
            T.oq.preventDefault(t);
        }
      },
      gu: function (t) {
        if (t.touches && 2 === t.touches.length && this.ku) {
          var i = this.jE,
            n = i.Cw(t.touches[0]),
            e = i.Cw(t.touches[1]),
            o = n.distanceTo(e) / this._startDist;
          if (
            ((this.fW = i.gw(o, this.Zu)),
            !i.options.ju &&
              ((this.fW < i.getMinZoom() && o < 1) || (this.fW > i.getMaxZoom() && o > 1)) &&
              (this.fW = i.GW(this.fW)),
            "center" === i.options.Ju)
          ) {
            if (((this.BT = this.lu), 1 === o)) return;
          } else {
            var s = n.aQ(e).FQ(2).DQ(this.Lu);
            if (1 === o && 0 === s.x && 0 === s.y) return;
            this.BT = i._q(i.nq(this._pinchStartLatLng, this.fW).sQ(s), this.fW);
          }
          this.sw || (i.qE(!0), (this.sw = !0)), T.S.V(this.IU);
          var r = T.D(i.QE, i, this.BT, this.fW, {
            pinch: !0,
            hQ: !1
          });
          (this.IU = T.S.C(r, this, !0)), T.oq.preventDefault(t);
        }
      },
      Hu: function () {
        return this.sw && this.ku
          ? ((this.ku = !1),
            T.S.V(this.IU),
            T.oq.off(document, "touchmove", this.gu).off(document, "touchend", this.Hu),
            void (this.jE.options.Nr
              ? this.jE.ge(this.BT, this.jE.GW(this.fW), !0, this.jE.options.snapZoom)
              : this.jE.ZW(this.BT, this.jE.GW(this.fW))))
          : void (this.ku = !1);
      }
    })),
    T.Map.M({
      enablePinchToZoom: function () {
        this.Ju.enable();
      },
      disablePinchToZoom: function () {
        this.Ju.disable();
      },
      isPinchToZoom: function () {
        return this.Ju.eU;
      }
    }),
    T.Map._("iw", "Ju", T.Map.Ku),
    T.Map.n({
      Cu: !0,
      Vu: 15
    }),
    (T.Map.cu = T.Kr.extend({
      oU: function () {
        T.oq.on(this.jE.Ow, "touchstart", this.RU, this);
      },
      Ar: function () {
        T.oq.off(this.jE.Ow, "touchstart", this.RU, this);
      },
      RU: function (t) {
        if (t.touches) {
          if ((T.oq.preventDefault(t), (this.Bu = !0), t.touches.length > 1))
            return (this.Bu = !1), void clearTimeout(this.vu);
          var i = t.touches[0],
            n = i.target;
          (this.YU = this.uU = new T.Point(i.clientX, i.clientY)),
            n.tagName && "a" === n.tagName.toLowerCase() && T._Q.Rq(n, "tdt-active"),
            (this.vu = setTimeout(
              T.D(function () {
                this.Nu() && ((this.Bu = !1), this.tU(), this.bu("contextmenu", i));
              }, this),
              1e3
            )),
            this.bu("mousedown", i),
            T.oq.on(
              document,
              {
                touchmove: this.fe,
                touchend: this.tU
              },
              this
            );
        }
      },
      tU: function (t) {
        if (
          (clearTimeout(this.vu),
          T.oq.off(
            document,
            {
              touchmove: this.fe,
              touchend: this.tU
            },
            this
          ),
          this.Bu && t && t.changedTouches)
        ) {
          var i = t.changedTouches[0],
            n = i.target;
          n && n.tagName && "a" === n.tagName.toLowerCase() && T._Q.Tq(n, "tdt-active"),
            this.bu("mouseup", i),
            this.Nu() && this.bu("click", i);
        }
      },
      Nu: function () {
        return this.uU.distanceTo(this.YU) <= this.jE.options.Vu;
      },
      fe: function (t) {
        var i = t.touches[0];
        (this.uU = new T.Point(i.clientX, i.clientY)), this.bu("mousemove", i);
      },
      bu: function (t, i) {
        var n = document.createEvent("MouseEvents");
        (n.uE = !0),
          (i.target.qU = !0),
          n.initMouseEvent(t, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null),
          i.target.dispatchEvent(n);
      }
    })),
    T.oQ.touch && !T.oQ.pointer && T.Map._("iw", "Cu", T.Map.cu),
    T.Map.n({
      SE: !0
    }),
    (T.Map.Mu = T.Kr.extend({
      initialize: function (t) {
        (this.jE = t), (this.Ow = t.Ow), (this.fu = t.aw.overlayPane);
      },
      oU: function () {
        T.oq.on(this.Ow, "mousedown", this.nu, this);
      },
      Ar: function () {
        T.oq.off(this.Ow, "mousedown", this.nu, this);
      },
      moved: function () {
        return this.sw;
      },
      _u: function () {
        this.sw = !1;
      },
      nu: function (t) {
        return (
          !(!t.shiftKey || (1 !== t.which && 1 !== t.button)) &&
          (this._u(),
          T._Q.Oq(),
          T._Q.Aq(),
          (this.TU = this.jE.Cw(t)),
          void T.oq.on(
            document,
            {
              contextmenu: T.oq.uw,
              mousemove: this.PY,
              mouseup: this.mu,
              keydown: this.QI
            },
            this
          ))
        );
      },
      PY: function (t) {
        this.sw ||
          ((this.sw = !0),
          (this.qI = T._Q.s("div", "tdt-zoom-box", this.Ow)),
          T._Q.Rq(this.Ow, "tdt-crosshair"),
          this.jE.wQ("boxzoomstart")),
          (this.eY = this.jE.Cw(t));
        var i = new T.ZQ(this.eY, this.TU),
          n = i.getSize();
        T._Q.setPosition(this.qI, i.min), (this.qI.style.width = n.x + "px"), (this.qI.style.height = n.y + "px");
      },
      WI: function () {
        this.sw && (T._Q.Qq(this.qI), T._Q.Tq(this.Ow, "tdt-crosshair")),
          T._Q.Pq(),
          T._Q.aq(),
          T.oq.off(
            document,
            {
              contextmenu: T.oq.uw,
              mousemove: this.PY,
              mouseup: this.mu,
              keydown: this.QI
            },
            this
          );
      },
      mu: function (t) {
        if ((1 === t.which || 1 === t.button) && (this.WI(), this.sw)) {
          setTimeout(T.D(this._u, this), 0);
          var i = new T.Kq(this.jE.vW(this.TU), this.jE.vW(this.eY));
          this.jE._W(i).wQ("boxzoomend", {
            boxZoomBounds: i
          });
        }
      },
      QI: function (t) {
        27 === t.keyCode && this.WI();
      }
    })),
    T.Map._("iw", "SE", T.Map.Mu),
    T.Map.n({
      Ir: !0,
      wI: 80
    }),
    (T.Map.EI = T.Kr.extend({
      keyCodes: {
        left: [37],
        right: [39],
        down: [40],
        up: [38],
        zoomIn: [187, 107, 61, 171],
        zoomOut: [189, 109, 54, 173]
      },
      initialize: function (t) {
        (this.jE = t), this.eI(t.options.wI), this.RI(t.options.aW);
      },
      oU: function () {
        var t = this.jE.Ow;
        t.tabIndex <= 0 && (t.tabIndex = "0"),
          T.oq.on(
            t,
            {
              focus: this.rI,
              blur: this.TI,
              mousedown: this.nu
            },
            this
          ),
          this.jE.on(
            {
              focus: this.tI,
              blur: this.YI
            },
            this
          );
      },
      Ar: function () {
        this.YI(),
          T.oq.off(
            this.jE.Ow,
            {
              focus: this.rI,
              blur: this.TI,
              mousedown: this.nu
            },
            this
          ),
          this.jE.off(
            {
              focus: this.tI,
              blur: this.YI
            },
            this
          );
      },
      nu: function () {
        if (!this.UI) {
          var t = document.body,
            i = document.documentElement,
            n = t.scrollTop || i.scrollTop,
            e = t.scrollLeft || i.scrollLeft;
          this.jE.Ow.focus(), window.scrollTo(e, n);
        }
      },
      rI: function () {
        (this.UI = !0), this.jE.wQ("focus");
      },
      TI: function () {
        (this.UI = !1), this.jE.wQ("blur");
      },
      eI: function (t) {
        var i,
          n,
          e = (this._panKeys = {}),
          o = this.keyCodes;
        for (i = 0, n = o.left.length; i < n; i++) e[o.left[i]] = [-1 * t, 0];
        for (i = 0, n = o.right.length; i < n; i++) e[o.right[i]] = [t, 0];
        for (i = 0, n = o.down.length; i < n; i++) e[o.down[i]] = [0, t];
        for (i = 0, n = o.up.length; i < n; i++) e[o.up[i]] = [0, -1 * t];
      },
      RI: function (t) {
        var i,
          n,
          e = (this.uI = {}),
          o = this.keyCodes;
        for (i = 0, n = o.zoomIn.length; i < n; i++) e[o.zoomIn[i]] = t;
        for (i = 0, n = o.zoomOut.length; i < n; i++) e[o.zoomOut[i]] = -t;
      },
      tI: function () {
        T.oq.on(document, "keydown", this.QI, this);
      },
      YI: function () {
        T.oq.off(document, "keydown", this.QI, this);
      },
      QI: function (t) {
        if (!(t.altKey || t.ctrlKey || t.metaKey)) {
          var i,
            n = t.keyCode,
            e = this.jE;
          if (n in this._panKeys) {
            if (e.EE && e.EE.aT) return;
            (i = this._panKeys[n]),
              t.shiftKey && (i = T.SQ(i).fQ(3)),
              e.panBy(i),
              e.options.maxBounds && e.Ew(e.options.maxBounds);
          } else if (n in this.uI) e.setZoom(e.getZoom() + (t.shiftKey ? 3 : 1) * this.uI[n]);
          else {
            if (27 !== n) return;
            e.TT();
          }
          T.oq.uw(t);
        }
      }
    })),
    T.Map.M({
      enableKeyboard: function () {
        this.Ir.enable();
      },
      disableKeyboard: function () {
        this.Ir.disable();
      },
      isKeyboard: function () {
        return this.Ir.eU;
      }
    }),
    T.Map._("iw", "Ir", T.Map.EI),
    (T.Kr.jr = T.Kr.extend({
      initialize: function (t) {
        this.II = t;
      },
      oU: function () {
        var t = this.II.Fr;
        this.dU || (this.dU = new T.nY(t, t, !0)),
          this.dU
            .on(
              {
                dragstart: this.FU,
                drag: this.fU,
                dragend: this.GU
              },
              this
            )
            .enable(),
          T._Q.Rq(t, "tdt-marker-draggable");
      },
      Ar: function () {
        this.dU
          .off(
            {
              dragstart: this.FU,
              drag: this.fU,
              dragend: this.GU
            },
            this
          )
          .disable(),
          this.II.Fr && T._Q.Tq(this.II.Fr, "tdt-marker-draggable");
      },
      moved: function () {
        return this.dU && this.dU.sw;
      },
      FU: function () {
        this.II.TT().wQ("movestart").wQ("dragstart");
      },
      fU: function (t) {
        var i = this.II,
          n = i.Hr,
          e = T._Q.getPosition(i.Fr),
          o = i.jE.Dw(e);
        n && T._Q.setPosition(n, e), (i.or = o), (t.lnglat = o), i.wQ("move", t).wQ("drag", t);
      },
      GU: function (t) {
        var i = (this.II.Hr, T._Q.getPosition(this.II.Fr)),
          n = this.II.jE.Dw(i);
        (this.II.or = n), (t.lnglat = n), this.II.wQ("moveend").wQ("dragend", t);
      }
    })),
    (T.Control = T.c.extend({
      options: {
        position: T_ANCHOR_TOP_RIGHT
      },
      initialize: function (t) {
        T.setOptions(this, t);
      },
      getPosition: function () {
        return this.options.position;
      },
      setPosition: function (t) {
        var i = this.jE;
        return i && i.removeControl(this), (this.options.position = t), i && i.addControl(this), this;
      },
      getContainer: function () {
        return this.Ow;
      },
      show: function () {
        this.Ow.style.display = "block";
      },
      hide: function () {
        this.Ow.style.display = "none";
      },
      isHidden: function () {
        return "none" == this.Ow.style.display;
      },
      setOptions: function (t) {
        T.S.extend(this.options, t);
      },
      setOffset: function (t) {
        (this.point = t), (this.Ow.style.left = t.x + "px"), (this.Ow.style.top = t.y + "px");
      },
      getOffset: function () {
        return this.point;
      },
      addTo: function (t) {
        this.Qq(), (this.jE = t);
        var i = (this.Ow = this.onAdd(t)),
          n = this.getPosition(),
          e = t.iI[n];
        return (
          T._Q.Rq(i, "tdt-control"),
          n.indexOf("bottom") !== -1 ? e.insertBefore(i, e.firstChild) : e.appendChild(i),
          this
        );
      },
      Qq: function () {
        return this.jE ? (T._Q.Qq(this.Ow), this.onRemove && this.onRemove(this.jE), (this.jE = null), this) : this;
      },
      OI: function (t) {
        this.jE && t && t.screenX > 0 && t.screenY > 0 && this.jE.getContainer().focus();
      }
    })),
    (T.oI = function (t) {
      return new T.Control(t);
    }),
    T.Map.M({
      addControl: function (t) {
        return (
          t.addTo(this),
          this.wQ("addcontrol", {
            addcontrol: t
          }),
          this
        );
      },
      removeControl: function (t) {
        return (
          t.Qq(),
          this.wQ("removecontrol", {
            removecontrol: t
          }),
          this
        );
      },
      Mw: function () {
        function t(t, o) {
          var s = n + t + " " + n + o;
          i[t + o] = T._Q.s("div", s, e);
        }
        var i = (this.iI = {}),
          n = "tdt-",
          e = (this.PI = T._Q.s("div", n + "control-container", this.Ow));
        t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right");
      },
      Pw: function () {
        T._Q.Qq(this.PI);
      }
    }),
    (T.Control.Zoom = T.Control.extend({
      options: {
        position: T_ANCHOR_TOP_LEFT,
        zoomInText: "+",
        zoomInTitle: "放大",
        zoomOutText: "-",
        zoomOutTitle: "缩小"
      },
      onAdd: function (t) {
        var i = "tdt-control-zoom",
          n = T._Q.s("div", i + " tdt-bar"),
          e = this.options;
        return (
          (this.pI = this.AI(e.zoomInText, e.zoomInTitle, i + "-in", n, this.aI)),
          (this.SI = this.AI(e.zoomOutText, e.zoomOutTitle, i + "-out", n, this.sI)),
          this.DI(),
          t.on("zoomend zoomlevelschange", this.DI, this),
          t.on("minzoom", this.DI, this),
          t.on("maxzoom", this.DI, this),
          n
        );
      },
      onRemove: function (t) {
        t.off("zoomend zoomlevelschange", this.DI, this),
          t.off("minzoom", this.DI, this),
          t.off("maxzoom", this.DI, this);
      },
      disable: function () {
        return (this.dI = !0), this.DI(), this;
      },
      enable: function () {
        return (this.dI = !1), this.DI(), this;
      },
      aI: function (t) {
        this.dI || this.jE.zoomIn(this.jE.options.aW * (t.shiftKey ? 3 : 1));
      },
      sI: function (t) {
        this.dI || this.jE.zoomOut(this.jE.options.aW * (t.shiftKey ? 3 : 1));
      },
      AI: function (t, i, n, e, o) {
        var s = T._Q.s("a", n, e);
        return (
          (s.innerHTML = t),
          (s.href = "#"),
          (s.title = i),
          T.oq
            .on(s, "mousedown dblclick", T.oq.stopPropagation)
            .on(s, "click", T.oq.uw)
            .on(s, "click", o, this)
            .on(s, "click", this.OI, this),
          s
        );
      },
      DI: function () {
        var t = this.jE,
          i = "tdt-disabled";
        T._Q.Tq(this.pI, i),
          T._Q.Tq(this.SI, i),
          (this.dI || t.fW === t.getMinZoom()) && T._Q.Rq(this.SI, i),
          (this.dI || t.fW === t.getMaxZoom()) && T._Q.Rq(this.pI, i);
      }
    })),
    T.Map.n({
      FI: !1
    }),
    T.Map._(function () {
      this.options.FI && ((this.FI = new T.Control.Zoom()), this.addControl(this.FI));
    }),
    (T.oI.zoom = function (t) {
      return new T.Control.Zoom(t);
    }),
    (T.Control.fI = T.Control.extend({
      options: {
        position: T_ANCHOR_BOTTOM_LEFT,
        GI:
          '<div style="height:24px"><img style="background-color:transparent;background-image:url(' +
          T.w.e +
          "/logo.png);filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=image,src=" +
          T.w.e +
          '/logo.png);MozOpacity:1;opacity:1;" src="' +
          T.w.e +
          '/logo.png" width="53px" height="22px" opacity="0"/><div style="display:inline;position:relative;bottom:4px;white-space:nowrap;padding:0 0 0 3px;">GS(2022)3124号 - 甲测资字1100471</div></div>'
      },
      initialize: function (t) {
        T.setOptions(this, t), (this.gI = {});
      },
      onAdd: function (t) {
        (t.cE = this), (this.Ow = T._Q.s("div", "tdt-control-copyright")), T.oq && T.oq.iT(this.Ow);
        for (var i in t.hW) t.hW[i].VE && this.BE(t.hW[i].VE());
        return this.Oe(), this.Ow;
      },
      HI: function (t) {
        return (this.options.GI = t), this.Oe(), this;
      },
      BE: function (t) {
        return t ? (this.gI[t] || (this.gI[t] = 0), this.gI[t]++, this.Oe(), this) : this;
      },
      NE: function (t) {
        return t ? (this.gI[t] && (this.gI[t]--, this.Oe()), this) : this;
      },
      Oe: function () {
        if (this.jE) {
          var t = [];
          for (var i in this.gI) this.gI[i] && t.push(i);
          var n = [];
          this.options.GI && n.push(this.options.GI),
            t.length && n.push(t.join(", ")),
            (this.Ow.innerHTML = n.join(" | "));
        }
      }
    })),
    T.Map.n({
      cE: !0
    }),
    T.Map._(function () {
      this.options.cE && new T.Control.fI().addTo(this);
    }),
    (T.oI.Ue = function (t) {
      return new T.Control.fI(t);
    }),
    (T.Control.Copyright = T.Control.fI.extend({
      options: {
        position: T_ANCHOR_BOTTOM_RIGHT,
        GI: ""
      },
      initialize: function (t) {
        T.setOptions(this, t), (this.hI = []);
      },
      addCopyright: function (t) {
        if (this.hI["str" + t.id]) return void alert("copyright id 重复");
        this.hI.push(t), (this.hI["str" + t.id] = t);
        var i = T._Q.s("div", "tdt-control-copyright");
        T.oq && T.oq.iT(i), (i.innerHTML = t.content), (t._span = i), this.Ow.appendChild(i);
        var n = this.jE.getCenter();
        this.JI(n);
      },
      removeCopyright: function (t) {
        this.Ow.removeChild(this.hI["str" + t.id]._span), (this.hI["str" + t.id] = null);
        for (var i = 0; i < this.hI.length; i++)
          if (this.hI[i].id == t.id) {
            this.hI.splice(i, 1);
            break;
          }
      },
      JI: function (t) {
        if (this.jE) {
          if (t instanceof T.dq) var i = t;
          else var i = t.target.getCenter();
          for (var n = 0; n < this.hI.length; n++)
            this.hI[n].bounds &&
              (this.hI[n].bounds.contains(i)
                ? "none" == this.hI[n]._span.style.display && (this.hI[n]._span.style.display = "")
                : (this.hI[n]._span.style.display = "none"));
        }
      },
      getCopyright: function (t) {
        return this.hI["str" + t];
      },
      getCopyrightCollection: function () {
        return this.hI;
      },
      onAdd: function (t) {
        return (
          (this.jE = t),
          (t.cE = this),
          (this.Ow = T._Q.s("div", "tdt-control-copyright")),
          T.oq && T.oq.iT(this.Ow),
          this.Oe(),
          (this.jI = t.on("move", this.JI, this)),
          this.Ow
        );
      },
      onRemove: function (t) {
        T._Q.Qq(this.Ow), (this.Ow = null), t.off("move"), (this.jI = null);
      }
    })),
    (T.Control.DataSources = T.Control.extend({
      options: {
        position: T_ANCHOR_BOTTOM_LEFT
      },
      initialize: function (t) {
        T.setOptions(this, t), (this.dataSources = new T.DataSources());
      },
      onAdd: function (t) {
        return (
          (this.jE = t),
          (this.Ow = T._Q.s("div", "tdt-control-datasources")),
          T.oq && T.oq.iT(this.Ow),
          (this.Ow.innerHTML = '<div style="height:24px">数据来源：国家地理信息公共服务平台</div>'),
          this.Oe(),
          t.on("moveend", this.Oe, this),
          this.Ow
        );
      },
      onRemove: function () {
        T._Q.Qq(this.Ow), map.off("moveend", this.Oe, this), (this.Ow = null);
      },
      getLayerArray: function () {
        for (
          var t = this.jE.getPanes().tilePane, i = ["vec", "cva", "ter", "cta", "img", "cia"], n = [], e = 0;
          e < i.length;
          e++
        )
          t.innerHTML.indexOf(i[e]) !== -1 && n.push(i[e]);
        return n.join(",");
      },
      Oe: function () {
        if (this.jE) {
          var t = this.jE,
            i = this,
            n = t.getBounds(),
            e = n.getSouthWest(),
            o = n.getNorthEast(),
            s = "c";
          "EPSG:4326" != t.getCode() && (s = "w");
          var r = {
            level: t.getZoom(),
            bound: "'" + e.lng + "," + e.lat + "," + o.lng + "," + o.lat + "'",
            layers: this.getLayerArray(),
            projection: s
          };
          (this.dataSourcesInfo = ""),
            this.dataSources.search(r, function (t) {
              var n = "";
              null != t.ds && "null" != t.ds && (n = " & " + t.ds),
                (i.dataSourcesInfo = "国家地理信息公共服务平台" + n),
                (i.Ow.innerHTML = '<div style="height:24px">数据来源：国家地理信息公共服务平台' + n + "</div>");
            }),
            (this.dataSourcesInfo = i.dataSourcesInfo);
        }
      },
      setColor: function (t) {
        return (this.options.color = t), (this.Ow.style.color = t), this;
      },
      getDataSources: function () {
        return this.dataSourcesInfo;
      }
    })),
    (T.oI.datasources = function (t) {
      return new T.Control.DataSources(t);
    }),
    (T.Control.Scale = T.Control.extend({
      options: {
        position: T_ANCHOR_BOTTOM_LEFT,
        Cr: 100,
        KI: !0,
        kI: !0,
        type: 1
      },
      onAdd: function (t) {
        var i = "tdt-control-scale",
          n = T._Q.s("div", i),
          e = this.options;
        return this.LI(e, i + "-line", n), t.on(e.te ? "moveend" : "move", this.Oe, this), t.sE(this.Oe, this), n;
      },
      onRemove: function (t) {
        t.off(this.options.te ? "moveend" : "move", this.Oe, this);
      },
      setColor: function (t) {
        this.lI && ((this.lI.style.borderColor = t), (this.ZI.style.color = t)),
          this.CI && 1 == this.type && ((this.CI.style.borderColor = t), (this.VI.style.color = t));
      },
      LI: function (t, i, n) {
        (this.type = t.type),
          t.KI && ((this.lI = T._Q.s("div", i, n)), (this.ZI = T._Q.s("div", "tdt-control-scale-m", this.lI))),
          t.kI &&
            1 == t.type &&
            ((this.CI = T._Q.s("div", "tdt-control-scale-linebottom", n)),
            (this.VI = T._Q.s("div", "tdt-control-scale-i", this.CI)));
      },
      Oe: function () {
        var t = this.jE,
          i = t.getSize().y / 2,
          n = t.distance(t.vW([0, i]), t.vW([this.options.Cr, i]));
        this.cI(n);
      },
      cI: function (t) {
        this.options.KI && t && this.BI(t), this.options.kI && t && 1 == this.type && this.vI(t);
      },
      BI: function (t) {
        var i = this.NI(t),
          n = i < 1e3 ? i + " 米" : i / 1e3 + " 公里";
        this.bI(this.ZI, n, i / t, this.lI);
      },
      vI: function (t) {
        var i,
          n,
          e,
          o = 3.2808399 * t;
        o > 5280
          ? ((i = o / 5280), (n = this.NI(i)), this.bI(this.VI, n + " 英里", n / i, this.CI))
          : ((e = this.NI(o)), this.bI(this.VI, e + " 英尺", e / o, this.CI));
      },
      bI: function (t, i, n, e) {
        (e.style.width = Math.round(this.options.Cr * n) + "px"), (t.innerHTML = i);
      },
      NI: function (t) {
        var i = Math.pow(10, (Math.floor(t) + "").length - 1),
          n = t / i;
        return (n = n >= 10 ? 10 : n >= 5 ? 5 : n >= 3 ? 3 : n >= 2 ? 2 : 1), i * n;
      }
    })),
    (T.oI.scale = function (t) {
      return new T.Control.Scale(t);
    }),
    (T.Control.MI = T.Control.extend({
      options: {
        nI: !0,
        position: T_ANCHOR_TOP_RIGHT,
        _I: !0,
        mI: !1
      },
      initialize: function (t, i, n) {
        T.setOptions(this, n), (this.hW = []), (this.Qi = 0), (this.qi = !1);
        for (var e in t) this.Wi(t[e], e);
        for (e in i) this.Wi(i[e], e, !0);
      },
      onAdd: function (t) {
        return this.DW(), this.Oe(), (this.jE = t), t.on("zoomend", this.wi, this), this.Ow;
      },
      onRemove: function () {
        this.jE.off("zoomend", this.wi, this);
        for (var t = 0; t < this.hW.length; t++) this.hW[t].layer.off("add remove", this.Ei, this);
      },
      addBaseLayer: function (t, i) {
        return this.Wi(t, i), this.jE ? this.Oe() : this;
      },
      addOverlay: function (t, i) {
        return this.Wi(t, i, !0), this.jE ? this.Oe() : this;
      },
      removeLayer: function (t) {
        t.off("add remove", this.Ei, this);
        var i = this._getLayer(T.d(t));
        return i && this.hW.splice(this.hW.indexOf(i), 1), this.jE ? this.Oe() : this;
      },
      expand: function () {
        T._Q.Rq(this.Ow, "tdt-control-layers-expanded"), (this.ei.style.height = null);
        var t = this.jE.getSize().y - (this.Ow.offsetTop + 50);
        return (
          t < this.ei.clientHeight
            ? (T._Q.Rq(this.ei, "tdt-control-layers-scrollbar"), (this.ei.style.height = t + "px"))
            : T._Q.Tq(this.ei, "tdt-control-layers-scrollbar"),
          this.wi(),
          this
        );
      },
      collapse: function () {
        return L.DomUtil.Tq(this.Ow, "tdt-control-layers-expanded"), this;
      },
      DW: function () {
        var t = "tdt-control-layers",
          i = (this.Ow = T._Q.s("div", t));
        i.setAttribute("aria-haspopup", !0), T.oq.iT(i), T.oQ.touch || T.oq.IT(i);
        var n = (this.ei = T._Q.s("form", t + "-list"));
        if (this.options.nI) {
          T.oQ.android ||
            T.oq.on(
              i,
              {
                mouseenter: this.expand,
                mouseleave: this.collapse
              },
              this
            );
          var e = (this.Ri = T._Q.s("a", t + "-toggle", i));
          (e.href = "#"),
            (e.title = "MI"),
            T.oQ.touch
              ? T.oq.on(e, "click", T.oq.uw).on(e, "click", this.expand, this)
              : T.oq.on(e, "focus", this.expand, this),
            T.oq.on(
              n,
              "click",
              function () {
                setTimeout(T.D(this.ri, this), 0);
              },
              this
            ),
            this.jE.on("click", this.collapse, this);
        } else this.expand();
        (this.Ti = T._Q.s("div", t + "-base", n)),
          (this.ti = T._Q.s("div", t + "-separator", n)),
          (this.Yi = T._Q.s("div", t + "-overlays", n)),
          i.appendChild(n);
      },
      _getLayer: function (t) {
        for (var i = 0; i < this.hW.length; i++) if (this.hW[i] && T.d(this.hW[i].layer) === t) return this.hW[i];
      },
      Wi: function (t, i, n) {
        t.on("add remove", this.Ei, this),
          this.hW.push({
            layer: t,
            name: i,
            overlay: n
          }),
          this.options._I && t.setZIndex && (this.Qi++, t.setZIndex(this.Qi));
      },
      Oe: function () {
        if (!this.Ow) return this;
        T._Q.qq(this.Ti), T._Q.qq(this.Yi);
        var t,
          i,
          n,
          e,
          o = 0;
        for (n = 0; n < this.hW.length; n++)
          (e = this.hW[n]), this.Ui(e), (i = i || e.overlay), (t = t || !e.overlay), (o += e.overlay ? 0 : 1);
        return (
          this.options.mI && ((t = t && o > 1), (this.Ti.style.display = t ? "" : "none")),
          (this.ti.style.display = i && t ? "" : "none"),
          this
        );
      },
      Ei: function (t) {
        this.qi || this.Oe();
        var i = this._getLayer(T.d(t.target)),
          n = i.overlay
            ? "AQ" === t.type
              ? "overlayadd"
              : "overlayremove"
            : "AQ" === t.type
            ? "baselayerchange"
            : null;
        n && this.jE.wQ(n, i);
      },
      ui: function (t, i) {
        var n =
            '<input type="radio" class="tdt-control-layers-selector" name="' +
            t +
            '"' +
            (i ? ' checked="checked"' : "") +
            "/>",
          e = document.createElement("div");
        return (e.innerHTML = n), e.firstChild;
      },
      Ui: function (t) {
        var i,
          n = document.createElement("label"),
          e = this.jE.hasLayer(t.layer);
        t.overlay
          ? ((i = document.createElement("input")),
            (i.type = "checkbox"),
            (i.className = "tdt-control-layers-selector"),
            (i.defaultChecked = e))
          : (i = this.ui("tdt-base-layers", e)),
          (i.layerId = T.d(t.layer)),
          T.oq.on(i, "click", this.ri, this);
        var o = document.createElement("span");
        o.innerHTML = " " + t.name;
        var s = document.createElement("div");
        n.appendChild(s), s.appendChild(i), s.appendChild(o);
        var r = t.overlay ? this.Yi : this.Ti;
        return r.appendChild(n), this.wi(), n;
      },
      ri: function () {
        var t,
          i,
          n,
          e = this.ei.getElementsByTagName("input"),
          o = [],
          s = [];
        this.qi = !0;
        for (var r = e.length - 1; r >= 0; r--)
          (t = e[r]),
            (i = this._getLayer(t.layerId).layer),
            (n = this.jE.hasLayer(i)),
            t.checked && !n ? o.push(i) : !t.checked && n && s.push(i);
        for (r = 0; r < s.length; r++) this.jE.removeLayer(s[r]);
        for (r = 0; r < o.length; r++) this.jE.addLayer(o[r]);
        (this.qi = !1), this.OI();
      },
      wi: function () {
        for (var t, i, n = this.ei.getElementsByTagName("input"), e = this.jE.getZoom(), o = n.length - 1; o >= 0; o--)
          (t = n[o]),
            (i = this._getLayer(t.layerId).layer),
            (t.disabled =
              (void 0 !== i.options.minZoom && e < i.options.minZoom) ||
              (void 0 !== i.options.maxZoom && e > i.options.maxZoom));
      },
      Ii: function () {
        return this.expand();
      },
      ii: function () {
        return this.collapse();
      }
    })),
    (T.oI.layers = function (t, i, n) {
      return new T.Control.MI(t, i, n);
    }),
    (T.Control.MapType = T.Control.extend({
      includes: T.iQ.OQ,
      options: {
        position: T_ANCHOR_TOP_RIGHT,
        behavior: "previous",
        expand: "horizontal",
        _I: !0,
        maxLayersInRow: 5,
        manageLayers: !0
      },
      initialize: function (t, i) {
        T.S.l(arguments[0]) || ((i = t), this.Oi(), (t = T.w.oi)),
          T.setOptions(this, i),
          (this._expandDirection = this.options.position.indexOf("left") != -1 ? "right" : "left"),
          this.options.manageLayers && this.on("activelayerchange", this.Pi, this),
          this.pi(t);
      },
      Oi: function () {
        T.w.oi = [
          {
            title: "地图",
            icon: T.Icon.Default.imagePath + "/map/maptype/vector.png",
            layer: TMAP_NORMAL_MAP
          },
          {
            title: "卫星",
            icon: T.Icon.Default.imagePath + "/map/maptype/satellite.png",
            layer: TMAP_SATELLITE_MAP
          },
          {
            title: "卫星混合",
            icon: T.Icon.Default.imagePath + "/map/maptype/satellitepoi.png",
            layer: TMAP_HYBRID_MAP
          },
          {
            title: "地形",
            icon: T.Icon.Default.imagePath + "/map/maptype/terrain.png",
            layer: TMAP_TERRAIN_MAP
          },
          {
            title: "地形混合",
            icon: T.Icon.Default.imagePath + "/map/maptype/terrainpoi.png",
            layer: TMAP_TERRAIN_HYBRID_MAP
          }
        ];
      },
      onAdd: function (t) {
        return (
          (this.Ow = T._Q.s("div", "tdt-iconLayers")),
          T._Q.Rq(this.Ow, "tdt-iconLayers_" + this.options.position),
          this.Ai(),
          t.on("click", this.collapse, this),
          this.options.manageLayers && this.Pi(),
          this.Ow
        );
      },
      onRemove: function (t) {
        t.off("click", this.collapse, this);
      },
      pi: function (t) {
        (this.hW = {}),
          t.map(
            function (t) {
              var i = T.d(t.layer);
              this.hW[i] = T.extend(t, {
                id: i
              });
            }.D(this)
          ),
          this.Ow && this.Ai();
      },
      ai: function (t) {
        var i = t && this.hW[T.d(t)];
        i &&
          i.id !== this._activeLayerId &&
          ((this._previousLayerId = this._activeLayerId),
          (this._activeLayerId = i.id),
          this.Ow && this.Ai(),
          this.wQ("activelayerchange", {
            layer: t
          }));
      },
      expand: function () {
        this.Si()
          .slice(1)
          .map(
            function (t) {
              var i = this.si(t.id);
              T._Q.Tq(i, "tdt-iconLayers-layerCell_hidden");
            }.D(this)
          );
      },
      collapse: function () {
        this.Si()
          .slice(1)
          .map(
            function (t) {
              var i = this.si(t.id);
              T._Q.Rq(i, "tdt-iconLayers-layerCell_hidden");
            }.D(this)
          );
      },
      Di: function () {
        return this._activeLayerId ? this.hW[this._activeLayerId] : length(this.hW) ? first(this.hW) : null;
      },
      di: function () {
        var t = this.Di();
        return t
          ? this._previousLayerId
            ? this.hW[this._previousLayerId]
            : find(
                this.hW,
                function (i) {
                  return i.id !== t.id;
                }.D(this)
              ) || null
          : null;
      },
      Fi: function () {
        var t = [],
          i = this.Di() ? this.Di().id : null,
          n = this.di() ? this.di().id : null;
        return (
          each(this.hW, function (e) {
            e.id !== i && e.id !== n && t.push(e);
          }),
          t
        );
      },
      Si: function () {
        var t = {};
        return (
          (t.previous = function () {
            var t = this.Fi();
            return this.Di() && t.unshift(this.Di()), this.di() && t.unshift(this.di()), t;
          }),
          t[this.options.behavior].apply(this, arguments)
        );
      },
      si: function (t) {
        if (
          "Microsoft Internet Explorer" != navigator.appName ||
          "MSIE8.0" != navigator.appVersion.split(";")[1].replace(new RegExp("[ ]", "g"), "")
        )
          var i = this.Ow.getElementsByClassName("tdt-iconLayers-layerCell");
        else var i = document.getElementsByClassName("tdt-iconLayers-layerCell", this.Ow);
        for (var n = 0; n < i.length; n++) if (i[n].getAttribute("data-layerid") == t) return i[n];
      },
      fi: function (t) {
        var i = T._Q.s("div", "tdt-iconLayers-layer");
        if ((i.setAttribute("data-layerid", t.id), t.title)) {
          var n = T._Q.s("div", "tdt-iconLayers-layerTitleContainer"),
            e = T._Q.s("div", "tdt-iconLayers-layerTitle"),
            o = T._Q.s("div", "tdt-iconLayers-layerCheckIcon");
          (e.innerHTML = t.title), n.appendChild(e), i.appendChild(n), i.appendChild(o);
        }
        return t.icon && i.setAttribute("style", "background-image: url('" + t.icon + "')"), i;
      },
      Gi: function () {
        for (var t, i, n = this.Si(), e = this.Di() && this.Di().id, o = 0; o < n.length; o++)
          o % this.options.maxLayersInRow === 0 &&
            ((t = T._Q.s("div", "tdt-iconLayers-layersRow")),
            this.options.position.indexOf("bottom") === -1 ? this.Ow.appendChild(t) : prepend(this.Ow, t)),
            (i = T._Q.s("div", "tdt-iconLayers-layerCell")),
            i.setAttribute("data-layerid", n[o].id),
            0 !== o && T._Q.Rq(i, "tdt-iconLayers-layerCell_hidden"),
            n[o].id === e && T._Q.Rq(i, "tdt-iconLayers-layerCell_active"),
            "left" === this._expandDirection
              ? T._Q.Rq(i, "tdt-iconLayers-layerCell_expandLeft")
              : T._Q.Rq(i, "tdt-iconLayers-layerCell_expandRight"),
            i.appendChild(this.fi(n[o])),
            this.options.position.indexOf("right") === -1 ? t.appendChild(i) : prepend(t, i);
      },
      gi: function (t) {
        T.oq.stopPropagation(t);
        var i = (t.target || t.srcElement, (t.currentTarget || t.target || t.srcElement).getAttribute("data-layerid")),
          n = this.hW[i];
        "undefined" != typeof n && (this.ai(n.layer), this.expand());
      },
      Hi: function () {
        if (
          (each(
            this.hW,
            function (t) {
              var i = this.si(t.id);
              i && T.oq.on(i, "click", this.gi.D(this));
            }.D(this)
          ),
          "Microsoft Internet Explorer" != navigator.appName ||
            "MSIE8.0" != navigator.appVersion.split(";")[1].replace(new RegExp("[ ]", "g"), ""))
        )
          var t = this.Ow.getElementsByClassName("tdt-iconLayers-layersRow");
        else var t = document.getElementsByClassName("tdt-iconLayers-layersRow", this.Ow);
        for (
          var i = function (t) {
              T.oq.stopPropagation(t), this.expand();
            }.D(this),
            n = function (t) {
              T.oq.stopPropagation(t), this.collapse();
            }.D(this),
            e = function (t) {
              T.oq.stopPropagation(t);
            },
            o = 0;
          o < t.length;
          o++
        ) {
          var s = t[o];
          T.oq.on(s, "mouseenter", i), T.oq.on(s, "mouseleave", n), T.oq.on(s, "mousemove", e);
        }
      },
      Ai: function () {
        (this.Ow.innerHTML = ""), this.Gi(), this.Hi();
      },
      Pi: function () {
        if (this.jE) {
          var t = this.Di(),
            i = this.di();
          i
            ? this.jE.clearMapType(i.layer)
            : each(
                this.hW,
                function (t) {
                  var i = t.layer;
                  this.jE.clearMapType(i);
                }.D(this)
              ),
            t && this.jE.setMapType(t.layer);
        }
      }
    })),
    (T.oI.maptype = function (t, i) {
      return new T.Control.MapType(t, i);
    }),
    Array.prototype.map ||
      (Array.prototype.map = function (t, i) {
        var n, e, o;
        if (null == this) throw new TypeError(" this is null or not defined");
        var s = Object(this),
          r = s.length >>> 0;
        if ("[object Function]" != Object.prototype.toString.call(t)) throw new TypeError(t + " is not a function");
        for (i && (n = i), e = new Array(r), o = 0; o < r; ) {
          var h, a;
          o in s && ((h = s[o]), (a = t.call(n, h, o, s)), (e[o] = a)), o++;
        }
        return e;
      }),
    Function.prototype.D ||
      (Function.prototype.D = function (t) {
        if ("function" != typeof this)
          throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var i = Array.prototype.slice.call(arguments, 1),
          n = this,
          e = function () {},
          o = function () {
            return n.apply(this instanceof e && t ? this : t, i.concat(Array.prototype.slice.call(arguments)));
          };
        return (e.prototype = this.prototype), (o.prototype = new e()), o;
      }),
    Array.prototype.indexOf ||
      (Array.prototype.indexOf = function (t) {
        var i = -1;
        if (0 == this.length) return i;
        for (var n = 0; n < this.length; n++)
          if (this[n] === t) {
            i = n;
            break;
          }
        return i;
      }),
    document.getElementsByClassName ||
      (document.getElementsByClassName = function (t, i) {
        for (
          var n = [],
            e = (i || document).getElementsByTagName("*"),
            o = e.length,
            s = t.split(" "),
            r = s.length,
            h = 0;
          h < o;
          h++
        ) {
          for (var a = e[h].className.split(" "), u = (a.length, []), c = 0; c < r; c++)
            a.indexOf(s[c]) !== -1 && u.push(!0);
          u.length === r && n.push(e[h]);
        }
        return n;
      }),
    (T.hi = T.m.extend({
      run: function (t, i, n, e) {
        this.uw(),
          (this.Ji = t),
          (this.aT = !0),
          (this.ji = n || 0.25),
          (this.Ki = 1 / Math.max(e || 0.5, 0.2)),
          (this.YU = T._Q.getPosition(t)),
          (this.ki = i.sQ(this.YU)),
          (this.eu = +new Date()),
          this.wQ("start"),
          this.Li();
      },
      uw: function () {
        this.aT && (this.li(!0), this.Zi());
      },
      Li: function () {
        (this.Ci = T.S.C(this.Li, this)), this.li(!0);
      },
      li: function (t) {
        var i = +new Date() - this.eu,
          n = 1e3 * this.ji;
        i < n ? this.Vi(this.ci(i / n), t) : (this.Vi(1), this.Zi());
      },
      Vi: function (t, i) {
        var n = this.YU.AQ(this.ki.fQ(t));
        i && n.JQ(), T._Q.setPosition(this.Ji, n), this.wQ("step");
      },
      Zi: function () {
        T.S.V(this.Ci), (this.aT = !1), this.wQ("end");
      },
      ci: function (t) {
        return 1 - Math.pow(1 - t, this.Ki);
      }
    })),
    T.Map.M({
      gW: function (t, i, n) {
        if (
          ((i = void 0 === i ? this.fW : this.GW(i)),
          (t = this.Rw(T.fq(t), i, this.options.maxBounds)),
          (n = n || {}),
          this.Iw(),
          this.CW && !n.reset && n !== !0)
        ) {
          void 0 !== n.Tw &&
            ((n.zoom = T.extend(
              {
                Tw: n.Tw
              },
              n.zoom
            )),
            (n.qw = T.extend(
              {
                Tw: n.Tw,
                duration: n.duration
              },
              n.qw
            )));
          var e = this.fW !== i ? this.Bi && this.Bi(t, i, n.zoom) : this.vi(t, n.qw);
          if (e) return clearTimeout(this.Uw), this;
        }
        return this.ZW(t, i), this;
      },
      centerAndZoom: function (t, i, n) {
        this.gW(t, i, n),
          this.options.datasourcesControl &&
            "undefined" == typeof this.mapDataSources &&
            (this.mapDataSources = new T.Control.DataSources().addTo(this));
      },
      getDataSources: function () {
        return this.mapDataSources;
      },
      panBy: function (t, i) {
        if (((t = T.SQ(t).hQ()), (i = i || {}), !t.x && !t.y)) return this.wQ("moveend");
        if (i.Tw !== !0 && !this.getSize().contains(t))
          return this.ZW(this._q(this.nq(this.getCenter()).AQ(t)), this.getZoom()), this;
        if (
          (this.EE ||
            ((this.EE = new T.hi()),
            this.EE.on(
              {
                step: this.Ni,
                end: this.bi
              },
              this
            )),
          i.BU || this.wQ("movestart"),
          i.Tw !== !1)
        ) {
          T._Q.Rq(this.ow, "tdt-pan-anim");
          var n = this.lw().sQ(t).hQ();
          this.EE.run(this.ow, n, i.duration || 0.25, i.aU);
        } else this.Ww(t), this.wQ("move").wQ("moveend");
        return this;
      },
      Ni: function () {
        this.wQ("move");
      },
      bi: function () {
        T._Q.Tq(this.ow, "tdt-pan-anim"), this.wQ("moveend");
      },
      vi: function (t, i) {
        var n = this.dE(t).KQ();
        return !((i && i.Tw) !== !0 && !this.getSize().contains(n)) && (this.panBy(n, i), !0);
      }
    }),
    T.Map.n({
      Nr: !0,
      Mi: 4
    });
  var zoomAnimated = T._Q.Iq && T.oQ.any3d && !T.oQ.mobileOpera;
  zoomAnimated &&
    T.Map._(function () {
      (this.ZE = this.options.Nr), this.ZE && (this.ni(), T.oq.on(this._i, T._Q.iq, this.mi, this));
    }),
    T.Map.M(
      zoomAnimated
        ? {
            ni: function () {
              var t = (this._i = T._Q.s("div", "tdt-proxy tdt-zoom-animated"));
              this.aw.mapPane.appendChild(t),
                this.on(
                  "Ge",
                  function (i) {
                    var n = T._Q.uq,
                      e = t.style[n];
                    T._Q.Uq(t, this.nq(i.center, i.zoom), this.cW(i.zoom, 1)), e === t.style[n] && this.ER && this.QO();
                  },
                  this
                ),
                this.on(
                  "load moveend",
                  function () {
                    var i = this.getCenter(),
                      n = this.getZoom();
                    T._Q.Uq(t, this.nq(i, n), this.cW(n, 1));
                  },
                  this
                );
            },
            mi: function (t) {
              this.ER && t.propertyName.indexOf("bQ") >= 0 && this.QO();
            },
            qO: function () {
              return !this.Ow.getElementsByClassName("tdt-zoom-animated").length;
            },
            Bi: function (t, i, n) {
              if (this.ER) return !0;
              if (((n = n || {}), !this.ZE || n.Tw === !1 || this.qO() || Math.abs(i - this.fW) > this.options.Mi))
                return !1;
              var e = this.cW(i),
                o = this.dE(t).FQ(1 - 1 / e);
              return (
                !(n.Tw !== !0 && !this.getSize().contains(o)) &&
                (T.S.C(function () {
                  this.qE(!0).ge(t, i, !0);
                }, this),
                !0)
              );
            },
            ge: function (t, i, n, e) {
              n && ((this.ER = !0), (this.WO = t), (this.RR = i), T._Q.Rq(this.ow, "tdt-zoom-anim")),
                this.wQ("Ge", {
                  center: t,
                  zoom: i,
                  noUpdate: e
                }),
                setTimeout(T.D(this.QO, this), 250);
            },
            QO: function () {
              this.ER &&
                (T._Q.Tq(this.ow, "tdt-zoom-anim"),
                (this.ER = !1),
                this.QE(this.WO, this.RR),
                T.S.C(function () {
                  this.mw(!0);
                }, this));
            }
          }
        : {}
    ),
    T.Map.M({
      enableContinuousZoom: function () {
        this.options.Mi = 4;
      },
      disableContinuousZoom: function () {
        this.options.Mi = 0;
      },
      isContinuousZoom: function () {
        return 4 == this.options.Mi;
      }
    }),
    T.Map.M({
      Ne: function (t, i, n) {
        function e(t) {
          var i = t ? -1 : 1,
            n = t ? v : m,
            e = v * v - m * m + i * g * g * w * w,
            o = 2 * n * g * w,
            s = e / o,
            r = Math.sqrt(s * s + 1) - s,
            h = r < 1e-9 ? -18 : Math.log(r);
          return h;
        }
        function o(t) {
          return (Math.exp(t) - Math.exp(-t)) / 2;
        }
        function s(t) {
          return (Math.exp(t) + Math.exp(-t)) / 2;
        }
        function r(t) {
          return o(t) / s(t);
        }
        function h(t) {
          return m * (s(E) / s(E + y * t));
        }
        function a(t) {
          return (m * (s(E) * r(E + y * t) - o(E))) / g;
        }
        function u(t) {
          return 1 - Math.pow(1 - t, 1.5);
        }
        function c() {
          var n = (Date.now() - Q) / x,
            e = u(n) * q;
          n <= 1
            ? ((this.wE = T.S.C(c, this)),
              this.QE(this._q(l.AQ(f.sQ(l).fQ(a(e) / w)), p), this.gw(m / h(e), p), {
                Ne: !0
              }))
            : this.QE(t, i).mw(!0);
        }
        if (((n = n || {}), n.Tw === !1 || !T.oQ.any3d)) return this.gW(t, i, n);
        this.Iw();
        var l = this.nq(this.getCenter()),
          f = this.nq(t),
          d = this.getSize(),
          p = this.fW;
        (t = T.fq(t)), (i = void 0 === i ? p : i);
        var m = Math.max(d.x, d.y),
          v = m * this.cW(p, i),
          w = f.distanceTo(l) || 1,
          y = 1.42,
          g = y * y,
          E = e(0),
          Q = Date.now(),
          q = (e(1) - E) / y,
          x = n.duration ? 10 * n.duration : 10 * q * 0.8;
        return this.qE(!0), c.call(this), this;
      },
      wO: function (t, i) {
        var n = this.NW(t, i);
        return this.Ne(n.center, n.zoom, i);
      }
    }),
    T.Map.M({
      EO: {
        eO: 1e4,
        watch: !1
      },
      RO: function (t) {
        if (((t = this.rO = T.extend({}, this.EO, t)), !("geolocation" in navigator)))
          return (
            this.TO({
              code: 0,
              message: "tO"
            }),
            this
          );
        var i = T.D(this.YO, this),
          n = T.D(this.TO, this);
        return (
          t.watch
            ? (this.UO = navigator.geolocation.watchPosition(i, n, t))
            : navigator.geolocation.getCurrentPosition(i, n, t),
          this
        );
      },
      uO: function () {
        return (
          navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this.UO),
          this.rO && (this.rO.gW = !1),
          this
        );
      },
      TO: function (t) {
        var i = t.code,
          n = t.message || (1 === i ? "IO" : 2 === i ? "iO" : "eO");
        this.rO.gW && !this.CW && this.mW(),
          this.wQ("OO", {
            code: i,
            message: "oO" + n + "."
          });
      },
      YO: function (t) {
        var i = t.coords.latitude,
          n = t.coords.longitude,
          e = new T.dq(i, n),
          o = e.Jq(t.coords.accuracy),
          s = this.rO;
        if (s.gW) {
          var r = this.nW(o);
          this.gW(e, s.maxZoom ? Math.min(r, s.maxZoom) : r);
        }
        var h = {
          KT: e,
          bounds: o,
          PO: t.PO
        };
        for (var a in t.coords) "number" == typeof t.coords[a] && (h[a] = t.coords[a]);
        this.wQ("pO", h);
      }
    });
  for (var n = 0; n < T.w.a.length; n++) T.lR.MR("TDT_style" + n, T.w.E + T.w.a[n]);
  for (var m = 0; m < T.w.A.length; m++) T.lR.nR("TDT_components" + m, T.w.E + T.w.A[m]);
  T.lR.bR(T.w.E + "/qv?tk=" + T.w.TMAP_AUTHKEY + "&t=" + Math.random() + "&callback=T.qv");
})();

export default window.T;
