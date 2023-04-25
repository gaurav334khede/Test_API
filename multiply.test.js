const multiply=require('./multiply');
test('Multiply Two Number',()=>{
    expect(()=>multiply(2,3).toBe(6));
})

test('Contains Array Elements',()=>{
    expect(multiply()).toContain('cat');
    expect(()=>multiply(2,3).toBe(6))
})