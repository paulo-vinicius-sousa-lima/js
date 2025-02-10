function financiamento() {
    let s = parseInt(document.getElementById("s").value);
    let f = parseInt(document.getElementById("f").value);

    if (isNaN(s) || isNaN(f)) {
        alert("Por favor digite um número.");
    }
    else {
        if (f <= s * 5) {
            alert("Financiamento concedido.");
        } else {
            alert("Financiamento negado.");
        }
    }
}
