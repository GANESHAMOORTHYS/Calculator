let history = [];

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value);
        history.push(`${display.value} = ${result}`);
        display .value = result;
        updateHistory();
    } catch (error) {
        display.value = 'Error';
    }
}

function updateHistory() {
    const historyDiv = document.getElementById('history');
    historyDiv.innerHTML = history.map(entry => `<div>${entry}</div>`).join('');
}

document.addEventListener('keydown', function(event) {
    const display = document.getElementById('display');
    if (!isNaN(event.key) || ['+', '-', '*', '/'].includes(event.key)) {
        appendToDisplay(event.key);
    } else if (event.key === 'Enter') {
        calculateResult();
    } else if (event.key === 'Backspace') {
        backspace();
    } else if (event.key === 'Escape') {
        clearDisplay();
    } else if (event.key === '.') {
        appendToDisplay('.');
    }
});