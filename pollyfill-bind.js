if (!Function.prototype.bind) {
  Function.prototype.bind = function(context) {
    let func = this;
    var boundArguments = Array.prototype.slice.call(arguments, 1);
    return function() {
      var targetArguments = Array.prototype.slice.call(arguments);
      return func.apply(
        context,
        boundArguments.concat(targetArguments)
      );
    }
  }
}
