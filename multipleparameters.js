// function to simulate a calculator
function calculate (num1, num2, operation){
    if (operation === "add"){
        return num1 + num2
    }else if (operation === "subtract"){
        return num1 - num2
    }else if (operation === "multiply"){
        return num1 * num2
    }else if (operation === "divide"){
        return num1 / num2
    }
}

console.log(calculate (10, 5, "add"));
console.log(calculate(10, 5, "subtract"));
console.log(calculate(10, 5, "multiply"));
console.log(calculate(10, 5, "divide"));
