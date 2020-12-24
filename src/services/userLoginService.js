import userLoginServiceWithLocalStorage from './userLoginServiceWithLocalStorage';
import UserLoginServiceWithJsonServer from './UsersDataServiceWithJsonServer';

const currentStorage = new UserLoginServiceWithJsonServer();

export default class UserLoginService {
    static _authorizedUser = null;
    static async registerUser (data) {
        return await currentStorage.registerUser(data);
    }

    static async login (userEmail, userData) {
        const user = await currentStorage.login(userEmail, userData);
        this._authorizedUser = user;
        console.log("user2", user);
        return user;
    }

    static isUserAuthorized () {
        return !!this._authorizedUser;
    }
    static getUserAuthorized () {
        return this._authorizedUser;
    }
    static async logout() {
        this._authorizedUser = null;
    }
    static async deleteUserAccount(userId) {
        return currentStorage.deleteUserAccount(userId);
    }
    static async updateUserAccount(userId, userData) {
        return currentStorage.updateUserAccount(userId, userData);
    }

    static async getUserData(userEmail) {
        return currentStorage.getUserData(userEmail);
    }
}