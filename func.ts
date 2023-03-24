const calculateMyAge = (birthYear: number):
number => {
    return new Date(Date.now()).getFullYear() - birthYear;
}

const myAge: number = calculateMyAge(1995)

console.log(myAge);

function greetMe(userInfo: {name: string; age: number;}):
string {
    return (
        userInfo.name + '. It\'s nice to know that you are ' + userInfo.age + ' years old.'
    );
}

console.log(greetMe({name: 'John', age: myAge}));
