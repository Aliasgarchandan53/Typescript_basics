/*Syntax :
    let varname:type=value
 */

let greetings : string = "Morning ! Ali Asgar"
console.log(greetings)

let mynum:number = 90
// console.log(mynum.toLowerCase()) //ts dosent allow this 

//number 
let userId : number = 123456
//boolean 
let isLoggedIn : boolean = true

//Type inference 
//another practice :
let mailId :string
mailId= "aliasgar@kmail.net"
// Typescript can figure out where which datatype needs to be put
let myname = "ali" //works fine
console.log(typeof myname )

// 'Any'
let candidateId //has 'any' type
function getCandId(){
    return "ashagu43"
}
 candidateId = getCandId()

let userSlug : any 
userSlug = "u-s-r-1-4-2"
console.log(userSlug)
userSlug =  12455 //'any' keyword allows varible to not be bound to a fixed datatype

console.log(userSlug);
