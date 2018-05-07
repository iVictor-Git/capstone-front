import { fn } from '../functionLib/liveCoding';

const array = [];
for (let i = 1; i < 101; i++) {
    array.push(i);
}

test('Find missing digit in array', () => {
    expect(fn([1, 2, 4])).toBe(3);
})

test('Find missing digit in array', () => {
    const copiedArray = [...array];
    copiedArray.splice(5, 1);
    expect(fn(copiedArray)).toBe(6);
})

test('Find missing digit in array', () => {
    const copiedArray = [...array];
    copiedArray.splice(99, 1);
    console.log(fn(copiedArray));
    expect(fn(copiedArray)).toBe(6);
})


