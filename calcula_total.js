// todos os clientes que fizeram encomendas
var clientes = document.querySelectorAll(".cliente");

//Passa por cada encomenda, calculando o valor total
for (var count = 0; count < clientes.length; count++) {

    //Captura a quantidade encomendada
    var qntd = clientes[count].querySelector(".qntd").textContent;

    //Captura a valor unitário do produto
    var unitario = clientes[count].querySelector(".valor").textContent;

    // Função para validar a quantidade
    function validarQuantidade(qntd) {
    if(qntd<1 || isNaN(qntd)) {
        return false;
    } else {
        return true;
    }
}

    // Função para validar o valor unitário
    function validarValorUnitario(unitario) {
    if(unitario<1 || isNaN(unitario)) {
        return false;
    } else {
        return true;
    }
}

function formatarValor(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

    if(validarQuantidade(qntd) && validarValorUnitario(unitario)){
    //Quantidade OK, prossegue
    //Calcula o valor total da encomenda
    var total = qntd * unitario;
    clientes[count].querySelector(".total").textContent = formatarValor(total);
    clientes[count].querySelector(".valor").textContent = formatarValor(unitario);
    clientes[count].querySelector(".valor").textContent = "R$" + unitario;
    } else {
        //Valida a quantidade
        if(!validarQuantidade(qntd)){
        //Quantidade NOK, avisa o usúario
        clientes[count].querySelector(".qntd").textContent = " QNTD INVÁLIDA!";
        //clientes[count].style.color="red"; coloca toda a escrita da coluna em vermelho
        //clientes[count].style.backgroundColor="red"; //coloca todo o fundo da coluna 
        clientes[count].querySelector(".qntd").classList.add("qntd-invalida"); //coloca apenas o texto da quantidade em vermelho
        
    } else {
            //Valida o valor Unitário
            if (!validarValorUnitario(unitario)){
            //Valor Unitário NOK, avisa o usúario
            clientes[count].querySelector(".valor").textContent = " Unitário inválido";
            clientes[count].style.backgroundColor="red"; //coloca todo o fundo da coluna 
            }  
    }
}  
}
