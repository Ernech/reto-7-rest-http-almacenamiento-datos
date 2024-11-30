console.log("==============TIPOS DE DATOS==============");
let isValid:boolean=true; //bool
if(!isValid){
    console.log('Is not valid');
}

let counter:number = 4 //Number integer
let price:number =40.50 //Number decimal
console.log(`Counter: ${counter}`);
console.log(`Price: ${price}`);

let msg:string = 'Hello';
let userName:string  = 'Ernesto';

console.log(`${msg} ${userName}`);

let numbers:number[] = [1,2,3,4]; //Number array
let fruits:string[] = ['Apple','Orange','Pineapple','Banana']; //String array

console.log(numbers);
console.log(fruits);

let person:[string,number] = ['John',30]
console.log(person);

//Enumeraciones
console.log("==============ENUMERACIONES==============");
//Enumaraciones con strings
enum states{
    Oregon="OREGON",
    California="CALIFORNIA",
    Florida="FLORIDA",
    Nevada="NEVADA",
    Utah="UTAH",
    Illinois="ILLINOIS"
}

var region = states.California;
console.log(region);

//Enumaraciones numericas

enum CarTypes{
    Honda = 0,
    Toyota = 1,
    Subaru = 2,
    Hyundai = 3
}

console.log(CarTypes.Toyota);

//Enumeraciones heterogeneas

enum Options{
    Yes = 1,
    No="No"
}
console.log(Options.No);
console.log(Options.Yes);

//Mapeo Inverso
enum CarType {
	Honda = 1,
	Toyota=2,
	Subaru="SUBARU",
	Hyundai="HYUNDAI"
}

console.log(CarType.Subaru); 
console.log(CarType["Subaru"]); 
//Tipos any y unknow
console.log("==============TIPOS ANY Y UNKNOW==============");

let dynamicVar:any;

dynamicVar = 1
console.log(`Number: ${dynamicVar}`);
dynamicVar="This is a string";
console.log(`String: ${dynamicVar}`);
dynamicVar=true
console.log(`Boolean: ${dynamicVar}`);

let unknowVar:unknown;

unknowVar=1

dynamicVar = unknowVar

//let numericVar:number = unknowVar ERROR
