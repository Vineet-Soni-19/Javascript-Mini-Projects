//++++++++display the length dynamically++++++++
const length = document.getElementById("length");
const displaylength = document.getElementById("displaylength");
displaylength.innerHTML = length.value;
length.oninput = function () {
    displaylength.innerHTML = this.value;
}


//+++++++++++generating password++++++++++++++
const generatePassword = (length, ischar, isnum, isalpha) => {
    const num = "01234566789";
    const char = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    const alpha = "!@#$%&*";
    let input = ""
    if (isnum) {
        input += num
    }
    if (ischar) {
        input += char
    }
    if (isalpha) {
        input += alpha
    }
    let str = "";
    for (let i = 1; i <= length; i++) {
        if (input) {
            str += input[Math.floor(Math.random() * input.length)]
        }
    }
    return str;
}

//+++++++++++ adding event listener to submit button ++++++++++++
document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();
    const length = document.getElementById('length').value
    const ischar = document.getElementById('ischar').checked
    const isnum = document.getElementById('isnum').checked
    const isalpha = document.getElementById('isalpha').checked
    const password = generatePassword(length, ischar, isnum, isalpha)
    document.getElementById('password').value = password;
});

document.getElementById('copyimage').addEventListener('click',()=>{
    const passwordBox=document.getElementById('password')
    passwordBox.select()
    document.execCommand('copy');
    try{
        document.execCommand('copy');
        console.log("Text copies to clipboard");
    }
    catch(err){
        console.error("Failed to copy text",err)
    }
});
