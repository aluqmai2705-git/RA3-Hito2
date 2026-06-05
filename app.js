function sum(a, b) {
    return a + b;
}

function getInvoiceTotalMessage(a, b) {
    const total = sum(a, b);
    return `El total de su factura es: ${total}€`;
}

module.exports = { sum, getInvoiceTotalMessage };
