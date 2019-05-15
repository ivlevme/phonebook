export default {
  bind(el, bindings, vnode) {
    console.log(bindings.value);
    if (bindings.value) {
      el.style.color = "green";
    } else {
      el.style.color = "red";
    }
  }
};
