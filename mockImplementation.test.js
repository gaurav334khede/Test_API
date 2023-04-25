const mockImplementation=require('./mockImplementation');
const crypto=require('crypto');
jest.mock("crypto")
test('Mocked Implementation',async ()=>{
    crypto.randomBytes.mockImplementationOnce(()=>Promise.resolve("bytes") )
    const res=await mockImplementation();
})
test('MockImplementation',()=>{
    const mockFn=jest.fn(()=>"default")
    .mockImplementation(()=>"first call");
    
    const res1=mockFn();
    const res2=mockFn();
    console.log(res1);
    console.log(res2);

})
test('MockImplementationOnce',()=>{
    const mockFn=jest.fn(()=>"default")
    .mockImplementationOnce(()=>"first call");
    
    const res1=mockFn();
    const res2=mockFn();
    console.log(res1);
    console.log(res2);

})
test("Fetch Data using spy",async ()=>{
    jest.spyOn(crypto,"randomBytes").mockResolvedValueOnce("bytes");
    const res=await mockImplementation();
    console.log(res);
})

describe("group of test Cases",()=>{
    it("test1",()=>{});
    it("test2",()=>{});
})