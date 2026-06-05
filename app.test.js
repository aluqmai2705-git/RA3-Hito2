const { sum, getInvoiceTotalMessage } = require('./app');

test('Unit Test: Adds 10 + 20 to equal 30', () => {
    expect(sum(10, 20)).toBe(30);
});

test('Integration Test: Correctly integrates sum logic into the text message', () => {
    expect(getInvoiceTotalMessage(10, 20)).toBe('El total de su factura es: 999€');
});
