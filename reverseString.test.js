import { reverseString } from "./reverseString";

test('string is reversed', () => {
    expect(reverseString("sharon")).toBe("norahs");
})

test("any string is reversed", () => {
    expect(reverseString("john")).toBe("nhoj");
})

test("reverse a long string", () => {
    expect(reverseString("sharon is awsome")).toBe("emoswa si norahs");

})