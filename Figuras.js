console.group("Cuadrado");

function perimetroCuadrado(ladoN) {
    return ladoN * 4;
}
perimetroCuadrado(45);

function areaCuadrado(ladoN) {
    return ladoN * ladoN;
}
areaCuadrado(67);
console.groupEnd();

//Area Triangulo
/*console.group("Triangulo")

function perimetroTriangulo(lado1, lado2, baseT) {
    return lado1 + lado2 + baseT;
}

function areaTriangulo(alturaT, baseT) {
    return baseT * alturaT / 2;
}

console.groupEnd();*/

//interaccion con html

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}