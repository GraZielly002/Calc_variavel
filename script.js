function calcular(){
    var valor1 = document.getElementById("valor1").value
    var valor2 = document.getElementById("valor2").value
    var valor3 = document.getElementById("valor3").value

    var media = (Number(valor1) + Number(valor2) + Number(valor3)) / 3

    alert(`A média dos valores é: ${media}`)
}