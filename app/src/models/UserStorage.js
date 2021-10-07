"use strict";

class UserStorage {
    static #users = {
        id: ["admin1", "admin2", "admin3"],
        password: ["1234", "1234" ,"1234"],
        name: ["관리자1", "관리자2", "관리자3"],
    }
    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;