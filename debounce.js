function debounce(wait, func) {
  var timeout = null;
  
  return function(...args) {
    let context = this;
    clearTimeout(timeout);
    timeout = setTimeout(
      func.apply(this, ...args),
      wait
    )
  }
}
