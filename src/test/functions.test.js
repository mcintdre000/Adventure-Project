const person = require('./functions.js')


describe ('Login Auth', function(){
const user = [{
    username:"adam",
    password:"12345",
    email:"adamdreier1"
   
}]

const noUser = false
test('Check to see if user has signed up', function(){
    expect( person.register(user) ).toEqual(true);
    expect( person.register(noUser) ).toEqual(false);
    })
})

describe('User is Correct', function(){
    const info =[{
        name:"Adam",
        email:"adamdreier1"
    }]

    const moreInfo =[{
        name: "Bob",
        email:"RickJames23"
    }]
    test('Checking if user credentials are correct', function (){
        expect( person.userInfo(info)).toEqual(true)
        expect( person.userInfo(moreInfo)).toEqual(false)
    })
})

