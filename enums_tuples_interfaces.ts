//tuples
let mytup :[string,number]=["ali",20]
mytup=["blabla",33]
// mytup=[33,"aaee"]//not allowed

//weird behaviors
let newtup :[number,boolean]=[22,true]
// newtup.push("hehehlololol") //allowed earlier fixed in later versions


// Enum : when we need restritive options (and next value is prev+1 in case of numbers )
enum choice{
    HEAD,MIDDLE,TAIL
}

let position=choice.HEAD

const enum options{ //const reduces excess js  code
    first="hey",
    second=10,
    third,
    fourth
}

const option=options.second

//interfaces : similar to types but allow methods and do not care about their implementations
interface customer {
    readonly id:string,
    name:string,
    credCardNum?:string,
    email:string,
    getDiscount:(num:number)=>number, //method returns number
    getDetails():string//method returns string
    payOnEmi?():string
}

// let ali:customer={
//     id:"123",
//     name:"ali",
//     email:"a@a.com",
//     getDiscount:function getDiscount(dis:number){
//         return 0.1*dis
//     },
//     getDetails:function getDetails(){
//         return `name:${this.name},email:${this.email}`
//     }
// }
// console.log(ali.getDetails());
// ali.payOnEmi=()=>"100rs per month"
// console.log(ali.payOnEmi());


//reopening interface 
interface customer{
    isActive:boolean
} 

let ali:customer={
    id:"123",
    name:"ali",
    email:"a@a.com",
    getDiscount:function getDiscount(dis:number){
        return 0.1*dis
    },
    getDetails:function getDetails(){
        return `name:${this.name},email:${this.email}`
    },
    isActive:false
}
//inheritance
interface newCustomer extends customer{
    preferredProduct:string,
    generalBudget?:number
}

let abhay :newCustomer={
    id:"123",
    name:"ali",
    email:"a@a.com",
    getDiscount:function getDiscount(dis:number){
        return 0.1*dis
    },
    getDetails:function getDetails(){
        return `name:${this.name},email:${this.email}`
    },
    isActive:false,
    preferredProduct:"chocolates"
}
console.log(abhay)