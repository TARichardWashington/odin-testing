import ceaser from './ceaser';

test('Ceaser correctly enciphers strings', () => {
    expect(ceaser('banana')).toBe('cbobob');
});

test('Ceaser correctly ciphers z to a', () => {
    expect(ceaser('zebedy')).toBe('afcfez');
});