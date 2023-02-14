import analyzeArray from './analyzeArray';

const analyzedArray = analyzeArray([1, 8, 3, 4, 2, 6]);

test('Array returns correct average', () => {
    expect(analyzedArray.average).toBe(4);
});

test('Array returns correct minimum', () => {
    expect(analyzedArray.min).toBe(1);
});

test('Array returns correct maximum', () => {
    expect(analyzedArray.max).toBe(8);
});

test('Array returns correct length', () => {
    expect(analyzedArray.length).toBe(6);
});

test('Only an array can be passed to analyzeArray', () => {
    expect(() =>
        analyzeArray('octopus')
    ).toThrow();
});



