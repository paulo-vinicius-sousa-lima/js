function calculaPerimetroArea() {
    const raio = Number(document.getElementById("raio").value);
    var perimetro = 2 * 3.14 * raio;
    var area = 3.14 * (raio * raio);
    document.getElementById("perimetro").innerHTML = "Perímetro: " + perimetro;
    document.getElementById("area").innerHTML = "Área: " + area;

}
