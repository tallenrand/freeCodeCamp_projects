
function calc1() {
  document.calcData.screen.value += "1"
};
function calc2() {
  document.calcData.screen.value += "2"
};
function calc3() {
  document.calcData.screen.value += "3"
};
function calc4() {
  document.calcData.screen.value += "4"
};
function calc5() {
  document.calcData.screen.value += "5"
};
function calc6() {
  document.calcData.screen.value += "6"
};
function calc7() {
  document.calcData.screen.value += "7"
};
function calc8() {
  document.calcData.screen.value += "8"
};
function calc9() {
  document.calcData.screen.value += "9"
};
function calc0() {
  document.calcData.screen.value += "0"
};
function calcDivide() {
  document.calcData.screen.value += "/"
};
function calcMultiply() {
  document.calcData.screen.value += "*"
};
function calcAdd() {
  document.calcData.screen.value += "+"
};
function calcSubtract() {
  document.calcData.screen.value += "-"
};
function clearAll() {
  document.calcData.screen.value = ""
};
function calcEquals() {
  var equals = eval(document.calcData.screen.value)
  document.calcData.screen.value = equals;
}