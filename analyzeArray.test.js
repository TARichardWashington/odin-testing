import analyzeArray from './analyzeArray';

const analyzedArray = analyzeArray([1, 8, 3, 4, 2, 6]);

test('Array returns correct average', () => {
    expect(analyzedArray.average).toBe(4);
});

