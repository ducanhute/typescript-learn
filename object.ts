// type User = {
//   name: "hitesh",
//   email: "anh@gmail.com",
//   isActive: "true"
// }
// // function have parameter as object
// function createUser({ name: string, isPaid: boolean }) {

// }
// // better way of above
// function createUser2(user: User) {
//   // you can acess this here
// }
// // function return an object
// function createCourse(): { name: string, price: number } {
//   return { name: "reactJs", price: 200 }
// }

// // create new user with more than properties than define
// let newUser = { name: "anh", isPaid: true, eamil: "haducanh660" }
// // createUser({ name: "anh", isPaid: true, eamil: "haducanh660" })-> cannot do
// createUser(newUser)

// Read only example
type UserDefault = {
  readonly _id: string,
  name: string,
  email: string,
  isActive: boolean,
  credcarDetails?: number, // this is ontional when you create a new instance of UserDefault type
}


let myUser: UserDefault = { _id: "232", name: "Anh Duc", email: "anh@gmail.com", isActive: true }

myUser.name = "Change name"
// myUser._id = "22" ==> Can do that because this is a readonly 

// combine moer type
type cardNumber = {
  cardNumber: string
}

type cardDate = {
  cardDate: string
}

type cardDetails = cardNumber & cardDate & {
  cvv: number
}

