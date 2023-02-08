import Calculator from './calculator';

let calc = new Calculator();

test('Calculator can add two numbers', () => {
    expect(calc.add(2, 3)).toBe(5);
});

test('Calculator can multiply two numbers', () => {
    expect(calc.multiply(2, 3)).toBe(6);
});

test('Calculator can subtract one number from another', () => {
    expect(calc.subtract(3, 2)).toBe(1);
});

test('Calculator can divide one number by another', () => {
    expect(calc.divide(10, 5)).toBe(2);
});