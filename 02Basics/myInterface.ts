interface User {
  readonly dbId: number,
  email: string,
  userId: number,
  googleId?: string,
  // startTrail: () => string
  startTrail(): string,
  getCoupon(couponname: string, value: number): number
}

interface User {
  githubToken: string
}

interface Admin extends User {
  role: 'admin' | 'tx' | 'learner'
}

const hitesh: User = {
  dbId: 22,
  email: 'h@h.com',
  userId: 2211,
  githubToken: 'aaa',
  role: 'admin',
  startTrail: () => { return 'Trail Started.' },
  getCoupon: (name: 'sample', off: 10) => { return off }
}

hitesh.email = 'h@hc.com'
hitesh.dbId = 33

// Admin は User の拡張interfaceなので、
// Userの項目を使いつつ、Adminのみで使える項目を設定できる
const hitesh2: Admin = {
  dbId: 22,
  email: 'h@h.com',
  userId: 2211,
  githubToken: 'aaa',
  role: 'admin',
  startTrail: () => { return 'Trail Started.' },
  getCoupon: (name: 'sample', off: 10) => { return off }
}
