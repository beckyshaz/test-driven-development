import { analyzeArray } from "./analyze-array"


test("returns object with required properties", () => {
    const obj = analyzeArray([1,8,3,4,2,6]);
    
    expect(obj).toEqual({average: 4, min: 1, max: 8, length: 6});
})

test("object properties do what is expected", () => {
    const obj = analyzeArray([1, 8, 3, 4, 2, 6]);

    expect(obj.average).toBe(4);
    expect(obj.min).toBe(1);
    expect(obj.max).toBe(8);
    expect(obj.length).toBe(6);

})

test("argument passed is an array && each array element is a number", () => {

    expect(() => analyzeArray("not an array")).toThrow();
    expect(() => analyzeArray(123)).toThrow();
    expect(() => analyzeArray(undefined)).toThrow();
    expect(() => analyzeArray(null)).toThrow();

    expect(() => analyzeArray([1, 2, "3", 5])).toThrow();
    expect(() => analyzeArray([1, 2, 3, null])).toThrow();
    expect(() => analyzeArray([1, 2, 4, undefined])).toThrow();
    expect(() => analyzeArray([])).toThrow();

})

test("array with one argument", () => {
    const obj = analyzeArray([5])
    expect(obj).toEqual({average: 5, min: 5, max: 5, length: 5})
})