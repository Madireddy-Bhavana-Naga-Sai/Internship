let result = document.getElementById('result');

function clearDisplay() {
    result.value = '0';
}

function backspace() {
    if (result.value.length > 1) {
        result.value = result.value.slice(0, -1);
    } else {
        result.value = '0';
    }
}

function appendNumber(number) {
    if (result.value === '0') {
        result.value = number;
    } else {
        result.value += number;
    }
}

function appendOperator(operator) {
    result.value += operator;
}

function calculate() {
    try {
        result.value = eval(result.value.replace(/%/g, '/100'));
    } catch {
        result.value = 'Error';
    }
}
