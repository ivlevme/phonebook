export default {
  update(el, bindings, vnode) {
    let favourite = bindings.value[0];
    let status = bindings.value[1];
    favourite && status ? el.style.color = "yellow" : el.style.color = "black";
  }
};
