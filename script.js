function verLogica() {
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);
    const c = Number(document.getElementById("c").value);

    if ((a + b) > c && (a + c) > b && (b + c) > a) {
        alert("Pode ser um triângulo.");
        if (a == b && b == c) {
            alert("Triângulo equilátero.");
        }
        else if (a == b || b == c || c == a) {
            alert("Triângulo isóceles.");
        }
        else if (a != b && b != c && c != a) {
            alert("Triângulo Escaleno.");
        }
    }
    else {
        alert("Não pode ser um triângulo!")
    }


}
