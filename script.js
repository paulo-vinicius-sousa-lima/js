function calculaFParaC() {
    const f = Number(document.getElementById("f").value);
    const c = 5 / 9 * (f - 32);
    document.getElementById("resposta").innerHTML = "Celsius: " + c;
}
