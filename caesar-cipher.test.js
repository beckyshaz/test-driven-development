import { caesarCipher } from "./caesar-cipher";

test("cipher rapping", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
})

test("case preservation", () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
})

test("preservation of punctuations", () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})