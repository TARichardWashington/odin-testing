import ceaser from './ceaser';

test('Ceaser correctly enciphers strings', () => {
    expect(ceaser('banana')).toBe('cbobob');
});