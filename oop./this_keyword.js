var obj = {
  fn : function(a, b) {
    console.log(this); // this is bound to the object
  }
}

obj.fn(1, 2);

var fun = function(one, two) {
  console.log(one, two);
};

var r = {}, g = {}, b = {};

fun(g, b); // log {}, {} (green and blue objects)
