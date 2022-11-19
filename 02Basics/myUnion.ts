let score: number | string = 33
score = 44
score = '55'

type User = {
  name: string
  id: number
}

type Admin = {
  username: string
  id: number
}

let hiro: User | Admin = {
  name: 'Hiro',
  id: 112344
}

hiro = {username: 'hiroshi', id: 112344}

// function getDbId(id: number | string) {
//   // making some API calls
//   console.log(`Db Id is: ${id}`)
// }

function getDbId(id: number | string) {
  // // number型のときに問題が発生するので、エラーとなる
  // id.toLowerCase()

  if (typeof id === 'string') {
    // stringの条件下であればエラーにならない
    id.toLowerCase()
  }
  // id + 2
}

const data: number[] = [1, 2, 3]
const data2: string[] = ['1', '2', '3']
const data3: string[] | number[] = ['1', '2', '3']
const data4: (string | number)[] = ['1', '2', 3]

let seatAllotment: 'aisle' | 'middle' | 'window'

seatAllotment = 'aisle'
// seatAllotment = 'chear'
