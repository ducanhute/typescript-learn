function addtwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUp(name, email, password, isPaid) {
    if (name === void 0) { name = "Ha duc Anh"; }
    console.log("signUp is ok and default is:", name);
}
var login = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    console.log("login is ok and defaule is", isPaid);
};
addtwo(2);
console.log(getUpper("225"));
signUp("Ha duc Anh", "haducanh660@gmail.com", "13", true);
login("anh", "fas");
