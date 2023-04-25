import {createUser} from './userController';
import bcrypt from 'bcryptjs';
import User from '../models/userSchema';

const mockRequest=()=>{
    return {
        body:{
            name: "Test User",
            email: "test@gmail.com",
            password: "12345678"
        }
    }
}
const 
   mockResponse=()=>{
    return {
        status:jest.fn().mockReturnThis(),
        json:jest.fn().mockReturnThis()
    }
}
const mockUser={
    _id: "6446734726e37e3f7dcfb0f5",
    name:"Test User",
    email:"test@gmail.com",
    password:"hashedPassword"
}
describe("Register User",() => {
    it("should register user",async ()=>{
        jest.spyOn(bcrypt,"hash").mockResolvedValueOnce("hashedPassword");
        jest.spyOn(User, "create").mockResolvedValueOnce(mockUser);
        const mockReq=mockRequest();
        const mockRes = mockResponse();
        console.log(mockRes.status);
        await createUser(mockReq,mockRes);
        expect(bcrypt.hash).toHaveBeenCalledWith("12345678", 10);
        // expect(bcrypt.hash).toBe("hashedPassword")
        expect(User.create).toHaveBeenCalledWith({
            name:"Test User",
            email:"test@gmail.com",
            password:"hashedPassword",
        })
    })
})