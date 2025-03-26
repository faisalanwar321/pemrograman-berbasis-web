const calculator = (operator, ...numbers) => {
    let [a, b] = numbers;
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : "Error (bagi 0)";
        case '%': return a % b;
        default: return "Operator tidak valid";
    }
};

function calculate(operator) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = calculator(operator, num1, num2);
    document.getElementById("calcResult").innerText = "Hasil: " + result;
}