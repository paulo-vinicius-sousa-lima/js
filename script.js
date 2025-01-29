function calculaMedia() {
    const n1 = Number(document.getElementById("n1").value);
    const n2 = Number(document.getElementById("n2").value);
    var resultado = (n1 + n2) / 2;
    document.getElementById("resultado").innerHTML = resultado;
}
