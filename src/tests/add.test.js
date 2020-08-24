const add = (a,b) =>  a + b;
const generateGreating = (name = 'Anonymous') => `Hello ${name}!!`;

test('should add 2 numbers',() => {
    const result = add(3,4)
    expect(result).toBe(7);
});

test('should generate greeting', () => {
    const result = generateGreating('Mike');
    expect(result).toBe('Hello Mike!!');
})

test('should generate greeting anonymous', () => {
    const result = generateGreating();
    expect(result).toBe('Hello Anonymous!!');
})

