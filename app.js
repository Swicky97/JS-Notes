// FUNCTIONS
function welcomeUser1(name) {
    console.log(`Hello ${name}`)
}
welcomeUser1('Chase')
// ARROW FUNCTION
const welcomeUser2 = (name) => {
    console.log(`Hello ${name}`)
}
welcomeUser2('Chase')

// ARRAYS
let arr = [20, 30, 40, 50, 100]
// ADD ELEMENT
arr.push(200)

// FILTERS
let newArr1 = arr.filter((element) => {
    if (element < 50) {
        return true;
    }
})
// SHORTHAND FOR ONLY ONE VAR INPUT
let newArr2 = arr.filter(element => element < 50)

// MAPS
let newArr3 = arr.map((element) => {
    return element + 5
})
// SHORTHAND FOR ONLY ONE VAR INPUT
let newArr4 = arr.map(element => element + 5)

// OBJECTS
let users = [
    {
        username: 'username',
        email: 'test123@mail.com',
        password: 'password1',
        firstName: 'Chase',
        lastName: 'Swick'
    }
];
console.log("Hello " + users[0].firstName)
// SAMPLE LOGIN
function login (email, password) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            if (users[i].password === password) {
                console.log('Successful login')
            }
            else {
                console.log('Incorrect password')
            }
            return;
        }
    }
}
// SAMPLE REGISTER
function register (user) {
    users.push(user)
}

// DOCUMENT OBJECT MODEL
console.log(document.querySelector('.title'))
console.log(document.getElementById('title'))
// ALTER HTML
document.querySelector('.title').innerHTML = 'New text'
// ALTER CSS
document.querySelector('.title').style.fontSize = '36px'
// SAMPLE FUNCTION
function changeToRed() {
    document.querySelector('.title').style.color = 'red'
}
