function verLogica() {
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);
    const c = Number(document.getElementById("c").value);

    const resposta1 = a == b;
    const resposta2 = a > b;
    const resposta3 = a >= b;
    const resposta4 = a < c;
    const resposta5 = c != b;

    document.getElementById("resposta1").innerHTML = "a =  b ? " + resposta1;
    document.getElementById("resposta2").innerHTML = "a >  b ? " + resposta2;
    document.getElementById("resposta3").innerHTML = "a >= b ? " + resposta3;
    document.getElementById("resposta4").innerHTML = "a <  c ? " + resposta4;
    document.getElementById("resposta5").innerHTML = "c != b ? " + resposta5;
}
