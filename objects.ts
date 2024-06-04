const user = {
    name:"ali",
    email:"ali@xmail.in",
    isActive:false
}
/* throws error 
function createUser({name:string,isActive:boolean}):string{
    return name;
}
console.log(createUser({name:"aliasgar",isActive:true}));
*/

//type aliases : creating our own custom data types
type User ={
    name:string,
    email:string,
    isActive:boolean
}

function createUser(user:User):User{
    console.log("Logged in ",user.name)
    return user;
}
// createUser(user)

//readonly, optional params..
type newUser ={
    readonly _id :string,//can be read only once and cannot be changed
    readonly accnum?:string,
    name:string,
    email:string,
    password?:string,//'?'-question mark denotes an optional parameter that may or may not be passed.
    creditCardNum?:number,
    isActive:boolean
}

let usr1 : newUser={
    _id:"aj23",
    name:'aman',
    email:'a@a.in',
    isActive:true
}
console.log(usr1);
// usr1._id="abc32"//not allowed

type employee ={
    eCode : string,
    salary:number
}

//combining type aliases
type newRecruit = newUser & employee &{
    jobDescription:string
}