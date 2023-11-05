function addtwo(num: number) {
  return num + 2
}

function signUp(name: string = "Ha duc Anh", email: string, password: string, isPaid: boolean) {
  console.log("signUp is ok and default is:", name)
}

let login = (name: string, email: string, isPaid: boolean = false) => {
  console.log("login is ok and defaule is", isPaid)
}
// Return 1 type of variable
function getUpper(val: string): string {
  return val.toUpperCase()
}
// return more than 1 type of variable, if more than 2 it implicit define for you 
// function getValue(myval: number) => function getValue(myval: number) : boolean | string
function getValue(myval: number) {
  if (myval > 5) {
    return true
  }
  return "200 OK"
}

addtwo(2)

console.log(getUpper("225"))

signUp("Ha duc Anh", "haducanh660@gmail.com", "13", true)

login("anh", "fas")

// Map function
const heros = ["ironMan", "spiderman", "batman"]

heros.map((hero): string => {
  return `Hero is ${hero}`
})

// type of function not return any thing
function introduce(name: string): void {
  console.log(`I'm ${name}`)
}

// Some functions never return a value:
function fail(msg: string): never {
  throw new Error(msg);
}