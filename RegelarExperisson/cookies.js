document.cookie = 't1 =t;SameSite=None;Secure;';
document.cookie = 't2 =t;SameSite=None;Secure';
document.cookie = 't3 =t;SameSite=None;Secure';
const cookies = [...document.querySelectorAll("cookie")];
console.log(cookies);
// function ChangeThird(param, cookies) {
//     const regexp = new RegExp()
// }