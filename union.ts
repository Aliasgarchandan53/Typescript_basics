let id : string|number 
id = "abcd"
id=1234

type admin={
    usrname:string,
    id:number
}
type teamlead ={
    name:string,
    id:number
}

let ali : teamlead|admin={
    name:"ali",
    id:12345
}
ali = {
    usrname:"aliii",
    id:123456
}

//union of arrays :
let data1 : number[]|string[]=[1,2,3,4] //all nums or all strings
data1 = ["1","2","3"]

let data2 : (string|number|boolean)[]=[//string,boolean,number anything
    1,"2",true
]

//optional literal assignment
let seatPosition : "lower"|"middle"|"upper"

seatPosition ="lower"