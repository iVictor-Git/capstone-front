import { extractWord } from "../functionLib/extractword";

test('given string with two words, extract into list', () => {
    const test = 'abc def'
    expect(extractWord(test)).toMatchObject(['abc', 'def']);
});

test('given string with no words, extract into empty list', () => {
    expect(extractWord('')).toMatchObject(['']);
});

test('Given string with varying lengths, split each word', () => {
    let sentence = 'abc defg hijklm'
    expect(extractWord(sentence)).toMatchObject(['abc', 'defg', 'hijklm'])
});

test('Given string with varying lengths and multiple spaces, split each word', () => {
    let sentence = ' abc def  abc ';
    expect(extractWord(sentence)).toMatchObject([ '', 'abc', 'def',  '', 'abc', '' ]);
});