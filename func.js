var calculateMyAge = function (birthYear) {
    return new Date(Date.now()).getFullYear() - birthYear;
};
var myAge = calculateMyAge(1995);
console.log(myAge);
function greetMe(userInfo) {
    return (userInfo.name + '. It\'s nice to know that you are ' + userInfo.age + ' years old.');
}
console.log(greetMe({ name: 'John', age: myAge }));
