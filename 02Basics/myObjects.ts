/*
const user = {
  name: 'hiro',
  email: 'h@n.com',
  isActive: true
}

// function createUser(name: string, email: string, isActive: boolean) {
function createUser({name: string, isPaid: boolean}) {
}

let newUser = {name: 'Hiro', isPaid: true, email: 'h@h.co'}

createUser(newUser)

function createCource(): {name: string, price: number} {
  return {name: 'reactjs', price: 399}
}
*/

/*
// Type Alias
type User = {
  name: string;
  email: string;
  isActive: boolean;
}

type myString = string

function createUser(user: User) {}

// createUser({name: 'Hiro', isPaid: true, email: 'h@h.co'})
createUser({name: 'Hiro', email: 'h@h.co', isActive: true})
*/

// READONLY and Optional
type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  // If credcardDetails is not required, then ? to be listed.
  // credcardDetails: number;
  credcardDetails?: number;
}

let myUser: User = {
  _id: '123r',
  name: 'h',
  email: 'h@h.com',
  isActive: false
}

type cardNumber = {
  cardnumber: string;
}

type cardDate = {
  cardDate: string;
}

type cardDetails = cardNumber & cardDate & {
  cvv: number;
}

myUser.email = 'h@gmail.com'
// myUser._id = '1srt'


export {}
