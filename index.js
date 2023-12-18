function calcular(){
    const valor1 = parseFloat(document.getElementById('txt1').value, 10);
    const valor2 = parseFloat(document.getElementById('txt2').value, 10);
    const botao = document.getElementById('inicio');

    const niveis = [
    'esta muito magro',
    'esta no peso ideal',
    'esta com sobre peso', 
    'esta com obesidade de grau |',
    'esta com obesidade de grau ||',
    'esca com obesidade de grau |||'
   ];



    function contar() {
        const valor3 =  (valor2 * valor2);
        let valor_F =  (valor1 / valor3);
            
        if (valor_F < 18.5) {
            result.innerHTML = niveis[0]
        } else if(valor_F >18.5 && valor_F < 24.9) {
            result.innerHTML = niveis[1]
        } else if(valor_F >25 && valor_F < 29.9) {
            result.innerHTML = niveis[2]
        } else if(valor_F >30 && valor_F < 34.9) {
            result.innerHTML = niveis[3]
        } else if(valor_F >35 && valor_F < 39.9) {
            result.innerHTML = niveis[4]
        } else if(valor_F >40) {
        result.innerHTML = niveis[5]
    }
} 


   botao.addEventListener("click", contar)


 }


