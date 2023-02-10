import { openBlock as t, createElementBlock as o, createElementVNode as i, toDisplayString as u } from "vue";
const a = {
  __name: "my-component",
  props: {
    message: {
      type: String,
      default: "Hello, world!"
    }
  },
  setup(n) {
    return (s, p) => (t(), o("div", null, [
      i("h1", null, u(n.message), 1)
    ]));
  }
};
function l(n) {
  l.installed || (l.installed = !0, n.component("MyComponent", a));
}
const r = {
  install: l
};
let e = null;
typeof window < "u" ? e = window.Vue : typeof global < "u" && (e = global.Vue);
e && e.use(r);
export {
  a as default,
  l as install
};
