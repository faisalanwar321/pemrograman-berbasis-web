const fibonacci = (n) => {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
};

function generateFibonacci() {
    let n = document.getElementById("fiboInput").value;
    document.getElementById("fiboResult").innerText = "Hasil: " + fibonacci(n).join(", ");
}