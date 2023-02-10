import { openBlock as c, createElementBlock as _, createElementVNode as i, toDisplayString as p } from "vue";
const r = (e, l) => {
  const n = e.__vccOpts || e;
  for (const [s, a] of l)
    n[s] = a;
  return n;
}, u = { class: "heading" }, d = {
  __name: "my-component",
  props: {
    message: {
      type: String,
      default: "Hello, world!"
    }
  },
  setup(e) {
    return (l, n) => (c(), _("div", null, [
      i("h1", u, p(e.message), 1)
    ]));
  }
}, f = /* @__PURE__ */ r(d, [["__scopeId", "data-v-f19a7eab"]]);
function o(e) {
  o.installed || (o.installed = !0, e.component("MyComponent", f));
}
const m = {
  install: o
};
let t = null;
typeof window < "u" ? t = window.Vue : typeof global < "u" && (t = global.Vue);
t && t.use(m);
export {
  f as default,
  o as install
};
