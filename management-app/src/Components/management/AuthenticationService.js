// class AuthenticationService {

//     registerSuccessfulLogin(username,password){
//         console.log('registerSuccessfulLogin')
//         sessionStorage.setItem('authenticatedUser', username);
//     }

//     logout() {
//         //removes user from session storage
//         sessionStorage.removeItem('authenticatedUser');
//     }

//     isUserLoggedIn() {
//         let user = sessionStorage.getItem('authenticatedUser')
//         if(user===null) return false
//         return true
//     }


//     getLoggedInUser() {
//         let user = sessionStorage.getItem('authenticatedUser')
//         if(user===null) return ''
//         return user
//     }
// }

// export default new AuthenticationService()