module.exports = function reverse (n) {
  if (n<0) {n=-n;}
  var numb = String(n);
  var answ = "";
  for (var i = numb.length - 1; i >= 0; i--) {
      answ += numb[i];
  }
  return answ;
}
