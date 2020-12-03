import userLoginServiceWithLocalStorage from './userLoginServiceWithLocalStorage';

export default class UserLoginService {
    static _authorizedUser = null;

    static isUserAuthorized () {
        return !!this._authorizedUser;
    }
    static getUserAuthorized () {
        return this._authorizedUser;
    }
    static async authorizeUser(userId, password) {
        const user = await userLoginServiceWithLocalStorage.authorizeUser(userId, password);
        this._authorizedUser = user;
        console.log("user2", user);
        return user;
    }
    static async logout() {
        this._authorizedUser = null;
    }
    static async createUserAccount(userId, userData) {
        return userLoginServiceWithLocalStorage.createUserAccount(userId, userData);
    }
    static async deleteUserAccount(userId) {
        return userLoginServiceWithLocalStorage.deleteUserAccount(userId);
    }
}