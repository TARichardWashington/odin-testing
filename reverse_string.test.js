import reverseString from './reverse_string';

test('The order of charcters in a word are reversed', () => {
    expect(reverseString('banana')).toBe('ananab');
});