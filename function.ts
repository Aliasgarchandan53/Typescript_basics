//fixing type of args in function
function addTwo(num : number){
    // num.toUpperCase()
    return num + 2;
}
// console.log(addTwo(7))

const getUpper = (val:string)=>{
    return val.toUpperCase()
}
// console.log(getUpper("5abc"));

function signUp(name:string,email:string,password:string){
    let user = {
        name:name,
        email:email,
        password:password
    }
    // console.log(this)//not applicable why?
    console.log("logged in ",user.name)
}
// signUp("ali","abc@shj.j","hkhfk")

//fix return type of a function
function getId(name:string):number{
    return name.indexOf('a')
}
// console.log(getId("imen"));

//arrow functions
let getString = (s:string):string =>{
    return `hi ${s}`
}
let myArr = [1,2,3,4]
// let myArr = ["1","2","3","4"]
let newarr = myArr.map((item:number) : string =>{  //context switching of ts figures out the argument required in array manip functions
    return `num is ${item}`
})
// console.log(newarr)
function getError(errstr:string):void{
    console.log("error is ",errstr)
}
// getError("failed")

//error handling : 'never'-- depricated
const handleError=(err:string):never =>{
    throw new Error(err)
}
// handleError("operation failed")

