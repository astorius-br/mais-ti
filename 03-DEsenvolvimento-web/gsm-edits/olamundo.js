function calcularSubtotal (preço, quantidade) {
    return preço * quantidade
};

let subtotal = calcularSubtotal(100, 5);

function calcularDesconto (subtotal) {
    return subtotal * 0.15
};

let desconto = calcularDesconto(subtotal);

function calcularValorFinal (subtotal, desconto) {
    return subtotal - desconto
}; 

function pedido (preço, quantidade) {
    let subtotal = 
calcularSubtotal (preço, quantidade);
    let desconto =
calcularDesconto (subtotal);
    let VAlorFinal =
calcularvalorfinal (subtotal, desconto);
    
    console.log ("Subtotal: R$ " +
subtotal.toFixed(2));
    console.log ("Desconto (15%): R$ " + 
desconto.toFixed(2));
    console.log ("Valor Final: R$ " + 
ValorFinal.toFixed(2));
};