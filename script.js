function parOuImpar() {
    var n = parseInt(document.getElementById("n").value);

    if (n <= 0) {
        alert("Esse número não é positivo.");
    } else {
        if (n % 2 === 1) {
            alert("Número ímpar.");
        } else {
            alert("Número par.");
        }
    }
}
