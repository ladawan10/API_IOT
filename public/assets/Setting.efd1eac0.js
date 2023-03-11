import {
  r as U,
  j as d,
  b as e,
  D as a,
  q as l,
  s as $,
  t as k,
  x as R,
  J as T,
  M as N,
  y as b,
  K as _,
  z as x,
  P as i,
  Q as o,
  S as s,
  A as P,
  B as p,
  d as y,
} from "./index.f2580233.js";
import { S as f } from "./sweetalert2.all.829902af.js";
import { u as j } from "./useSelector.9cbdb9d4.js";
const z = () => {
  const A = "",
    g = j((r) => r.allUser); //! AddUser
  const [c, u] = U.exports.useState({
      U_NAME: "",
      U_USERNAME: "",
      U_PASSWORD: "",
      U_AUTH: "",
    }),
    [E, S] = U.exports.useState(!1),
    C = () => S(!1),
    D = () => S(!0),
    B = (r) => {
      r.preventDefault(),
        y.post(`${A}/api/addUser`, c).then(({ data: { state: t, msg: m } }) => {
          f.fire({
            icon: t ? "success" : "error",
            title: t ? "Saved" : "false",
            text: m,
            showConfirmButton: !1,
            timer: 1500,
          }).then(() => C());
        });
    }; //! EditUser
  const [n, h] = U.exports.useState({}),
    [M, w] = U.exports.useState(!1),
    v = () => w(!1),
    F = (r) => {
      w(!0), h(r);
    },
    q = (r) => {
      r.preventDefault(),
        y.post(`${A}/api/editUser`, n).then(({ data: { state: t } }) => {
          f.fire({
            icon: t ? "success" : "error",
            title: t ? "Saved" : "Failed",
            showConfirmButton: !1,
            timer: 1500,
          }).then(() => v());
        });
    },
    O = (r) => {
      f.fire({
        title: "Are you sure?",
        text: '"Do you want to Delete!"',
        icon: "warning",
        showCancelButton: !0,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((t) => {
        t.isConfirmed &&
          y
            .post(`${A}/api/deleteUser`, { U_ID: r })
            .then(({ data: { state: m } }) => {
              f.fire({
                icon: m ? "success" : "error",
                title: m ? "Deleted" : "Failed",
                showConfirmButton: !1,
                timer: 1500,
              });
            });
      });
    };
  return d("div", {
    children: [
      e(a, {
        children: e(l, {
          lg: "12",
          children: d($, {
            style: { alignContent: "center" },
            children: [
              e(k, {
                className: "border-bottom p-3 mb-0",
                style: { alignContent: "center" },
                children: d("div", {
                  style: { display: "flex", justifyContent: "space-between" },
                  children: [
                    e("a", {
                      style: {
                        alignContent: "center",
                        margin: "0",
                        fontSize: "1.7rem",
                      },
                      children: "User Information",
                    }),
                    e("a", {
                      className: "btn btn-danger",
                      onClick: D,
                      children: "Add User",
                    }),
                  ],
                }),
              }),
              e(R, {
                children: d(T, {
                  bordered: !0,
                  hover: !0,
                  style: { width: "80vw" },
                  children: [
                    e("thead", {
                      children: d("tr", {
                        children: [
                          e("th", { children: "#" }),
                          e("th", { children: "Name" }),
                          e("th", { children: "Username" }),
                          e("th", { children: "Authority" }),
                          e("th", { children: "Action" }),
                        ],
                      }),
                    }),
                    e("tbody", {
                      children:
                        g.length === 0
                          ? e("tr", {
                              children: e("th", {
                                colSpan: 4,
                                children: "No Data.",
                              }),
                            })
                          : g.map((r, t) =>
                              d(
                                "tr",
                                {
                                  style: { verticalAlign: "middle" },
                                  children: [
                                    e("th", { scope: "row", children: t + 1 }),
                                    e("td", { children: r.U_Name }),
                                    e("td", { children: r.U_Username }),
                                    e("td", { children: r.U_Auth }),
                                    d("td", {
                                      children: [
                                        e("a", {
                                          className: "btn btn-warning btn-sm",
                                          onClick: () => F(r),
                                          children: "Edit",
                                        }),
                                        " ",
                                        "|",
                                        " ",
                                        e("a", {
                                          className: "btn btn-danger btn-sm",
                                          onClick: () => O(r.U_ID),
                                          children: "Delete",
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                t
                              )
                            ),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
      d(N, {
        isOpen: E,
        toggle: C,
        children: [
          e(b, { children: "Add User" }),
          d(_, {
            onSubmit: B,
            children: [
              d(x, {
                children: [
                  e(a, {
                    children: e(l, {
                      children: e("div", {
                        children: d(i, {
                          children: [
                            e(o, { for: "addName", children: "Name" }),
                            e(s, {
                              id: "addName",
                              name: "Name",
                              placeholder: "Name...",
                              type: "text",
                              onChange: (r) => {
                                u({ ...c, U_NAME: r.target.value });
                              },
                              required: !0,
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                  e(a, {
                    children: e(l, {
                      children: e("div", {
                        children: d(i, {
                          children: [
                            e(o, { for: "addUsername", children: "Username" }),
                            e(s, {
                              id: "addUsername",
                              name: "Username",
                              placeholder: "Username...",
                              type: "text",
                              required: !0,
                              onChange: (r) => {
                                u({ ...c, U_USERNAME: r.target.value });
                              },
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                  e(a, {
                    children: e(l, {
                      children: e("div", {
                        children: d(i, {
                          children: [
                            e(o, { for: "addPassword", children: "Password" }),
                            e(s, {
                              id: "addPassword",
                              name: "Password",
                              placeholder: "Password..",
                              type: "password",
                              required: !0,
                              autoComplete: "off",
                              onChange: (r) => {
                                u({ ...c, U_PASSWORD: r.target.value });
                              },
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                  e(a, {
                    children: e(l, {
                      children: e("div", {
                        children: d(i, {
                          children: [
                            e(o, {
                              for: "addSelectAuth",
                              children: "Authority",
                            }),
                            d(s, {
                              id: "addSelectAuth",
                              name: "select",
                              type: "select",
                              required: !0,
                              onChange: (r) => {
                                u({ ...c, U_AUTH: r.target.value });
                              },
                              children: [
                                e("option", {
                                  value: "",
                                  children: "--Select Authority--",
                                }),
                                e("option", {
                                  value: "admin",
                                  children: "Admin",
                                }),
                                e("option", {
                                  value: "operator",
                                  children: "Operator",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                ],
              }),
              d(P, {
                children: [
                  e(p, { type: "submit", color: "primary", children: "Save" }),
                  " ",
                  e(p, { color: "secondary", onClick: C, children: "Cancel" }),
                ],
              }),
            ],
          }),
        ],
      }),
      d(N, {
        isOpen: M,
        toggle: v,
        children: [
          e(b, { children: "Edit User" }),
          d(_, {
            onSubmit: q,
            children: [
              d(x, {
                children: [
                  e(a, {
                    children: e(l, {
                      children: e("div", {
                        children: d(i, {
                          children: [
                            e(o, { for: "addName", children: "Name" }),
                            e(s, {
                              id: "addName",
                              name: "Name",
                              required: !0,
                              defaultValue: n.U_Name,
                              placeholder: "Name...",
                              type: "text",
                              onChange: (r) => {
                                h({ ...n, U_Name: r.target.value });
                              },
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                  e(a, {
                    children: e(l, {
                      children: e("div", {
                        children: d(i, {
                          children: [
                            e(o, { for: "addUsername", children: "Username" }),
                            e(s, {
                              id: "addUsername",
                              name: "Username",
                              required: !0,
                              defaultValue: n.U_Username,
                              placeholder: "Username...",
                              type: "text",
                              onChange: (r) => {
                                h({ ...n, U_Username: r.target.value });
                              },
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                  e(a, {
                    children: e(l, {
                      children: e("div", {
                        children: d(i, {
                          children: [
                            e(o, { for: "addPassword", children: "Password" }),
                            e(s, {
                              id: "addPassword",
                              name: "Password",
                              defaultValue: n.U_Password,
                              placeholder: "Password..",
                              type: "password",
                              required: !0,
                              autoComplete: "off",
                              onChange: (r) => {
                                h({ ...n, U_Password: r.target.value });
                              },
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                  e(a, {
                    children: e(l, {
                      children: e("div", {
                        children: d(i, {
                          children: [
                            e(o, {
                              for: "addSelectAuth",
                              children: "Authority",
                            }),
                            d(s, {
                              id: "addSelectAuth",
                              name: "select",
                              type: "select",
                              defaultValue: n.U_Auth,
                              required: !0,
                              onChange: (r) => {
                                h({ ...n, U_Auth: r.target.value });
                              },
                              children: [
                                e("option", {
                                  value: "",
                                  children: "--Select Authority--",
                                }),
                                e("option", {
                                  value: "admin",
                                  children: "Admin",
                                }),
                                e("option", {
                                  value: "operator",
                                  children: "Operator",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                ],
              }),
              d(P, {
                children: [
                  e(p, { type: "submit", color: "primary", children: "Save" }),
                  " ",
                  e(p, { color: "secondary", onClick: v, children: "Cancel" }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
export { z as default };
