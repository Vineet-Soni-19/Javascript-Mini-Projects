const buttons = document.querySelectorAll("input[type='button']");
const display = document.querySelector("input[type='text']");
let start = true;
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const x = button.value;
        if (button.value === "AC") {
            display.value = "";
        }
        else if (button.value === "DE") {
            display.value = display.value.slice(0, -1)
        }
        else if (button.value === "=") {
            try {
                display.value = eval(display.value);        //The eval() function in JavaScript is a global function that evaluates a string of JavaScript code and executes it. 
            }
            catch (error) {
                display.value = 'Error';
                console.log(error);
            }
            start = true;
        }
        else {
            if (start) {
                display.value = button.value;
                start = false;
            }
            else {
                display.value += button.value;
            }
        }
    })
})

//User defined function to evaluate a code string 
function calculate(str) {
    const operator = ['+', '-', '*', '/'];
    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2
    }
    const output = [];
    const stack = [];
    for (let i = 0; i < str.length; i++) {
        const ch = str[i];
        if (!isNaN(ch)) {
            let num = '';
            while (!isNaN(str[i]) || str[i] === '.') {
                num += str[i++];
            }
            output.push(parseFloat(num));
            i--;
            continue;
        }
        else if (operator.includes(ch)) {
            while (stack.length && precedence[stack[stack.length - 1]] >= precedence[ch]) {
                output.push(stack.pop());
            }
            stack.push(ch);
        }
    }
    while (stack.length) {
        output.push(stack.pop());
    }
    const result = [];
    for (const token of output) {
        console.log(token)
        if (!isNaN(token)) {
            result.push(token);
        }
        else {
            const op2 = result.pop();
            const op1 = result.pop();
            switch (token) {
                case "+": result.push(op1 + op2);
                    break;
                case "-": result.push(op1 - op2);
                    break;
                case "*": result.push(op1 * op2);
                    break;
                case "/": if (op2 === 0) return "Error"
                    result.push(op1 / op2);
            }
        }
    }
    const ans = result.pop();
    if (isNaN(ans)) return "Error";
    return ans;
}