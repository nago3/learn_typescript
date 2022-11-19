let greetings: string = 'hello, hiro.';

greetings.toLowerCase()
console.log(greetings);

// Number
let userId: number = 334455.3
userId.toFixed()

// Boolean
let isLoggedIn: boolean = false
console.log(isLoggedIn.valueOf())

// DO NOT use Any
let hero: string;

function getHero() {
  return 'thor'
}

hero = getHero()

export {}
