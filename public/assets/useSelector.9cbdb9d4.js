import { r as t, E as m, G as S, H as h, I as g } from "./index.f2580233.js";
var y = function (s, e) {
  return s === e;
};
function E(r, s, e, v) {
  var i = t.exports.useReducer(function (c) {
      return c + 1;
    }, 0),
    p = i[1],
    o = t.exports.useMemo(
      function () {
        return m(e, v);
      },
      [e, v]
    ),
    u = t.exports.useRef(),
    a = t.exports.useRef(),
    d = t.exports.useRef(),
    n = t.exports.useRef(),
    x = e.getState(),
    f;
  try {
    if (r !== a.current || x !== d.current || u.current) {
      var b = r(x);
      n.current === void 0 || !s(b, n.current) ? (f = b) : (f = n.current);
    } else f = n.current;
  } catch (c) {
    throw (
      (u.current &&
        (c.message +=
          `
The error may be correlated with this previous error:
` +
          u.current.stack +
          `

`),
      c)
    );
  }
  return (
    S(function () {
      (a.current = r), (d.current = x), (n.current = f), (u.current = void 0);
    }),
    S(
      function () {
        function c() {
          try {
            var l = e.getState();
            if (l === d.current) return;
            var R = a.current(l);
            if (s(R, n.current)) return;
            (n.current = R), (d.current = l);
          } catch (C) {
            u.current = C;
          }
          p();
        }
        return (
          (o.onStateChange = c),
          o.trySubscribe(),
          c(),
          function () {
            return o.tryUnsubscribe();
          }
        );
      },
      [e, o]
    ),
    f
  );
}
function k(r) {
  r === void 0 && (r = h);
  var s =
    r === h
      ? g
      : function () {
          return t.exports.useContext(r);
        };
  return function (v, i) {
    i === void 0 && (i = y);
    var p = s(),
      o = p.store,
      u = p.subscription,
      a = E(v, i, o, u);
    return t.exports.useDebugValue(a), a;
  };
}
var I = k();
export { I as u };
