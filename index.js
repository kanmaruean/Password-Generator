const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordBtnOneEl = document.querySelector("#passwordBoxOne")
let passwordBtnTwoEl = document.querySelector("#passwordBoxTwo")
let setCharactersEl = document.querySelector("#pwdLength")

console.log(selectedValue)

function startGenerate() {
    let passwordOne = generatePassword()
    passwordBtnOneEl.textContent = passwordOne

    let passwordTwo = generatePassword()
    passwordBtnTwoEl.textContent = passwordTwo
}

function generatePassword() {
    let randomPassword = ""
    let selectedValue = parseInt(setCharactersEl.value)

    // Determine the password length based on selectedValue
    if (selectedValue === 15) {
        passwordLengths = 15
    } else if (selectedValue === 12) {
        passwordLengths = 12
    } else if (selectedValue === 10) {
        passwordLengths = 10
    } else if (selectedValue === 8) {
        passwordLengths = 8
    } else {
        console.warn("Invalid password length specified. Defaulting to 15 characters.");
        passwordLengths = 15
    }

    // Generate the password
    for (let i = 0; i < passwordLengths; i++) {
        randomPassword += characters[Math.floor( Math.random() * characters.length )]
    }

    //return the value
        return randomPassword
    }
