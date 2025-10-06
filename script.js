function appendValue(val) {
const display = document.getElementById('display');
display.value += val;
}
function clearDisplay() {
document.getElementById('display').value = '';
}
function deleteLast() {
const display = document.getElementById('display');
display.value = display.value.slice(0, -1);
}
function calculateResult() {
const display = document.getElementById('display');
try {
let result = eval(display.value.replace('%', '/100'));
display.value = result;
} catch {
display.value = 'Error';
}
}