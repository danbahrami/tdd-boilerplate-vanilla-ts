import { createCounter } from './counter';

test('returns a function that increments its return value on each call', () => {
    const counter = createCounter();

    expect(counter()).toBe(0);
    expect(counter()).toBe(1);
    expect(counter()).toBe(2);
    expect(counter()).toBe(3);
    expect(counter()).toBe(4);
    expect(counter()).toBe(5);
});
