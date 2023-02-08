import capitalize from './capitalize';

test('capitalizes words that are provided', () => {
    expect(capitalize('banana')).toBe('BANANA');
});