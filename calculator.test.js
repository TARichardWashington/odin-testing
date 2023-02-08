import calculator from './calculator';

test('Calculator can add two numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
});

test('Calculator can multiply two numbers', () => {
    expect(calculator.add(2, 3)).toBe(6);
});

test('Calculator can subtract one number from another', () => {
    expect(calculator.add(3, 2)).toBe(1);
});

test('Calculator can divide one number by another', () => {
    expect(calculator.add(10, 5)).toBe(2);
});