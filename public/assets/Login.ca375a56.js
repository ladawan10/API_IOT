import {
  r as b,
  _ as W,
  b as t,
  h as p,
  u as B,
  j as u,
  F as G,
  d as I,
} from "./index.f2580233.js";
import {
  s as D,
  d as F,
  u as q,
  e as z,
  c as _,
  a as U,
  b as A,
  f as C,
  g as E,
  h as O,
  i as V,
  j as H,
  C as J,
  r as k,
  k as P,
  l as M,
  m as K,
  n as Q,
  G as X,
  T as $,
  B as Y,
} from "./Grid.983da099.js";
import { S as R } from "./sweetalert2.all.829902af.js";
const Z = ["className", "component"];
function ee(o = {}) {
  const {
      defaultTheme: a,
      defaultClassName: n = "MuiBox-root",
      generateClassName: i,
      styleFunctionSx: m = F,
    } = o,
    r = D("div", {
      shouldForwardProp: (s) => s !== "theme" && s !== "sx" && s !== "as",
    })(m);
  return b.exports.forwardRef(function (c, l) {
    const x = q(a),
      d = z(c),
      { className: f, component: h = "div" } = d,
      v = W(d, Z);
    return t(
      r,
      p({ as: h, ref: l, className: _(f, i ? i(n) : n), theme: x }, v)
    );
  });
}
const te = U(),
  ae = te,
  se = [
    "className",
    "component",
    "disableGutters",
    "fixed",
    "maxWidth",
    "classes",
  ],
  ne = A(),
  oe = ae("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (o, a) => {
      const { ownerState: n } = o;
      return [
        a.root,
        a[`maxWidth${C(String(n.maxWidth))}`],
        n.fixed && a.fixed,
        n.disableGutters && a.disableGutters,
      ];
    },
  }),
  re = (o) => E({ props: o, name: "MuiContainer", defaultTheme: ne }),
  ie = (o, a) => {
    const n = (c) => V(a, c),
      { classes: i, fixed: m, disableGutters: r, maxWidth: e } = o,
      s = {
        root: [
          "root",
          e && `maxWidth${C(String(e))}`,
          m && "fixed",
          r && "disableGutters",
        ],
      };
    return O(s, n, i);
  };
function ce(o = {}) {
  const {
      createStyledComponent: a = oe,
      useThemeProps: n = re,
      componentName: i = "MuiContainer",
    } = o,
    m = a(
      ({ theme: e, ownerState: s }) =>
        p(
          {
            width: "100%",
            marginLeft: "auto",
            boxSizing: "border-box",
            marginRight: "auto",
            display: "block",
          },
          !s.disableGutters && {
            paddingLeft: e.spacing(2),
            paddingRight: e.spacing(2),
            [e.breakpoints.up("sm")]: {
              paddingLeft: e.spacing(3),
              paddingRight: e.spacing(3),
            },
          }
        ),
      ({ theme: e, ownerState: s }) =>
        s.fixed &&
        Object.keys(e.breakpoints.values).reduce((c, l) => {
          const x = l,
            d = e.breakpoints.values[x];
          return (
            d !== 0 &&
              (c[e.breakpoints.up(x)] = {
                maxWidth: `${d}${e.breakpoints.unit}`,
              }),
            c
          );
        }, {}),
      ({ theme: e, ownerState: s }) =>
        p(
          {},
          s.maxWidth === "xs" && {
            [e.breakpoints.up("xs")]: {
              maxWidth: Math.max(e.breakpoints.values.xs, 444),
            },
          },
          s.maxWidth &&
            s.maxWidth !== "xs" && {
              [e.breakpoints.up(s.maxWidth)]: {
                maxWidth: `${e.breakpoints.values[s.maxWidth]}${
                  e.breakpoints.unit
                }`,
              },
            }
        )
    );
  return b.exports.forwardRef(function (s, c) {
    const l = n(s),
      {
        className: x,
        component: d = "div",
        disableGutters: f = !1,
        fixed: h = !1,
        maxWidth: v = "lg",
      } = l,
      L = W(l, se),
      y = p({}, l, { component: d, disableGutters: f, fixed: h, maxWidth: v }),
      w = ie(y, i);
    return t(
      m,
      p({ as: d, ownerState: y, className: _(w.root, x), ref: c }, L)
    );
  });
}
const de = H(),
  le = ee({
    defaultTheme: de,
    defaultClassName: "MuiBox-root",
    generateClassName: J.generate,
  }),
  g = le;
var S = {},
  ue = P.exports;
Object.defineProperty(S, "__esModule", { value: !0 });
var j = (S.default = void 0),
  me = ue(k()),
  xe = M,
  pe = (0, me.default)(
    (0, xe.jsx)("path", {
      d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
    }),
    "Person"
  );
j = S.default = pe;
var N = {},
  fe = P.exports;
Object.defineProperty(N, "__esModule", { value: !0 });
var T = (N.default = void 0),
  he = fe(k()),
  ve = M,
  ge = (0, he.default)(
    (0, ve.jsx)("path", {
      d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z",
    }),
    "Lock"
  );
T = N.default = ge;
const be = ce({
    createStyledComponent: K("div", {
      name: "MuiContainer",
      slot: "Root",
      overridesResolver: (o, a) => {
        const { ownerState: n } = o;
        return [
          a.root,
          a[`maxWidth${C(String(n.maxWidth))}`],
          n.fixed && a.fixed,
          n.disableGutters && a.disableGutters,
        ];
      },
    }),
    useThemeProps: (o) => Q({ props: o, name: "MuiContainer" }),
  }),
  Ce = be;
function $e() {
  const o = "",
    [a, n] = b.exports.useState({ USERNAME: "", PASSWORD: "" }),
    i = B();
  return u(G, {
    children: [
      t("br", {}),
      t("br", {}),
      t("br", {}),
      t("br", {}),
      t("br", {}),
      t(Ce, {
        children: t(X, {
          container: !0,
          justifyContent: "center",
          alignItems: "stretch",
          children: t("div", {
            className: "login-page",
            children: t("div", {
              className: "login-box",
              children: u("div", {
                className: "card card-outline",
                children: [
                  t("div", {
                    className: "card-header text-center",
                    children: u("div", {
                      className: "h1",
                      children: [
                        t("b", { className: "text-danger", children: "SNC" }),
                        " IoT - Cooling",
                      ],
                    }),
                  }),
                  t("div", {
                    className: "card-body",
                    children: u("form", {
                      onSubmit: (r) => {
                        r.preventDefault(),
                          I.post(`${o}/api-login/login`, a).then(
                            ({ data: e }) => {
                              localStorage.setItem("token", e.token),
                                e.state
                                  ? R.fire({
                                      icon: "success",
                                      title: "Login success",
                                      showConfirmButton: !1,
                                      timer: 1500,
                                    }).then(() => {
                                      i("/MachinesLineC1");
                                    })
                                  : R.fire({
                                      icon: "error",
                                      title: "Login Falied",
                                      text: "Check USERNAME or PASSWORD",
                                      showConfirmButton: !1,
                                      timer: 2e3,
                                    });
                            }
                          );
                      },
                      children: [
                        u(g, {
                          sx: { "& > :not(style)": { m: 2 } },
                          children: [
                            u(g, {
                              sx: {
                                display: "flex",
                                alignItems: "flex-end",
                                justifyContent: "center",
                              },
                              children: [
                                t(j, {
                                  sx: {
                                    color: "action.active",
                                    mr: 1,
                                    my: 0.5,
                                  },
                                }),
                                t($, {
                                  type: "text",
                                  id: "input-with-sx",
                                  label: "Username",
                                  variant: "standard",
                                  onChange: (r) => {
                                    n({ ...a, USERNAME: r.target.value });
                                  },
                                  required: !0,
                                }),
                              ],
                            }),
                            u(g, {
                              sx: {
                                display: "flex",
                                alignItems: "flex-end",
                                justifyContent: "center",
                              },
                              children: [
                                t(T, {
                                  sx: {
                                    color: "action.active",
                                    mr: 1,
                                    my: 0.5,
                                  },
                                }),
                                t($, {
                                  type: "password",
                                  id: "input-with-sx",
                                  label: "Password",
                                  variant: "standard",
                                  autocomplete: "current-password",
                                  onChange: (r) => {
                                    n({ ...a, PASSWORD: r.target.value });
                                  },
                                  required: !0,
                                }),
                              ],
                            }),
                            t("br", {}),
                          ],
                        }),
                        t("a", {
                          children: t(Y, {
                            type: "submit",
                            variant: "contained",
                            className: "w-100",
                            color: "success",
                            children: "Sign In",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          }),
        }),
      }),
    ],
  });
}
export { $e as default };
