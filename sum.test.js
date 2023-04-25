const sum=require('./sum');
test('properly adds two numbers',()=>{
    expect(sum(1,2)).toBe(3)
})
test('adds an string',()=>{
    expect(sum("a",2)).toBe("a2")
})