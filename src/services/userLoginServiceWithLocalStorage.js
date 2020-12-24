export default class UserLoginServiceWithLocalStorage{
    
    async login(userId, password) {
        const usersStr = localStorage.getItem('users');
        let users = JSON.parse(usersStr ? usersStr : "[]");
        let user;
        for (user of users) {
            console.log("user: ", user);
            if (user.email === userId && user.password === password)
                return user;
        }
        return null;
    }
    async registerUser(userId, userData) {
        const usersStr = localStorage.getItem('users');
        let users = JSON.parse(usersStr ? usersStr : "[]");
        users.push(userData);
        localStorage.setItem("users", JSON.stringify(users));
    }
    async deleteUserAccount(userData) {
        localStorage.removeItem(userData);
    }
    getUserData = (usersId) => {
    
    }

    updateUserAccount = (userId, data) => {
        
    }
}