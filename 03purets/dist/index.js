"use strict";
// class User {
//   public email: string
//   private name: string
//   readonly city: string = 'Tokyo'
//   constructor(email: string, name: string) {
//     this.email = email
//     this.name = name
//   }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = 'Tokyo';
    }
    deleteToken() {
        console.log('Token Deleted.');
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('Course count should be more than 1.');
        }
        this.courseCount = this.courseCount;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const hiro = new User('h@h.co', 'hiro');
hiro.name;
